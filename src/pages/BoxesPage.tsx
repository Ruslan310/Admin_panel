import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {Button, Layout, Table, Tabs, Typography} from 'antd';
import {Box, Customer, WporderStatus, WeekDay} from "../models";
import {ColumnsType} from "antd/es/table";
import moment from 'moment';
import jsPDF from "jspdf";

const {Content} = Layout;
const {TabPane} = Tabs;
const {Text, Title} = Typography;

interface Sticker {
  orderNumber: string;
  firstName: string;
  lastName: string;
  dishName: string;
  driverName: string;
  company: string;
  qrCode: string;
  boxId: string;
}

const today = moment().format('dddd');
const BoxesPage: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<WeekDay>(today.toUpperCase() as WeekDay);
  const [boxes, setBoxes] = useState<Box[]>([]);

  const fetchBoxes = async () => {
    const fetchedBoxes = (await DataStore.query(Box)).filter(box => box.WPOrder?.WPOrderStatus === WporderStatus.PROCESSING);
    setBoxes(fetchedBoxes);
  }

  useEffect(() => {
    fetchBoxes();

    const boxesSubscription = DataStore.observe(Box).subscribe(async (message) => {
      await fetchBoxes();
    });

    return () => {
      boxesSubscription.unsubscribe();
    }
  }, []);

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

  const generatePdfForPrint = async () => {
    console.log('selcted day:', selectedDay)
    const printBoxes: Sticker[] = [];

    const currentDayBoxes = boxes.filter(box => box.weekDay === selectedDay);
    for (let i = 0; i < currentDayBoxes.length; i++) {
      const box = currentDayBoxes[i];
      let customer;
      if (box.WPOrder?.customerID) {
        customer = await DataStore.query(Customer, box.WPOrder.customerID)
      }
      if (!customer) {
        console.log('cannot find customer', box.WPOrder?.customerID)
      }
      printBoxes.push({
        orderNumber: box.WPOrder?.WPOrderNumber || "",
        firstName: customer?.firstName || "",
        lastName: customer?.lastName || "",
        dishName: box.sticker,
        driverName: '',
        company: customer?.company || "",
        qrCode: box.qrCode,
        boxId: box.id,
      })
    }

    // let sortedStickers: Sticker[] = [];
    // for (const user of users) {
    //   const stickers = printBoxes.filter(sticker => sticker.driverId === user.id)
    //     .sort((a, b) => {
    //       if (a.dishName.toLowerCase().includes('salad')) return -1;
    //       return 1;
    //     });
    //   sortedStickers = sortedStickers.concat(stickers)
    // }

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
      doc.text(sticker.firstName, 20, 8,)
      doc.text(sticker.lastName, 20, 16,)
      doc.setFont("times", "bold");
      doc.setFontSize(19);
      doc.text(sticker.dishName.split("+")[0], 2, 24)
      if (sticker.dishName.split("+").length > 1) {
        doc.text(sticker.dishName.split("+")[1], 2, 32)
      }
      if (sticker.driverName) {
        doc.addImage(`assets/images/${sticker.driverName.toLowerCase()}.png`, 45, 34, 10, 10)
      }
      doc.setFont("times", "normal");
      doc.setFontSize(12);
      doc.text(sticker.company.substr(0, 8), 2, 40)
      doc.setFontSize(16);
      doc.text(sticker.orderNumber, 20, 40)
    }
    doc.save(selectedDay + moment().format("-DD-MM-yyyy") + ".pdf")
  }

  return (
    <Content>
      <Title>Boxes</Title>
      <Button size={"large"} onClick={generatePdfForPrint} type="default" htmlType="submit">
        <>
          <Text keyboard>Print </Text>
          <Text keyboard strong>{selectedDay}</Text>
        </>
      </Button>
      <Tabs defaultActiveKey={selectedDay} onChange={(activeKey) => setSelectedDay(activeKey as WeekDay)}>
        {Object.values(WeekDay).map(weekDay => <TabPane
          tab={`${weekDay} (${boxes.filter(box => box.weekDay === weekDay).length})`} key={weekDay}/>)}
      </Tabs>
      <Table
        pagination={{defaultPageSize: 100, showSizeChanger: true, pageSizeOptions: ['10', '50', '100']}}
        size={"middle"}
        rowKey="id"
        columns={columns}
        dataSource={boxes.filter(box => box.weekDay === selectedDay)}
      />
    </Content>
  )
}

export default BoxesPage
