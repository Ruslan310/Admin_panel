import React, {useState} from 'react'

import {Button, Layout, Progress} from 'antd';
import Title from "antd/es/typography/Title";
import { DataStore } from 'aws-amplify';
import {Order} from "../models";
import moment from "moment";



const {Content} = Layout;

const AddressesPage: React.FC = () => {
  const [progress, setProgress] = useState(0);

  return (
    <Content>
      <Title>Reports</Title>
      <Button onClick={async () => {
        console.log(moment().day(5))
        // const orders = await DataStore.query(Order, order => order.createdAtWp("between", ));
      }} type="primary" htmlType="submit">
        Generate
      </Button>
      {progress > 0 && <Progress percent={progress} />}
    </Content>
  )
}

export default AddressesPage

