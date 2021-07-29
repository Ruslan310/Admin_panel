import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {Button, Checkbox, Col, Descriptions, Divider, Input, Layout, Modal, Row, Table, Typography} from 'antd';
import {Address, Box, Coordinate, Order, OrderStatus, User} from "../models";
import {Key} from 'antd/lib/table/interface';
import {ColumnsType} from "antd/es/table";
import Title from "antd/es/typography/Title";
import {useHistory} from "react-router-dom";
import {fullName, stringifyAddress} from "../utils/utils";
import moment from "moment-timezone";

moment.tz.setDefault("Africa/Nouakchott");

const {Content} = Layout;
const {Text} = Typography;

const OrdersPage: React.FC = () => {
  const history = useHistory();
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])
  const [isLoading, setLoading] = useState(true)
  const [checkedStatusesList, setCheckedStatusesList] = React.useState<OrderStatus[]>([OrderStatus.PROCESSING]);
  const [searchName, setSearchName] = useState('')
  const [searchNumber, setSearchNumber] = useState('')
  const [assignedDriverName, setAssignedDriverName] = useState<string>()
  const [isDeleteOrderConfirm, setDeleteOrderConfirm] = useState(false)
  const [isDeleting, setDeleting] = useState(false)
  const [targetOrder, setTargetOrder] = useState<Order>()

  const fetchOrders = async () => {
    const fetchedOrders = await DataStore.query(Order);

    setOrders(fetchedOrders);
    setFilteredOrders(fetchedOrders.filter(order => checkedStatusesList.includes(order.orderStatus as OrderStatus)));
    setLoading(false)
  }

  useEffect(() => {
    fetchOrders();
    const ordersSubscription = DataStore.observe(Order).subscribe(async (message) => {
      await fetchOrders();
    });

    return () => {
      ordersSubscription.unsubscribe();
    }
  }, []);

  const onSelectChange = (selectedRowKeys: Key[]) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys: any) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key: string, index: number) => {
            return index % 2 === 0;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys: any) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key: string, index: number) => {
            return index % 2 !== 0;

          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  const fullNameFilter = (
    <Row>
      <Col className="gutter-row" span={6}>
        <Typography>Full name</Typography>
      </Col>
      <Col className="gutter-row" span={6}>
        <Input
          placeholder="Search Name"
          value={searchName}
          onChange={e => {
            const currValue = e.target.value;
            setSearchName(currValue);
            const filteredData = orders
              .filter(order => checkedStatusesList.includes(order.orderStatus as OrderStatus))
              .filter(order => fullName(order.customer).toLowerCase().includes(currValue.toLowerCase()));
            setFilteredOrders(filteredData);
          }}
        />
      </Col>
    </Row>
  );

  const orderNumberFilter = (
    <Row>
      <Col className="gutter-row" span={6}>
        <Typography>Order #</Typography>
      </Col>
      <Col className="gutter-row" span={6}>
        <Input
          placeholder="Order #"
          value={searchNumber}
          onChange={e => {
            const currValue = e.target.value;
            setSearchNumber(currValue);
            const filteredData = orders
              .filter(order => checkedStatusesList.includes(order.orderStatus as OrderStatus))
              .filter(order => order.orderNumber?.toLowerCase().includes(currValue.toLowerCase()));
            setFilteredOrders(filteredData);
          }}
        />
      </Col>
    </Row>
  );

  const deleteOrderWithBoxes = async () => {
    setDeleting(true)
    if (targetOrder) {
      const boxes = await DataStore.query(Box, box => box.orderID("eq", targetOrder.id))
      if (boxes) {
        for (const box of boxes) {
          await DataStore.delete(Box, box.id)
        }
      }
      await DataStore.delete(Order, targetOrder.id);
    }
    setDeleting(false)
    setTargetOrder(undefined);
    setDeleteOrderConfirm(false);
  }

  const columns: ColumnsType<Order> = [
    {
      title: orderNumberFilter,
      dataIndex: 'orderNumber',
    },
    {
      title: fullNameFilter,
      render: (value, record, index) => {
        return fullName(record.customer)
      },
      sorter: (a, b) => {
        if (fullName(a.customer) && fullName(b.customer)) {
          if (fullName(a.customer) < fullName(b.customer)) {
            return -1;
          }
          if (fullName(a.customer) > fullName(b.customer)) {
            return 1;
          }
          return 0;
        } else {
          return 0;
        }
      }
    },
    {
      title: 'Company',
      render: (value, record, index) => {
        return record.customer?.company
      },
      sorter: (a, b) => {
        if (a.customer?.company && b.customer?.company) {
          if (a.customer.company < b.customer.company) {
            return -1;
          }
          if (a.customer.company > b.customer.company) {
            return 1;
          }
          return 0;
        } else {
          return 0;
        }
      }
    },
    {
      title: 'Assigned driver',
      render: (value, record, index) => {
        return <Button type={'link'} onClick={() => loadAssignedDriverName(record.address?.id)}>Driver</Button>
      }
    },
    {
      title: 'Details',
      render: (value, record, index) => {
        return <Button type={'primary'} onClick={() => history.push("/orderDetails/" + record.id)}>Details</Button>
      }
    },
    {
      title: 'Created in WP',
      render: (value, record, index) => {
        return <Text>{moment.unix(record.createdAtWp).format("HH:mm DD-MM-YYYY")}</Text>
      },
      sorter: (a, b) => {
        if (a.createdAtWp < b.createdAtWp) {
          return -1;
        }
        if (a.createdAtWp > b.createdAtWp) {
          return 1;
        }
        return 0;
      },
      defaultSortOrder: "descend"
    },
    {
      title: 'Actions',
      render: (value, record, index) => {
        return <Button type={'primary'} onClick={async () => {
          setTargetOrder(record);
          setDeleteOrderConfirm(true);
        }}>Delete</Button>
      }
    }
  ];

  const loadAssignedDriverName = async (addressId?: string): Promise<void> => {
    if (!addressId) return;
    const address = await DataStore.query(Address, addressId);
    if (address?.coordinateID) {
      const coordinate = await DataStore.query(Coordinate, address.coordinateID);
      if (coordinate?.userID) {
        const driver = await DataStore.query(User, coordinate.userID);
        setAssignedDriverName(driver?.email);
      }
    }
    Modal.info({
      title: 'Assigned driver:',
      content: (
        <Title level={3}>{assignedDriverName}</Title>
      ),
    });
  }

  return (
    <>
      <Content>
        <Title>Orders ({filteredOrders.length})</Title>
        {/*<Space>*/}
        {/*<Button onClick={async () => {*/}
        {/*  for (const order of orders) {*/}
        {/*    await deleteOrderWithBoxes(order.id);*/}
        {/*  }*/}
        {/*}} type="primary" htmlType="submit">*/}
        {/*  Delete all orders*/}
        {/*</Button>*/}
        {/*<Button onClick={async () => {*/}
        {/*  await fetch('https://gkjmmh4hi0.execute-api.us-east-1.amazonaws.com/syncOrdersInGraphQl')*/}
        {/*}} type="default">*/}
        {/*  Sync orders from wp*/}
        {/*</Button>*/}
        {/*</Space>*/}
        <Checkbox.Group options={Object.values(OrderStatus)} value={checkedStatusesList} onChange={(list) => {
          setCheckedStatusesList(list as Array<OrderStatus>);
          console.log(list)
          setFilteredOrders(
            orders
              .filter(order => list.includes(order.orderStatus as OrderStatus))
              .filter(order => order.orderNumber?.toLowerCase().includes(searchNumber.toLowerCase()))
              .filter(order => fullName(order.customer).toLowerCase().includes(searchName.toLowerCase()))
          )
        }}/>
        <Divider/>
        <Table
          loading={isLoading}
          size={"middle"}
          rowKey="id"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={filteredOrders}
          expandable={{
            expandedRowRender: record => {
              return <Descriptions title="Order details">
                <Descriptions.Item label="Full address">{stringifyAddress(record.address)}</Descriptions.Item>
                <Descriptions.Item label="Phone number">{record.customer?.phoneNumber}</Descriptions.Item>
                <Descriptions.Item label="Email">{record.customer?.email}</Descriptions.Item>
                <Descriptions.Item label="Created">{record.createdAt}</Descriptions.Item>
                <Descriptions.Item label="WP Status">{record.orderStatus}</Descriptions.Item>
                <Descriptions.Item label="Order total price">{record.finalPrice}</Descriptions.Item>
              </Descriptions>
            },
            rowExpandable: record => true,
          }}
        />
      </Content>
      <Modal
        title="Are sure you want to delete order?"
        visible={isDeleteOrderConfirm}
        onOk={deleteOrderWithBoxes}
        confirmLoading={isDeleting}
        onCancel={() => {
          setTargetOrder(undefined);
          setDeleteOrderConfirm(false);
        }}
      >
        <Text>You are going to delete order <Text strong>{targetOrder?.orderNumber}</Text></Text>
      </Modal>
    </>
  )
}

export default OrdersPage;
