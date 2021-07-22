import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {Button, List, Form, Input, InputNumber, Layout, Spin, Table} from 'antd';
import {Address, Coordinate, User} from "../models";
import {ColumnsType} from "antd/es/table";
import Title from "antd/es/typography/Title";
import {stringifyAddress} from "../utils/utils";

const {Content} = Layout;

const width300 = {width: 300}

const CoordinatesPage: React.FC = () => {
  const [coordinates, setCoordinates] = useState<Coordinate[]>([]);
  const [drivers, setDrivers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [latitude, setLatitude] = useState(0.000000);
  const [longitude, setLongitude] = useState(0.000000);
  const [assignedDriverId, setAssignedDriverId] = useState('');
  const [isLoadingAddresses, setLoadingAddresses] = useState(false)

  const fetchCoordinates = async () => {
    const fetchedCoordinates = await DataStore.query(Coordinate);

    if (fetchedCoordinates.length > 0) {
      setCoordinates(fetchedCoordinates);
    }
  }

  useEffect(() => {
    fetchCoordinates();
    const coordinatesSubscription = DataStore.observe(Coordinate).subscribe(async (message) => {
      await fetchCoordinates();
    });

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
      title: 'Assigned driver',
      render: (value, record, index) => {
        return record.userID
      },
    },
    {
      title: 'Link to map',
      render: (value, record, index) => {
        return <a target={"_blank"}
                    href={`https://www.google.com/maps/place/${record.latitude},${record.longitude}`}>{`https://www.google.com/maps/place/${record.longitude},${record.latitude}`}</a>
      },
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

  return (
    <Content>
      <Title>Coordinates</Title>
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
            const targetDriver = drivers.find(driver => driver.id === assignedDriverId)
            if (name) {
              await DataStore.save(
                new Coordinate({
                  userID: targetDriver?.id,
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
    </Content>
  )
}

export default CoordinatesPage

