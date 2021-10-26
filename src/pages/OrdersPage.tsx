import React, {useEffect, useState} from 'react'

import {
  Button,
  Checkbox,
  Col,
  Descriptions,
  Divider,
  Input,
  Layout,
  Modal,
  Row,
  Select, Space,
  Table,
  Typography
} from 'antd';
import {Key} from 'antd/lib/table/interface';
import {ColumnsType} from "antd/es/table";
import {useHistory} from "react-router-dom";
import {fullName, stringifyAddress} from "../utils/utils";
import moment from "moment-timezone";
import {fetchAddresses, fetchCoordinate, fetchOrdersByStatus, fetchUser, updateWPOrder} from "../graphql/requests";
import {Address, WPOrder, WPORDER_STATUS} from "../API";

moment.tz.setDefault("Africa/Nouakchott");

const {Content} = Layout;
const {Text, Title} = Typography;

const width300 = {width: 300}

const OrdersPage: React.FC = () => {
  const history = useHistory();
  const [orders, setOrders] = useState<WPOrder[]>([]);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<WPOrder[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])
  const [isLoading, setLoading] = useState(true)
  const [checkedStatusesList, setCheckedStatusesList] = React.useState<WPORDER_STATUS[]>([WPORDER_STATUS.PROCESSING]);
  const [searchName, setSearchName] = useState('')
  const [searchNumber, setSearchNumber] = useState('')
  const [assignedDriverName, setAssignedDriverName] = useState<string>('Not assigned')
  const [isDeleteOrderConfirm, setDeleteOrderConfirm] = useState(false)
  const [isDeleting, setDeleting] = useState(false)
  const [targetOrder, setTargetOrder] = useState<WPOrder>()

  const loadOrders = async () => {
    const concatOrders = [];
    for (const status of checkedStatusesList) {
      const fetchedOrders = await fetchOrdersByStatus(status);
      console.log('orders with status ', status, ' fetched: ', fetchedOrders.length)
      concatOrders.push(...fetchedOrders);
    }
    console.log('all orders', concatOrders.length)
    setOrders(concatOrders);
    setFilteredOrders(concatOrders)
    setLoading(false)
  }

  const loadAddresses = async () => {
    const fetchedAddresses = await fetchAddresses();
    console.log('addresses for orders fetched: ', fetchedAddresses.length)
    setAddresses(fetchedAddresses);
  }

  useEffect(() => {
    loadOrders();
    loadAddresses();
  }, []);

  const onSelectChange = (selectedRowKeys: Key[]) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
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
              .filter(order => order.WPOrderNumber?.toLowerCase().includes(currValue.toLowerCase()));
            setFilteredOrders(filteredData);
          }}
        />
      </Col>
    </Row>
  );

  // const deleteOrderWithBoxes = async (orderId?: string) => {
  //   setDeleting(true)
  //   if (orderId) {
  //     const boxes = await DataStore.query(Box, box => box.WPOrderID("eq", orderId))
  //     if (boxes) {
  //       for (const box of boxes) {
  //         await DataStore.delete(Box, box.id)
  //       }
  //     }
  //     await DataStore.delete(WPOrder, orderId);
  //   }
  //   setDeleting(false)
  //   setTargetOrder(undefined);
  //   setDeleteOrderConfirm(false);
  // }

  const columns: ColumnsType<WPOrder> = [
    {
      title: orderNumberFilter,
      dataIndex: 'WPOrderNumber',
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
        return <Button type={'link'} onClick={() => loadAssignedDriverName(record)}>Driver</Button>
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
      title: 'Address',
      render: (value, record, index) => {
        return <Select
          placeholder="Change address"
          showSearch
          style={width300}
          filterOption={(input, option) => {
            return option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }}
          value={record.address?.id}
          onSelect={async (value) => {
            await updateWPOrder({
              _version: record._version,
              addressID: value, id:
              record.id,
              wPOrderAddressId: value
            })
          }}>
          {addresses.map((address) => <Select.Option key={address.id}
                                                     value={address.id}>{stringifyAddress(address)}</Select.Option>)}
        </Select>
      },
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

  const loadAssignedDriverName = async (order: WPOrder): Promise<void> => {
    if (order.address?.coordinateID) {
      const coordinate = await fetchCoordinate(order.address.coordinateID);
      if (coordinate.userID) {
        const driver = await fetchUser(coordinate.userID);
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
        <Space>
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
        </Space>
        <Checkbox.Group options={Object.values(WPORDER_STATUS)} value={checkedStatusesList} onChange={(list) => {
          setCheckedStatusesList(list as Array<WPORDER_STATUS>);
          setFilteredOrders(
            orders
              .filter(order => order.WPOrderNumber?.toLowerCase().includes(searchNumber.toLowerCase()))
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
                <Descriptions.Item label="WP Status">{record.WPOrderStatus}</Descriptions.Item>
                <Descriptions.Item label="Order total price">{record.finalPrice}</Descriptions.Item>
              </Descriptions>
            },
            rowExpandable: record => true,
          }}
        />
      </Content>
      {/*<Modal*/}
      {/*  title="Are sure you want to delete order?"*/}
      {/*  visible={isDeleteOrderConfirm}*/}
      {/*  onOk={() => deleteOrderWithBoxes(targetOrder?.id)}*/}
      {/*  confirmLoading={isDeleting}*/}
      {/*  onCancel={() => {*/}
      {/*    setTargetOrder(undefined);*/}
      {/*    setDeleteOrderConfirm(false);*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Text>You are going to delete order <Text strong>{targetOrder?.WPOrderNumber}</Text></Text>*/}
      {/*</Modal>*/}
    </>
  )
}

export default OrdersPage;
