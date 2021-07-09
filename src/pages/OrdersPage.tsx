import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {Layout, Table} from 'antd';
import {Order} from "../models";
import { Key } from 'antd/lib/table/interface';
const {Content} = Layout;

const columns = [
  {
    title: 'Order number',
    dataIndex: 'orderNumber',
  },
  {
    title: 'Status',
    dataIndex: 'orderStatus',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
  },
];

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])

  useEffect(() => {
    fetchOrders();
  }, [])

  const onSelectChange = (selectedRowKeys: Key[]) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys: any) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key: string, index: number) => {
            return index % 2 === 0;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys: any) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key: string, index: number) => {
            return index % 2 !== 0;

          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  const fetchOrders = async () => {
    const orders = await DataStore.query(Order);
    setOrders(orders)
    console.log(orders)
  }

  return (
    <Content>
      <Table rowKey="id" rowSelection={rowSelection} columns={columns} dataSource={orders} />
    </Content>
  )
}

export default OrdersPage
