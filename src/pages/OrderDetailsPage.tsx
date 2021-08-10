import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {Checkbox, Descriptions, Divider, Layout, Table, Typography} from 'antd';
import {Address, Box, Coordinate, Customer, WPDish, WPOrder, User, WeekDay, WporderStatus} from "../models";
import {ColumnsType} from "antd/es/table";
import {useParams} from 'react-router-dom';
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {stringifyAddress} from "../utils/utils";

const {Content} = Layout;
const {Title} = Typography;

const OrderDetailsPage: React.FC = () => {
  const {orderId} = useParams<{
    orderId: string
  }>();
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [filteredBoxes, setFilteredBoxes] = useState<Box[]>([]);
  const [filteredDishes, setFilteredDishes] = useState<(WPDish)[]>();
  const [currentOrder, setCurrentOrder] = useState<WPOrder>();
  const [isLoading, setLoading] = useState(true)
  const [checkedList, setCheckedList] = React.useState<WeekDay[]>(Object.values(WeekDay));
  const [indeterminate, setIndeterminate] = React.useState(false);
  const [checkAll, setCheckAll] = React.useState(true);
  const [assignedDriver, setAssignedDriver] = React.useState<string>();

  const fetchBoxes = async () => {
    const fetchedBoxes = await DataStore.query(Box);
    setBoxes(fetchedBoxes);
    setFilteredBoxes(fetchedBoxes.filter(box => checkedList.includes(box.weekDay as WeekDay)));
  }

  const fetchCurrentOrder = async () => {
    const fetchedOrder = await DataStore.query(WPOrder, orderId);
    setCurrentOrder(fetchedOrder);
    setFilteredDishes(fetchedOrder?.WPDishes);
    if (fetchedOrder && fetchedOrder.address) {
      await loadAssignedDriverName(fetchedOrder.address.id)
    }
  }

  useEffect(() => {
    fetchCurrentOrder();
    fetchBoxes();
    setLoading(false)

    const boxesSubscription = DataStore.observe(Box).subscribe(async (message) => {
      fetchCurrentOrder();
      await fetchBoxes();
    });

    return () => {
      boxesSubscription.unsubscribe();
    }
  }, []);

  const fullName = (customer: Customer) => {
    return `${customer.firstName} ${customer.lastName}`
  }

  const onChange = (list: any) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < Object.values(WeekDay).length);
    setCheckAll(list.length === Object.values(WeekDay).length);
    const currentFilteredDishes = currentOrder?.WPDishes?.filter(dish => list.includes(dish.weekDay as WeekDay))
    const currentFilteredBoxes = boxes.filter(box => list.includes(box.weekDay as WeekDay))
    setFilteredDishes(currentFilteredDishes);
    setFilteredBoxes(currentFilteredBoxes);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? Object.values(WeekDay) : []);
    if (e.target.checked) {
      setFilteredBoxes(boxes)
      setFilteredDishes(currentOrder?.WPDishes)
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

  const loadAssignedDriverName = async (addressId: string): Promise<void> => {
    const address = await DataStore.query(Address, addressId);
    if (address?.coordinateID) {
      const coordinate = await DataStore.query(Coordinate, address.coordinateID);
      console.log(coordinate)
      if (coordinate?.userID) {
        const driver = await DataStore.query(User, coordinate.userID);
        setAssignedDriver(driver?.email);
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
        <Descriptions.Item label="WP Status">{currentOrder.WPOrderStatus}</Descriptions.Item>
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
