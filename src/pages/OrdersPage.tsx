import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {Button, Col, Descriptions, Input, Layout, Modal, Row, Table, Typography} from 'antd';
import {Address, Coordinate, Customer, Order, User} from "../models";
import {Key} from 'antd/lib/table/interface';
import {ColumnsType} from "antd/es/table";
import Title from "antd/es/typography/Title";
import {useHistory} from "react-router-dom";

const {Content} = Layout;

const OrdersPage: React.FC = () => {
  const history = useHistory();
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])
  const [isLoading, setLoading] = useState(true)
  const [searchName, setSearchName] = useState('')
  const [searchNumber, setSearchNumber] = useState('')
  const [assignedDriverName, setAssignedDriverName] = useState<string>()

  useEffect(() => {
    (async () => {
      const fetchedOrders = await DataStore.query(Order);
      console.log(fetchedOrders)

      if (fetchedOrders.length > 0) {
        setOrders(fetchedOrders);
        setFilteredOrders(fetchedOrders);
        setLoading(false)
      }

      DataStore.observe(Order).subscribe(async (message) => {
        if (message.opType === 'INSERT') {
          console.log('message:', message)
          const newOrder = await DataStore.query(Order, message.element.id) as Order;
          fetchedOrders.push(newOrder);
          setOrders([...fetchedOrders]);
          setFilteredOrders([...fetchedOrders]);
          if (isLoading && fetchedOrders.length > 0) {
            setLoading(false)
          }
        }
      });
    })();
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

  const stringifyAddress = (address?: Address) => {
    return `${address?.postCode}, ${address?.city}, ${address?.address1}, ${address?.address2}`
  }

  const fullName = (customer?: Customer) => {
    return `${customer?.firstName} ${customer?.lastName}`
  }

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
            const filteredData = orders.filter((order: Order) => {
                return fullName(order.customer).toLowerCase().includes(currValue.toLowerCase())
              }
            );
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
            const filteredData = orders.filter((order: Order) => {
                return order.orderNumber?.toLowerCase().includes(currValue.toLowerCase())
              }
            );
            setFilteredOrders(filteredData);
          }}
        />
      </Col>
    </Row>
  );

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
    }
  ];

  const loadAssignedDriverName = async (addressId?: string): Promise<void> => {
    if (!addressId) return ;
    const address = await DataStore.query(Address, addressId);
    if (address?.coordinateID) {
      const coordinate = await DataStore.query(Coordinate, address.coordinateID);
      if (coordinate?.userID) {
        const driver = await DataStore.query(User, coordinate.userID);
        setAssignedDriverName(driver?.firstName);
      }
    }
    Modal.info({
      title: 'Assigned driver:',
      content: (
        <Title level={2}>{assignedDriverName}</Title>
      ),
      onOk() {},
    });
  }

  return (
    <Content>
      <Title>Orders ({orders.length})</Title>
      <Table
        loading={isLoading}
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {},
          };
        }}
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
  )
}

export default OrdersPage
