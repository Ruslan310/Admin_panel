import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {Checkbox, Descriptions, Divider, Layout, Modal, Table} from 'antd';
import {Address, Box, Coordinates, Customer, Dish, Order, WeekDay} from "../models";
import {ColumnsType} from "antd/es/table";
import Title from "antd/es/typography/Title";
import {useParams} from 'react-router-dom';
import {CheckboxChangeEvent} from "antd/es/checkbox";

const {Content} = Layout;

const OrderDetailsPage: React.FC = () => {
  const {orderId} = useParams<{
    orderId: string
  }>();
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [filteredBoxes, setFilteredBoxes] = useState<Box[]>([]);
  const [filteredDishes, setFilteredDishes] = useState<(Dish)[]>();
  const [currentOrder, setCurrentOrder] = useState<Order>();
  const [isLoading, setLoading] = useState(true)
  const [checkedList, setCheckedList] = React.useState<WeekDay[]>(Object.values(WeekDay));
  const [indeterminate, setIndeterminate] = React.useState(false);
  const [checkAll, setCheckAll] = React.useState(true);
  const [assignedDriver, setAssignedDriver] = React.useState('');

  useEffect(() => {
    (async () => {
      const fetchedBoxes = await DataStore.query(Box, box => box.orderId("eq", orderId))
      const fetchedOrder = await DataStore.query(Order, orderId);
      setCurrentOrder(fetchedOrder);
      setFilteredDishes(fetchedOrder?.dishes);
      if (fetchedOrder && fetchedOrder.address) {
        await loadAssignedDriverName(fetchedOrder.address.id)
      }

      if (fetchedBoxes.length > 0) {
        setBoxes(fetchedBoxes);
        setFilteredBoxes(fetchedBoxes);
        setLoading(false)
      }

      DataStore.observe(Box).subscribe(async (message) => {
        if (message.opType === 'INSERT' && message.element.orderId === orderId) {
          const newBox = await DataStore.query(Box, message.element.id) as Box;
          fetchedBoxes.push(newBox);
          setBoxes([...fetchedBoxes]);
          setFilteredBoxes([...fetchedBoxes]);
          if (isLoading && fetchedBoxes.length > 0) {
            setLoading(false)
          }
        }
      });
    })();
  }, []);

  const stringifyAddress = (address?: Address) => {
    return `${address?.postCode}, ${address?.city}, ${address?.address1}, ${address?.address2}`
  }

  const fullName = (customer: Customer) => {
    return `${customer.firstName} ${customer.lastName}`
  }

  const onChange = (list: any) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < Object.values(WeekDay).length);
    setCheckAll(list.length === Object.values(WeekDay).length);
    const currentFilteredDishes = currentOrder?.dishes?.filter(dish => list.includes(dish.weekDay as WeekDay))
    const currentFilteredBoxes = boxes.filter(box => list.includes(box.weekDay as WeekDay))
    setFilteredDishes(currentFilteredDishes);
    setFilteredBoxes(currentFilteredBoxes);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? Object.values(WeekDay) : []);
    if (e.target.checked) {
      setFilteredBoxes(boxes)
      setFilteredDishes(currentOrder?.dishes)
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

  const dishesColumns: ColumnsType<Dish> = [
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

  const loadAssignedDriverName = async (addressId: string): Promise<void> => {
    const address = await DataStore.query(Address, addressId);
    if (address?.addressCoordinates) {
      const coordinates = await DataStore.query(Coordinates, address.addressCoordinates.id);
      console.log(coordinates)
      if (coordinates?.assignedDriverUser?.firstName) {
        setAssignedDriver(coordinates.assignedDriverUser.firstName);
      } else {
        setAssignedDriver('Not assigned');
      }
    } else {
      setAssignedDriver('Not assigned');
    }
  }

  return (
    <Content>
      {currentOrder && <Descriptions title="Order details">
        <Descriptions.Item label="Full address">{stringifyAddress(currentOrder.address)}</Descriptions.Item>
        <Descriptions.Item label="Phone number">{currentOrder.customer?.phoneNumber}</Descriptions.Item>
        <Descriptions.Item label="Email">{currentOrder.customer?.email}</Descriptions.Item>
        <Descriptions.Item label="Created">{currentOrder.createdAt}</Descriptions.Item>
        <Descriptions.Item label="WP Status">{currentOrder.orderStatus}</Descriptions.Item>
        <Descriptions.Item label="Order total price">{currentOrder.finalPrice}</Descriptions.Item>
        <Descriptions.Item label="Assigned driver">{assignedDriver}</Descriptions.Item>
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
