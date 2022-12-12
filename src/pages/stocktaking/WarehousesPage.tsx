import React, {useEffect, useState} from 'react'

import {Button, Form, Input, Layout, Modal, Select, Table, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {stringifyAddress} from "../../utils/utils";
import {useHistory} from "react-router-dom";
import {Address, ProductAtWarehouse, Warehouse} from "../../models";
import {DataStore} from "aws-amplify";
import {CloseCircleOutlined} from "@ant-design/icons";

const {confirm, error} = Modal;

const {Content} = Layout;
const {Title} = Typography;
const width300 = {width: 300}

const WarehousesPage: React.FC = () => {
    const history = useHistory();
    const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
    const [name, setName] = useState('');
    const [addressId, setAddressId] = useState('');
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [isLoading, setLoading] = useState(true)
    const [isAddressesLoading, setAddressesLoading] = useState(true)

    useEffect(() => {
        const warehouseSubs = DataStore.observeQuery(Warehouse)
            .subscribe(msg => {
                if (msg.isSynced) {
                    setWarehouses(msg.items)
                    isLoading && setLoading(false)
                } else {
                    if (msg.items.length > 0) {
                        setWarehouses(msg.items)
                        isLoading && setLoading(false)
                    }
                }
            });

        const addrSubs = DataStore.observeQuery(Address)
            .subscribe(msg => {
                if (msg.isSynced) {
                    setAddresses(msg.items)
                    isAddressesLoading && setAddressesLoading(false)
                }
            });

        return () => {
            addrSubs.unsubscribe()
            warehouseSubs.unsubscribe()
        }
    }, []);

    const columns: ColumnsType<Warehouse> = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Address',
            render: (value, record, index) => {
                return stringifyAddress(addresses.find(addr => addr.id === record.warehouseAddressId))
            },
        },
        {
            title: 'Details',
            render: (value, record, index) => {
                return <Button type={'primary'}
                               onClick={() => history.push("/stocktaking/warehouseDetails/" + record.id)}>Details</Button>
            }
        },
        {
          title: 'Delete',
          render: (value, record, index) => {
            return <Button danger type={'primary'} onClick={() => tryToDelete(record)}>Delete</Button>
          }
        }
    ];

    const tryToDelete = async (warehouse: Warehouse) => {
      const warehouseProducts = (await DataStore.query(ProductAtWarehouse, paw => paw.warehouse.id.eq(warehouse.id)));
      if (warehouseProducts && warehouseProducts.length > 0) {
        error({
          title: 'You cannot delete this warehouse!',
          content: `This warehouse has ${warehouseProducts.length} products, remove products first.`,
        });
      } else {
        confirm({
          title: 'Are you sure delete this warehouse?',
          icon: <CloseCircleOutlined style={{color: 'red'}}/>,
          content: `Delete warehouse with name "${warehouse.name}"`,
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          async onOk() {
            await DataStore.delete(Warehouse, warehouse.id);
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
    }

    return (
        <Content>
            <Title>Warehouses ({warehouses.length})</Title>
            {/*<Button onClick={async () => {*/}
            {/*  for (const warehouse of warehouses) {*/}
            {/*    await DataStore.delete(Warehouse, warehouse.id);*/}
            {/*  }*/}
            {/*}} type="primary" htmlType="submit">*/}
            {/*  Delete all warehouses*/}
            {/*</Button>*/}
            <Form
                labelCol={{span: 4}}
                wrapperCol={{span: 14}}
                layout="horizontal"
            >
                <Form.Item label="Name" name="name"
                           rules={[{required: true, message: 'Please enter name!'}]}>
                    <Input
                        style={width300}
                        placeholder={'Enter address 1'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Address" name="address"
                           rules={[{required: true, message: 'Please enter address!'}]}>
                    <Select<string, { value: string; children: string }>
                        placeholder="Select address"
                        showSearch
                        disabled={isAddressesLoading}
                        filterOption={(input, option) =>
                            option ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
                        }
                        value={addressId}
                        style={width300}
                        onSelect={async (value) => {
                            setAddressId(value)
                        }}>
                        {addresses.map((address) => <Select.Option key={address.id}
                                                                   value={address.id}>{stringifyAddress(address)}</Select.Option>)}
                    </Select>
                </Form.Item>
                <Form.Item wrapperCol={{offset: 4, span: 16}}>
                    <Button onClick={async () => {
                        const address = addresses.find(addr => addr.id === addressId)
                        if (name && address) {
                            await DataStore.save(
                                new Warehouse({
                                    name,
                                    address,
                                    warehouseAddressId: addressId,
                                })
                            )
                        }
                    }} type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Form>
            <Table
                size={"middle"}
                rowKey="id"
                columns={columns}
                loading={isLoading}
                dataSource={warehouses}
            />
        </Content>
    )
}

export default WarehousesPage

