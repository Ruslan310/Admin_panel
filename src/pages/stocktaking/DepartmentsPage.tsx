import React, {useEffect, useState} from 'react'

import {Button, Col, Form, Input, Layout, Modal, Row, Table, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {CloseCircleOutlined} from "@ant-design/icons";
import {DataStore} from "aws-amplify";
import {Category, Department} from "../../models";

const {confirm, error} = Modal;

const {Content} = Layout;
const {Title} = Typography;
const width300 = {width: 300}

const DepartmentsPage: React.FC = () => {
    const [departments, setDepartments] = useState<Department[]>([]);
    const [name, setName] = useState('');
    const [searchName, setSearchName] = useState('');
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const subs = DataStore.observeQuery(Department)
            .subscribe(msg => {
                if (msg.isSynced) {
                    setDepartments(msg.items)
                    isLoading && setLoading(false)
                }
            });
        return () => subs.unsubscribe()
    }, []);

    const nameFilter = (
        <Row>
            <Col className="gutter-row" span={6}>
                <Typography>Department name</Typography>
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

    const columns: ColumnsType<Department> = [
        {
            title: nameFilter,
            dataIndex: 'name',
        },
        {
            title: 'Delete',
            render: (value, record) => {
                return <Button danger type={'primary'} onClick={() => tryToDelete(record)}>Delete</Button>
            }
        }
    ];

    const tryToDelete = async (department: Department) => {
        const categories = await DataStore.query(Category, category => category.departmentID.eq(department.id))
        if (categories && categories.length > 0) {
            error({
                title: 'You cannot delete this department!',
                content: `This department has ${categories.length} categories, remove categories first.`,
            });
        } else {
            confirm({
                title: 'Are you sure delete this department?',
                icon: <CloseCircleOutlined style={{color: 'red'}}/>,
                content: `Delete department with name "${department.name}"`,
                okText: 'Yes',
                okType: 'danger',
                cancelText: 'No',
                async onOk() {
                    await DataStore.delete(department);
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        }
    }

    return (
        <Content>
            <Title>Departments ({departments.length})</Title>
            {/*<Button onClick={async () => {*/}
            {/*  for (const department of departments) {*/}
            {/*    await DataStore.delete(Department, department.id);*/}
            {/*  }*/}
            {/*}} type="primary" htmlType="submit">*/}
            {/*  Delete all departments*/}
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
                <Form.Item wrapperCol={{offset: 4, span: 16}}>
                    <Button onClick={async () => {
                        if (name) {
                            await DataStore.save(
                                new Department({name})
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
                loading={isLoading}
                columns={columns}
                dataSource={departments.filter(department => department.name.toLowerCase().includes(searchName.toLowerCase()))}
            />
        </Content>
    )
}

export default DepartmentsPage

