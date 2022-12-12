import React, {useState} from 'react'
import {CSVLink} from "react-csv";

import {Button, Checkbox, Input, InputNumber, Layout, Progress, Radio, Space, Typography} from 'antd';
import moment from "moment-timezone";
import {fullName} from "../utils/utils";
import {Data} from "react-csv/components/CommonPropTypes";
import {DataStore} from "aws-amplify";
import {WPOrder} from "../models";
import {PROCESSING} from "../constants";

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

const InvoicesPage: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);
  const [targetCompany, setTargetCompany] = useState('');
  const [companyCoverage, setCompanyCoverage] = useState(0);
  const [csvData, setCsvData] = useState<Data>([]);
  const [isWithoutTax, setWithoutTax] = useState(false);

  return (
    <Content>
      <Title>Invoices</Title>
      <Space direction={"vertical"}>
        <Button onClick={async () => {
          const orders = await DataStore.query(WPOrder, order => order.and(order => [
              order.createdAtWp.between(startDate.unix(), endDate.unix()),
              order.WPOrderStatus.ne(PROCESSING)
          ]));
          const companyOrders = orders.filter(order => {
            return targetCompany ? order.companyName?.toLowerCase().includes(targetCompany.toLowerCase()) : true
          })
          const invoice: InvoiceOrderItem[] = [];
          setProgress(1);
          let count = 1;
          let coef = 100;
          if (isWithoutTax) {
            coef = 95;
          }
          for (const order of companyOrders) {
            const customer = await order.customer
            const found = invoice.find(item => fullName(customer) === item.fullName);
            if (found) {
              found.total = Math.ceil((found.total + order.finalPrice) * coef) / 100;
            } else {
              const newItem: InvoiceOrderItem = {
                fullName: fullName(customer),
                total: Math.ceil(order.finalPrice * coef) / 100,
                companyPayment: 0,
                customerPayment: 0,
              };
              invoice.push(newItem)
            }
            count++;
            setProgress(Math.ceil((count/companyOrders.length)*90))
          }
          for (const invoiceItem of invoice) {
            if (invoiceItem.total > companyCoverage) {
              invoiceItem.customerPayment = Math.ceil((invoiceItem.total - companyCoverage) * 100) / 100;
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
          <InputNumber<number> value={companyCoverage} onChange={(e) => e && setCompanyCoverage(e)}/>
        </Space>
        <Checkbox
          checked={isWithoutTax}
          onChange={(e) => {
            setWithoutTax(e.target.checked)
          }}>Without 5% tax</Checkbox>
      </Space>
      {progress > 0 && <Progress percent={progress}/>}
      {progress === 100 && <CSVLink data={csvData}>Download invoice</CSVLink>}
    </Content>
  )
}

export default InvoicesPage

