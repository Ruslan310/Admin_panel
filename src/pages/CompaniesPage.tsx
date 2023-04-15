import React, {useEffect, useState} from 'react'
import {Button, Form, Input, Layout, Modal, Table, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {DataStore} from "aws-amplify";
import {Company} from "../models";
import {CloseOutlined} from "@ant-design/icons";
import {useForm} from "antd/es/form/Form";

const {Content} = Layout;
const width300 = {width: 300}
const {Title} = Typography;

const CompaniesPage: React.FC = () => {
  const [form] = useForm()
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isCompaniesLoading, setCompaniesLoading] = useState(true);
  const [searchName, setSearchName] = useState('')
  const [targetCompany, setTargetCompany] = useState<Company>();
  const [isDeleteConfirmationShow, setDeleteConfirmationShow] = useState(false);
  const [isEditShow, setEditShow] = useState(false);
  const [editedName, setEditedName] = useState<string>();


  useEffect(() => {
    const compSubs = DataStore.observeQuery(Company).subscribe(msg => {
      if (msg.items.length > 0) {
        setCompanies(msg.items)
        isCompaniesLoading && setCompaniesLoading(false)
      }
    });
    return () => compSubs.unsubscribe();
  }, [])

  const companyFilter = (
    <>
      <Typography>Last name</Typography>
      <Input
        placeholder="Search Name"
        value={searchName}
        onChange={e => {
          const currValue = e.target.value;
          setSearchName(currValue);
        }}
      />
    </>
  );

  const deleteCompany = async () => {
    if (targetCompany) {
      await DataStore.delete(targetCompany);
    }
    setTargetCompany(undefined);
    setDeleteConfirmationShow(false);
  };

  const editCompany = async () => {
    if (targetCompany && editedName) {
      await DataStore.save(
        Company.copyOf(targetCompany, updated => {
          updated.name = editedName;
        })
      );
      setTargetCompany(undefined);
      setEditShow(false);
    }
  };

  const columns: ColumnsType<Company> = [
    {
      title: companyFilter,
      dataIndex: 'name',
    },
    {
      title: 'Edit',
      render: (value, record, index) => {
        return <Button type={'primary'} onClick={() => {
          setEditShow(true);
          setEditedName(record.name)
          setTargetCompany(record);
        }}>Edit</Button>
      }
    },
    {
      width: 30,
      title: 'Delete',
      render: (value, record, index) => {
        return <Button shape="circle" icon={<CloseOutlined/>} danger type={'primary'} onClick={async () => {
          setDeleteConfirmationShow(true);
          setTargetCompany(record);
        }}/>
      }
    }
  ];


  return (
    <>
      <Modal
        title="Are sure you want to delete company?"
        open={isDeleteConfirmationShow}
        onOk={deleteCompany}
        onCancel={() => {
          setTargetCompany(undefined);
          setDeleteConfirmationShow(false);
        }}
      >
        <p>You want to delete company with name "{targetCompany?.name}"</p>
      </Modal>
      <Modal
        title="Edit company"
        open={isEditShow}
        onOk={editCompany}
        onCancel={() => {
          setTargetCompany(undefined);
          setEditShow(false);
        }}
      >
        <Form
          labelCol={{span: 4}}
          wrapperCol={{span: 14}}
          layout="horizontal"
        >
          <Form.Item label="Edit name">
            <Input style={width300} value={editedName} onChange={(e) => {
              setEditedName(e.target.value)
            }}/>
          </Form.Item>
        </Form>
      </Modal>
      <Content>
        <Title>Companies ({companies.length})</Title>
        <Form
          form={form}
          labelCol={{span: 4}}
          wrapperCol={{span: 14}}
          layout="horizontal"
          onFinish={async (values) => {
            if (values.name) {
              await DataStore.save(
                new Company({name: values.name})
              );
              form.resetFields()
            }
          }}
        >
          <Form.Item label="Company Name" name="name"
                     rules={[{required: true, message: 'Please enter Company Name!'}]}>
            <Input
              style={width300}
              placeholder={'Enter Company Name'}
              name='name'
            />
          </Form.Item>
          <Form.Item wrapperCol={{offset: 4, span: 16}}>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
        <Table
          size={"middle"}
          rowKey="id"
          columns={columns}
          dataSource={companies.filter(order => order.name?.toLowerCase().includes(searchName.toLowerCase()))}
        />
      </Content>
    </>
  )
}

export default CompaniesPage

