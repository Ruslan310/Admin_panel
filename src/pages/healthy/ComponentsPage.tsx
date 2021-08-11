import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {Button, Col, Form, Input, InputNumber, Layout, Modal, Row, Select, Table, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {Component, ComponentType, DishComponent, PackageType,} from "../../models";
import {CloseCircleOutlined} from "@ant-design/icons";

const {confirm, error} = Modal;

const {Content} = Layout;
const {Title} = Typography;
const { TextArea } = Input;
const width300 = {width: 300}

const ComponentsPage: React.FC = () => {
  const [components, setComponents] = useState<Component[]>([]);
  const [filteredComponents, setFilteredComponents] = useState<Component[]>([]);

  const [name, setName] = useState('');
  const [componentType, setComponentType] = useState<ComponentType>();
  const [packageType, setPackageType] = useState<PackageType>();
  const [price, setPrice] = useState<number>();
  const [weightInGram, setWeightInGram] = useState<number>();
  const [calories, setCalories] = useState<number>();
  const [fats, setFats] = useState<number>();
  const [proteins, setProteins] = useState<number>();
  const [carbons, setCarbons] = useState<number>();
  const [recipe, setRecipe] = useState('');


  const [searchName, setSearchName] = useState('');
  const [form] = Form.useForm();

  const fetchComponents = async () => {
    const fetchedComponents = await DataStore.query(Component);
    setComponents(fetchedComponents);
    setFilteredComponents(fetchedComponents)
  }

  useEffect(() => {
    fetchComponents();

    const componentsSubscription = DataStore.observe(Component).subscribe(async (message) => {
      await fetchComponents();
    });

    return () => {
      componentsSubscription.unsubscribe();
    }
  }, []);

  // readonly recipe: string;
  // readonly picture: string;
  const nameFilter = (
    <Row>
      <Col className="gutter-row" span={6}>
        <Typography>Component name</Typography>
      </Col>
      <Col className="gutter-row" span={6}>
        <Input
          placeholder="Search Name"
          value={searchName}
          onChange={e => {
            const currValue = e.target.value;
            setSearchName(currValue);
            const filteredData = components
              .filter(component => component.name.toLowerCase().includes(currValue.toLowerCase()));
            setFilteredComponents(filteredData);
          }}
        />
      </Col>
    </Row>
  );

  const columns: ColumnsType<Component> = [
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
      title: 'Delete',
      render: (value, record, index) => {
        return <Button danger type={'primary'} onClick={() => tryToDelete(record)}>Delete</Button>
      }
    }
  ];

  const tryToDelete = async (component: Component) => {
    const dishes = (await DataStore.query(DishComponent)).filter(dishComponent => dishComponent.component.id === component.id)
    if (dishes && dishes.length > 0) {
      error({
        title: 'You cannot delete this component!',
        content: `This component is part of the ${dishes.length} dishes, remove dishes first.`,
      });
    } else {
      confirm({
        title: 'Are you sure delete this component?',
        icon: <CloseCircleOutlined style={{color: 'red'}}/>,
        content: `Delete component with name "${component.name}"`,
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        async onOk() {
          await DataStore.delete(Component, component.id);
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }
  }

  return (
    <Content>
      <Title>Components</Title>
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

        <Form.Item label="Component and package type" style={{marginBottom: 0}}>
          <Form.Item
            name="componentType"
            rules={[{required: true, message: 'Please enter component type!'}]}
            style={{display: 'inline-block', width: '37%'}}
          >
            <Select<ComponentType>
              placeholder="Select component type"
              showSearch
              filterOption={(input, option) =>
                option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              value={componentType}
              style={width300}
              onSelect={async (value) => {
                setComponentType(value)
              }}>
              {Object.values(ComponentType).map((type) => <Select.Option key={type}
                                                                         value={type}>{type}</Select.Option>)}
            </Select>
          </Form.Item>
          <Form.Item
            name="packageType"
            rules={[{required: true, message: 'Please enter package type!'}]}
            style={{display: 'inline-block'}}
          >
            <Select<PackageType>
              placeholder="Select package type"
              showSearch
              filterOption={(input, option) =>
                option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              value={packageType}
              style={width300}
              onSelect={async (value) => {
                setPackageType(value)
              }}>
              {Object.values(PackageType).map((type) => <Select.Option key={type}
                                                                       value={type}>{type}</Select.Option>)}
            </Select>
          </Form.Item>
        </Form.Item>

        <Form.Item label="Price" style={{marginBottom: 0}}>
          <Form.Item
            name="price"
            rules={[{required: true, message: 'Please enter price!'}]}
            style={{display: 'inline-block', width: '11%'}}
          >
            <InputNumber<number>
              value={price}
              onChange={(value) => setPrice(value)}
            />
          </Form.Item>
          <span style={{display: 'inline-block', width: '60px', lineHeight: '32px'}}>€</span>
          <span style={{display: 'inline-block', width: '60px', lineHeight: '32px'}}>Weight:</span>
          <Form.Item
            name="weightInGram"
            rules={[{required: true, message: 'Please enter weight!'}]}
            style={{display: 'inline-block', width: '11%'}}
          >
            <InputNumber<number>
              value={weightInGram}
              onChange={(value) => setWeightInGram(value)}
            />
          </Form.Item>
          <span style={{display: 'inline-block', width: '60px', lineHeight: '32px'}}>gram</span>
        </Form.Item>

        <Form.Item label="Calories" style={{marginBottom: 0}}>
          <Form.Item
            name="calories"
            rules={[{required: true, message: 'Please enter calories!'}]}
            style={{display: 'inline-block', width: '13%'}}
          >
            <InputNumber<number>
              value={calories}
              onChange={(value) => setCalories(value)}
            />
          </Form.Item>
          <span style={{display: 'inline-block', width: '38px', lineHeight: '32px'}}>Fats:</span>
          <Form.Item
            name="fats"
            rules={[{required: true, message: 'Please enter fats!'}]}
            style={{display: 'inline-block', width: '13%'}}
          >
            <InputNumber<number>
              value={fats}
              onChange={(value) => setFats(value)}
            />
          </Form.Item>
          <span style={{display: 'inline-block', width: '65px', lineHeight: '32px'}}>Carbons:</span>
          <Form.Item
            name="carbons"
            rules={[{required: true, message: 'Please enter carbons!'}]}
            style={{display: 'inline-block', width: '13%'}}
          >
            <InputNumber<number>
              value={carbons}
              onChange={(value) => setCarbons(value)}
            />
          </Form.Item>
          <span style={{display: 'inline-block', width: '65px', lineHeight: '32px'}}>Proteins:</span>
          <Form.Item
            name="proteins"
            rules={[{required: true, message: 'Please enter proteins!'}]}
            style={{display: 'inline-block', width: '11%'}}
          >
            <InputNumber<number>
              value={proteins}
              onChange={(value) => setProteins(value)}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Recipe"
          name="recipe"
          rules={[{required: true, message: 'Please enter recipe!'}]}
        >
          <TextArea
            style={{width: 600}}
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
            rows={4}
          />
        </Form.Item>

        <Form.Item wrapperCol={{offset: 4, span: 16}}>
          <Button onClick={async () => {
            if (name) {
              await DataStore.save(
                new Component({
                  name,
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
        dataSource={filteredComponents}
      />
    </Content>
  )
}

export default ComponentsPage

