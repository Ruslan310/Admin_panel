import React, {useEffect, useState} from 'react'

import {Button, Col, Form, Input, Layout, Modal, Row, Select, Table, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {CloseCircleOutlined} from "@ant-design/icons";
import {DataStore} from "aws-amplify";
import {Category, Department, Product, ProductAtWarehouse, ProductFromSupplier, Type} from "../../models";

const {confirm, error} = Modal;

const {Content} = Layout;
const {Title} = Typography;
const width300 = {width: 300}

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [departments, setDepartments] = useState<Department[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [types, setTypes] = useState<Type[]>([]);
    const [typeId, setTypeId] = useState<string>();
    const [categoryId, setCategoryId] = useState<string>();
    const [departmentId, setDepartmentId] = useState<string>();
    const [name, setName] = useState('');
    const [measurement, setMeasurement] = useState('');
    const [searchName, setSearchName] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [isTypesLoading, setTypesLoading] = useState(true);
    const [isCategoriesLoading, setCategoriesLoading] = useState(true);
    const [isDepartmentsLoading, setDepartmentsLoading] = useState(true);
    const [form] = Form.useForm();

    useEffect(() => {
        const productsSubs = DataStore.observeQuery(Product)
            .subscribe(msg => {
                if (msg.isSynced) {
                    setProducts(msg.items)
                    isLoading && setLoading(false)
                } else {
                    if (msg.items.length > 0) {
                        setProducts(msg.items)
                        isLoading && setLoading(false)
                    }
                }
            });

        const categoriesSubs = DataStore.observeQuery(Category)
            .subscribe(msg => {
                if (msg.isSynced) {
                    setCategories(msg.items)
                    isCategoriesLoading && setCategoriesLoading(false)
                }
            });

        const depsSubs = DataStore.observeQuery(Department)
            .subscribe(msg => {
                if (msg.isSynced) {
                    setDepartments(msg.items)
                    isDepartmentsLoading && setDepartmentsLoading(false)
                }
            });

        const typesSubs = DataStore.observeQuery(Type)
            .subscribe(msg => {
                if (msg.isSynced) {
                    setTypes(msg.items)
                    isTypesLoading && setTypesLoading(false)
                }
            });

        () => {
            categoriesSubs.unsubscribe()
            productsSubs.unsubscribe()
            depsSubs.unsubscribe()
            typesSubs.unsubscribe()
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

    const columns: ColumnsType<Product> = [
        {
            title: nameFilter,
            dataIndex: 'name',
            sorter: (a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            }
        },
        {
            title: 'Measurement',
            dataIndex: 'measurement',
        },
        {
            title: 'Type',
            render: (value, record, index) => {
                const type = types.find(type => type.id === record.typeID);
                const category = categories.find(category => category.id === type?.categoryID);
                const department = departments.find(department => department.id === category?.departmentID);
                return `${department?.name} => ${category?.name} => ${type?.name}`
            }
        },
        {
          title: 'Delete',
          render: (value, record, index) => {
            return <Button danger type={'primary'} onClick={() => tryToDelete(record)}>Delete</Button>
          }
        }
    ];

    const tryToDelete = async (product: Product) => {
      const productsFromSupplier = await DataStore.query(ProductFromSupplier, pfs => pfs.productFromSupplierProductId.eq(product.id));
      const productsAtWarehouse = await DataStore.query(ProductAtWarehouse, paw => paw.productAtWarehouseProductId.eq(product.id));
      const componentProducts = await product.components.toArray();
      if (productsFromSupplier && productsFromSupplier.length > 0) {
        error({
          title: 'You cannot delete this product!',
          content: `This product has ${productsFromSupplier.length} products for suppliers, remove products from suppliers first.`,
        });
      } else if (componentProducts && componentProducts.length > 0) {
        error({
          title: 'You cannot delete this product!',
          content: `This product has ${componentProducts.length} products in components, remove products from components first.`,
        });
      } else if (productsAtWarehouse && productsAtWarehouse.length > 0) {
        error({
          title: 'You cannot delete this product!',
          content: `This product has ${productsAtWarehouse.length} products at warehouses, remove products from warehouses first.`,
        });
      } else {
        confirm({
          title: 'Are you sure delete this product?',
          icon: <CloseCircleOutlined style={{color: 'red'}}/>,
          content: `Delete product with name "${product.name}"`,
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          async onOk() {
            await DataStore.delete(Product, product.id);
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
    }

    return (
        <Content>
            <Title>Products ({products.length})</Title>
            {/*<Button onClick={async () => {*/}
            {/*  for (const product of products) {*/}
            {/*    await DataStore.delete(Product, product.id);*/}
            {/*  }*/}
            {/*}} type="primary" htmlType="submit">*/}
            {/*  Delete all products*/}
            {/*</Button>*/}
            <Form
                labelCol={{span: 4}}
                wrapperCol={{span: 14}}
                layout="horizontal"
                form={form}
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
                <Form.Item label="Measurement" name="measurement"
                           rules={[{required: true, message: 'Please enter measurement!'}]}>
                    <Input
                        style={width300}
                        placeholder={'Enter measurement'}
                        value={measurement}
                        onChange={(e) => setMeasurement(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Department" name="department"
                           rules={[{required: true, message: 'Please enter department!'}]}>
                    <Select<string, { value: string; children: string }>
                        placeholder="Select department"
                        showSearch
                        disabled={isDepartmentsLoading}
                        filterOption={(input, option) =>
                            option ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
                        }
                        value={departmentId}
                        style={width300}
                        onSelect={async (value) => {
                            form.resetFields(['category', 'type']);
                            setTypeId(undefined)
                            setCategoryId(undefined)
                            setDepartmentId(value)
                        }}>
                        {departments.map((department) => <Select.Option key={department.id}
                                                                        value={department.id}>{department.name}</Select.Option>)}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Category" name="category"
                    rules={[{required: true, message: 'Please enter category!'}]}>
                    <Select<string, { value: string; children: string }>
                        disabled={!departmentId || isCategoriesLoading}
                        placeholder="Select category"
                        showSearch
                        filterOption={(input, option) =>
                            option ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
                        }
                        value={categoryId}
                        style={width300}
                        onSelect={async (value) => {
                            form.resetFields(['type']);
                            setTypeId(undefined)
                            setCategoryId(value)
                        }}>
                        {categories.filter(category => category.departmentID === departmentId).map((category) =>
                            <Select.Option
                                key={category.id}
                                value={category.id}>{category.name}</Select.Option>)}
                    </Select>
                </Form.Item>
                <Form.Item label="Type" name="type"
                           rules={[{required: true, message: 'Please enter type!'}]}>
                    <Select<string, { value: string; children: string }>
                        disabled={!categoryId || isTypesLoading}
                        placeholder="Select type"
                        showSearch
                        filterOption={(input, option) =>
                            option ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
                        }
                        value={typeId}
                        style={width300}
                        onSelect={async (value) => {
                            setTypeId(value)
                        }}>
                        {types.filter(type => type.categoryID === categoryId).map((type) => <Select.Option
                            key={type.id}
                            value={type.id}>{type.name}</Select.Option>)}
                    </Select>
                </Form.Item>
                <Form.Item wrapperCol={{offset: 4, span: 16}}>
                    <Button onClick={async () => {
                        const type = types.find(type => type.id === typeId)
                        if (name && measurement && type) {
                            await DataStore.save(
                                new Product({
                                    name,
                                    measurement,
                                    productType: type,
                                    typeID: typeId
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
                dataSource={products.filter(product => product.name.toLowerCase().includes(searchName.toLowerCase()))}
            />
        </Content>
    )
}

export default ProductsPage

