import React, {useEffect, useState} from 'react'

import {Input, Layout, Table, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {Coordinate, Customer} from "../models";
import {DataStore} from "aws-amplify";

const {Content} = Layout;
const {Title} = Typography;

const CustomersPage: React.FC = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [searchName, setSearchName] = useState('')

    useEffect(() => {
        const subs = DataStore.observeQuery(Customer)
            .subscribe(msg => {
                if (msg.isSynced) {
                    setCustomers(msg.items)
                    isLoading && setLoading(false)
                } else {
                    if (msg.items.length > 0) {
                        setCustomers(msg.items)
                        isLoading && setLoading(false)
                    }
                }
            });
        return () => subs.unsubscribe()
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
                dataSource={customers.filter(order => order.lastName?.toLowerCase().includes(searchName.toLowerCase()))}
            />
        </Content>
    )
}

export default CustomersPage

