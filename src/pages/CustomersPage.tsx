import React, {useEffect, useState} from 'react'

import {Input, Layout, Select, Table, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {Company, Customer} from "../models";
import {DataStore} from "aws-amplify";

const {Content} = Layout;
const {Title} = Typography;
const width300 = {width: 300}

const CustomersPage: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isCustomerLoading, setCustomerLoading] = useState(true);
  const [searchName, setSearchName] = useState('')
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isCompaniesLoading, setCompaniesLoading] = useState(true);

  useEffect(() => {
    const customSubs = DataStore.observeQuery(Customer)
      .subscribe(msg => {
        if (msg.isSynced) {
          setCustomers(msg.items)
          isCustomerLoading && setCustomerLoading(false)
        } else {
          if (msg.items.length > 0) {
            setCustomers(msg.items)
            isCustomerLoading && setCustomerLoading(false)
          }
        }
      });
    const compSubs = DataStore.observeQuery(Company).subscribe(msg => {
      if (msg.items.length > 0) {
        setCompanies(msg.items)
        isCompaniesLoading && setCompaniesLoading(false)
      }
    });
    return () => {
      compSubs.unsubscribe();
      customSubs.unsubscribe()
    }
  }, []);

  const lastNameFilter = (
    <>
      <Typography>Last name</Typography>
      <Input
        placeholder="Search Name"
        value={searchName}
        onChange={e => {
          const currValue = e.target.value;
          setSearchName(currValue);
        }}
      />
    </>
  );

  const columns: ColumnsType<Customer> = [
    {
      title: 'First name',
      dataIndex: 'firstName',
    },
    {
      title: lastNameFilter,
      dataIndex: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Set company',
      render: (value, record, index) => {
        return <Select<string, { value: string; children: string }>
          placeholder="Select company"
          showSearch
          disabled={isCompaniesLoading}
          filterOption={(input, option) =>
            option ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
          }
          value={record.companyId!}
          style={width300}
          onSelect={async (value) => {
            await DataStore.save(
              Customer.copyOf(record, updated => {
                updated.companyId = value;
              })
            );
          }}>
          {companies.map((el) => <Select.Option key={el.id} value={el.id}>{el.name}</Select.Option>)}
        </Select>
      },
      defaultSortOrder: 'descend',
      sorter: (a, b) => {
        if (a.companyId) {
          return -1;
        } else {
          return 1;
        }
      }
    },
  ];

  return (
    <Content>
      <Title>Customers ({customers.length})</Title>
      <Table
        size={"middle"}
        rowKey="id"
        columns={columns}
        dataSource={customers.filter(order => order.lastName?.toLowerCase().includes(searchName.toLowerCase()))}
      />
    </Content>
  )
}

export default CustomersPage

