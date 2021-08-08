import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {Button, Form, Input, Layout, Modal, Select, Table, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {Type, Category, Product} from "../../models";
import {CloseCircleOutlined} from "@ant-design/icons";

const {confirm, error} = Modal;

const {Content} = Layout;
const {Title} = Typography;
const width300 = {width: 300}

const TypesPage: React.FC = () => {
  const [types, setTypes] = useState<Type[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryId, setCategoryId] = useState('');
  const [name, setName] = useState('');

  const fetchTypes = async () => {
    const fetchedTypes = await DataStore.query(Type);
    console.log('types:', types);
    setTypes(fetchedTypes);
  }

  const fetchCategories = async () => {
    const fetchedCategories = await DataStore.query(Category);
    console.log('categories:', categories);
    setCategories(fetchedCategories);
  }

  useEffect(() => {
    fetchTypes();

    const typesSubscription = DataStore.observe(Type).subscribe(async (message) => {
      await fetchTypes();
    });

    fetchCategories();

    const categoriesSubscription = DataStore.observe(Category).subscribe(async (message) => {
      await fetchCategories();
    });

    return () => {
      typesSubscription.unsubscribe();
      categoriesSubscription.unsubscribe();
    }
  }, []);

  const columns: ColumnsType<Type> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Category',
      render: (value, record, index) => {
        return record.category.name;
      }
    },
    {
      title: 'Delete',
      render: (value, record, index) => {
        return <Button danger type={'primary'} onClick={() => tryToDelete(record)}>Delete</Button>
      }
    }
  ];

  const tryToDelete = async (type: Type) => {
    const products = await DataStore.query(Product, product => product.typeID("eq", type.id))
    if (products && products.length > 0) {
      error({
        title: 'You cannot delete this type!',
        content: `This type has ${products.length} products, remove products first.`,
      });
    } else {
      confirm({
        title: 'Are you sure delete this type?',
        icon: <CloseCircleOutlined style={{color: 'red'}}/>,
        content: `Delete type with name "${type.name}"`,
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        async onOk() {
          await DataStore.delete(Type, type.id);
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }
  }

  return (
    <Content>
      <Title>Types ({types.length})</Title>
      {/*<Button onClick={async () => {*/}
      {/*  for (const type of types) {*/}
      {/*    await DataStore.delete(Type, type.id);*/}
      {/*  }*/}
      {/*}} type="primary" htmlType="submit">*/}
      {/*  Delete all types*/}
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
        <Form.Item label="Category" name="category"
                   rules={[{required: true, message: 'Please enter category!'}]}>
          <Select
            placeholder="Select category"
            showSearch
            filterOption={(input, option) =>
              option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            value={categoryId}
            style={width300}
            onSelect={async (value) => {
              setCategoryId(value)
            }}>
            {categories.map((category) => <Select.Option key={category.id}
                                                            value={category.id}>{category.name}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{offset: 4, span: 16}}>
          <Button onClick={async () => {
            if (name && categoryId) {
              const category = await DataStore.query(Category, categoryId);
              await DataStore.save(
                new Type({
                  name,
                  category,
                  categoryID: categoryId,
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
        dataSource={types}
      />
    </Content>
  )
}

export default TypesPage

