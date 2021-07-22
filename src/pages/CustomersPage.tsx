import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {Button, Layout, Table} from 'antd';
import {Customer} from "../models";
import {ColumnsType} from "antd/es/table";
import Title from "antd/es/typography/Title";

const {Content} = Layout;

const CustomersPage: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const fetchCustomers = async () => {
    const fetchedCustomers = await DataStore.query(Customer);
    setCustomers(fetchedCustomers);
  }

  useEffect(() => {
    fetchCustomers();

    const customersSubscription = DataStore.observe(Customer).subscribe(async (message) => {
      await fetchCustomers();
    });

    return () => {
      customersSubscription.unsubscribe();
    }
  }, []);

  const columns: ColumnsType<Customer> = [
    {
      title: 'First name',
      dataIndex: 'firstName',
    },
    {
      title: 'Last name',
      dataIndex: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];

  return (
    <Content>
      <Title>Customers ({customers.length})</Title>
      <Button onClick={async () => {
        for (const customer of customers) {
          await DataStore.delete(Customer, customer.id);
        }
      }} type="primary" htmlType="submit">
        Delete all customers
      </Button>
      <Table
        size={"middle"}
        rowKey="id"
        columns={columns}
        dataSource={customers}
      />
    </Content>
  )
}

export default CustomersPage

