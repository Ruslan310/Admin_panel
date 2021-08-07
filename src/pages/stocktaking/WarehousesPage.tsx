import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {Layout, Table, Typography} from 'antd';
import {ColumnsType} from "antd/es/table";
import {Warehouse} from "../../models";
import {stringifyAddress} from "../../utils/utils";

const {Content} = Layout;
const {Title} = Typography;

const WarehousesPage: React.FC = () => {
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);

  const fetchWarehouses = async () => {
    const fetchedWarehouses = await DataStore.query(Warehouse);
    console.log('warehoueses:', warehouses);
    setWarehouses(fetchedWarehouses);
  }

  useEffect(() => {
    fetchWarehouses();

    const warehousesSubscription = DataStore.observe(Warehouse).subscribe(async (message) => {
      await fetchWarehouses();
    });

    return () => {
      warehousesSubscription.unsubscribe();
    }
  }, []);

  const columns: ColumnsType<Warehouse> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Address',
      render: (value, record, index) => {
        return stringifyAddress(record.address)
      },
    },
  ];

  return (
    <Content>
      <Title>Warehouses ({warehouses.length})</Title>
      {/*<Button onClick={async () => {*/}
      {/*  for (const warehouse of warehouses) {*/}
      {/*    await DataStore.delete(Warehouse, warehouse.id);*/}
      {/*  }*/}
      {/*}} type="primary" htmlType="submit">*/}
      {/*  Delete all warehouses*/}
      {/*</Button>*/}
      <Table
        size={"middle"}
        rowKey="id"
        columns={columns}
        dataSource={warehouses}
      />
    </Content>
  )
}

export default WarehousesPage

