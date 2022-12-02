import React, {useEffect, useState} from 'react'

import {Button, Col, Form, Input, Layout, Modal, Row, Select, Table, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {CloseCircleOutlined} from "@ant-design/icons";
import {Category, Department} from "../../API";
import {createCategory, createDepartment, fetchCategories, fetchDepartments} from "../../graphql/requests";

const {confirm, error} = Modal;

const {Content} = Layout;
const {Title} = Typography;
const width300 = {width: 300}

const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [searchName, setSearchName] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [name, setName] = useState('');

  const loadCategories = async () => {
    const fetchedCategories = await fetchCategories();
    console.log('categories:', categories);
    setCategories(fetchedCategories);
    setFilteredCategories(fetchedCategories);
  }

  const loadDepartments = async () => {
    const fetchedDepartments = await fetchDepartments();
    console.log('departments:', departments);
    setDepartments(fetchedDepartments);
  }

  useEffect(() => {
    loadCategories();
    loadDepartments();
  }, []);

  const nameFilter = (
    <Row>
      <Col className="gutter-row" span={6}>
        <Typography>Category name</Typography>
      </Col>
      <Col className="gutter-row" span={6}>
        <Input
          placeholder="Search Name"
          value={searchName}
          onChange={e => {
            const currValue = e.target.value;
            setSearchName(currValue);
            const filteredData = categories
              .filter(category => category.name.toLowerCase().includes(currValue.toLowerCase()));
            setFilteredCategories(filteredData);
          }}
        />
      </Col>
    </Row>
  );

  const columns: ColumnsType<Category> = [
    {
      title: nameFilter,
      dataIndex: 'name',
    },
    {
      title: 'Department',
      render: (value, record, index) => {
        return record.department.name;
      }
    },
    // {
    //   title: 'Delete',
    //   render: (value, record, index) => {
    //     return <Button danger type={'primary'} onClick={() => tryToDelete(record)}>Delete</Button>
    //   }
    // }
  ];

  // const tryToDelete = async (category: Category) => {
  //   const types = await DataStore.query(Type, type => type.categoryID("eq", category.id))
  //   if (types && types.length > 0) {
  //     error({
  //       title: 'You cannot delete this category!',
  //       content: `This category has ${types.length} types, remove types first.`,
  //     });
  //   } else {
  //     confirm({
  //       title: 'Are you sure delete this category?',
  //       icon: <CloseCircleOutlined style={{color: 'red'}}/>,
  //       content: `Delete category with name "${category.name}"`,
  //       okText: 'Yes',
  //       okType: 'danger',
  //       cancelText: 'No',
  //       async onOk() {
  //         await DataStore.delete(Category, category.id);
  //       },
  //       onCancel() {
  //         console.log('Cancel');
  //       },
  //     });
  //   }
  // }

  return (
    <Content>
      <Title>Categories ({categories.length})</Title>
      {/*<Button onClick={async () => {*/}
      {/*  for (const category of categories) {*/}
      {/*    await DataStore.delete(Category, category.id);*/}
      {/*  }*/}
      {/*}} type="primary" htmlType="submit">*/}
      {/*  Delete all categories*/}
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
        <Form.Item label="Department" name="department"
                   rules={[{required: true, message: 'Please enter department!'}]}>
          <Select<string, { value: string; children: string }>
            placeholder="Select department"
            showSearch
            filterOption={(input, option) =>
              option ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
            }
            value={departmentId}
            style={width300}
            onSelect={async (value) => {
              setDepartmentId(value)
            }}>
            {departments.map((department) => <Select.Option key={department.id}
                                                            value={department.id}>{department.name}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{offset: 4, span: 16}}>
          <Button onClick={async () => {
            if (name && departmentId) {
              await createCategory({
                categoryDepartmentId: departmentId,
                departmentID: departmentId,
                name: name
              })
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
        dataSource={filteredCategories}
      />
    </Content>
  )
}

export default CategoriesPage

