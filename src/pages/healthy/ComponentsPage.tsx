import React, {useEffect, useState} from 'react'
import {Storage} from 'aws-amplify'

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
  Upload,
  Image, Spin, Descriptions, Tag
} from 'antd';
import {ColumnsType} from "antd/es/table";
import {CloseCircleOutlined, LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import {IMAGE_URL_PREFIX} from "../../utils/utils";
import {RcFile} from "antd/es/upload";
import {EURO, GRAM} from "../../constants";
import {useHistory} from "react-router-dom";
import {Component, COMPONENT_TYPE, PACKAGE_TYPE, Product} from "../../API";

const {confirm, error} = Modal;

const {Content} = Layout;
const {Title} = Typography;
const {TextArea} = Input;
const width300 = {width: 300}

const ComponentsPage: React.FC = () => {
  const [components, setComponents] = useState<Component[]>([]);
  const [filteredComponents, setFilteredComponents] = useState<Component[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [picture, setPicture] = useState('');
  const [searchName, setSearchName] = useState('');
  const [isLoadingImage, setLoadingImage] = useState(false);
  const [form] = Form.useForm();
  const history = useHistory();

  const loadComponents = async () => {
    // const fetchedComponents = await fetchComponents();
    // setComponents(fetchedComponents);
    // setFilteredComponents(fetchedComponents)
  }

  const loadProducts = async () => {
    // const fetchedProducts = await fetchProducts();
    // setProducts(fetchedProducts);
  }

  useEffect(() => {
    loadComponents();
    loadProducts();
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
      title: "Price",
      render: (value, record, index) => {
        return record.price + ' ' + EURO
      }
    },
    {
      title: "Weight",
      render: (value, record, index) => {
        return record.weightInGram + ' ' + GRAM
      }
    },
    {

      title: "Picture",
      render: (value, record, index) => {
        return <Image
          height={50}
          src={value.picture}
        />
      }
    },
    {
      title: 'Edit',
      render: (value, record, index) => {
        return <Button type={'primary'}
                       onClick={() => history.push("/healthy/componentDetails/" + record.id)}>Edit</Button>
      }
    },
    // {
    //   title: 'Delete',
    //   render: (value, record, index) => {
    //     return <Button danger type={'primary'} onClick={() => tryToDelete(record)}>Delete</Button>
    //   }
    // }
  ];

  // const tryToDelete = async (component: Component) => {
  //   const dishes = (await DataStore.query(DishComponent)).filter(dishComponent => dishComponent.component.id === component.id)
  //   if (dishes && dishes.length > 0) {
  //     error({
  //       title: 'You cannot delete this component!',
  //       content: `This component is part of the ${dishes.length} dishes, remove dishes first.`,
  //     });
  //   } else {
  //     confirm({
  //       title: 'Are you sure delete this component?',
  //       icon: <CloseCircleOutlined style={{color: 'red'}}/>,
  //       content: `Delete component with name "${component.name}"`,
  //       okText: 'Yes',
  //       okType: 'danger',
  //       cancelText: 'No',
  //       async onOk() {
  //         const componentProducts = (await DataStore.query(ComponentProduct)).filter(componentProduct => componentProduct.component.id === component.id);
  //         for (const componentProduct of componentProducts) {
  //           await DataStore.delete(ComponentProduct, componentProduct.id)
  //         }
  //         await DataStore.delete(Component, component.id);
  //       },
  //       onCancel() {
  //         console.log('Cancel');
  //       },
  //     });
  //   }
  // }

  const uploadButton = (
    <div>
      {isLoadingImage ? <LoadingOutlined/> : <PlusOutlined/>}
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
            <Select<string, { value: string; children: string }>
              placeholder="Select component type"
              showSearch
              filterOption={(input, option) =>
                option ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
              }
              style={width300}>
              {Object.values(COMPONENT_TYPE).map((type) => <Select.Option key={type}
                                                                          value={type}>{type}</Select.Option>)}
            </Select>
          </Form.Item>
          <Form.Item
            name="packageType"
            rules={[{required: true, message: 'Please enter package type!'}]}
            style={{display: 'inline-block'}}
          >
            <Select<string, { value: string; children: string }>
              placeholder="Select package type"
              showSearch
              filterOption={(input, option) =>
                option ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
              }
              style={width300}>
              {Object.values(PACKAGE_TYPE).map((type) => <Select.Option key={type}
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
          <span style={{display: 'inline-block', width: '60px', lineHeight: '32px'}}>{EURO}</span>
          <span style={{display: 'inline-block', width: '60px', lineHeight: '32px'}}>Weight:</span>
          <Form.Item
            name="weightInGram"
            rules={[{required: true, message: 'Please enter weight!'}]}
            style={{display: 'inline-block', width: '11%'}}
          >
            <InputNumber<number>/>
          </Form.Item>
          <span style={{display: 'inline-block', width: '60px', lineHeight: '32px'}}>{GRAM}</span>
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
        <Form.Item
          label="Products"
          name="products"
          rules={[{required: true, message: 'Please enter at least 1 product!'}]}
        >
          <Select
            mode="multiple"
            allowClear
            style={{width: '100%'}}
            placeholder="Please select products"
            onChange={(value, option) => {
              console.log('value: ', value);
            }}
          >
            {products.map((product) => <Select.Option key={product.id}
                                                      value={product.id}>{product.name}</Select.Option>)}
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{offset: 4, span: 16}}>
          <Button onClick={async () => {
            try {
              // await form.validateFields();
              //   const addedComponent = await createComponent({
              //     calories: form.getFieldValue("calories"),
              //     carbons: form.getFieldValue("carbons"),
              //     fats: form.getFieldValue("fats"),
              //     name: form.getFieldValue("name"),
              //     packageType: form.getFieldValue("packageType"),
              //     picture: picture,
              //     price: form.getFieldValue("price"),
              //     proteins: form.getFieldValue("proteins"),
              //     recipe: form.getFieldValue("recipe"),
              //     type: form.getFieldValue("componentType"),
              //     weightInGram: form.getFieldValue("weightInGram")
              //   })
              // for (const addedProductId of form.getFieldValue("products")) {
              //   const product = products.find(product => product.id === addedProductId);
              //   if (product) {
              //     await createComponentProduct({
              //       componentProductComponentId: addedComponent.id,
              //       componentProductProductId: product.id,
              //     });
              //   }
              // }
              // form.resetFields();
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
        // expandable={{
        //   expandedRowRender: record => {
        //     return <Descriptions title="Component details">
        //       <Descriptions.Item label="Products">{record.products!.items!.map(componentProduct => {
        //         return <Tag color="green">{componentProduct!.product.name}</Tag>
        //       })}</Descriptions.Item>
        //       <Descriptions.Item label="Calories">{record.calories}</Descriptions.Item>
        //       <Descriptions.Item label="Carbons">{record.carbons}</Descriptions.Item>
        //       <Descriptions.Item label="Fats">{record.fats}</Descriptions.Item>
        //       <Descriptions.Item label="Package type">{record.packageType}</Descriptions.Item>
        //       <Descriptions.Item label="Proteins">{record.proteins}</Descriptions.Item>
        //       <Descriptions.Item label="Recipe">{record.recipe}</Descriptions.Item>
        //       <Descriptions.Item label="Component type">{record.type}</Descriptions.Item>
        //       <Descriptions.Item label="Weight in gram">{record.weightInGram}</Descriptions.Item>
        //     </Descriptions>
        //   },
        //   rowExpandable: record => true,
        // }}
        size={"middle"}
        rowKey="id"
        columns={columns}
        dataSource={filteredComponents}
      />
    </Content>
  )
}

export default ComponentsPage

