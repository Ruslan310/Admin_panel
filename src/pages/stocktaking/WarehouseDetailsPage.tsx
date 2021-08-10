import React, {useEffect, useState} from 'react'

import {ColumnsType} from "antd/es/table";
import {useParams} from 'react-router-dom';
import {Button, Form, InputNumber, Layout, Modal, Select, Table, Typography} from "antd";
import {Product, ProductAtWarehouse, Warehouse} from "../../models";
import {DataStore} from 'aws-amplify'
import {CloseCircleOutlined} from "@ant-design/icons";
import {MAX_QUANTITY} from "../../utils/utils";

const {confirm, error} = Modal;

const {Content} = Layout;
const {Title} = Typography;
const width300 = {width: 300}

const WarehouseDetailsPage: React.FC = () => {
  const {warehouseId} = useParams<{
    warehouseId: string
  }>();
  const [warehouseProducts, setWarehouseProducts] = useState<ProductAtWarehouse[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [productId, setProductId] = useState('');
  const [warehouse, setWarehouse] = useState<Warehouse>();
  const [isLoading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState<number>(0)
  const [minQuantity, setMinQuantity] = useState<number>(0)
  const [maxQuantity, setMaxQuantity] = useState<number>(MAX_QUANTITY)

  const fetchWarehouseProducts = async () => {
    const fetchedWarehouseProducts = (await DataStore.query(ProductAtWarehouse)).filter(product => product.warehouse.id === warehouseId);
    setWarehouseProducts(fetchedWarehouseProducts);
  }

  const fetchProducts = async () => {
    const fetchedProducts = await DataStore.query(Product);
    setProducts(fetchedProducts);
  }

  const fetchCurrentWarehouse = async () => {
    const fetchedWarehouse = await DataStore.query(Warehouse, warehouseId);
    console.log(fetchedWarehouse)
    setWarehouse(fetchedWarehouse);
  }

  useEffect(() => {
    fetchCurrentWarehouse();
    fetchWarehouseProducts();
    fetchProducts();
    setLoading(false);

    const productsWarehouseSubscription = DataStore.observe(ProductAtWarehouse).subscribe(async (message) => {
      await fetchWarehouseProducts();
    });

    const productsSubscription = DataStore.observe(Product).subscribe(async (message) => {
      await fetchProducts();
    });

    return () => {
      productsWarehouseSubscription.unsubscribe();
      productsSubscription.unsubscribe();
    }
  }, []);

  const boxesColumns: ColumnsType<ProductAtWarehouse> = [
    {
      title: 'Name',
      render: (value, record, index) => {
        return record.product.name
      },
    },
    {
      title: 'Quantity',
      render: (value, record, index) => {
        return record.quantity
      },
      sorter: (a, b) => {
        if (a.quantity < b.quantity) {
          return -1;
        }
        if (a.quantity > b.quantity) {
          return 1;
        }
        return 0;
      }
    },
    {
      title: 'Min',
      dataIndex: 'minQuantity'
    },
    {
      title: 'Max',
      dataIndex: 'maxQuantity'
    },
    {
      title: 'Delete',
      render: (value, record, index) => {
        return <Button danger type={'primary'} onClick={() => tryToDelete(record)}>Delete</Button>
      }
    }
  ];

  const tryToDelete = async (productAtWarehouse: ProductAtWarehouse) => {
    confirm({
      title: 'Are you sure delete this product for this warehouse?',
      icon: <CloseCircleOutlined style={{color: 'red'}}/>,
      content: `Delete product with name "${productAtWarehouse.product.name}" from warehouse`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      async onOk() {
        await DataStore.delete(ProductAtWarehouse, productAtWarehouse.id);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  return (
    <Content>
      <Title>{warehouse?.name} products</Title>
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
        <Form.Item label="Quantity" name="quantity" initialValue={0}>
          <InputNumber<number>
            style={width300}
            placeholder={'Enter quantity'}
            value={quantity}
            onChange={(e) => setQuantity(e)}
          />
        </Form.Item>
        <Form.Item label="Min quantity" name="minQuantity" initialValue={0}>
          <InputNumber<number>
            style={width300}
            placeholder={'Enter minimum quantity'}
            value={minQuantity}
            onChange={(e) => setMinQuantity(e)}
          />
        </Form.Item>
        <Form.Item label="Max quantity" name="maxQuantity" initialValue={MAX_QUANTITY}>
          <InputNumber<number>
            style={width300}
            placeholder={'Enter maximum quantity'}
            value={maxQuantity}
            onChange={(e) => setMaxQuantity(e)}
          />
        </Form.Item>
        <Form.Item wrapperCol={{offset: 4, span: 16}}>
          <Button onClick={async () => {
            if (productId) {
              const product = await DataStore.query(Product, productId);
              await DataStore.save(
                new ProductAtWarehouse({
                  product,
                  quantity,
                  minQuantity,
                  maxQuantity,
                  warehouse,
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
        dataSource={warehouseProducts}
      />
    </Content>
  )
}

export default WarehouseDetailsPage;
