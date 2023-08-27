import React, {useEffect, useState} from 'react'
import {CSVLink} from "react-csv";

import {
  Button,
  Checkbox,
  Input,
  InputNumber,
  Layout,
  Progress,
  Radio,
  Space,
  Typography,
  DatePicker,
  Select
} from 'antd';
import moment, {Moment} from "moment-timezone";
import {fullName} from "../utils/utils";
import {Data} from "react-csv/components/CommonPropTypes";
import {DataStore} from "aws-amplify";
import {Company, Customer, WPOrder} from "../models";
import {PROCESSING} from "../constants";

const {Text, Title} = Typography;

moment.tz.setDefault("Africa/Nouakchott");

const friday = 5;
const week = 7;
const width300 = {width: 300}

const {Content} = Layout;
const initialStartDate = moment().day(friday - week);
const initialEndDate = moment().day(friday);
initialStartDate.set({hour: 9, minute: 30, second: 0});
initialEndDate.set({hour: 9, minute: 30, second: 0});

interface InvoiceOrderItem {
  fullName: string,
  total: number,
  customerPayment: number | undefined,
  companyPayment: number,
}

const InvoicesPage: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);
  const [targetCompany, setTargetCompany] = useState('');
  const [companyCoverage, setCompanyCoverage] = useState(0);
  const [csvData, setCsvData] = useState<Data>([]);
  const [isWithoutTax, setWithoutTax] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isCompaniesLoading, setCompaniesLoading] = useState(true);

  const [startDatePicker, setStartDatePicker] = useState<Moment | undefined>();
  const [endDatePicker, setEndDatePicker] = useState<Moment | undefined>();
  const [selectedCompany, setSelectedCompany] = useState('');

  useEffect(() => {
    const compSubs = DataStore.observeQuery(Company).subscribe(msg => {
      if (msg.items.length > 0) {
        setCompanies(msg.items)
        isCompaniesLoading && setCompaniesLoading(false)
      }
    });
    return () => compSubs.unsubscribe();
  }, []);

  useEffect(() => {
    if (startDatePicker && endDatePicker && startDatePicker.format("DD-MM")>=endDatePicker.format("DD-MM")) {
      setEndDatePicker(undefined)
    }
    if (startDatePicker && endDatePicker && startDatePicker.format("DD-MM")>=endDatePicker.format("DD-MM")) {
      setEndDatePicker(undefined)
    }
  }, [startDatePicker, endDatePicker])


  const headers = [
    {
      label: "FullName",
      key: "fullName"
    },
    {
      label: "Total",
      key: "total"
    },
    {
      label: "Company Payment",
      key: "companyPayment"
    },
    {
      label: "Customer Payment",
      key: "customerPayment"
    },
  ];

  return (
    <Content>
      <Title>Invoices</Title>
      <Space direction={"vertical"}>
        <Button onClick={async () => {
          let atDate = startDatePicker && endDatePicker ? startDatePicker : startDate
          let toDate = startDatePicker && endDatePicker ? endDatePicker : endDate
          let testCompany = selectedCompany ? selectedCompany : targetCompany
          const orders = await DataStore.query(WPOrder, order => order.and(order => [
              order.createdAtWp.between(atDate.unix(), toDate.unix()),
              order.WPOrderStatus.ne(PROCESSING)
          ]));
          const companyOrders = orders.filter(order => {
            return testCompany ? order.companyName?.toLowerCase().includes(testCompany.toLowerCase()) : true
          })
          const invoice: InvoiceOrderItem[] = [];
          setProgress(1);
          let count = 1;
          let coef = 100;
          if (isWithoutTax) {
            coef = 95;
          }
          console.log('companyOrders: ', companyOrders)
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

          let amountTotal = 0
          let amountCompanyPayment = 0

          for (const getTotal of invoice) {
            amountTotal = amountTotal + getTotal.total;
            amountCompanyPayment = amountCompanyPayment + getTotal.companyPayment;
          }

          const totalValue: InvoiceOrderItem = {
            fullName: 'Total',
            total: amountTotal,
            companyPayment: amountCompanyPayment,
            customerPayment: undefined,
          };
          invoice.push(totalValue)

          setProgress(100)
          setCsvData(invoice);
        }} type="primary">{
          startDatePicker && endDatePicker
              ? `Generate (${startDatePicker.format("DD-MM")}-${endDatePicker.format("DD-MM")})`
              : `Generate (${startDate.format("DD-MM")}-${endDate.format("DD-MM")})`
        }
        </Button>
        <div className="gutter-row">
          <DatePicker
              value={startDatePicker}
              onChange={(value) => {
                if (value) {
                  setStartDatePicker(value as Moment)
                }
              }}
          />
          <DatePicker
              value={endDatePicker}
              onChange={(value) => {
                if (value) {
                  setEndDatePicker(value as Moment)
                }
              }}
          />
        </div>
        <Radio.Group onChange={(e) => {
          const value = e.target.value;
          const newStartDate = moment().day(friday + week * (value - 1));
          const newEndDate = moment().day(friday + week * value);
          newStartDate.set({hour: 9, minute: 30, second: 0});
          newEndDate.set({hour: 9, minute: 30, second: 0});
          setEndDate(newEndDate);
          setStartDate(newStartDate);
          setStartDatePicker(undefined)
          setEndDatePicker(undefined)
        }} defaultValue={0}>
          <Radio.Button value={0}>Current week</Radio.Button>
          <Radio.Button value={-1}>Last week</Radio.Button>
          <Radio.Button value={-2}>2 week ago</Radio.Button>
          <Radio.Button value={-3}>3 weeks ago</Radio.Button>
        </Radio.Group>
        <Space>
          <Text>Company name: </Text>
          <Input placeholder="Enter name" value={targetCompany} onChange={(e) => {
            if(selectedCompany) setSelectedCompany('')
            setTargetCompany(e.target.value)
          }}/>
        </Space>
        <Space>
          <Text>"For test" Company name: </Text>
          <Select<string, { value: string; children: string }>
            placeholder="Select company"
            showSearch
            filterOption={(input, option) =>
              option ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
            }
            value={selectedCompany}
            style={width300}
            onSelect={value => {
              if(selectedCompany) setTargetCompany('')
              setSelectedCompany(value)
            }}>
            {companies.map((el) => <Select.Option key={el.id} value={el.name}>{el.name}</Select.Option>)}
          </Select>
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
      {progress === 100 && <CSVLink headers={headers} data={csvData}>Download invoice</CSVLink>}
      {/*{progress === 100 && <CSVLink separator={";"} headers={headers} data={csvData}>Download invoice</CSVLink>}*/}
    </Content>
  )
}

export default InvoicesPage

