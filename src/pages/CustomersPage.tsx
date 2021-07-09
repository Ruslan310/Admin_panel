import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import { Layout} from 'antd';
import {Customer} from "../models";
const {Content} = Layout;

const CustomersPage: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    fetchCustomers();
  }, [])

  const fetchCustomers = async () => {
    const customersResponse = await DataStore.query(Customer);
    setCustomers(customersResponse)
  }

  return (
    <Content>
      CUSTOMERS
    </Content>
  )
}

export default CustomersPage
