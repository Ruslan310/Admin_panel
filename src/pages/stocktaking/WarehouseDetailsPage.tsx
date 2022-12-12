import React, {useEffect, useState} from 'react'

import {ColumnsType} from "antd/es/table";
import {useHistory, useParams} from 'react-router-dom';
import {Button, Col, Form, Input, InputNumber, Layout, Modal, PageHeader, Row, Select, Table, Typography} from "antd";
import {CloseCircleOutlined} from "@ant-design/icons";
import {MAX_QUANTITY} from "../../utils/utils";
import {Category, Department, Product, ProductAtWarehouse, Warehouse} from "../../models";
import {DataStore} from "aws-amplify";

const {confirm, error} = Modal;

const {Content} = Layout;
const width300 = {width: 300}

const WarehouseDetailsPage: React.FC = () => {
    const {warehouseId} = useParams<{
        warehouseId: string
    }>();
    const [warehouseProducts, setWarehouseProducts] = useState<ProductAtWarehouse[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [productId, setProductId] = useState('');
    const [searchName, setSearchName] = useState('');
    const [warehouse, setWarehouse] = useState<Warehouse>();
    const [isLoading, setLoading] = useState(true)
    const [isProductsLoading, setProductsLoading] = useState(true)
    const [quantity, setQuantity] = useState<number>(0)
    const [minQuantity, setMinQuantity] = useState<number>(0)
    const [maxQuantity, setMaxQuantity] = useState<number>(MAX_QUANTITY)
    const history = useHistory();

    useEffect(() => {
        const warehouseProductsSubs = DataStore.observeQuery(ProductAtWarehouse, paw => paw.productAtWarehouseWarehouseId.eq(warehouseId))
            .subscribe(msg => {
                if (msg.isSynced) {
                    setWarehouseProducts(msg.items)
                    isLoading && setLoading(false)
                } else {
                    if (msg.items.length > 0) {
                        setWarehouseProducts(msg.items)
                        isLoading && setLoading(false)
                    }
                }
            });

        const productsSubs = DataStore.observeQuery(Product)
            .subscribe(msg => {
                if (msg.isSynced) {
                    setProducts(msg.items)
                    isProductsLoading && setProductsLoading(false)
                } else {
                    if (msg.items.length > 0) {
                        setProducts(msg.items)
                        isProductsLoading && setProductsLoading(false)
                    }
                }
            });

        const warehouseSubs = DataStore.observeQuery(Warehouse, warehouse => warehouse.id.eq(warehouseId))
            .subscribe(msg => {
                if (msg.isSynced) {
                    setWarehouse(msg.items[0])
                }
            });

        return () => {
            warehouseProductsSubs.unsubscribe()
            warehouseSubs.unsubscribe()
            productsSubs.unsubscribe()
        }
    }, []);

    const nameFilter = (
        <Row>
            <Col className="gutter-row" span={6}>
                <Typography>Product name</Typography>
            </Col>
            <Col className="gutter-row" span={6}>
                <Input
                    placeholder="Search Name"
                    value={searchName}
                    onChange={e => {
                        const currValue = e.target.value;
                        setSearchName(currValue);
                    }}
                />
            </Col>
        </Row>
    );

    const boxesColumns: ColumnsType<ProductAtWarehouse> = [
        {
            title: nameFilter,
            render: (value, record, index) => {
                return products.find(prod => prod.id === record.productAtWarehouseProductId)?.name
            },
        },
        {
            title: 'Quantity',
            render: (value, record, index) => {
                return record.quantity
            },
            sorter: (a, b) => {
                if (a.quantity < b.quantity) {
                    return -1;
                }
                if (a.quantity > b.quantity) {
                    return 1;
                }
                return 0;
            }
        },
        {
            title: 'Min',
            dataIndex: 'minQuantity'
        },
        {
            title: 'Max',
            dataIndex: 'maxQuantity'
        },
        {
            title: 'Delete',
            render: (value, record, index) => {
                return <Button danger type={'primary'} onClick={() => tryToDelete(record)}>Delete</Button>
            }
        }
    ];

    const tryToDelete = async (productAtWarehouse: ProductAtWarehouse) => {
        confirm({
            title: 'Are you sure delete this product for this warehouse?',
            icon: <CloseCircleOutlined style={{color: 'red'}}/>,
            content: `Delete product with name "${products.find(prod => prod.id === productAtWarehouse.productAtWarehouseProductId)?.name}" from warehouse`,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            async onOk() {
                await DataStore.delete(ProductAtWarehouse, productAtWarehouse.id);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    return (
        <Content>
            <PageHeader
                className="site-page-header"
                onBack={() => history.goBack()}
                title={`"${warehouse?.name}" products`}
            />
            <Form
                labelCol={{span: 4}}
                wrapperCol={{span: 14}}
                layout="horizontal"
            >
                <Form.Item label="Product" name="product"
                           rules={[{required: true, message: 'Please enter product!'}]}>
                    <Select<string, { value: string; children: string }>
                        placeholder="Select product"
                        showSearch
                        disabled={isProductsLoading}
                        filterOption={(input, option) =>
                            option ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
                        }
                        value={productId}
                        style={width300}
                        onSelect={async (value) => {
                            setProductId(value)
                        }}>
                        {products.map((product) => <Select.Option key={product.id}
                                                                  value={product.id}>{product.name}</Select.Option>)}
                    </Select>
                </Form.Item>
                <Form.Item label="Quantity" name="quantity" initialValue={0}>
                    <InputNumber<number>
                        style={width300}
                        placeholder={'Enter quantity'}
                        value={quantity}
                        onChange={(e) => e && setQuantity(e)}
                    />
                </Form.Item>
                <Form.Item label="Min quantity" name="minQuantity" initialValue={0}>
                    <InputNumber<number>
                        style={width300}
                        placeholder={'Enter minimum quantity'}
                        value={minQuantity}
                        onChange={(e) => e && setMinQuantity(e)}
                    />
                </Form.Item>
                <Form.Item label="Max quantity" name="maxQuantity" initialValue={MAX_QUANTITY}>
                    <InputNumber<number>
                        style={width300}
                        placeholder={'Enter maximum quantity'}
                        value={maxQuantity}
                        onChange={(e) => e && setMaxQuantity(e)}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{offset: 4, span: 16}}>
                    <Button onClick={async () => {
                        const product = products.find(product => product.id === productId)
                        if (product && warehouse) {
                            await DataStore.save(
                                new ProductAtWarehouse({
                                    product,
                                    quantity,
                                    minQuantity,
                                    maxQuantity,
                                    warehouse,
                                    productAtWarehouseProductId: productId,
                                    productAtWarehouseWarehouseId: warehouseId,
                                })
                            );
                        }
                    }} type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Form>
            <Table
                loading={isLoading || isProductsLoading}
                size={"middle"}
                rowKey="id"
                columns={boxesColumns}
                dataSource={warehouseProducts
                    .filter(warehouseProduct =>
                        products.find(prod => prod.id === warehouseProduct.productAtWarehouseProductId)?.name.toLowerCase().includes(searchName.toLowerCase()))
                }
            />
        </Content>
    )
}

export default WarehouseDetailsPage;
