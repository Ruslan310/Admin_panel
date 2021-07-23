import React, {useState} from 'react'

import {Button, Layout, Progress, Radio, Space} from 'antd';
import Title from "antd/es/typography/Title";
import {DataStore} from 'aws-amplify';
import {Order} from "../models";
import moment from "moment-timezone";
moment.tz.setDefault("Africa/Nouakchott");

const friday = 5;
const week = 7;

const {Content} = Layout;
const initialStartDate = moment().day(friday);
const initialEndDate = moment().day(friday + week);
initialStartDate.set({hour: 9, minute: 30, second: 0});
initialEndDate.set({hour: 9, minute: 30, second: 0});

const AddressesPage: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);

  console.log(startDate.format("HH:mm DD-MM"))
  console.log(endDate.format("HH:mm DD-MM"))
  return (
    <Content>
      <Title>Reports</Title>
      <Space direction={"vertical"}>
        <Button onClick={async () => {
          const orders = await DataStore.query(Order, order => order.createdAtWp("between", [startDate.unix(), endDate.unix()]));
          console.log(orders);
        }} type="primary" htmlType="submit">
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
      </Space>
      {progress > 0 && <Progress percent={progress}/>}
    </Content>
  )
}

export default AddressesPage

