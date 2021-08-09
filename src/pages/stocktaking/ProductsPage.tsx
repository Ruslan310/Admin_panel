import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {Button, Form, Input, Layout, Modal, Select, Table, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {Category, Department, Product, Type} from "../../models";
import {CloseCircleOutlined} from "@ant-design/icons";

const {confirm} = Modal;

const {Content} = Layout;
const {Title} = Typography;
const width300 = {width: 300}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [types, setTypes] = useState<Type[]>([]);
  const [typeId, setTypeId] = useState();
  const [categoryId, setCategoryId] = useState();
  const [departmentId, setDepartmentId] = useState();
  const [name, setName] = useState('');
  const [measurement, setMeasurement] = useState('');
  const [form] = Form.useForm();

  const fetchProducts = async () => {
    const fetchedProducts = await DataStore.query(Product);
    setProducts(fetchedProducts);
  }

  const fetchDepartments = async () => {
    const fetchedDepartments = await DataStore.query(Department);
    setDepartments(fetchedDepartments);
  }

  const fetchCategories = async () => {
    const fetchedCategories = await DataStore.query(Category);
    setCategories(fetchedCategories);
  }

  const fetchTypes = async () => {
    const fetchedTypes = await DataStore.query(Type);
    setTypes(fetchedTypes);
  }

  useEffect(() => {
    fetchProducts();

    const productsSubscription = DataStore.observe(Product).subscribe(async (message) => {
      await fetchProducts();
    });

    fetchDepartments();
    fetchCategories();
    fetchTypes();

    const departmentsSubscription = DataStore.observe(Department).subscribe(async (message) => {
      await fetchDepartments();
    });

    const categoriesSubscription = DataStore.observe(Category).subscribe(async (message) => {
      await fetchCategories();
    });

    const typesSubscription = DataStore.observe(Type).subscribe(async (message) => {
      await fetchTypes();
    });

    return () => {
      productsSubscription.unsubscribe();
      departmentsSubscription.unsubscribe();
      categoriesSubscription.unsubscribe();
      typesSubscription.unsubscribe();
    }
  }, []);

  const columns: ColumnsType<Product> = [
    {
      title: 'Name',
      dataIndex: 'name',
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
          <Select
            placeholder="Select department"
            showSearch
            filterOption={(input, option) =>
              option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
          <Select
            disabled={!departmentId}
            placeholder="Select category"
            showSearch
            filterOption={(input, option) =>
              option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            value={categoryId}
            style={width300}
            onSelect={async (value) => {
              form.resetFields(['type']);
              setTypeId(undefined)
              setCategoryId(value)
            }}>
            {categories.filter(category => category.department.id === departmentId).map((category) => <Select.Option
              key={category.id}
              value={category.id}>{category.name}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item label="Type" name="type"
                   rules={[{required: true, message: 'Please enter type!'}]}>
          <Select
            disabled={!categoryId}
            placeholder="Select type"
            showSearch
            filterOption={(input, option) =>
              option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            value={typeId}
            style={width300}
            onSelect={async (value) => {
              setTypeId(value)
            }}>
            {types.filter(type => type.category.id === categoryId).map((type) => <Select.Option key={type.id}
                                                                                                value={type.id}>{type.name}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{offset: 4, span: 16}}>
          <Button onClick={async () => {
            if (name && measurement && typeId) {
              await DataStore.save(
                new Product({
                  name,
                  measurement,
                  typeID: typeId,
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
        columns={columns}
        dataSource={products}
      />
    </Content>
  )
}

export default ProductsPage

