import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {Button, Layout, Select, Table} from 'antd';
import {Address, Coordinate} from "../models";
import {ColumnsType} from "antd/es/table";
import Title from "antd/es/typography/Title";

const {Content} = Layout;
const width300 = {width: 300}

const AddressesPage: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [coordinates, setCoordinates] = useState<Coordinate[]>([]);

  const fetchCoordinates = async () => {
    const fetchedCoordinates = await DataStore.query(Coordinate);
    setCoordinates(fetchedCoordinates);
  }

  const fetchAddresses = async () => {
    const fetchedAddresses = await DataStore.query(Address);
    setAddresses(fetchedAddresses);
  }

  useEffect(() => {
    fetchCoordinates();
    fetchAddresses();

    const coordinatesSubscription = DataStore.observe(Coordinate).subscribe(async (message) => {
      await fetchCoordinates();
    });

    const addressesSubscription = DataStore.observe(Address).subscribe(async (message) => {
      await fetchAddresses();
    });

    return () => {
      coordinatesSubscription.unsubscribe();
      addressesSubscription.unsubscribe();
    }
  }, []);

  const columns: ColumnsType<Address> = [
    {
      title: 'City',
      dataIndex: 'city',
    },
    {
      title: 'Address',
      dataIndex: 'address1',
    },
    {
      title: 'Details',
      dataIndex: 'address2',
    },
    {
      title: 'ZIP',
      dataIndex: 'postCode',
    },
    {
      title: 'Set coordinates',
      render: (value, record, index) => {
        return <Select value={record.coordinateID} style={width300} onSelect={async (value) => {
          await DataStore.save(
            Address.copyOf(record, updated => {
              updated.coordinateID = value;
            })
          );
        }}>
          {coordinates.map((coord) => <Select.Option key={coord.id}
                                                     value={coord.id}>{coord.name}</Select.Option>)}
        </Select>
      },
      width: 500,
    },
  ];

  return (
    <Content>
      <Title>Addresses ({addresses.length})</Title>
      <Button onClick={async () => {
        for (const address of addresses) {
          await DataStore.delete(Address, address.id);
        }
      }} type="primary" htmlType="submit">
        Delete all addresses
      </Button>
      <Table
        size={"middle"}
        rowKey="id"
        columns={columns}
        dataSource={addresses}
      />
    </Content>
  )
}

export default AddressesPage

