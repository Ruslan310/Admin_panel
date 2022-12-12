import React, {useState} from 'react'

import {
  Button,
  Checkbox,
  DatePicker,
  DatePickerProps,
  Input,
  InputNumber,
  Layout,
  Progress,
  Radio,
  Space,
  Typography
} from 'antd';
import moment, {Moment} from "moment-timezone";
import {RangePickerProps} from "antd/es/date-picker";
import {DataStore} from "aws-amplify";
import {WPOrder} from "../models";
import {PROCESSING} from "../constants";
import {fullName} from "../utils/utils";
import {Data} from "react-csv/components/CommonPropTypes";
import {CSVLink} from "react-csv";

const {Text, Title} = Typography;

moment.tz.setDefault("Africa/Nouakchott");

const friday = 5;
const week = 7;

const {Content} = Layout;

const { RangePicker } = DatePicker;

const ReportsPage: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [startDate, setStartDate] = useState<Moment | undefined>();
  const [endDate, setEndDate] = useState<Moment | undefined>();
  const [csvData, setCsvData] = useState<Data>([]);

  return (
    <Content>
      <Title>Reports</Title>
      <Space direction={"vertical"}>
        <RangePicker
            format="DD-MM-YYYY"
            onChange={(
                value,
                dateString,
            ) => {
              if (value) {
                setStartDate(value[0] as Moment)
                setEndDate(value[1] as Moment)
              }
            }}
        />
        <Button disabled={!startDate && !endDate} onClick={async () => {
          if (startDate && endDate) {
            // const orders = await DataStore.query(WPOrder, order => order.and(order => [
            //   order.createdAtWp.between(startDate.unix(), endDate.unix())
            // ]));
            // setProgress(1);
            // let count = 1;
            // let coef = 100;
            // for (const order of orders) {
            //
            //   setProgress(Math.ceil((count / orders.length) * 100))
            //   count++;
            // }
            // setProgress(100)
            // setCsvData(invoice);
          }
        }} type="primary">
          Generate report dishes popularity
        </Button>
      </Space>
      {progress > 0 && <Progress percent={progress}/>}
      {progress === 100 && <CSVLink data={csvData}>Download report</CSVLink>}
    </Content>
  )
}

export default ReportsPage

