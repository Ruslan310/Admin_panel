import React, {useEffect, useState} from 'react'

import {Button, Form, Input, Layout, Modal, Select, Table, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {googleMapLink, stringifyAddress} from "../../utils/utils";
import {CloseCircleOutlined} from "@ant-design/icons";
import {useHistory} from "react-router-dom";
import {Address, Coordinate, Warehouse} from "../../API";
import {createWarehouse, fetchAddresses, fetchCoordinates, fetchWarehouses} from "../../graphql/requests";

const {confirm, error} = Modal;

const {Content} = Layout;
const {Title} = Typography;
const width300 = {width: 300}

const WarehousesPage: React.FC = () => {
  const history = useHistory();
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [name, setName] = useState('');
  const [addressId, setAddressId] = useState('');
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [coordinates, setCoordinates] = useState<Coordinate[]>([]);

  const loadWarehouses = async () => {
    const fetchedWarehouses = await fetchWarehouses();
    setWarehouses(fetchedWarehouses);
  }

  const loadAddresses = async () => {
    const fetchedAddresses = await fetchAddresses();
    setAddresses(fetchedAddresses);
  }

  const loadCoordinates = async () => {
    const fetchedCoordinates = await fetchCoordinates();
    setCoordinates(fetchedCoordinates);
  }

  useEffect(() => {
    loadWarehouses();
    loadAddresses();
    loadCoordinates();
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
      title: 'Details',
      render: (value, record, index) => {
        return <Button type={'primary'}
                       onClick={() => history.push("/stocktaking/warehouseDetails/" + record.id)}>Details</Button>
      }
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
    // {
    //   title: 'Delete',
    //   render: (value, record, index) => {
    //     return <Button danger type={'primary'} onClick={() => tryToDelete(record)}>Delete</Button>
    //   }
    // }
  ];

  // const tryToDelete = async (warehouse: Warehouse) => {
  //   const warehouseProducts = (await DataStore.query(ProductAtWarehouse)).filter(productAtWarehouse => productAtWarehouse.warehouse.id === warehouse.id);
  //   if (warehouseProducts && warehouseProducts.length > 0) {
  //     error({
  //       title: 'You cannot delete this warehouse!',
  //       content: `This warehouse has ${warehouseProducts.length} products, remove products first.`,
  //     });
  //   } else {
  //     confirm({
  //       title: 'Are you sure delete this warehouse?',
  //       icon: <CloseCircleOutlined style={{color: 'red'}}/>,
  //       content: `Delete warehouse with name "${warehouse.name}"`,
  //       okText: 'Yes',
  //       okType: 'danger',
  //       cancelText: 'No',
  //       async onOk() {
  //         await DataStore.delete(Warehouse, warehouse.id);
  //       },
  //       onCancel() {
  //         console.log('Cancel');
  //       },
  //     });
  //   }
  // }

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
          <Select<string, { value: string; children: string }>
            placeholder="Select address"
            showSearch
            filterOption={(input, option) =>
                option ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
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
              await createWarehouse({
                name: name,
                warehouseAddressId: addressId,
              })
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
        dataSource={warehouses}
      />
    </Content>
  )
}

export default WarehousesPage

