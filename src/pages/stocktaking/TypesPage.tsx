import React, {useEffect, useState} from 'react'

import {Button, Col, Form, Input, Layout, Modal, Row, Select, Table, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {CloseCircleOutlined} from "@ant-design/icons";
import {Category, Type} from "../../API";
import {fetchCategories, fetchTypes} from "../../graphql/requests";

const {confirm, error} = Modal;

const {Content} = Layout;
const {Title} = Typography;
const width300 = {width: 300}

const TypesPage: React.FC = () => {
  const [types, setTypes] = useState<Type[]>([]);
  const [filteredTypes, setFilteredTypes] = useState<Type[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryId, setCategoryId] = useState('');
  const [name, setName] = useState('');
  const [searchName, setSearchName] = useState('');

  const loadTypes = async () => {
    const fetchedTypes = await fetchTypes();
    setTypes(fetchedTypes);
    setFilteredTypes(fetchedTypes);
  }

  const loadCategories = async () => {
    const fetchedCategories = await fetchCategories();
    setCategories(fetchedCategories);
  }

  useEffect(() => {
    loadTypes();
    loadCategories();
  }, []);

  const nameFilter = (
    <Row>
      <Col className="gutter-row" span={6}>
        <Typography>Type name</Typography>
      </Col>
      <Col className="gutter-row" span={6}>
        <Input
          placeholder="Search Name"
          value={searchName}
          onChange={e => {
            const currValue = e.target.value;
            setSearchName(currValue);
            const filteredData = types
              .filter(type => type.name.toLowerCase().includes(currValue.toLowerCase()));
            setFilteredTypes(filteredData);
          }}
        />
      </Col>
    </Row>
  );

  const columns: ColumnsType<Type> = [
    {
      title: nameFilter,
      dataIndex: 'name',
    },
    {
      title: 'Category',
      render: (value, record, index) => {
        return record.category.name;
      }
    },
    // {
    //   title: 'Delete',
    //   render: (value, record, index) => {
    //     return <Button danger type={'primary'} onClick={() => tryToDelete(record)}>Delete</Button>
    //   }
    // }
  ];

  // const tryToDelete = async (type: Type) => {
  //   const products = await DataStore.query(Product, product => product.typeID("eq", type.id))
  //   if (products && products.length > 0) {
  //     error({
  //       title: 'You cannot delete this type!',
  //       content: `This type has ${products.length} products, remove products first.`,
  //     });
  //   } else {
  //     confirm({
  //       title: 'Are you sure delete this type?',
  //       icon: <CloseCircleOutlined style={{color: 'red'}}/>,
  //       content: `Delete type with name "${type.name}"`,
  //       okText: 'Yes',
  //       okType: 'danger',
  //       cancelText: 'No',
  //       async onOk() {
  //         await DataStore.delete(Type, type.id);
  //       },
  //       onCancel() {
  //         console.log('Cancel');
  //       },
  //     });
  //   }
  // }

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
          <Select<string, { value: string; children: string }>
            placeholder="Select category"
            showSearch
            filterOption={(input, option) =>
              option ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
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
              console.log('create type')
              // await DataStore.save(
              //   new Type({
              //     name,
              //     category,
              //     categoryID: categoryId,
              //   })
              // );
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
        dataSource={filteredTypes}
      />
    </Content>
  )
}

export default TypesPage

