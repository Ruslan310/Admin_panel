import React, {useEffect, useState} from 'react'
import {DataStore, Storage} from 'aws-amplify'

import {
  Button,
  Form,
  Input,
  InputNumber,
  Layout,
  message, PageHeader,
  Select, Tag,
  Upload,
} from 'antd';
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import {IMAGE_URL_PREFIX} from "../../utils/utils";
import {RcFile} from "antd/es/upload";
import {EURO, GRAM} from "../../constants";
import {useHistory, useParams} from "react-router-dom";
import {Component, COMPONENT_TYPE, PACKAGE_TYPE, Product} from "../../API";
import {
  fetchComponent,
  fetchProducts,
  updateComponent
} from "../../graphql/requests";

const {Content} = Layout;
const {TextArea} = Input;
const width300 = {width: 300}

const key = 'updatable';
const ComponentsPage: React.FC = () => {
  const {componentId} = useParams<{
    componentId: string
  }>();
  const [currentComponent, setCurrentComponent] = useState<Component>();
  const [products, setProducts] = useState<Product[]>([]);
  const [picture, setPicture] = useState('');
  const [isLoadingImage, setLoadingImage] = useState(false);
  const [form] = Form.useForm();
  const history = useHistory();

  const loadCurrentComponent = async () => {
    const fetchedComponent = await fetchComponent(componentId);
    setCurrentComponent(fetchedComponent);
    if (fetchedComponent) {
      setPicture(fetchedComponent.picture)
    }
  }

  const loadProducts = async () => {
    const fetchedProducts = await fetchProducts();
    setProducts(fetchedProducts);
  }

  useEffect(() => {
    loadCurrentComponent();
    loadProducts();
  }, []);

  const uploadButton = (
    <div>
      {isLoadingImage ? <LoadingOutlined/> : <PlusOutlined/>}
      <div style={{marginTop: 8}}>Upload</div>
    </div>
  );

  if (!currentComponent) return null;

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => history.goBack()}
        title={`Component "${currentComponent.name}"`}
      />
      <Content>
        <Form
          labelCol={{span: 4}}
          wrapperCol={{span: 14}}
          layout="horizontal"
          form={form}
        >
          <Form.Item
            label="Name"
            name="name"
            initialValue={currentComponent.name}
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
              initialValue={currentComponent.type}
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
              initialValue={currentComponent.packageType}
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
              initialValue={currentComponent.price}
              name="price"
              rules={[{required: true, message: 'Please enter price!'}]}
              style={{display: 'inline-block', width: '11%'}}
            >
              <InputNumber<number>/>
            </Form.Item>
            <span style={{display: 'inline-block', width: '60px', lineHeight: '32px'}}>{EURO}</span>
            <span style={{display: 'inline-block', width: '60px', lineHeight: '32px'}}>Weight:</span>
            <Form.Item
              initialValue={currentComponent.weightInGram}
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
              initialValue={currentComponent.calories}
              name="calories"
              rules={[{required: true, message: 'Please enter calories!'}]}
              style={{display: 'inline-block', width: '13%'}}
            >
              <InputNumber<number>/>
            </Form.Item>
            <span style={{display: 'inline-block', width: '38px', lineHeight: '32px'}}>Fats:</span>
            <Form.Item
              name="fats"
              initialValue={currentComponent.fats}
              rules={[{required: true, message: 'Please enter fats!'}]}
              style={{display: 'inline-block', width: '13%'}}
            >
              <InputNumber<number>/>
            </Form.Item>
            <span style={{display: 'inline-block', width: '65px', lineHeight: '32px'}}>Carbons:</span>
            <Form.Item
              initialValue={currentComponent.carbons}
              name="carbons"
              rules={[{required: true, message: 'Please enter carbons!'}]}
              style={{display: 'inline-block', width: '13%'}}
            >
              <InputNumber<number>/>
            </Form.Item>
            <span style={{display: 'inline-block', width: '65px', lineHeight: '32px'}}>Proteins:</span>
            <Form.Item
              initialValue={currentComponent.proteins}
              name="proteins"
              rules={[{required: true, message: 'Please enter proteins!'}]}
              style={{display: 'inline-block', width: '11%'}}
            >
              <InputNumber<number>/>
            </Form.Item>
          </Form.Item>
          <Form.Item
            initialValue={currentComponent.recipe}
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
              {!isLoadingImage && picture ?
                <img src={picture} alt="component photo" style={{width: '100%'}}/> : uploadButton}
            </Upload>
          </Form.Item>

          <Form.Item
            label="Products"
            name="products"
          >
            {/*{currentComponent.products?.items && currentComponent.products?.items.map(componentProduct => {*/}
            {/*  return <Tag id={componentProduct!.id} closable={currentComponent.products!.items!.length > 1}*/}
            {/*              onClose={async () => {*/}
            {/*                // await DataStore.delete(ComponentProduct, componentProduct.id)*/}
            {/*                console.log('remove product from component')*/}
            {/*              }} color="green">{componentProduct!.product.name}</Tag>*/}
            {/*})}*/}
            <Select<string, { value: string; children: string }>
              placeholder="Select component type"
              showSearch
              filterOption={(input, option) =>
                option ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
              }
              onSelect={async (value) => {
                const product = products.find(product => product.id === value);
                if (product) {
                  // const newComponentProduct = await DataStore.save(new ComponentProduct({
                  //   component: currentComponent,
                  //   product: product,
                  // }));
                }
              }}
              style={width300}>
              {products.map((product) => <Select.Option key={product.id}
                                                        value={product.id}>{product.name}</Select.Option>)}
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{offset: 4, span: 16}}>
            <Button onClick={async () => {
              try {
                if (currentComponent) {
                  await form.validateFields();
                  message.loading({content: 'Saving component...', key});
                  await updateComponent(
                    {
                      id: currentComponent.id,
                      _version: currentComponent._version,
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
                    }
                  );
                  await loadCurrentComponent();
                  message.success({content: 'Component successfully saved!', key, duration: 2});
                }
              } catch (e) {
                console.log('validations errors: ', e);
              }
            }} type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </>
  )
}

export default ComponentsPage

