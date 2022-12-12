import React, {useEffect, useState} from 'react'

import {Button, Col, Form, Input, Layout, Modal, Row, Select, Table, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {DataStore} from "aws-amplify";
import {Address, Coordinate, WPOrder} from "../models";
import {CloseOutlined} from "@ant-design/icons";

const {Content} = Layout;
const width300 = {width: 300}
const {Title} = Typography;

const AddressesPage: React.FC = () => {
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [coordinates, setCoordinates] = useState<Coordinate[]>([]);
    const [isDeleteConfirmationShow, setDeleteConfirmationShow] = useState(false);
    const [isAddressesLoading, setAddressesLoading] = useState(true);
    const [isCoordinatesLoading, setCoordinatesLoading] = useState(true);
    const [targetAddress, setTargetAddress] = useState<Address>();
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [postCode, setPostCode] = useState('');
    const [coordinateId, setCoordinateId] = useState<string>();
    const [searchAddress1, setSearchAddress1] = useState('');
    const [searchAddress2, setSearchAddress2] = useState('');

    useEffect(() => {
        const addrSubs =DataStore.observeQuery(Address).subscribe(msg => {
            if (msg.isSynced) {
                setAddresses(msg.items)
                isAddressesLoading && setAddressesLoading(false)
            } else {
                if (msg.items.length > 0) {
                    setAddresses(msg.items)
                    isAddressesLoading && setAddressesLoading(false)
                }
            }
        });

        const coordSubs = DataStore.observeQuery(Coordinate).subscribe(msg => {
            if (msg.isSynced) {
                setCoordinates(msg.items)
                isCoordinatesLoading && setCoordinatesLoading(false)
            }
        });
        return () => {
            addrSubs.unsubscribe();
            coordSubs.unsubscribe()
        }
    }, [])

    const addressFilter1 = (
        <>
            <Typography>Address 1</Typography>
            <Input
                placeholder="Search address 1"
                value={searchAddress1}
                onChange={e => {
                    const currValue = e.target.value;
                    setSearchAddress1(currValue);
                }}
            />
        </>
    )

    const addressFilter2 = (
        <>
            <Typography>Address 2</Typography>
            <Input
                placeholder="Search address 2"
                value={searchAddress2}
                onChange={e => {
                    const currValue = e.target.value;
                    setSearchAddress2(currValue);
                }}
            />
        </>
    )

    const columns: ColumnsType<Address> = [
        {
            title: addressFilter1,
            dataIndex: 'address1',
        },
        {
            title: addressFilter2,
            dataIndex: 'address2',
        },
        {
            title: 'ZIP',
            dataIndex: 'postCode',
        },
        {
            title: 'City',
            dataIndex: 'city',
        },
        {
            title: 'Set coordinates',
            render: (value, record, index) => {
                return <Select<string, { value: string; children: string }>
                    placeholder="Select coordinates"
                    showSearch
                    disabled={isCoordinatesLoading}
                    filterOption={(input, option) =>
                        option ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
                    }
                    value={record.coordinateID!}
                    style={width300}
                    onSelect={async (value) => {
                        await DataStore.save(
                            Address.copyOf(record, updated => {
                                updated.coordinateID = value;
                            })
                        );
                        const coordinate = await record.coordinate
                        if (coordinate) {
                            const driver = await coordinate.driver
                            if (driver) {
                                const orders = await record.WPOrders.toArray()
                                for (const order of orders) {
                                    await DataStore.save(
                                        WPOrder.copyOf(order, updated => {
                                            updated.driverName = driver.firstName;
                                        })
                                    )
                                }
                            }
                        }

                    }}>
                    {coordinates.map((coord) => <Select.Option key={coord.id}
                                                               value={coord.id}>{coord.name}</Select.Option>)}
                </Select>
            },
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
            width: 30,
            title: 'Delete',
            render: (value, record, index) => {
                return <Button shape="circle" icon={<CloseOutlined/>} danger type={'primary'} onClick={async () => {
                    setDeleteConfirmationShow(true);
                    setTargetAddress(record);
                }}/>
            }
        }
    ];

    // const deleteAddress = async () => {
    //   if (targetAddress) {
    //     await DataStore.delete(Address, targetAddress.id);
    //   }
    //   setTargetAddress(undefined);
    //   setDeleteConfirmationShow(false);
    // };

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
                        <Select<string, { value: string; children: string }>
                            placeholder="Select coordinates"
                            showSearch
                            filterOption={(input, option) =>
                                option ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
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
                                        address1,
                                        address2,
                                        city,
                                        postCode,
                                        coordinateID: coordinateId,
                                    })
                                );
                            }
                        }} type="primary" htmlType="submit">
                            Create
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
                    loading={isAddressesLoading}
                    rowKey="id"
                    columns={columns}
                    dataSource={addresses
                        .filter(address => address.address1.toLowerCase().includes(searchAddress1.toLowerCase()))
                        .filter(address => address.address1.toLowerCase().includes(searchAddress2.toLowerCase()))}
                />
            </Content>
            {/*<Modal*/}
            {/*  title="Are sure you want to delete address?"*/}
            {/*  visible={isDeleteConfirmationShow}*/}
            {/*  onOk={deleteAddress}*/}
            {/*  onCancel={() => {*/}
            {/*    setTargetAddress(undefined);*/}
            {/*    setDeleteConfirmationShow(false);*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <p>You want to delete address "{stringifyAddress(targetAddress)}"</p>*/}
            {/*</Modal>*/}
        </>
    )
}

export default AddressesPage

