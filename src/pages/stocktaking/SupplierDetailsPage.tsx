import React, {useEffect, useState} from 'react'

import {ColumnsType} from "antd/es/table";
import {useParams} from 'react-router-dom';
import {Button, Col, Form, Input, InputNumber, Layout, Modal, Row, Select, Table, Typography} from "antd";
import {Product, ProductFromSupplier, Supplier} from "../../models";
import {DataStore} from 'aws-amplify'
import {CloseCircleOutlined} from "@ant-design/icons";

const {confirm, error} = Modal;

const {Content} = Layout;
const {Title} = Typography;
const width300 = {width: 300}

const SupplierDetailsPage: React.FC = () => {
  const {supplierId} = useParams<{
    supplierId: string
  }>();
  const [supplierProducts, setSupplierProducts] = useState<ProductFromSupplier[]>([]);
  const [filteredSupplierProducts, setFilteredSupplierProducts] = useState<ProductFromSupplier[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [productId, setProductId] = useState('');
  const [searchName, setSearchName] = useState('');
  const [supplier, setSupplier] = useState<Supplier>();
  const [isLoading, setLoading] = useState(true)
  const [quality, setQuality] = useState<number>()
  const [price, setPrice] = useState<number>()

  const fetchSupplierProducts = async () => {
    const fetchedSupplierProducts = (await DataStore.query(ProductFromSupplier)).filter(product => product.supplier.id === supplierId);
    setSupplierProducts(fetchedSupplierProducts);
    setFilteredSupplierProducts(fetchedSupplierProducts);
  }

  const fetchProducts = async () => {
    const fetchedProducts = await DataStore.query(Product);
    setProducts(fetchedProducts);
  }

  const fetchCurrentSupplier = async () => {
    const fetchedSupplier = await DataStore.query(Supplier, supplierId);
    console.log(fetchedSupplier)
    setSupplier(fetchedSupplier);
  }

  useEffect(() => {
    fetchCurrentSupplier();
    fetchSupplierProducts();
    fetchProducts();
    setLoading(false);

    const productsSupplierSubscription = DataStore.observe(ProductFromSupplier).subscribe(async (message) => {
      await fetchSupplierProducts();
    });

    const productsSubscription = DataStore.observe(Product).subscribe(async (message) => {
      await fetchProducts();
    });

    return () => {
      productsSupplierSubscription.unsubscribe();
      productsSubscription.unsubscribe();
    }
  }, []);

  const nameFilter = (
    <Row>
      <Col className="gutter-row" span={6}>
        <Typography>Product name</Typography>
      </Col>
      <Col className="gutter-row" span={6}>
        <Input
          placeholder="Search Name"
          value={searchName}
          onChange={e => {
            const currValue = e.target.value;
            setSearchName(currValue);
            const filteredData = supplierProducts
              .filter(supplierProduct => supplierProduct.product.name.toLowerCase().includes(currValue.toLowerCase()));
            setFilteredSupplierProducts(filteredData);
          }}
        />
      </Col>
    </Row>
  );

  const boxesColumns: ColumnsType<ProductFromSupplier> = [
    {
      title: nameFilter,
      render: (value, record, index) => {
        return record.product.name
      },
      sorter: (a, b) => {
        if (a.product.name < b.product.name) {
          return -1;
        }
        if (a.product.name > b.product.name) {
          return 1;
        }
        return 0;
      }
    },
    {
      title: 'Price',
      render: (value, record, index) => {
        return record.price
      },
      sorter: (a, b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      }
    },
    {
      title: 'Quality',
      render: (value, record, index) => {
        return record.quality
      },
      sorter: (a, b) => {
        if (!a.quality || !b.quality) return -1;
        if (a.quality < b.quality) {
          return -1;
        }
        if (a.quality > b.quality) {
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

  const tryToDelete = async (productFromSupplier: ProductFromSupplier) => {
    confirm({
      title: 'Are you sure delete this product for this supplier?',
      icon: <CloseCircleOutlined style={{color: 'red'}}/>,
      content: `Delete product with name "${productFromSupplier.product.name}" from supplier`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      async onOk() {
        await DataStore.delete(ProductFromSupplier, productFromSupplier.id);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  return (
    <Content>
      <Title>{supplier?.name} products</Title>
      <Form
        labelCol={{span: 4}}
        wrapperCol={{span: 14}}
        layout="horizontal"
      >
        <Form.Item label="Product" name="product"
                   rules={[{required: true, message: 'Please enter product!'}]}>
          <Select
            placeholder="Select product"
            showSearch
            filterOption={(input, option) =>
              option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            value={productId}
            style={width300}
            onSelect={async (value) => {
              setProductId(value)
            }}>
            {products.map((product) => <Select.Option key={product.id}
                                                      value={product.id}>{product.name}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item label="Price" name="price"
                   rules={[{required: true, message: 'Please enter price!'}]}>
          <InputNumber<number>
            style={width300}
            placeholder={'Enter price'}
            value={price}
            onChange={(e) => setPrice(e)}
          />
        </Form.Item>
        <Form.Item label="Quality" name="quality">
          <InputNumber<number>
            style={width300}
            placeholder={'Enter quality'}
            value={quality}
            onChange={(e) => setQuality(e)}
          />
        </Form.Item>
        <Form.Item wrapperCol={{offset: 4, span: 16}}>
          <Button onClick={async () => {
            if (productId && price) {
              const product = await DataStore.query(Product, productId);
              await DataStore.save(
                new ProductFromSupplier({
                  product,
                  quality,
                  price,
                  supplier,
                })
              );
            }
          }} type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
      <Table
        loading={isLoading}
        size={"middle"}
        rowKey="id"
        columns={boxesColumns}
        dataSource={filteredSupplierProducts}
      />
    </Content>
  )
}

export default SupplierDetailsPage;
