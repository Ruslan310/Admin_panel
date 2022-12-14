import React, {useEffect, useState} from 'react'

import {Button, Layout, Modal, Spin, Table, Tabs, Typography} from 'antd';
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

interface Sticker {
    orderNumber: string;
    customerName: string;
    dishName: string;
    driverName: string;
    company: string;
    qrCode: string;
    boxId: string;
}

const BoxesPage: React.FC = () => {
    const [selectedDay, setSelectedDay] = useState<WeekDay>(moment().format('dddd') as WeekDay);
    const [boxes, setBoxes] = useState<Box[]>([]);
    const [isLoading, setLoading] = useState(true)
    const [generatingStickers, setGeneratingStickers] = useState(false)

    const syncBoxes = () => {
        setLoading(true)
        const subs = DataStore.observeQuery(Box, box => box.WPOrder.WPOrderStatus.eq(PROCESSING))
            .subscribe(msg => {
                if (msg.isSynced) {
                    console.log('synced: ', msg.items)
                    setBoxes(msg.items)
                    console.log('unsubscribe')
                    subs.unsubscribe()
                    setLoading(false)
                } else {
                    if (msg.items.length > 0) {
                        console.log('not synced: ', msg.items.length)
                        setBoxes(msg.items)
                        setLoading(false)
                    }
                }
            });
    }

    useEffect(() => {
        console.log(moment().format('dddd') as WeekDay)
        setSelectedDay(moment().format('dddd') as WeekDay)
        DataStore.query(Box, box => box.WPOrder.WPOrderStatus.eq(PROCESSING)).then(boxes => {
            setBoxes(boxes)
            isLoading && setLoading(false)
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

    const columns: ColumnsType<Box> = [
        {
            title: 'Sticker',
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

                let sortedStickers: Sticker[] = [];
                for (const driver of drivers) {
                    const stickers = printBoxes.filter(sticker => sticker.driverName === driver.firstName)
                        .sort((a, b) => {
                            if (a.dishName.toLowerCase().includes('salad')) return -1;
                            return 1;
                        });
                    sortedStickers = sortedStickers.concat(printBoxes.filter(sticker => sticker.driverName === driver.firstName))
                }

                sortedStickers = sortedStickers.concat(sortedStickers.concat(printBoxes.filter(sticker => sticker.driverName === 'NA')))

                const doc = new jsPDF({
                    orientation: 'l',
                    unit: 'mm',
                    format: [60, 45],
                });
                for (let i = 0; i < sortedStickers.length; i++) {
                    const sticker = sortedStickers[i]
                    if (i > 0) {
                        doc.addPage([60, 45], "l");
                    }
                    doc.addImage(sticker.qrCode, 0, 0, 20, 20)
                    doc.setFontSize(15);
                    doc.text(sticker.customerName.split(' ')[0], 20, 8,)
                    doc.text(sticker.customerName.split(' ')[1], 20, 16,)
                    doc.setFont("times", "bold");
                    doc.setFontSize(19);
                    doc.text(sticker.dishName.split("+")[0], 2, 24)
                    if (sticker.dishName.split("+").length > 1) {
                        doc.text(sticker.dishName.split("+")[1], 2, 32)
                    }
                    if (sticker.driverName && sticker.driverName !== 'NA') {
                        doc.addImage(`assets/images/${sticker.driverName.toLowerCase()}.png`, 45, 34, 10, 10)
                    }
                    doc.setFont("times", "normal");
                    doc.setFontSize(12);
                    doc.text(sticker.company.substr(0, 8), 2, 40)
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
            <Button style={{marginLeft: 20}} size={"large"} onClick={syncBoxes} type="dashed"
                    htmlType="submit">
                <>
                    <Text style={{color: "blue", fontWeight: "bold"}}>SYNC BOXES</Text>
                </>
            </Button>
            <Tabs defaultActiveKey={selectedDay} onChange={(activeKey) => setSelectedDay(activeKey as WeekDay)}>
                {Object.values(WeekDay).map(weekDay => <TabPane
                    tab={`${weekDay} (${boxes.filter(box => box.weekDay === weekDay).length})`} key={weekDay}/>)}
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
                dataSource={boxes.filter(box => box.weekDay === selectedDay)}
            />
        </Content>
    )
}

export default BoxesPage
