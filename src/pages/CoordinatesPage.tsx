import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Layout,
  List,
  Modal,
  Select, Space,
  Spin,
  Table,
  Typography,
  Radio, Row
} from 'antd';
import {Address, Coordinate, Role, User} from "../models";
import {ColumnsType} from "antd/es/table";
import Title from "antd/es/typography/Title";
import {stringifyAddress} from "../utils/utils";
import ManyPointsMapComponent from "../components/ManyPointsMapComponent";

const {Content} = Layout;
const {Text} = Typography;

const width300 = {width: 300}

export interface GeoAddress {
  id: string,
  latitude: number,
  longitude: number,
  drivers: string[],
}

export interface Body {
  clusters: number,
  drivers: string[],
  addresses: GeoAddress[]
}

const CoordinatesPage: React.FC = () => {
  const [coordinates, setCoordinates] = useState<Coordinate[]>([]);
  const [drivers, setDrivers] = useState<User[]>([]);
  const [selectedDrivers, setSelectedDrivers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isDriversAssigning, setDriversAssigning] = useState(false);
  const [isDriversModalVisible, setDriversModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [latitude, setLatitude] = useState(0.000000);
  const [longitude, setLongitude] = useState(0.000000);
  const [isLoadingAddresses, setLoadingAddresses] = useState(false)
  const [driverOnMap, setDriverOnMap] = useState(null);

  const fetchCoordinates = async () => {
    const fetchedCoordinates = await DataStore.query(Coordinate);
    setCoordinates(fetchedCoordinates);
  }

  const fetchDrivers = async () => {
    const fetchedDrivers = await DataStore.query(User, user => user.role("eq", Role.DELIVERY));
    setDrivers(fetchedDrivers);
    setSelectedDrivers(fetchedDrivers);
  }

  useEffect(() => {
    setLoading(true);
    fetchCoordinates();
    fetchDrivers();
    const coordinatesSubscription = DataStore.observe(Coordinate).subscribe(async (message) => {
      await fetchCoordinates();
    });
    const driversSubscription = DataStore.observe(User).subscribe(async (message) => {
      await fetchDrivers();
    });

    setLoading(false);
    return () => {
      coordinatesSubscription.unsubscribe();
      driversSubscription.unsubscribe();
    }

  }, []);

  const columns: ColumnsType<Coordinate> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Link to map',
      render: (value, record, index) => {
        return <a target={"_blank"}
                  href={`https://www.google.com/maps/place/${record.latitude},${record.longitude}`}>{`https://www.google.com/maps/place/${record.longitude},${record.latitude}`}</a>
      },
    },
    {
      title: 'Set driver',
      render: (value, record, index) => {
        return <Select
          placeholder="Select driver"
          showSearch
          disabled={isDriversAssigning}
          filterOption={(input, option) =>
            option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          value={record.userID}
          style={width300}
          onSelect={async (value) => {
            await DataStore.save(
              Coordinate.copyOf(record, updated => {
                updated.userID = value;
              })
            );
          }}>
          {drivers.map((driver) => <Select.Option key={driver.id}
                                                  value={driver.id}>{driver.email}</Select.Option>)}
        </Select>
      },
      width: 500,
    },
    {
      title: 'Actions',
      render: (value, record, index) => {
        return <Button type={'primary'} onClick={async () => {
          const addresses = await DataStore.query(Address, address => address.coordinateID("eq", record.id))
          if (addresses) {
            for (const address of addresses) {
              await DataStore.save(
                Address.copyOf(address, updated => {
                  updated.coordinateID = undefined;
                })
              );
            }
          }
          await DataStore.delete(Coordinate, record.id);
        }}>Delete</Button>
      }
    }
  ];

  const loadAddresses = async (coordinateId: string): Promise<void> => {
    setLoadingAddresses(true);
    const loadedAddresses = await DataStore.query(Address, address => address.coordinateID("eq", coordinateId))
    const targetCoordinate = coordinates.find(coordinate => coordinate.id === coordinateId);
    if (targetCoordinate) {
      const targetIndex = coordinates.indexOf(targetCoordinate);
      const newCoordinate = Coordinate.copyOf(targetCoordinate, updated => {
        updated.coordinateAddresses = loadedAddresses;
      })
      const filteredCoordinates = coordinates.filter(coordinate => coordinate.id !== coordinateId);
      filteredCoordinates.splice(targetIndex, 0, newCoordinate);
      setCoordinates([...filteredCoordinates]);
    }
    setLoadingAddresses(false);
  }

  const driversAutoAssign = async () => {
    if (selectedDrivers.length === 0) return;
    setDriversAssigning(true)
    if (selectedDrivers.length === 1) {
      for (const coordinate of coordinates) {
        await DataStore.save(
          Coordinate.copyOf(coordinate, updated => {
            updated.userID = selectedDrivers[0].id;
          })
        );
      }
    } else {
      let body: Body = {
        addresses: [],
        clusters: selectedDrivers.length,
        drivers: selectedDrivers.map(driver => driver.id)
      };
      for (const coordinate of coordinates) {
        const geo: GeoAddress = {
          drivers: [],
          id: coordinate.id,
          latitude: coordinate.latitude,
          longitude: coordinate.longitude
        }
        body.addresses.push(geo)
      }
      const result = await fetch('https://gkjmmh4hi0.execute-api.us-east-1.amazonaws.com/getClusters', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      })
      const clusters = await result.json();
      for (let key in clusters) {
        if (clusters.hasOwnProperty(key)) {
          let clusterCoordinates = clusters[key];
          for (const clusterCoordinate of clusterCoordinates) {
            const coordinate = await DataStore.query(Coordinate, clusterCoordinate)
            if (coordinate) {
              await DataStore.save(
                Coordinate.copyOf(coordinate, updated => {
                  updated.userID = key;
                })
              );
            }
          }
        }
      }
    }
    setDriversAssigning(false)
    setDriversModalVisible(false);
  }

  const renderMaps = () => {
    if (isLoading || coordinates.length === 0) return null;
    if (driverOnMap) {
      return drivers.map((driver) => {
        if (driver.id === driverOnMap) {
          return <ManyPointsMapComponent
            // @ts-ignore
            center={{lat: 34.6671732, lng: 33.0132906}}
            zoom={12}
            places={coordinates.filter(coordinate => coordinate.userID === driver.id)}
          />
        }
      })
    } else {
      return <ManyPointsMapComponent
        // @ts-ignore
        center={{lat: 34.6671732, lng: 33.0132906}}
        zoom={12}
        places={coordinates}
      />
    }
  }

  return (
    <>
      <Modal
        okButtonProps={{disabled: selectedDrivers.length === 0}}
        title="Select drivers to assign"
        visible={isDriversModalVisible}
        onOk={driversAutoAssign}
        onCancel={() => setDriversModalVisible(false)}>
        <Space direction="vertical">
          {selectedDrivers.length === 0 && <Text strong type="danger">And who do you think deliver it?</Text>}
          {drivers.map((driver) =>
            <Col span={8}>
              <Checkbox
                checked={selectedDrivers.includes(driver)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedDrivers([...selectedDrivers, driver])
                  } else {
                    setSelectedDrivers([...selectedDrivers.filter(sDriver => sDriver.id !== driver.id)])
                  }
                }}>{driver.email}</Checkbox>
            </Col>)}
        </Space>
      </Modal>
      <Content>
        <Title>Coordinates ({coordinates.length})</Title>
        <Button
          loading={isDriversAssigning}
          disabled={isDriversAssigning}
          onClick={() => setDriversModalVisible(true)} type="primary">
          Auto assign drivers
        </Button>
        <Form
          labelCol={{span: 4}}
          wrapperCol={{span: 14}}
          layout="horizontal"
        >
          <Form.Item label="Name" name="coordinatesName"
                     rules={[{required: true, message: 'Please enter coordinates name!'}]}>
            <Input style={width300} placeholder={'Enter name'} value={name} onChange={(e) => {
              setName(e.target.value)
            }}/>
          </Form.Item>
          <Form.Item label="Google map link">
            <Input
              style={width300}
              onChange={(value) => {
                const latReg = new RegExp("@(-?[\\d.]*)")
                const latGroups = latReg.exec(value.target.value);
                if (latGroups) {
                  setLatitude(parseFloat(latGroups[1]))
                }
                const lonReg = new RegExp("@[-?\\d.]*,([-?\\d.]*)")
                const lonGroups = lonReg.exec(value.target.value);
                if (lonGroups) {
                  setLongitude(parseFloat(lonGroups[1]))
                }
              }}
            />
          </Form.Item>
          <Form.Item label="latitude">
            <InputNumber<string>
              style={width300}
              value={latitude.toString()}
              min="-50"
              max="50"
              step="0.000001"
              onChange={(value) => setLatitude(parseFloat(value))}
              stringMode
            />
          </Form.Item>
          <Form.Item label="longitude">
            <InputNumber<string>
              style={width300}
              value={longitude.toString()}
              min="-50"
              max="50"
              step="0.000001"
              onChange={(value) => setLongitude(parseFloat(value))}
              stringMode
            />
          </Form.Item>
          <Form.Item wrapperCol={{offset: 4, span: 16}}>
            <Button onClick={async () => {
              if (name) {
                await DataStore.save(
                  new Coordinate({
                    latitude: latitude,
                    longitude: longitude,
                    name: name,
                  })
                );
              }
            }} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Table
          size={"middle"}
          rowKey="id"
          columns={columns}
          dataSource={coordinates}
          expandable={{
            expandedRowRender: record => {
              if (isLoadingAddresses) {
                return <Spin size="large"/>
              } else {
                return <List
                  size="small"
                  dataSource={record.coordinateAddresses}
                  renderItem={item => <List.Item>{stringifyAddress(item)}</List.Item>}
                />
              }
            },
            rowExpandable: record => true,
            onExpand: async (expanded, record) => {
              if (expanded) {
                await loadAddresses(record.id)
              }
            }
          }}
        />
        <Radio.Group size={"large"} onChange={(e) => {
          if (e.target.value === "all") {
            setDriverOnMap(null);
          } else {
            setDriverOnMap(e.target.value);
          }
        }} defaultValue="all">
          <Radio.Button value="all">All drivers</Radio.Button>
          {drivers.map((driver => <Radio.Button value={driver.id}>{driver.email}</Radio.Button>))}
        </Radio.Group>
        <div style={{height: 30}}/>
        {renderMaps()}
      </Content>
    </>
  )
}

export default CoordinatesPage

