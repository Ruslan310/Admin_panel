import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {Button, Descriptions, Form, Input, InputNumber, Layout, Select, Table} from 'antd';
import {Coordinates, Role, User} from "../models";
import {ColumnsType} from "antd/es/table";
import Title from "antd/es/typography/Title";

const {Content} = Layout;

const width300 = {width: 300}

const CoordinatesPage: React.FC = () => {
  const [coordinates, setCoordinates] = useState<Coordinates[]>([]);
  const [drivers, setDrivers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [latitude, setLatitude] = useState(0.000000);
  const [longitude, setLongitude] = useState(0.000000);
  const [assignedDriverId, setAssignedDriverId] = useState('');

  useEffect(() => {
    (async () => {
      const fetchedCoordinates = await DataStore.query(Coordinates);

      if (fetchedCoordinates.length > 0) {
        setCoordinates(fetchedCoordinates);
      }

      DataStore.observe(Coordinates).subscribe(async (message) => {
        if (message.opType === 'INSERT') {
          const newCoordinates = await DataStore.query(Coordinates, message.element.id) as Coordinates;
          fetchedCoordinates.push(newCoordinates);
          setCoordinates([...fetchedCoordinates]);
        }
      });


      const fetchedUsers = await DataStore.query(User, user => user.role("eq", Role.DELIVERY));

      if (fetchedUsers.length > 0) {
        setDrivers(fetchedUsers);
      }

      DataStore.observe(User).subscribe(async (message) => {
        if (message.opType === 'INSERT') {
          const newUser = await DataStore.query(User, message.element.id) as User;
          fetchedUsers.push(newUser);
          setDrivers([...fetchedUsers]);
        }
      });
    })();
  }, []);

  console.log('coordinates:', coordinates)
  console.log('drivers:', drivers)

  const columns: ColumnsType<Coordinates> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Assigned driver',
      render: (value, record, index) => {
        return record.assignedDriverUser?.firstName
      },
    },
    {
      title: 'Link to map',
      render: (value, record, index) => {
        return <a target={"_blank"}
                    href={`https://www.google.com/maps/place/${record.longitude},${record.latitude}`}>{`https://www.google.com/maps/place/${record.longitude},${record.latitude}`}</a>
      },
    },
    {
      title: 'Actions',
      render: (value, record, index) => {
        return <Button type={'primary'} onClick={async () => {
          const deleted = await DataStore.delete(Coordinates, record.id);
          console.log(deleted)
        }}>Delete</Button>
      }
    }
  ];

  return (
    <Content>
      <Title>Orders</Title>
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
        <Form.Item label="Assign driver">
          <Select
            showSearch
            style={width300}
            allowClear
            placeholder="Select a person"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            onSelect={(value) => setAssignedDriverId(value as string)}
          >
            {drivers.map((driver) => <Select.Option key={driver.id}
                                                    value={driver.id}>{driver.firstName}</Select.Option>)}
          </Select>
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
                new Coordinates({
                  assignedDriverUser: targetDriver,
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
            return <Descriptions title="Coordinates details">

            </Descriptions>
          },
          rowExpandable: record => true,
        }}
      />
    </Content>
  )
}

export default CoordinatesPage

