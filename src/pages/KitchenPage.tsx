import React, {useEffect, useState} from 'react'

import {Layout, Table, Tabs, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {today} from "../utils/utils";
import {WEEK_DAY, WPORDER_STATUS} from "../API";
import {fetchOrdersByStatus} from "../graphql/requests";

const {Content} = Layout;
const {TabPane} = Tabs;
const {Title} = Typography;

interface KitchenDish {
  name: string;
  dishType: string;
  quantity: number;
  weekDay: WEEK_DAY | keyof typeof WEEK_DAY;
}

const KitchenPage: React.FC = () => {
  const [kitchenDishes, setKitchenDishes] = useState<KitchenDish[]>([]);
  const [selectedDay, setSelectedDay] = useState<WEEK_DAY>(today.toUpperCase() as WEEK_DAY);

  const loadOrders = async () => {
    console.log('start fetching orders for kitchen')
    const fetchedOrders = await fetchOrdersByStatus(WPORDER_STATUS.PROCESSING)
    console.log('orders for kitchen fetched: ', fetchedOrders.length)
    let newItems: KitchenDish[] = [];
    for (const order of fetchedOrders) {
      if (order.WPDishes) {
        for (const dish of order.WPDishes) {
          let found = newItems.find(kitchenDish => kitchenDish.name === dish.name && kitchenDish.weekDay === dish.weekDay);
          if (found) {
            found.quantity = found.quantity + dish.quantity
          } else {
            newItems.push(JSON.parse(JSON.stringify(dish)));
          }
        }
      }
    }
    setKitchenDishes(newItems);
  }

  useEffect(() => {
    loadOrders();
  }, []);

  const columns: ColumnsType<KitchenDish> = [
    {
      title: 'Dish name',
      dataIndex: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      defaultSortOrder: 'descend',
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
      title: 'Dish type',
      dataIndex: 'dishType',
      sorter: (a, b) => {
        if (a.dishType < b.dishType) {
          return -1;
        }
        if (a.dishType > b.dishType) {
          return 1;
        }
        return 0;
      }
    },
  ];

  return (
    <Content>
      <Title>Kitchen</Title>
      <Tabs defaultActiveKey={selectedDay} onChange={(activeKey) => setSelectedDay(activeKey as WEEK_DAY)}>
        {Object.values(WEEK_DAY).map(weekDay => <TabPane tab={`${weekDay} (${kitchenDishes.filter(dish => dish.weekDay === weekDay).length})`} key={weekDay}/>)}
      </Tabs>
      <Table
        pagination={{defaultPageSize: 100, showSizeChanger: true, pageSizeOptions: ['10', '50', '100']}}
        size={"middle"}
        rowKey={(record, index) => record.name + record.dishType + record.quantity}
        columns={columns}
        dataSource={kitchenDishes.filter(dish => dish.weekDay === selectedDay)}
      />
    </Content>
  )
}

export default KitchenPage
