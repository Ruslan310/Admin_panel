import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {Button, Col, Form, Input, InputNumber, Layout, Modal, Row, Select, Table, Typography} from 'antd';
import {Address, Coordinate, WporderStatus} from "../models";
import {ColumnsType} from "antd/es/table";
import {fullName, stringifyAddress} from "../utils/utils";

const {Content} = Layout;
const width300 = {width: 300}
const {Title} = Typography;

const AddressesPage: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [filteredAddresses, setFilteredAddresses] = useState<Address[]>([]);
  const [coordinates, setCoordinates] = useState<Coordinate[]>([]);
  const [isDeleteConfirmationShow, setDeleteConfirmationShow] = useState(false);
  const [targetAddress, setTargetAddress] = useState<Address>();
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [postCode, setPostCode] = useState('');
  const [coordinateId, setCoordinateId] = useState();
  const [searchAddress, setSearchAddress] = useState('');

  const fetchCoordinates = async () => {
    const fetchedCoordinates = await DataStore.query(Coordinate);
    setCoordinates(fetchedCoordinates);
  }

  const fetchAddresses = async () => {
    const fetchedAddresses = await DataStore.query(Address);
    setAddresses(fetchedAddresses);
    setFilteredAddresses(fetchedAddresses)
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

  const addressFilter = (
    <Row>
      <Col className="gutter-row" span={6}>
        <Typography>Full name</Typography>
      </Col>
      <Col className="gutter-row" span={6}>
        <Input
          placeholder="Search address"
          value={searchAddress}
          onChange={e => {
            const currValue = e.target.value;
            setSearchAddress(currValue);
            const filteredData = addresses
              .filter(address => address.address1.toLowerCase().includes(currValue.toLowerCase()));
            setFilteredAddresses(filteredData);
          }}
        />
      </Col>
    </Row>
  );

  const columns: ColumnsType<Address> = [
    {
      title: 'City',
      dataIndex: 'city',
    },
    {
      title: addressFilter,
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
        return <Button type={'primary'} onClick={() => {
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
        <Form
          labelCol={{span: 4}}
          wrapperCol={{span: 14}}
          layout="horizontal"
        >
          <Form.Item label="Address 1" name="address1"
                     rules={[{required: true, message: 'Please enter address 1!'}]}>
            <Input
              style={width300}
              placeholder={'Enter address 1'}
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Address 2" name="address2">
            <Input
              style={width300}
              placeholder={'Enter address 2'}
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="City" name="city">
            <Input
              style={width300}
              placeholder={'Enter city'}
              value={address2}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Post code" name="postCode">
            <Input
              style={width300}
              placeholder={'Enter post code'}
              value={address2}
              onChange={(e) => setPostCode(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Coordinate" name="coordinate">
            <Select
              placeholder="Select coordinates"
              showSearch
              filterOption={(input, option) =>
                option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              value={coordinateId}
              style={width300}
              onSelect={async (value) => {
                setCoordinateId(value)
              }}>
              {coordinates.map((coord) => <Select.Option key={coord.id}
                                                         value={coord.id}>{coord.name}</Select.Option>)}
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{offset: 4, span: 16}}>
            <Button onClick={async () => {
              if (address1) {
                await DataStore.save(
                  new Address({
                    address1: address1,
                    address2: address2,
                    city: city,
                    postCode: postCode,
                    coordinateID: coordinateId,
                  })
                );
              }
            }} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
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
          dataSource={filteredAddresses}
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

