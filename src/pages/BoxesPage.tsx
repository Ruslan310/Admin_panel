import React, {useEffect, useRef, useState} from 'react'

import {Button, Input, Layout, Modal, Spin, Table, Tabs, Typography} from 'antd';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import {ColumnsType} from "antd/es/table";
import moment from 'moment';
import jsPDF from "jspdf";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import {Box, BoxStatus, Role, User, WeekDay, WPOrder} from "../models";
import {DataStore} from "aws-amplify";
import {PROCESSING} from "../constants";

const {Content} = Layout;
const {TabPane} = Tabs;
const {Text, Title} = Typography;
const cyrillicToTranslit = new (CyrillicToTranslit as any)();

interface Sticker {
    orderNumber: string;
    customerName: string;
    dishName: string;
    driverName: string;
    company: string;
    qrCode: string;
    boxId: string;
}

interface OrdersByDay {
    quantity: number;
    weekDay: WeekDay | keyof typeof WeekDay;
}

const today = moment().format('dddd');
const BoxesPage: React.FC = () => {
    const [selectedDay, setSelectedDay] = useState<WeekDay>(today.toUpperCase() as WeekDay);
    const [boxes, setBoxes] = useState<Box[]>([]);
    const [isLoading, setLoading] = useState(true)
    const [generatingStickers, setGeneratingStickers] = useState(false)
    const [ordersByDays, setOrdersByDays] = useState<OrdersByDay[]>([])
    const [searchName, setSearchName] = useState('')

    useEffect(() => {
        DataStore.query(Box, box => box.WPOrder.WPOrderStatus.eq(PROCESSING)).then(boxes => {
            if (boxes) {
                setBoxes(boxes)
            }
            isLoading && setLoading(false)
            DataStore.query(WPOrder, order => order.WPOrderStatus.eq(PROCESSING)).then(orders => {
                const newOrdersByDays: OrdersByDay[] = []
                for (const weekDay of Object.values(WeekDay)) {
                    newOrdersByDays.push({weekDay, quantity: orders.filter(order => boxes.filter(box => box.wporderID === order.id && box.weekDay === weekDay).length > 0).length})
                }
                setOrdersByDays(newOrdersByDays)
            })
        })
    }, []);

    // const updateOrderBoxesStatuses = async () => {
    //     const notActiveOrders = await DataStore.query(WPOrder, order => order.WPOrderStatus.ne(PROCESSING))
    //     for (const box of boxes) {
    //         if (notActiveOrders.find(order => order.id === box.wporderID) && box.boxStatus === BoxStatus.NEW) {
    //             await DataStore.save(
    //                 Box.copyOf(box, updated => {
    //                     updated.boxStatus = BoxStatus.DELIVERED
    //                 })
    //             )
    //             console.log('BOX DELIVERED')
    //         }
    //     }
    // }

    const fullNameFilter = (
        <>
            <Typography>Dish name</Typography>
            <Input
                placeholder="Sticker"
                value={searchName}
                onChange={e => {
                    const currValue = e.target.value;
                    setSearchName(currValue);
                }}
            />
        </>
    );

    const columns: ColumnsType<Box> = [
        {
            title: fullNameFilter,
            dataIndex: 'sticker',
        },
        {
            title: 'Status',
            dataIndex: 'boxStatus',
        },
    ];

    const generatePdfForPrint = async (newOnly: boolean = false) => {
        setGeneratingStickers(true)
        try {
            const printBoxes: Sticker[] = [];
            const drivers = await DataStore.query(User, user => user.role.eq(Role.DELIVERY))
            const orders = await DataStore.query(WPOrder, order => order.WPOrderStatus.eq(PROCESSING))

            const currentDayBoxes = boxes.filter(box => {
                if (newOnly) {
                    return box.weekDay === selectedDay && box.boxStatus === BoxStatus.NEW;
                } else {
                    return box.weekDay === selectedDay;
                }
            });
            console.log(currentDayBoxes.length)
            if (currentDayBoxes.length === 0) {
                alert('Nothing to print!!');
            } else {
                for (let i = 0; i < currentDayBoxes.length; i++) {
                    const box = currentDayBoxes[i];
                    let order = orders.find(order => order.id === box.wporderID)
                    let driverName = order?.driverName || 'NA';
                    printBoxes.push({
                        orderNumber: order?.WPOrderNumber || "",
                        customerName: order?.customerName || "",
                        dishName: box.sticker,
                        driverName: driverName,
                        company: order?.companyName || "",
                        qrCode: box.qrCode,
                        boxId: box.id,
                    })
                }

                console.log('printBoxes: ', printBoxes.length)
                // let sortedStickers: Sticker[] = [];
                // for (const driver of drivers) {
                //     const stickers = printBoxes.filter(sticker => sticker.driverName === driver.firstName)
                //         .sort((a, b) => {
                //             if (a.dishName.toLowerCase().includes('salad')) return -1;
                //             return 1;
                //         });
                //     sortedStickers = sortedStickers.concat(stickers.filter(sticker => sticker.driverName === driver.firstName))
                // }
                //
                // sortedStickers = sortedStickers.concat(sortedStickers.concat(printBoxes.filter(sticker => sticker.driverName === 'NA')))
                // console.log('sortedStickers: ', printBoxes.length)

                const doc = new jsPDF({
                    orientation: 'l',
                    unit: 'mm',
                    format: [60, 45],
                });
                for (let i = 0; i < printBoxes.length; i++) {
                    const sticker = printBoxes[i]
                    if (i > 0) {
                        doc.addPage([60, 45], "l");
                    }
                    doc.addImage(sticker.qrCode, 0, 0, 20, 20)
                    doc.setFontSize(15);
                    doc.text(cyrillicToTranslit.transform(sticker.customerName.split(' ')[0], '_'), 20, 8,)
                    doc.text(cyrillicToTranslit.transform(sticker.customerName.split(' ')[1], '_'), 20, 16,)
                    doc.setFont("times", "bold");
                    doc.setFontSize(19);
                    doc.text(sticker.dishName.split("+")[0], 2, 24)
                    if (sticker.dishName.split("+").length > 1) {
                        doc.text(sticker.dishName.split("+")[1], 2, 32)
                    }
                    // if (sticker.driverName && sticker.driverName.includes('delivery')) {
                    //     doc.addImage(`assets/images/${sticker.driverName.toLowerCase()}.png`, 45, 34, 10, 10)
                    // }
                    doc.setFont("times", "normal");
                    doc.setFontSize(12);
                    doc.text(cyrillicToTranslit.transform(sticker.company.substr(0, 8), '_'), 2, 40)
                    doc.setFontSize(16);
                    doc.text(sticker.orderNumber, 20, 40)
                }
                let newPrefix = '';
                if (newOnly) {
                    newPrefix = 'NEW-';
                }
                doc.save(newPrefix + selectedDay + moment().format("-DD-MM-yyyy") + ".pdf")
            }
        } finally {
            setGeneratingStickers(false)
        }
    }

    const changeNewToPrinted = () => {
        Modal.confirm({
            title: 'Do you want to delete these items?',
            icon: <ExclamationCircleOutlined/>,
            content: 'Are you sure you printed all new stickers? You cannot undo this!!!',
            onOk() {
                return new Promise(async (resolve, reject) => {
                    const currentDayNewBoxes = boxes.filter(box => box.weekDay === selectedDay && box.boxStatus === BoxStatus.NEW);
                    for (const box of currentDayNewBoxes) {
                        await DataStore.save(
                            Box.copyOf(box, updated => {
                                updated.boxStatus = BoxStatus.PRINTED
                            })
                        );
                        console.log('UPDATED')
                    }
                    resolve(true);
                }).catch(() => console.log('Oops errors!'));
            },
            onCancel() {
            },
        });
    };

    if (generatingStickers) return <Spin size="large"/>

    return (
        <Content>
            {/*<Button onClick={async () => {*/}
            {/*    await updateOrderBoxesStatuses()*/}
            {/*}} type="default">*/}
            {/*    Sync orders from wp*/}
            {/*</Button>*/}
            <Title>Boxes</Title>
            <Button size={"large"} onClick={() => generatePdfForPrint()} type="default" htmlType="submit">
                <>
                    <Text keyboard>Print </Text>
                    <Text keyboard strong>{selectedDay}</Text>
                </>
            </Button>
            <Button style={{marginLeft: 20}} size={"large"} onClick={() => generatePdfForPrint(true)} type="dashed"
                    htmlType="submit">
                <>
                    <Text style={{color: "green", fontWeight: "bold"}}>NEW ONLY
                        ({boxes.filter(box => box.weekDay === selectedDay && box.boxStatus === BoxStatus.NEW).length})</Text>
                </>
            </Button>
            <Button style={{marginLeft: 20}} size={"large"} onClick={changeNewToPrinted} type="dashed"
                    htmlType="submit">
                <>
                    <Text style={{color: "red", fontWeight: "bold"}}>SET NEW TO PRINTED
                        ({boxes.filter(box => box.weekDay === selectedDay && box.boxStatus === BoxStatus.NEW).length})</Text>
                </>
            </Button>
            <Tabs defaultActiveKey={selectedDay} onChange={(activeKey) => setSelectedDay(activeKey as WeekDay)}>
                {Object.values(WeekDay).map(weekDay => <TabPane
                    tab={`${weekDay} (${boxes.filter(box => box.weekDay === weekDay).length}), people(${ordersByDays.find(or => or.weekDay === weekDay)?.quantity})`} key={weekDay}/>)}
            </Tabs>
            {/*<Space>*/}
            {/*  <Button onClick={async () => {*/}
            {/*    for (const box of boxes.filter(box => box.weekDay === selectedDay)) {*/}
            {/*      await DataStore.save(*/}
            {/*        Box.copyOf(box, updated => {*/}
            {/*          updated.boxStatus = BoxStatus.PRINTED;*/}
            {/*        })*/}
            {/*      );*/}
            {/*    }*/}
            {/*  }} type="primary" htmlType="submit">*/}
            {/*    Change status*/}
            {/*  </Button>*/}
            {/*</Space>*/}
            <Table
                pagination={{defaultPageSize: 100, showSizeChanger: true, pageSizeOptions: ['10', '50', '100']}}
                size={"middle"}
                rowKey="id"
                loading={isLoading}
                columns={columns}
                dataSource={boxes.filter(box => box.weekDay === selectedDay).filter(box => box.sticker.toLowerCase().includes(searchName.toLowerCase()))}
            />
        </Content>
    )
}

export default BoxesPage
