import React, {useEffect, useState} from 'react'

import {Button, Form, Input, Layout, Modal, Select, Table, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {CloseCircleOutlined} from "@ant-design/icons";
import {stringifyAddress} from "../../utils/utils";
import {useHistory} from "react-router-dom";
import {DataStore} from "aws-amplify";
import {Address, ProductFromSupplier, Supplier} from "../../models";

const {confirm, error} = Modal;

const {Content} = Layout;
const {Title} = Typography;
const width300 = {width: 300}

const SuppliersPage: React.FC = () => {
    const history = useHistory();
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [addressId, setAddressId] = useState('');
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [isLoading, setLoading] = useState(true)
    const [isAddressesLoading, setAddressesLoading] = useState(true)

    useEffect(() => {
        const suppliersSubs = DataStore.observeQuery(Supplier)
            .subscribe(msg => {
                if (msg.isSynced) {
                    setSuppliers(msg.items)
                    isLoading && setLoading(false)
                } else {
                    if (msg.items.length > 0) {
                        setSuppliers(msg.items)
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

        () => {
            addrSubs.unsubscribe()
            suppliersSubs.unsubscribe()
        }
    }, []);

    const columns: ColumnsType<Supplier> = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone number',
            dataIndex: 'phoneNumber',
        },
        {
            title: 'Details',
            render: (value, record, index) => {
                return <Button type={'primary'}
                               onClick={() => history.push("/stocktaking/supplierDetails/" + record.id)}>Details</Button>
            }
        },
        {
            title: 'Delete',
            render: (value, record, index) => {
                return <Button danger type={'primary'} onClick={() => tryToDelete(record)}>Delete</Button>
            }
        }
    ];

    const tryToDelete = async (supplier: Supplier) => {
        const supplierProducts = await DataStore.query(ProductFromSupplier, pfs => pfs.productFromSupplierSupplierId.eq(supplier.id));
        if (supplierProducts && supplierProducts.length > 0) {
            error({
                title: 'You cannot delete this supplier!',
                content: `This supplier has ${supplierProducts.length} products, remove products first.`,
            });
        } else {
            confirm({
                title: 'Are you sure delete this supplier?',
                icon: <CloseCircleOutlined style={{color: 'red'}}/>,
                content: `Delete supplier with name "${supplier.name}"`,
                okText: 'Yes',
                okType: 'danger',
                cancelText: 'No',
                async onOk() {
                    await DataStore.delete(Supplier, supplier.id);
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        }
    }

    return (
        <Content>
            <Title>Suppliers ({suppliers.length})</Title>
            {/*<Button onClick={async () => {*/}
            {/*  for (const supplier of suppliers) {*/}
            {/*    await DataStore.delete(Supplier, supplier.id);*/}
            {/*  }*/}
            {/*}} type="primary" htmlType="submit">*/}
            {/*  Delete all suppliers*/}
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
                        placeholder={'Enter name'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input
                        style={width300}
                        type={'email'}
                        placeholder={'Enter email'}
                        value={name}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Phone number" name="phoneNumber">
                    <Input
                        type={'tel'}
                        style={width300}
                        placeholder={'Enter phone number'}
                        value={name}
                        onChange={(e) => setPhoneNumber(e.target.value)}
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
                                new Supplier({
                                    name,
                                    email,
                                    phoneNumber,
                                    supplierAddressId: addressId,
                                    address,
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
                dataSource={suppliers}
            />
        </Content>
    )
}

export default SuppliersPage

