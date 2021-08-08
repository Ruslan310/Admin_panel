import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  Layout,
  List,
  Modal,
  Spin,
  Table, Typography,
} from 'antd';
import {Address, Coordinate} from "../models";
import {ColumnsType} from "antd/es/table";
import {googleMapLink, stringifyAddress} from "../utils/utils";
import ManyPointsMapComponent from "../components/ManyPointsMapComponent";

const {Content} = Layout;
const {Title} = Typography;

const width300 = {width: 300}

const CoordinatesPage: React.FC = () => {
  const [coordinates, setCoordinates] = useState<Coordinate[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isDeleteConfirmationShow, setDeleteConfirmationShow] = useState(false);
  const [isEditShow, setEditShow] = useState(false);
  const [editedName, setEditedName] = useState<string>();
  const [editedLatitude, setEditedLatitude] = useState<number>(0.000000);
  const [editedLongitude, setEditedLongitude] = useState<number>(0.000000);
  const [targetCoordinate, setTargetCoordinate] = useState<Coordinate>();
  const [name, setName] = useState('');
  const [latitude, setLatitude] = useState(0.000000);
  const [longitude, setLongitude] = useState(0.000000);
  const [isLoadingAddresses, setLoadingAddresses] = useState(false)

  const fetchCoordinates = async () => {
    const fetchedCoordinates = await DataStore.query(Coordinate);
    setCoordinates(fetchedCoordinates);
  }

  useEffect(() => {
    setLoading(true);
    fetchCoordinates();
    const coordinatesSubscription = DataStore.observe(Coordinate).subscribe(async (message) => {
      await fetchCoordinates();
    });

    setLoading(false);
    return () => {
      coordinatesSubscription.unsubscribe();
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
                  href={googleMapLink(record.latitude, record.longitude)}>{googleMapLink(record.latitude, record.longitude)}</a>
      },
    },
    {
      title: 'Edit',
      render: (value, record, index) => {
        return <Button type={'primary'} onClick={() => {
          setEditShow(true);
          setEditedName(record.name)
          setEditedLatitude(record.latitude)
          setEditedLongitude(record.longitude)
          setTargetCoordinate(record);
        }}>Edit</Button>
      }
    },
    {
      title: 'Delete',
      render: (value, record, index) => {
        return <Button type={'primary'} onClick={() => {
          setDeleteConfirmationShow(true);
          setTargetCoordinate(record);
        }}>Delete</Button>
      }
    }
  ];

  const deleteCoordinate = async () => {
    if (targetCoordinate) {
      const addresses = await DataStore.query(Address, address => address.coordinateID("eq", targetCoordinate.id))
      if (addresses) {
        for (const address of addresses) {
          await DataStore.save(
            Address.copyOf(address, updated => {
              updated.coordinateID = undefined;
            })
          );
        }
      }
      await DataStore.delete(Coordinate, targetCoordinate.id);
    }
    setTargetCoordinate(undefined);
    setDeleteConfirmationShow(false);
  };

  const editCoordinate = async () => {
    if (targetCoordinate && editedName) {
      await DataStore.save(
        Coordinate.copyOf(targetCoordinate, updated => {
          updated.name = editedName;
          updated.latitude = editedLatitude;
          updated.longitude = editedLongitude;
        })
      );
      setTargetCoordinate(undefined);
      setEditShow(false);
    }
  };

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

  const renderMaps = () => {
    if (isLoading || coordinates.length === 0) return null;
    return <ManyPointsMapComponent
      // @ts-ignore
      center={{lat: 34.6671732, lng: 33.0132906}}
      zoom={12}
      places={coordinates}
    />
  }

  if (isLoading) {
    return <Spin size="large"/>
  }

  return (
    <>
      <Modal
        title="Are sure you want to delete coordinate?"
        visible={isDeleteConfirmationShow}
        onOk={deleteCoordinate}
        onCancel={() => {
          setTargetCoordinate(undefined);
          setDeleteConfirmationShow(false);
        }}
      >
        <p>You want to delete coordinate with name "{targetCoordinate?.name}"</p>
      </Modal>
      <Modal
        title="Edit coordinates"
        visible={isEditShow}
        onOk={editCoordinate}
        onCancel={() => {
          setTargetCoordinate(undefined);
          setEditShow(false);
        }}
      >
        <Form
          labelCol={{span: 4}}
          wrapperCol={{span: 14}}
          layout="horizontal"
        >
          <Form.Item label="Edit name">
            <Input style={width300} value={editedName} onChange={(e) => {
              setEditedName(e.target.value)
            }}/>
          </Form.Item>
          <Form.Item label="Map link">
            <Input
              style={width300}
              onChange={(e) => {
                if (e.target.value.includes('google.com')) {
                  const latReg = new RegExp("@(-?[\\d.]*)")
                  const latGroups = latReg.exec(e.target.value);
                  if (latGroups) {
                    setEditedLatitude(parseFloat(latGroups[1]))
                  }
                  const lonReg = new RegExp("@[-?\\d.]*,([-?\\d.]*)")
                  const lonGroups = lonReg.exec(e.target.value);
                  if (lonGroups) {
                    setEditedLongitude(parseFloat(lonGroups[1]))
                  }
                } else if (e.target.value.includes('2gis')) {
                  let allReg = new RegExp("\\/(\\d+[.]\\d+)%2C(\\d+.\\d+)[?]m=")
                  const groups = allReg.exec(e.target.value);
                  if (groups) {
                    setEditedLatitude(parseFloat(groups[2]))
                    setEditedLongitude(parseFloat(groups[1]))
                  } else {
                    let allReg = new RegExp("m=(\\d+[.]\\d+)%2C(\\d+.\\d+)")
                    const groups = allReg.exec(e.target.value);
                    if (groups) {
                      setEditedLatitude(parseFloat(groups[2]))
                      setEditedLongitude(parseFloat(groups[1]))
                    }
                  }
                }
              }}
            />
          </Form.Item>
          <Form.Item label="latitude">
            <InputNumber<string>
              style={width300}
              value={editedLatitude.toString()}
              min="-50"
              max="50"
              step="0.000001"
              onChange={(value) => setEditedLatitude(parseFloat(value))}
              stringMode
            />
          </Form.Item>
          <Form.Item label="longitude">
            <InputNumber<string>
              style={width300}
              value={editedLongitude.toString()}
              min="-50"
              max="50"
              step="0.000001"
              onChange={(value) => setEditedLongitude(parseFloat(value))}
              stringMode
            />
          </Form.Item>
        </Form>
      </Modal>
      <Content>
        <Title>Coordinates ({coordinates.length})</Title>
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
          <Form.Item label="Map link">
            <Input
              style={width300}
              onChange={(e) => {
                if (e.target.value.includes('google.com')) {
                  const latReg = new RegExp("@(-?[\\d.]*)")
                  const latGroups = latReg.exec(e.target.value);
                  if (latGroups) {
                    setLatitude(parseFloat(latGroups[1]))
                  }
                  const lonReg = new RegExp("@[-?\\d.]*,([-?\\d.]*)")
                  const lonGroups = lonReg.exec(e.target.value);
                  if (lonGroups) {
                    setLongitude(parseFloat(lonGroups[1]))
                  }
                } else if (e.target.value.includes('2gis')) {
                  let allReg = new RegExp("\\/(\\d+[.]\\d+)%2C(\\d+.\\d+)[?]m=")
                  const groups = allReg.exec(e.target.value);
                  if (groups) {
                    setLatitude(parseFloat(groups[2]))
                    setLongitude(parseFloat(groups[1]))
                  } else {
                    let allReg = new RegExp("m=(\\d+[.]\\d+)%2C(\\d+.\\d+)")
                    const groups = allReg.exec(e.target.value);
                    if (groups) {
                      setLatitude(parseFloat(groups[2]))
                      setLongitude(parseFloat(groups[1]))
                    }
                  }
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
              Create
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
        <Divider/>
        {renderMaps()}
      </Content>
    </>
  )
}

export default CoordinatesPage

