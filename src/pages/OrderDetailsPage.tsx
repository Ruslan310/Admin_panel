import React, {useEffect, useState} from 'react'

import {Checkbox, Descriptions, Divider, Layout, Table, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {useParams} from 'react-router-dom';
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {stringifyAddress} from "../utils/utils";
import {fetchCoordinate, fetchOrder, fetchUser} from "../graphql/requests";
import {Box, Customer, WEEK_DAY, WPDish, WPOrder} from "../API";

const {Content} = Layout;
const {Title} = Typography;

const OrderDetailsPage: React.FC = () => {
  const {orderId} = useParams<{
    orderId: string
  }>();
  const [boxes, setBoxes] = useState<(Box | null)[]>([]);
  const [filteredBoxes, setFilteredBoxes] = useState<(Box)[]>([]);
  const [filteredDishes, setFilteredDishes] = useState<WPDish[]>();
  const [currentOrder, setCurrentOrder] = useState<WPOrder>();
  const [isLoading, setLoading] = useState(true)
  const [checkedList, setCheckedList] = React.useState<WEEK_DAY[]>(Object.values(WEEK_DAY));
  const [indeterminate, setIndeterminate] = React.useState(false);
  const [checkAll, setCheckAll] = React.useState(true);
  const [assignedDriver, setAssignedDriver] = React.useState<string>();

  const loadCurrentOrder = async () => {
    const fetchedOrder = await fetchOrder(orderId);
    setCurrentOrder(fetchedOrder);
    if (fetchedOrder.WPDishes) {
      setFilteredDishes(fetchedOrder.WPDishes);
    }
    if (fetchedOrder.WPOrderBoxes?.items) {
      setBoxes(fetchedOrder.WPOrderBoxes.items);
      setFilteredBoxes((fetchedOrder.WPOrderBoxes!.items as Box[]).filter(box => checkedList.includes(box!.weekDay as WEEK_DAY)));
    }
    if (fetchedOrder && fetchedOrder.address) {
      await loadAssignedDriverName(fetchedOrder)
    }
    setLoading(false)
  }

  useEffect(() => {
    loadCurrentOrder();
  }, []);

  const fullName = (customer?: Customer | null) => {
    return `${customer?.firstName} ${customer?.lastName}`
  }

  const onChange = (list: any) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < Object.values(WEEK_DAY).length);
    setCheckAll(list.length === Object.values(WEEK_DAY).length);
    const currentFilteredDishes = currentOrder?.WPDishes?.filter(dish => list.includes(dish.weekDay as WEEK_DAY))
    const currentFilteredBoxes = boxes.filter(box => list.includes(box!.weekDay as WEEK_DAY))
    setFilteredDishes(currentFilteredDishes);
    setFilteredBoxes(currentFilteredBoxes as Box[]);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? Object.values(WEEK_DAY) : []);
    if (e.target.checked) {
      setFilteredBoxes(boxes as Box[])
      if (currentOrder?.WPDishes) {
        setFilteredDishes(currentOrder?.WPDishes)
      }
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

  const loadAssignedDriverName = async (order: WPOrder): Promise<void> => {
    if (order.address?.coordinateID) {
      const coordinate = await fetchCoordinate(
        order.address?.coordinateID
      );
      if (coordinate?.userID) {
        const driver = await fetchUser(coordinate.userID);
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
        <Descriptions.Item label="Full name">{fullName(currentOrder.customer)}</Descriptions.Item>
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
      <Checkbox.Group options={Object.values(WEEK_DAY)} value={checkedList} onChange={onChange}/>
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
