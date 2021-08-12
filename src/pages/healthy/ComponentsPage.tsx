import React, {useEffect, useState} from 'react'
import {DataStore, Storage} from 'aws-amplify'

import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Layout,
  message,
  Modal,
  Row,
  Select,
  Table,
  Typography,
  Upload
} from 'antd';
import {ColumnsType} from "antd/es/table";
import {Component, ComponentType, DishComponent, PackageType,} from "../../models";
import {CloseCircleOutlined, LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import {IMAGE_URL_PREFIX} from "../../utils/utils";
import {RcFile} from "antd/es/upload";

const {confirm, error} = Modal;

const {Content} = Layout;
const {Title} = Typography;
const {TextArea} = Input;
const width300 = {width: 300}

const ComponentsPage: React.FC = () => {
  const [components, setComponents] = useState<Component[]>([]);
  const [filteredComponents, setFilteredComponents] = useState<Component[]>([]);
  const [picture, setPicture] = useState('');
  const [searchName, setSearchName] = useState('');
  const [loadingImage, setLoadingImage] = useState(false);
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

  const uploadButton = (
    <div>
      {loadingImage ? <LoadingOutlined/> : <PlusOutlined/>}
      <div style={{marginTop: 8}}>Upload</div>
    </div>
  );

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
              style={width300}>
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
              style={width300}>
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
            <InputNumber<number>/>
          </Form.Item>
          <span style={{display: 'inline-block', width: '60px', lineHeight: '32px'}}>€</span>
          <span style={{display: 'inline-block', width: '60px', lineHeight: '32px'}}>Weight:</span>
          <Form.Item
            name="weightInGram"
            rules={[{required: true, message: 'Please enter weight!'}]}
            style={{display: 'inline-block', width: '11%'}}
          >
            <InputNumber<number>/>
          </Form.Item>
          <span style={{display: 'inline-block', width: '60px', lineHeight: '32px'}}>gram</span>
        </Form.Item>

        <Form.Item label="Calories" style={{marginBottom: 0}}>
          <Form.Item
            name="calories"
            rules={[{required: true, message: 'Please enter calories!'}]}
            style={{display: 'inline-block', width: '13%'}}
          >
            <InputNumber<number>/>
          </Form.Item>
          <span style={{display: 'inline-block', width: '38px', lineHeight: '32px'}}>Fats:</span>
          <Form.Item
            name="fats"
            rules={[{required: true, message: 'Please enter fats!'}]}
            style={{display: 'inline-block', width: '13%'}}
          >
            <InputNumber<number>/>
          </Form.Item>
          <span style={{display: 'inline-block', width: '65px', lineHeight: '32px'}}>Carbons:</span>
          <Form.Item
            name="carbons"
            rules={[{required: true, message: 'Please enter carbons!'}]}
            style={{display: 'inline-block', width: '13%'}}
          >
            <InputNumber<number>/>
          </Form.Item>
          <span style={{display: 'inline-block', width: '65px', lineHeight: '32px'}}>Proteins:</span>
          <Form.Item
            name="proteins"
            rules={[{required: true, message: 'Please enter proteins!'}]}
            style={{display: 'inline-block', width: '11%'}}
          >
            <InputNumber<number>/>
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Recipe"
          name="recipe"
          rules={[{required: true, message: 'Please enter recipe!'}]}
        >
          <TextArea
            style={{width: 600}}
            rows={4}
          />
        </Form.Item>
        <Form.Item
          label="Picture"
          name="picture"
          rules={[{required: true, message: 'Please enter picture!'}]}
        >
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            customRequest={async (options) => {
              setLoadingImage(true)
              try {
                const res: any = await Storage.put((options.file as RcFile).name, options.file, {
                  contentType: 'image/png' // contentType is optional
                });
                setPicture(IMAGE_URL_PREFIX + encodeURIComponent(res.key));
              } catch (error) {
                console.log('Error uploading file: ', error);
              } finally {
                setLoadingImage(false);
              }
            }}
            beforeUpload={async (file) => {
              const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
              if (!isJpgOrPng) {
                await message.error('You can only upload JPG/PNG file!');
              }
              const isLt2M = file.size / 1024 / 1024 < 2;
              if (!isLt2M) {
                await message.error('Image must smaller than 2MB!');
              }
              return isJpgOrPng && isLt2M;
            }}
          >
            {picture ? <img src={picture} alt="component photo" style={{width: '100%'}}/> : uploadButton}
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{offset: 4, span: 16}}>
          <Button onClick={async () => {
            try {
              await form.validateFields();
              await DataStore.save(
                new Component({
                  calories: form.getFieldValue("calories"),
                  carbons: form.getFieldValue("carbons"),
                  fats: form.getFieldValue("fats"),
                  name: form.getFieldValue("name"),
                  packageType: form.getFieldValue("packageType"),
                  picture: picture,
                  price: form.getFieldValue("price"),
                  proteins: form.getFieldValue("proteins"),
                  recipe: form.getFieldValue("recipe"),
                  type: form.getFieldValue("componentType"),
                  weightInGram: form.getFieldValue("weightInGram")
                })
              );
              form.resetFields();
              setPicture('');
            } catch (e) {
              console.log('validations errors: ', e);
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

