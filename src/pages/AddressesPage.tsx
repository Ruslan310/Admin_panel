import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {Layout, Select, Table} from 'antd';
import {Address, Coordinate} from "../models";
import {ColumnsType} from "antd/es/table";
import Title from "antd/es/typography/Title";

const {Content} = Layout;
const width300 = {width: 300}

const AddressesPage: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [coordinates, setCoordinates] = useState<Coordinate[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedAddresses = await DataStore.query(Address);

      if (fetchedAddresses.length > 0) {
        setAddresses(fetchedAddresses);
      }

      DataStore.observe(Address).subscribe(async (message) => {
        if (message.opType === 'INSERT') {
          const newAddress = await DataStore.query(Address, message.element.id) as Address;
          fetchedAddresses.push(newAddress);
          setAddresses([...fetchedAddresses]);
        }
      });

      const fetchedCoordinates = await DataStore.query(Coordinate);

      if (fetchedCoordinates.length > 0) {
        setCoordinates(fetchedCoordinates);
      }

      DataStore.observe(Coordinate).subscribe(async (message) => {
        if (message.opType === 'INSERT') {
          const newCoordinates = await DataStore.query(Coordinate, message.element.id) as Coordinate;
          fetchedCoordinates.push(newCoordinates);
          setCoordinates([...fetchedCoordinates]);
        }
      });
    })();
  }, []);

  console.log('addresses:', addresses)

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
        console.log('coord: ', record.coordinateID)
        return <Select value={record.coordinateID} style={width300} onSelect={async (value) => {
          const updatedAddress = await DataStore.save(
            Address.copyOf(record, updated => {
              updated.coordinateID = value;
            })
          );
          console.log('updatedAddress: ', updatedAddress)
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
      <Title>Orders</Title>
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

