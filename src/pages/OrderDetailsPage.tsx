import React, {useEffect, useState} from 'react'

import {Checkbox, Descriptions, Divider, Layout, Table, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {useParams} from 'react-router-dom';
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {stringifyAddress} from "../utils/utils";
import {fetchCoordinate, fetchOrder, fetchUser} from "../graphql/requests";
import {DataStore} from "aws-amplify";
import {Box, Customer, WeekDay, WPDish, WPOrder} from "../models";

const {Content} = Layout;
const {Title} = Typography;

const OrderDetailsPage: React.FC = () => {
  const {orderId} = useParams<{
    orderId: string
  }>();
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [filteredBoxes, setFilteredBoxes] = useState<Box[]>([]);
  const [dishes, setDishes] = useState<WPDish[]>();
  const [filteredDishes, setFilteredDishes] = useState<WPDish[]>();
  const [currentOrder, setCurrentOrder] = useState<WPOrder>();
  const [isLoading, setLoading] = useState(true)
  const [checkedList, setCheckedList] = React.useState<WeekDay[]>(Object.values(WeekDay));
  const [indeterminate, setIndeterminate] = React.useState(false);
  const [checkAll, setCheckAll] = React.useState(true);

  useEffect(() => {
      const subs = DataStore.observeQuery(WPOrder, order => order.id.eq(orderId))
          .subscribe(async msg => {
            const order = msg.items[0]
            setCurrentOrder(order)
            const dishes = await order.WPDishes
            dishes && setDishes(dishes);
            dishes && setFilteredDishes(dishes);
            const boxes = await order.boxes.toArray()
            boxes && setBoxes(boxes);
            boxes && setFilteredBoxes(boxes);
            setLoading(false)
          });
  }, []);

  const onChange = (list: any) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < Object.values(WeekDay).length);
    setCheckAll(list.length === Object.values(WeekDay).length);
    const currentFilteredDishes = dishes?.filter(dish => list.includes(dish.weekDay as WeekDay))
    const currentFilteredBoxes = boxes.filter(box => list.includes(box!.weekDay as WeekDay))
    setFilteredDishes(currentFilteredDishes);
    setFilteredBoxes(currentFilteredBoxes as Box[]);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? Object.values(WeekDay) : []);
    if (e.target.checked) {
      setFilteredBoxes(boxes as Box[])
      setFilteredDishes(dishes)
    } else {
      setFilteredBoxes([])
      setFilteredDishes([])
    }
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const boxesColumns: ColumnsType<Box> = [
    {
      title: 'Sticker',
      render: (value, record, index) => {
        return record.sticker
      },
    },
    {
      title: 'Status',
      render: (value, record, index) => {
        return record.boxStatus
      },
    },
    {
      title: 'Week day',
      render: (value, record, index) => {
        return record.weekDay
      },
    },
  ];

  const dishesColumns: ColumnsType<WPDish> = [
    {
      title: 'Name',
      render: (value, record, index) => {
        return record.name
      },
    },
    {
      title: 'Dish type',
      render: (value, record, index) => {
        return record.dishType
      },
    },
    {
      title: 'Quantity',
      render: (value, record, index) => {
        return record.quantity
      },
    },
    {
      title: 'Week day',
      render: (value, record, index) => {
        return record.weekDay
      },
    },
  ];

  return (
    <Content>
      {currentOrder && <Descriptions title="Order details">
        <Descriptions.Item label="Full address">{currentOrder.customerAddress}</Descriptions.Item>
        <Descriptions.Item label="Full name">{currentOrder.customerName}</Descriptions.Item>
        <Descriptions.Item label="Phone number">{currentOrder.customerPhoneNumber}</Descriptions.Item>
        <Descriptions.Item label="Email">{currentOrder.customerEmail}</Descriptions.Item>
        <Descriptions.Item label="Created">{currentOrder.createdAt}</Descriptions.Item>
        <Descriptions.Item label="WP Status">{currentOrder.WPOrderStatus}</Descriptions.Item>
        <Descriptions.Item label="Order total price">{currentOrder.finalPrice}</Descriptions.Item>
        <Descriptions.Item label="Assigned driver">{currentOrder.driverName}</Descriptions.Item>
      </Descriptions>}
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        ALL DAYS
      </Checkbox>
      <Divider/>
      <Checkbox.Group options={Object.values(WeekDay)} value={checkedList} onChange={onChange}/>
      <Divider/>
      <Title>Boxes</Title>
      <Table
        loading={isLoading}
        size={"middle"}
        rowKey="id"
        columns={boxesColumns}
        dataSource={filteredBoxes}
      />
      <Title>Dishes</Title>
      <Table
        loading={isLoading}
        size={"middle"}
        rowKey={(record, index) => {
          return index ? index.toString() : '';
        }}
        columns={dishesColumns}
        dataSource={filteredDishes}
      />
    </Content>
  )
}

export default OrderDetailsPage;
