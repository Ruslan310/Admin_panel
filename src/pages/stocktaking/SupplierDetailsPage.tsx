import React, {useEffect, useState} from 'react'

import {ColumnsType} from "antd/es/table";
import {useHistory, useParams} from 'react-router-dom';
import {Button, Col, Form, Input, InputNumber, Layout, Modal, PageHeader, Row, Select, Table, Typography} from "antd";
import {CloseCircleOutlined} from "@ant-design/icons";
import {DataStore} from "aws-amplify";
import {Product, ProductFromSupplier, Supplier} from "../../models";

const {confirm, error} = Modal;

const {Content} = Layout;
const width300 = {width: 300}

const SupplierDetailsPage: React.FC = () => {
    const {supplierId} = useParams<{
        supplierId: string
    }>();
    const [supplierProducts, setSupplierProducts] = useState<ProductFromSupplier[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [productId, setProductId] = useState('');
    const [searchName, setSearchName] = useState('');
    const [supplier, setSupplier] = useState<Supplier>();
    const [isLoading, setLoading] = useState(true)
    const [isProductsLoading, setProductsLoading] = useState(true)
    const [quality, setQuality] = useState<number>()
    const [price, setPrice] = useState<number>();
    const history = useHistory();

    useEffect(() => {
        const supplierProductsSubs = DataStore.observeQuery(ProductFromSupplier, pfs => pfs.productFromSupplierSupplierId.eq(supplierId))
            .subscribe(msg => {
                if (msg.isSynced) {
                    setSupplierProducts(msg.items)
                    isLoading && setLoading(false)
                } else {
                    if (msg.items.length > 0) {
                        setSupplierProducts(msg.items)
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

        const supplierSubs = DataStore.observeQuery(Supplier, warehouse => warehouse.id.eq(supplierId))
            .subscribe(msg => {
                if (msg.isSynced) {
                    setSupplier(msg.items[0])
                }
            });

        return () => {
            supplierProductsSubs.unsubscribe()
            supplierSubs.unsubscribe()
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

    const boxesColumns: ColumnsType<ProductFromSupplier> = [
        {
            title: nameFilter,
            render: (value, record, index) => {
                return products.find(prod => prod.id === record.productFromSupplierProductId)?.name
            },
        },
        {
            title: 'Price',
            render: (value, record, index) => {
                return record.price
            },
            sorter: (a, b) => {
                if (a.price < b.price) {
                    return -1;
                }
                if (a.price > b.price) {
                    return 1;
                }
                return 0;
            }
        },
        {
            title: 'Quality',
            render: (value, record, index) => {
                return record.quality
            },
            sorter: (a, b) => {
                if (!a.quality || !b.quality) return -1;
                if (a.quality < b.quality) {
                    return -1;
                }
                if (a.quality > b.quality) {
                    return 1;
                }
                return 0;
            }
        },
        {
            title: 'Delete',
            render: (value, record, index) => {
                return <Button danger type={'primary'} onClick={() => tryToDelete(record)}>Delete</Button>
            }
        }
    ];

    const tryToDelete = async (productFromSupplier: ProductFromSupplier) => {
        confirm({
            title: 'Are you sure delete this product for this supplier?',
            icon: <CloseCircleOutlined style={{color: 'red'}}/>,
            content: `Delete product with name "${products.find(prod => productFromSupplier.productFromSupplierProductId === prod.id)?.name}" from supplier`,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            async onOk() {
                await DataStore.delete(productFromSupplier);
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
                title={`"${supplier?.name}" products`}
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
                <Form.Item label="Price" name="price"
                           rules={[{required: true, message: 'Please enter price!'}]}>
                    <InputNumber<number>
                        style={width300}
                        placeholder={'Enter price'}
                        value={price}
                        onChange={(e) => e && setPrice(e)}
                    />
                </Form.Item>
                <Form.Item label="Quality" name="quality">
                    <InputNumber<number>
                        style={width300}
                        placeholder={'Enter quality'}
                        value={quality}
                        onChange={(e) => e && setQuality(e)}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{offset: 4, span: 16}}>
                    <Button onClick={async () => {
                        const product = products.find(prod => prod.id === productId)
                        if (product && price && supplier) {
                            console.log('create')
                            const created = await DataStore.save(
                                new ProductFromSupplier({
                                    product,
                                    quality,
                                    price,
                                    supplier,
                                    productFromSupplierSupplierId: supplierId,
                                    productFromSupplierProductId: productId,
                                })
                            );
                            console.log(created)
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
                dataSource={supplierProducts
                    .filter(supProduct => products.find(prod => supProduct.productFromSupplierProductId === prod.id)?.name.toLowerCase().includes(searchName.toLowerCase()))
                }
            />
        </Content>
    )
}

export default SupplierDetailsPage;
