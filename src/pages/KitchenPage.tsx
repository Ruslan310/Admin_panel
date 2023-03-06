import React, {useEffect, useState} from 'react'

import {Input, Layout, Table, Tabs, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {today} from "../utils/utils";
import {WeekDay, WPOrder} from '../models';
import {DataStore} from "aws-amplify";
import {PROCESSING} from '../constants';

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
    const [isLoading, setLoading] = useState(true);
    const [searchName, setSearchName] = useState('')

    useEffect(() => {
        const subs = DataStore.observeQuery(WPOrder, order => order.WPOrderStatus.eq(PROCESSING))
            .subscribe(msg => {
                if (msg.isSynced) {
                    let newItems: KitchenDish[] = [];
                    for (const order of msg.items) {
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
                    setLoading(false)
                }
            });
        return () => subs.unsubscribe()
    }, []);

    const fullNameFilter = (
        <>
            <Typography>Dish name</Typography>
            <Input
                placeholder="Search Name"
                value={searchName}
                onChange={e => {
                    const currValue = e.target.value;
                    setSearchName(currValue);
                }}
            />
        </>
    );

    const columns: ColumnsType<KitchenDish> = [
        {
            title: fullNameFilter,
            dataIndex: 'name',
            sorter: (a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            }
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
            <Title>Kitchen({kitchenDishes.length})</Title>
            <Tabs defaultActiveKey={selectedDay} onChange={(activeKey) => setSelectedDay(activeKey as WeekDay)}>
                {Object.values(WeekDay).map(weekDay => <TabPane
                    tab={`${weekDay} (${kitchenDishes.filter(dish => dish.weekDay === weekDay).length})`}
                    key={weekDay}/>)}
            </Tabs>
            <Table
                loading={isLoading}
                pagination={{defaultPageSize: 100, showSizeChanger: true, pageSizeOptions: ['10', '50', '100']}}
                size={"middle"}
                rowKey={(record, index) => record.name + record.dishType + record.quantity}
                columns={columns}
                dataSource={kitchenDishes.filter(dish => dish.weekDay === selectedDay).filter(dish => dish.name.toLowerCase().includes(searchName.toLowerCase()))}
            />
        </Content>
    )
}

export default KitchenPage
