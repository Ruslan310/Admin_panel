import React, {useState} from 'react'
import { CSVLink} from "react-csv";

import {Button, Input, InputNumber, Layout, Progress, Radio, Space, Typography} from 'antd';
import {DataStore} from 'aws-amplify';
import {WPOrder} from "../models";
import moment from "moment-timezone";
import {fullName} from "../utils/utils";
import {Data} from "react-csv/components/CommonPropTypes";

const {Text, Title} = Typography;

moment.tz.setDefault("Africa/Nouakchott");

const friday = 5;
const week = 7;

const {Content} = Layout;
const initialStartDate = moment().day(friday);
const initialEndDate = moment().day(friday + week);
initialStartDate.set({hour: 9, minute: 30, second: 0});
initialEndDate.set({hour: 9, minute: 30, second: 0});

interface InvoiceOrderItem {
  fullName: string,
  total: number,
  companyPayment: number,
  customerPayment: number,
}

const AddressesPage: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);
  const [targetCompany, setTargetCompany] = useState('');
  const [companyCoverage, setCompanyCoverage] = useState(0);
  const [csvData, setCsvData] = useState<Data>([]);

  return (
    <Content>
      <Title>Reports</Title>
      <Space direction={"vertical"}>
        <Button onClick={async () => {
          const orders = await DataStore.query(WPOrder, order => order.createdAtWp("between", [startDate.unix(), endDate.unix()]));
          const companyOrders = orders.filter(order => targetCompany ? order.customer?.company?.toLowerCase().includes(targetCompany) : true)
          const invoice: InvoiceOrderItem[] = [];
          setProgress(1);
          let count = 1;
          for (const order of companyOrders) {
            const found = invoice.find(item => fullName(order.customer) === item.fullName);
            if (found) {
              found.companyPayment = Math.round((found.companyPayment + order.finalPrice) * 100) / 100;
            } else {
              const newItem: InvoiceOrderItem = {
                fullName: fullName(order.customer),
                total: Math.round(order.finalPrice * 100) / 100,
                companyPayment: 0,
                customerPayment: 0,
              };
              invoice.push(newItem)
            }
            count++;
            setProgress(Math.round((count/companyOrders.length)*90))
          }
          for (const invoiceItem of invoice) {
            if (invoiceItem.total > companyCoverage) {
              invoiceItem.customerPayment = Math.round((invoiceItem.total - companyCoverage) * 100) / 100;
              invoiceItem.companyPayment = companyCoverage;
            } else {
              invoiceItem.companyPayment = invoiceItem.total;
            }
          }
          setProgress(100)
          setCsvData(invoice);
        }} type="primary">
          Generate ({startDate.format("DD-MM")}-{endDate.format("DD-MM")})
        </Button>
        <Radio.Group onChange={(e) => {
          const value = e.target.value;
          const newStartDate = moment().day(friday + week * (value - 1));
          const newEndDate = moment().day(friday + week * value);
          newStartDate.set({hour: 9, minute: 30, second: 0});
          newEndDate.set({hour: 9, minute: 30, second: 0});
          setEndDate(newEndDate);
          setStartDate(newStartDate);
        }} defaultValue={1}>
          <Radio.Button value={1}>Current week</Radio.Button>
          <Radio.Button value={0}>Last week</Radio.Button>
          <Radio.Button value={-1}>2 week ago</Radio.Button>
          <Radio.Button value={-2}>3 weeks ago</Radio.Button>
        </Radio.Group>
        <Space>
          <Text>Company name: </Text>
          <Input placeholder="Enter name" value={targetCompany} onChange={(e) => setTargetCompany(e.target.value)}/>
        </Space>
        <Space>
          <Text>Company coverage: </Text>
          <InputNumber<number> value={companyCoverage} onChange={(e) => setCompanyCoverage(e)}/>
        </Space>
      </Space>
      {progress > 0 && <Progress percent={progress}/>}
      {progress === 100 && <CSVLink data={csvData}>Download report</CSVLink>}
    </Content>
  )
}

export default AddressesPage

