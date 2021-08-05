import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {Layout, Table, Tabs, Typography} from 'antd';
import {WPOrder, WporderStatus, WeekDay} from "../models";
import {ColumnsType} from "antd/es/table";
import {today} from "../utils/utils";

const {Content} = Layout;
const {TabPane} = Tabs;
const {Title} = Typography;

interface KitchenDish {
  name: string;
  dishType: string;
  quantity: number;
  weekDay: WeekDay | keyof typeof WeekDay;
}

const KitchenPage: React.FC = () => {
  const [kitchenDishes, setKitchenDishes] = useState<KitchenDish[]>([]);
  const [selectedDay, setSelectedDay] = useState<WeekDay>(today.toUpperCase() as WeekDay);

  const fetchOrders = async () => {
    const fetchedOrders = await DataStore.query(WPOrder, order => order.WPOrderStatus("eq", WporderStatus.PROCESSING));
    let newItems: KitchenDish[] = [];
    for (const order of fetchedOrders) {
      if (order.WPDishes) {
        for (const dish of order.WPDishes) {
          let found = newItems.find(kitchenDish => kitchenDish.name === dish.name);
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
    fetchOrders();

    const ordersSubscription = DataStore.observe(WPOrder).subscribe(async (message) => {
      await fetchOrders();
    });

    return () => {
      ordersSubscription.unsubscribe();
    }
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
      <Tabs defaultActiveKey={selectedDay} onChange={(activeKey) => setSelectedDay(activeKey as WeekDay)}>
        {Object.values(WeekDay).map(weekDay => <TabPane tab={`${weekDay} (${kitchenDishes.filter(dish => dish.weekDay === weekDay).length})`} key={weekDay}/>)}
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
