import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {Button, Form, Input, Layout, Modal, Select, Table, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {Address, Coordinate, Warehouse} from "../../models";
import {googleMapLink, stringifyAddress} from "../../utils/utils";
import {CloseCircleOutlined} from "@ant-design/icons";

const {confirm} = Modal;

const {Content} = Layout;
const {Title} = Typography;
const width300 = {width: 300}

const WarehousesPage: React.FC = () => {
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [name, setName] = useState('');
  const [addressId, setAddressId] = useState('');
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [coordinates, setCoordinates] = useState<Coordinate[]>([]);

  const fetchWarehouses = async () => {
    const fetchedWarehouses = await DataStore.query(Warehouse);
    console.log('warehoueses:', warehouses);
    setWarehouses(fetchedWarehouses);
  }

  const fetchAddresses = async () => {
    const fetchedAddresses = await DataStore.query(Address);
    setAddresses(fetchedAddresses);
  }

  const fetchCoordinates = async () => {
    const fetchedCoordinates = await DataStore.query(Coordinate);
    setCoordinates(fetchedCoordinates);
  }

  useEffect(() => {
    fetchWarehouses();
    fetchAddresses();
    fetchCoordinates();

    const warehousesSubscription = DataStore.observe(Warehouse).subscribe(async (message) => {
      await fetchWarehouses();
    });

    const addressesSubscription = DataStore.observe(Address).subscribe(async (message) => {
      await fetchAddresses();
    });

    const coordinatesSubscription = DataStore.observe(Coordinate).subscribe(async (message) => {
      await fetchCoordinates();
    });

    return () => {
      warehousesSubscription.unsubscribe();
      addressesSubscription.unsubscribe();
      coordinatesSubscription.unsubscribe();
    }
  }, []);

  const columns: ColumnsType<Warehouse> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Address',
      render: (value, record, index) => {
        return stringifyAddress(record.address)
      },
    },
    {
      title: 'Map link',
      render: (value, record, index) => {
        const coordinate = coordinates.find(coordinate => coordinate.id === record.address.coordinateID);
        if (coordinate) {
          return <a target={"_blank"}
                    href={googleMapLink(coordinate.latitude, coordinate.longitude)}>{googleMapLink(coordinate.latitude, coordinate.longitude)}</a>
        }
        return;
      },
    },
    {
      title: 'Delete',
      render: (value, record, index) => {
        return <Button danger type={'primary'} onClick={() => showDeleteConfirm(record)}>Delete</Button>
      }
    }
  ];

  const showDeleteConfirm = (warehouse: Warehouse) => {
    confirm({
      title: 'Are you sure delete this warehouse?',
      icon: <CloseCircleOutlined style={{color: 'red'}}/>,
      content: `Delete warehouse with name "${warehouse.name}"`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      async onOk() {
        await DataStore.delete(Warehouse, warehouse.id);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  return (
    <Content>
      <Title>Warehouses ({warehouses.length})</Title>
      {/*<Button onClick={async () => {*/}
      {/*  for (const warehouse of warehouses) {*/}
      {/*    await DataStore.delete(Warehouse, warehouse.id);*/}
      {/*  }*/}
      {/*}} type="primary" htmlType="submit">*/}
      {/*  Delete all warehouses*/}
      {/*</Button>*/}
      <Form
        labelCol={{span: 4}}
        wrapperCol={{span: 14}}
        layout="horizontal"
      >
        <Form.Item label="Name" name="name"
                   rules={[{required: true, message: 'Please enter name!'}]}>
          <Input
            style={width300}
            placeholder={'Enter address 1'}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Address" name="address"
                   rules={[{required: true, message: 'Please enter address!'}]}>
          <Select
            placeholder="Select address"
            showSearch
            filterOption={(input, option) =>
              option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            value={addressId}
            style={width300}
            onSelect={async (value) => {
              setAddressId(value)
            }}>
            {addresses.map((address) => <Select.Option key={address.id}
                                                       value={address.id}>{stringifyAddress(address)}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{offset: 4, span: 16}}>
          <Button onClick={async () => {
            if (name && addressId) {
              const address = await DataStore.query(Address, addressId);
              await DataStore.save(
                new Warehouse({
                  name: name,
                  address: address,
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
        dataSource={warehouses}
      />
    </Content>
  )
}

export default WarehousesPage

