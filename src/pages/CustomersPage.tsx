import React, {useEffect, useState} from 'react'

import {Layout, Table, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {Customer} from "../API";
import {fetchCustomers} from "../graphql/requests";

const {Content} = Layout;
const {Title} = Typography;

const CustomersPage: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const loadCustomers = async () => {
    const fetchedCustomers = await fetchCustomers();
    setCustomers(fetchedCustomers);
  }

  useEffect(() => {
    loadCustomers();
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
    {
      title: 'Company',
      dataIndex: 'company',
      sorter: (a, b) => {
        if (!a.company) {
          return -1;
        }
        if (a.company && b.company) {
          if (a.company < b.company) {
            return -1;
          }
          if (a.company > b.company) {
            return 1;
          }
        }
        return 0;
      },
      defaultSortOrder: "ascend"
    },
  ];

  return (
    <Content>
      <Title>Customers ({customers.length})</Title>
      {/*<Button onClick={async () => {*/}
      {/*  for (const customer of customers) {*/}
      {/*    await DataStore.delete(Customer, customer.id);*/}
      {/*  }*/}
      {/*}} type="primary" htmlType="submit">*/}
      {/*  Delete all customers*/}
      {/*</Button>*/}
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

