import React, {useEffect, useState} from 'react'

import {
    Button, Descriptions,
    Divider,
    Form,
    Input,
    InputNumber,
    Layout,
    List,
    Modal,
    Spin,
    Table, Typography,
} from 'antd';
import {ColumnsType} from "antd/es/table";
import {googleMapLink, stringifyAddress} from "../utils/utils";
import {Address, Coordinate, WPOrder} from '../models';
import {DataStore} from "aws-amplify";

const {Content} = Layout;
const {Title} = Typography;

const width300 = {width: 300}

interface LoadedAddress {
    coordinateId: string
    addresses: Address[]
}

const CoordinatesPage: React.FC = () => {
    const [coordinates, setCoordinates] = useState<Coordinate[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [isDeleteConfirmationShow, setDeleteConfirmationShow] = useState(false);
    const [isEditShow, setEditShow] = useState(false);
    const [editedName, setEditedName] = useState<string>();
    const [editedLatitude, setEditedLatitude] = useState<number>();
    const [editedLongitude, setEditedLongitude] = useState<number>();
    const [targetCoordinate, setTargetCoordinate] = useState<Coordinate>();
    const [name, setName] = useState('');
    const [latitude, setLatitude] = useState(0.000000);
    const [longitude, setLongitude] = useState(0.000000);
    const [isLoadingAddresses, setLoadingAddresses] = useState(false)
    const [loadedAddresses, setLoadedAddresses] = useState<LoadedAddress[]>([])


    useEffect(() => {
        const subs = DataStore.observeQuery(Coordinate)
            .subscribe(msg => {
                if (msg.isSynced) {
                    setCoordinates(msg.items)
                    isLoading && setLoading(false)
                } else {
                    if (msg.items.length > 0) {
                        setCoordinates(msg.items)
                        isLoading && setLoading(false)
                    }
                }
            });
        return () => subs.unsubscribe()
    }, []);

    const columns: ColumnsType<Coordinate> = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Link to map',
            render: (value, record, index) => {
                return <a target={"_blank"}
                          href={googleMapLink(record.latitude, record.longitude)}>{googleMapLink(record.latitude, record.longitude)}</a>
            },
        },
        {
            title: 'Edit',
            render: (value, record, index) => {
                return <Button type={'primary'} onClick={() => {
                    setEditShow(true);
                    setEditedName(record.name)
                    setEditedLatitude(record.latitude)
                    setEditedLongitude(record.longitude)
                    setTargetCoordinate(record);
                }}>Edit</Button>
            }
        },
        {
            title: 'Delete',
            render: (value, record, index) => {
                return <Button type={'primary'} onClick={() => {
                    setDeleteConfirmationShow(true);
                    setTargetCoordinate(record);
                }}>Delete</Button>
            }
        }
    ];

    const deleteCoordinate = async () => {
        if (targetCoordinate) {
            const addresses = await targetCoordinate.addresses.toArray()
            if (addresses) {
                for (const address of addresses) {
                    await DataStore.save(
                        Address.copyOf(address, updated => {
                            updated.coordinateID = undefined;
                        })
                    );
                    const orders = await address.WPOrders.toArray()
                    if (orders) {
                        for (const order of orders) {
                            await DataStore.save(
                                WPOrder.copyOf(order, updated => {
                                    updated.driverName = undefined;
                                })
                            );
                        }
                    }
                }
            }
            await DataStore.delete(targetCoordinate);
        }
        setTargetCoordinate(undefined);
        setDeleteConfirmationShow(false);
    };

    const editCoordinate = async () => {
        if (targetCoordinate && editedName) {
            await DataStore.save(
                Coordinate.copyOf(targetCoordinate, updated => {
                    updated.name = editedName;
                    updated.latitude = editedLatitude || 0.000000;
                    updated.longitude = editedLongitude || 0.000000;
                })
            );
            setTargetCoordinate(undefined);
            setEditShow(false);
        }
    };

    const loadAddresses = async (coordinate: Coordinate): Promise<void> => {
        setLoadingAddresses(true);
        const addresses = await coordinate.addresses.toArray()
        setLoadedAddresses([...loadedAddresses, {coordinateId: coordinate.id, addresses}])
        setLoadingAddresses(false);
    }

    // const renderMaps = () => {
    //   if (isLoading || coordinates.length === 0) return null;
    //   return <ManyPointsMapComponent
    //     // @ts-ignore
    //     center={{lat: 34.6671732, lng: 33.0132906}}
    //     zoom={12}
    //     places={coordinates}
    //   />
    // }

    if (isLoading) {
        return <Spin size="large"/>
    }

    return (
        <>
            <Modal
                title="Are sure you want to delete coordinate?"
                open={isDeleteConfirmationShow}
                onOk={deleteCoordinate}
                onCancel={() => {
                    setTargetCoordinate(undefined);
                    setDeleteConfirmationShow(false);
                }}
            >
                <p>You want to delete coordinate with name "{targetCoordinate?.name}"</p>
            </Modal>
            <Modal
                title="Edit coordinates"
                open={isEditShow}
                onOk={editCoordinate}
                onCancel={() => {
                    setTargetCoordinate(undefined);
                    setEditShow(false);
                }}
            >
                <Form
                    labelCol={{span: 4}}
                    wrapperCol={{span: 14}}
                    layout="horizontal"
                >
                    <Form.Item label="Edit name">
                        <Input style={width300} value={editedName} onChange={(e) => {
                            setEditedName(e.target.value)
                        }}/>
                    </Form.Item>
                    <Form.Item label="Map link">
                        <Input
                            style={width300}
                            onChange={(e) => {
                                if (e.target.value.includes('google.com')) {
                                    const latReg = new RegExp("@(-?[\\d.]*)")
                                    const latGroups = latReg.exec(e.target.value);
                                    if (latGroups) {
                                        setEditedLatitude(parseFloat(latGroups[1]))
                                    }
                                    const lonReg = new RegExp("@[-?\\d.]*,([-?\\d.]*)")
                                    const lonGroups = lonReg.exec(e.target.value);
                                    if (lonGroups) {
                                        setEditedLongitude(parseFloat(lonGroups[1]))
                                    }
                                } else if (e.target.value.includes('2gis')) {
                                    let allReg = new RegExp("\\/(\\d+[.]\\d+)%2C(\\d+.\\d+)[?]m=")
                                    const groups = allReg.exec(e.target.value);
                                    if (groups) {
                                        setEditedLatitude(parseFloat(groups[2]))
                                        setEditedLongitude(parseFloat(groups[1]))
                                    } else {
                                        let allReg = new RegExp("m=(\\d+[.]\\d+)%2C(\\d+.\\d+)")
                                        const groups = allReg.exec(e.target.value);
                                        if (groups) {
                                            setEditedLatitude(parseFloat(groups[2]))
                                            setEditedLongitude(parseFloat(groups[1]))
                                        }
                                    }
                                }
                            }}
                        />
                    </Form.Item>
                    <Form.Item label="latitude">
                        <InputNumber<number>
                            style={width300}
                            value={editedLatitude}
                            min={-50}
                            max={50}
                            step={0.000001}
                            onChange={(value) => setEditedLatitude(value || 0.000000)}
                        />
                    </Form.Item>
                    <Form.Item label="longitude">
                        <InputNumber<number>
                            style={width300}
                            value={editedLongitude}
                            min={-50}
                            max={50}
                            step={0.000001}
                            onChange={(value) => setEditedLongitude(value || 0.000000)}
                        />
                    </Form.Item>
                </Form>
            </Modal>
            <Content>
                <Title>Coordinates ({coordinates.length})</Title>
                <Form
                    labelCol={{span: 4}}
                    wrapperCol={{span: 14}}
                    layout="horizontal"
                >
                    <Form.Item label="Name" name="coordinatesName"
                               rules={[{required: true, message: 'Please enter coordinates name!'}]}>
                        <Input style={width300} placeholder={'Enter name'} value={name} onChange={(e) => {
                            setName(e.target.value)
                        }}/>
                    </Form.Item>
                    <Form.Item label="Map link">
                        <Input
                            style={width300}
                            onChange={(e) => {
                                if (e.target.value.includes('google.com')) {
                                    const latReg = new RegExp("@(-?[\\d.]*)")
                                    const latGroups = latReg.exec(e.target.value);
                                    if (latGroups) {
                                        setLatitude(parseFloat(latGroups[1]))
                                    }
                                    const lonReg = new RegExp("@[-?\\d.]*,([-?\\d.]*)")
                                    const lonGroups = lonReg.exec(e.target.value);
                                    if (lonGroups) {
                                        setLongitude(parseFloat(lonGroups[1]))
                                    }
                                } else if (e.target.value.includes('2gis')) {
                                    let allReg = new RegExp("\\/(\\d+[.]\\d+)%2C(\\d+.\\d+)[?]m=")
                                    const groups = allReg.exec(e.target.value);
                                    if (groups) {
                                        setLatitude(parseFloat(groups[2]))
                                        setLongitude(parseFloat(groups[1]))
                                    } else {
                                        let allReg = new RegExp("m=(\\d+[.]\\d+)%2C(\\d+.\\d+)")
                                        const groups = allReg.exec(e.target.value);
                                        if (groups) {
                                            setLatitude(parseFloat(groups[2]))
                                            setLongitude(parseFloat(groups[1]))
                                        }
                                    }
                                }
                            }}
                        />
                    </Form.Item>
                    <Form.Item label="latitude">
                        <InputNumber<number>
                            style={width300}
                            value={latitude}
                            min={-50}
                            max={50}
                            step={0.000001}
                            onChange={(value) => value && setLatitude(value)}
                            stringMode
                        />
                    </Form.Item>
                    <Form.Item label="longitude">
                        <InputNumber<number>
                            style={width300}
                            value={longitude}
                            min={-50}
                            max={50}
                            step={0.000001}
                            onChange={(value) => value && setLongitude(value)}
                            stringMode
                        />
                    </Form.Item>
                    <Form.Item wrapperCol={{offset: 4, span: 16}}>
                        <Button onClick={async () => {
                            if (name) {
                                await DataStore.save(
                                    new Coordinate({
                                        latitude,
                                        longitude,
                                        name,
                                    })
                                );
                            }
                        }} type="primary" htmlType="submit">
                            Create
                        </Button>
                    </Form.Item>
                </Form>
                <Table
                    size={"middle"}
                    rowKey="id"
                    loading={isLoading}
                    columns={columns}
                    dataSource={coordinates}
                    expandable={{
                        expandedRowRender: record => {
                            if (isLoadingAddresses) {
                                return <Spin size="large"/>
                            } else {
                                return <List
                                    size="small"
                                    dataSource={loadedAddresses.find(addresses => addresses.coordinateId === record.id)?.addresses || []}
                                    renderItem={item => <List.Item>{stringifyAddress(item)}</List.Item>}
                                />
                            }
                        },
                        rowExpandable: record => true,
                        onExpand: async (expanded, record) => {
                            if (expanded) {
                                await loadAddresses(record)
                            }
                        }
                    }}
                />
                <Divider/>
                {/*{renderMaps()}*/}
            </Content>
        </>
    )
}

export default CoordinatesPage

