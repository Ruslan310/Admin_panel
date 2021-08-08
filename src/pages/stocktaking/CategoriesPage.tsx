import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {Button, Form, Input, Layout, Modal, Select, Table, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {Category, Department, Type} from "../../models";
import {CloseCircleOutlined} from "@ant-design/icons";

const {confirm, error} = Modal;

const {Content} = Layout;
const {Title} = Typography;
const width300 = {width: 300}

const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [departmentId, setDepartmentId] = useState('');
  const [name, setName] = useState('');

  const fetchCategories = async () => {
    const fetchedCategories = await DataStore.query(Category);
    console.log('categories:', categories);
    setCategories(fetchedCategories);
  }

  const fetchDepartments = async () => {
    const fetchedDepartments = await DataStore.query(Department);
    console.log('departments:', departments);
    setDepartments(fetchedDepartments);
  }

  useEffect(() => {
    fetchCategories();

    const categoriesSubscription = DataStore.observe(Category).subscribe(async (message) => {
      await fetchCategories();
    });

    fetchDepartments();

    const departmentsSubscription = DataStore.observe(Department).subscribe(async (message) => {
      await fetchDepartments();
    });

    return () => {
      categoriesSubscription.unsubscribe();
      departmentsSubscription.unsubscribe();
    }
  }, []);

  const columns: ColumnsType<Category> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Department',
      render: (value, record, index) => {
        return record.department.name;
      }
    },
    {
      title: 'Delete',
      render: (value, record, index) => {
        return <Button danger type={'primary'} onClick={() => tryToDelete(record)}>Delete</Button>
      }
    }
  ];

  const tryToDelete = async (category: Category) => {
    const types = await DataStore.query(Type, type => type.categoryID("eq", category.id))
    if (types && types.length > 0) {
      error({
        title: 'You cannot delete this category!',
        content: `This category has ${types.length} types, remove types first.`,
      });
    } else {
      confirm({
        title: 'Are you sure delete this category?',
        icon: <CloseCircleOutlined style={{color: 'red'}}/>,
        content: `Delete category with name "${category.name}"`,
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        async onOk() {
          await DataStore.delete(Category, category.id);
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }
  }

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
          <Select
            placeholder="Select department"
            showSearch
            filterOption={(input, option) =>
              option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
              const department = await DataStore.query(Department, departmentId);
              await DataStore.save(
                new Category({
                  name,
                  department,
                  departmentID: departmentId,
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
        dataSource={categories}
      />
    </Content>
  )
}

export default CategoriesPage

