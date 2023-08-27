import React, {useEffect, useState} from 'react'

import {Button, Checkbox, Descriptions, Divider, Input, Layout, Modal, Select, Space, Table, Typography} from 'antd';
import {DataStore} from "aws-amplify";
import {Key} from 'antd/lib/table/interface';
import {ColumnsType} from "antd/es/table";
import {useHistory} from "react-router-dom";
import {stringifyAddress} from "../utils/utils";
import moment from "moment-timezone";
import {CloseOutlined} from "@ant-design/icons";
import {Address, Box, WPOrder} from "../models";
import {Subscription} from "recompose";
import {PROCESSING} from "../constants";

moment.tz.setDefault("Africa/Nouakchott");

export const STATUSES = ['processing', 'completed', 'cancelled', 'pending-payment', 'on-hold', 'refunded', 'failed', 'cancel-request', 'draft'];

const {Content} = Layout;
const {Text, Title} = Typography;

const width300 = {width: 300}

const OrdersPage: React.FC = () => {
    const history = useHistory();
    const [orders, setOrders] = useState<WPOrder[]>([]);
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [isLoading, setLoading] = useState(true)
    const [isAddressesLoading, setAddressesLoading] = useState(true)
    const [checkedStatusesList, setCheckedStatusesList] = React.useState<string[]>([PROCESSING]);
    const [searchName, setSearchName] = useState('')
    const [searchNumber, setSearchNumber] = useState('')
    const [isDeleteOrderConfirm, setDeleteOrderConfirm] = useState(false)
    const [isDeleting, setDeleting] = useState(false)
    const [targetOrder, setTargetOrder] = useState<WPOrder>()
    const [subscription, setSubscription] = useState<Subscription>()

    useEffect(() => {
        subscription && subscription.unsubscribe()
        const subs = DataStore.observeQuery(WPOrder, order => order.or(order =>
                checkedStatusesList.map(status => order.WPOrderStatus.eq(status))))
            .subscribe(msg => {
                if (msg.isSynced) {
                    console.log('synced: ', msg.items.length)
                    setOrders(msg.items)
                    isLoading && setLoading(false)
                } else {
                    console.log('not synced: ', msg.items.length)
                    if (msg.items.length > 0) {
                        setOrders(msg.items)
                        isLoading && setLoading(true)
                    }
                }
            });
        setSubscription(subs)
        return () => subs.unsubscribe()
    }, [checkedStatusesList]);

    useEffect(() => {
        const addressSubs = DataStore.observeQuery(Address).subscribe(msg => {
            if (msg.isSynced) {
                setAddresses(msg.items)
                isAddressesLoading && setAddressesLoading(false)
            }
        });
        return () => addressSubs.unsubscribe()
    }, [])

    const fullNameFilter = (
        <>
            <Typography>Full name</Typography>
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

    const orderNumberFilter = (
        <>
            <Typography>Num</Typography>
            <Input
                placeholder="Order #"
                value={searchNumber}
                onChange={e => {
                    const currValue = e.target.value;
                    setSearchNumber(currValue);
                    const filteredData = orders
                        .filter(order => order.WPOrderNumber?.toLowerCase().includes(currValue.toLowerCase()));
                }}
            />
        </>
    );

    // const deleteOrderWithBoxes = async (orderId?: string) => {
    //   setDeleting(true)
    //   if (orderId) {
    //     const boxes = await DataStore.query(Box, box => box.WPOrderID("eq", orderId))
    //     if (boxes) {
    //       for (const box of boxes) {
    //         await DataStore.delete(Box, box.id)
    //       }
    //     }
    //     await DataStore.delete(WPOrder, orderId);
    //   }
    //   setDeleting(false)
    //   setTargetOrder(undefined);
    //   setDeleteOrderConfirm(false);
    // }

    // const updateOrderStatuses = async () => {
    //     const API_KEY = 'ck_11f370a58f0a180d08a5bfdc5fde205c200c3f21';
    //     const API_SECRET = 'cs_198e26c66e91a1ac1fdc4d812173cf7dbefbd694';
    //     const ordersFromWP = await fetch(`https://dinenation.com/wp-json/wc/v3/orders?consumer_key=${API_KEY}&consumer_secret=${API_SECRET}&status=processing&per_page=100`)
    //     const ordersFromWPObj = await ordersFromWP.json()
    //     for (const order of orders) {
    //         if (!ordersFromWPObj.find((fromWP: any) => order.WPOrderNumber === fromWP.number)) {
    //             await DataStore.save(
    //                 WPOrder.copyOf(order, updated => {
    //                     updated.WPOrderStatus = 'completed'
    //                 })
    //             )
    //         }
    //     }
    // }

    const columns: ColumnsType<WPOrder> = [
        {
            title: orderNumberFilter,
            dataIndex: 'WPOrderNumber',
            width: 100,
        },
        {
            title: 'finalPrice',
            dataIndex: 'finalPrice',
            width: 100,
        },
        {
            title: fullNameFilter,
            dataIndex: 'customerName',
            width: 120,
            sorter: (a, b) => {
                if (a.customerName && b.customerName) {
                    if (a.customerName < b.customerName) {
                        return -1;
                    }
                    if (a.customerName > b.customerName) {
                        return 1;
                    }
                    return 0;
                } else {
                    return 0;
                }
            }
        },
        {
            title: 'Company',
            width: 80,
            render: (value, record, index) => {
                return record.companyName
            },
            sorter: (a, b) => {
                if (a.companyName && b.companyName) {
                    if (a.companyName < b.companyName) {
                        return -1;
                    }
                    if (a.companyName > b.companyName) {
                        return 1;
                    }
                    return 0;
                } else {
                    return 0;
                }
            }
        },
        // {
        //     title: 'Driver',
        //     dataIndex: 'driverName',
        // },
        {
            title: 'Details',
            render: (value, record, index) => {
                return <Button type={'primary'}
                               onClick={() => history.push("/orderDetails/" + record.id)}>Details</Button>
            }
        },
        {
            width: 100,
            title: 'Created',
            render: (value, record, index) => {
                return <Text style={{fontSize: 12}}>{moment.unix(record.createdAtWp).format("HH:mm DD-MM")}</Text>
            },
            sorter: (a, b) => {
                if (a.createdAtWp < b.createdAtWp) {
                    return -1;
                }
                if (a.createdAtWp > b.createdAtWp) {
                    return 1;
                }
                return 0;
            },
            defaultSortOrder: "descend"
        },
        {
            title: 'Address',
            render: (value, record, index) => {
                return <Select<string, { value: string; children: string }>
                    placeholder="Change address"
                    showSearch
                    disabled={isAddressesLoading}
                    style={width300}
                    filterOption={(input, option) => {
                        return option ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
                    }}
                    value={record.customerAddress}
                    onSelect={async (value, option) => {
                        await DataStore.save(
                            WPOrder.copyOf(record, updated => {
                                updated.addressID = value
                                updated.customerAddress = option.children
                            })
                        );
                    }}>
                    {addresses.map((address) => <Select.Option key={address.id}
                                                               value={address.id}>{stringifyAddress(address)}</Select.Option>)}
                </Select>
            },
        },
        // {
        //     width: 30,
        //     title: 'Actions',
        //     render: (value, record, index) => {
        //         return <Button shape="circle" icon={<CloseOutlined/>} danger type={'primary'} onClick={async () => {
        //             setTargetOrder(record);
        //             setDeleteOrderConfirm(true);
        //         }}/>
        //     }
        // }
    ];

    return (
        <>
            <Content>
                <Title>Orders ({orders.length})</Title>
                <Space>
                    {/*<Button onClick={async () => {*/}
                    {/*  for (const order of orders) {*/}
                    {/*    await deleteOrderWithBoxes(order.id);*/}
                    {/*  }*/}
                    {/*}} type="primary" htmlType="submit">*/}
                    {/*  Delete all orders*/}
                    {/*</Button>*/}
                    {/*<Button onClick={async () => {*/}
                    {/*  await fetch(' https://b4ty5ww646.execute-api.us-east-1.amazonaws.com/syncOrdersInGraphQl')*/}
                    {/*}} type="default">*/}
                    {/*  Sync orders from wp*/}
                    {/*</Button>*/}
                </Space>
                <Checkbox.Group options={Object.values(STATUSES)} value={checkedStatusesList}
                                onChange={(list) => setCheckedStatusesList(list as string[])}/>
                <Divider/>
                <Table
                    rowClassName={'tableRow'}
                    loading={isLoading}
                    size={"middle"}
                    rowKey="id"
                    columns={columns}
                    dataSource={orders.filter(order => order.customerName.toLowerCase().includes(searchName.toLowerCase()))
                        .filter(order => order.WPOrderNumber.toLowerCase().includes(searchNumber.toLowerCase()))}
                    expandable={{
                        expandedRowRender: record => {
                            return <Descriptions title="Order details">
                                <Descriptions.Item label="Full address">{record.customerAddress}</Descriptions.Item>
                                <Descriptions.Item label="Phone number">{record.customerPhoneNumber}</Descriptions.Item>
                                <Descriptions.Item label="Email">{record.customerEmail}</Descriptions.Item>
                                <Descriptions.Item label="Created">{record.createdAt}</Descriptions.Item>
                                <Descriptions.Item
                                    label="WP Status">{record.WPOrderStatus}</Descriptions.Item>
                                <Descriptions.Item label="Order total price">{record.finalPrice}</Descriptions.Item>
                            </Descriptions>
                        },
                        rowExpandable: record => true,
                    }}
                />
            </Content>
            {/*<Modal*/}
            {/*  title="Are sure you want to delete order?"*/}
            {/*  visible={isDeleteOrderConfirm}*/}
            {/*  onOk={() => deleteOrderWithBoxes(targetOrder?.id)}*/}
            {/*  confirmLoading={isDeleting}*/}
            {/*  onCancel={() => {*/}
            {/*    setTargetOrder(undefined);*/}
            {/*    setDeleteOrderConfirm(false);*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <Text>You are going to delete order <Text strong>{targetOrder?.WPOrderNumber}</Text></Text>*/}
            {/*</Modal>*/}
        </>
    )
}

export default OrdersPage;
