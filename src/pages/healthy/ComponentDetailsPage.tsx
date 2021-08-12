import React, {useEffect, useState} from 'react'
import {DataStore, Storage} from 'aws-amplify'

import {
  Button,
  Form,
  Input,
  InputNumber,
  Layout,
  message, Modal, PageHeader,
  Select, Tag,
  Upload,
} from 'antd';
import {Component, ComponentProduct, ComponentType, PackageType, Product,} from "../../models";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import {IMAGE_URL_PREFIX} from "../../utils/utils";
import {RcFile} from "antd/es/upload";
import {EURO, GRAM} from "../../constants";
import {useHistory, useParams} from "react-router-dom";

const {Content} = Layout;
const {TextArea} = Input;
const width300 = {width: 300}

const key = 'updatable';
const ComponentsPage: React.FC = () => {
  const {componentId} = useParams<{
    componentId: string
  }>();
  const [currentComponent, setCurrentComponent] = useState<Component>();
  const [componentProducts, setComponentProducts] = useState<ComponentProduct[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [picture, setPicture] = useState('');
  const [isLoadingImage, setLoadingImage] = useState(false);
  const [form] = Form.useForm();
  const history = useHistory();

  const fetchCurrentComponent = async () => {
    const fetchedComponent = await DataStore.query(Component, componentId);
    setCurrentComponent(fetchedComponent);
    if (fetchedComponent) {
      fetchComponentProducts(fetchedComponent.id);
      setPicture(fetchedComponent.picture)
    }
  }

  const fetchComponentProducts = async (componentId: string) => {
    const allComponentProducts = await DataStore.query(ComponentProduct)
    setComponentProducts([...allComponentProducts.filter(componentProduct => componentProduct.component.id === componentId)]);
  }

  const fetchProducts = async () => {
    const fetchedProducts = await DataStore.query(Product);
    setProducts(fetchedProducts);
  }

  useEffect(() => {
    fetchCurrentComponent();

    fetchProducts();

    const productsSubscription = DataStore.observe(Product).subscribe(async (message) => {
      await fetchProducts();
    });

    const componentProductsSubscription = DataStore.observe(ComponentProduct).subscribe(async (message) => {
      await fetchComponentProducts(componentId);
    });

    return () => {
      productsSubscription.unsubscribe();
      componentProductsSubscription.unsubscribe();
    }
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
              initialValue={currentComponent.packageType}
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
            {componentProducts && componentProducts.map(componentProduct => {
              return <Tag id={componentProduct.id} closable={componentProducts.length > 1} onClose={async () => {
                await DataStore.delete(ComponentProduct, componentProduct.id)
              }} color="green">{componentProduct.product.name}</Tag>
            })}
            <Select
              placeholder="Select component type"
              showSearch
              filterOption={(input, option) =>
                option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              onSelect={async (value) => {
                const product = products.find(product => product.id === value);
                if (product) {
                  const newComponentProduct = await DataStore.save(new ComponentProduct({
                    component: currentComponent,
                    product: product,
                  }));
                  setComponentProducts([...componentProducts, newComponentProduct])
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
                  await DataStore.save(
                    Component.copyOf(currentComponent, updated => {
                      updated.calories = form.getFieldValue("calories");
                      updated.carbons = form.getFieldValue("carbons");
                      updated.fats = form.getFieldValue("fats");
                      updated.name = form.getFieldValue("name");
                      updated.packageType = form.getFieldValue("packageType");
                      updated.picture = picture;
                      updated.price = form.getFieldValue("price");
                      updated.proteins = form.getFieldValue("proteins");
                      updated.recipe = form.getFieldValue("recipe");
                      updated.type = form.getFieldValue("componentType");
                      updated.weightInGram = form.getFieldValue("weightInGram");
                    })
                  );
                  await fetchCurrentComponent();
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

