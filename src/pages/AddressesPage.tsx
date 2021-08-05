import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {Button, Layout, Modal, Select, Table, Typography} from 'antd';
import {Address, Coordinate} from "../models";
import {ColumnsType} from "antd/es/table";
import {stringifyAddress} from "../utils/utils";

const {Content} = Layout;
const width300 = {width: 300}
const {Title} = Typography;

const AddressesPage: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [coordinates, setCoordinates] = useState<Coordinate[]>([]);
  const [isDeleteConfirmationShow, setDeleteConfirmationShow] = useState(false);
  const [targetAddress, setTargetAddress] = useState<Address>();

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
        return <Select
          placeholder="Select coordinates"
          showSearch
          filterOption={(input, option) =>
            option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          value={record.coordinateID}
          style={width300}
          onSelect={async (value) => {
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
      defaultSortOrder: 'descend',
      sorter: (a, b) => {
        if (a.coordinateID) {
          return -1;
        } else {
          return 1;
        }
      }
    },
    {
      title: 'Delete',
      render: (value, record, index) => {
        return <Button type={'primary'} onClick={() =>{
          setDeleteConfirmationShow(true);
          setTargetAddress(record);
        }}>Delete</Button>
      }
    }
  ];

  const deleteAddress = async () => {
    if (targetAddress) {
      await DataStore.delete(Address, targetAddress.id);
    }
    setTargetAddress(undefined);
    setDeleteConfirmationShow(false);
  };

  return (
    <>
      <Content>
        <Title>Addresses ({addresses.length})</Title>
        {/*<Button onClick={async () => {*/}
        {/*  for (const address of addresses) {*/}
        {/*    await DataStore.delete(Address, address.id);*/}
        {/*  }*/}
        {/*}} type="primary" htmlType="submit">*/}
        {/*  Delete all addresses*/}
        {/*</Button>*/}
        <Table
          size={"middle"}
          rowKey="id"
          columns={columns}
          dataSource={addresses}
        />
      </Content>
      <Modal
        title="Are sure you want to delete address?"
        visible={isDeleteConfirmationShow}
        onOk={deleteAddress}
        onCancel={() => {
          setTargetAddress(undefined);
          setDeleteConfirmationShow(false);
        }}
      >
        <p>You want to delete address "{stringifyAddress(targetAddress)}"</p>
      </Modal>
    </>
  )
}

export default AddressesPage

