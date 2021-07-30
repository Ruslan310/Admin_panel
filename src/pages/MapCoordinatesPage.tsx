import React, {useEffect, useState} from 'react'
import {DataStore} from 'aws-amplify'

import {
  Button,
  Checkbox,
  Col,
  Layout,
  List,
  Modal,
  Radio,
  Select,
  Space,
  Spin,
  Table, Tabs,
  Typography
} from 'antd';
import {Address, Coordinate, Order, OrderStatus, Role, User, WeekDay} from "../models";
import {ColumnsType} from "antd/es/table";
import Title from "antd/es/typography/Title";
import {stringifyAddress, today} from "../utils/utils";
import ManyPointsMapComponent from "../components/ManyPointsMapComponent";

const {Content} = Layout;
const {Text} = Typography;
const {TabPane} = Tabs;

const width300 = {width: 300}

export interface GeoAddress {
  id: string,
  latitude: number,
  longitude: number,
  drivers: string[],
}

export interface Body {
  clusters: number,
  drivers: string[],
  addresses: GeoAddress[]
}

interface CoordinateWithOrders {
  coordinate: Coordinate,
  orders: Order[],
}

const MapCoordinatesPage: React.FC = () => {
  const [coordinatesWithOrdersCurrentDay, setCoordinatesWithOrdersCurrentDay] = useState<CoordinateWithOrders[]>([]);
  const [drivers, setDrivers] = useState<User[]>([]);
  const [selectedDrivers, setSelectedDrivers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isDriversAssigning, setDriversAssigning] = useState(false);
  const [isDriversModalVisible, setDriversModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState<WeekDay>(today.toUpperCase() as WeekDay);
  const [driverOnMap, setDriverOnMap] = useState(null);

  const fetchCoordinates = async (weekDay?: WeekDay) => {
    console.log('selected day:', selectedDay)
    const fetchedCoordinates = await DataStore.query(Coordinate);
    const fetchedCoordinatesWithOrders = [];
    for (const fetchedCoordinate of fetchedCoordinates) {
      const coordinateWithOrders: CoordinateWithOrders = {
        coordinate: fetchedCoordinate,
        orders: [],
      };
      const coordinateAddresses = await DataStore.query(Address, address => address.coordinateID("eq", fetchedCoordinate.id))
      for (const coordinateAddress of coordinateAddresses) {
        const addressOrders = await DataStore.query(Order, order => order
            .addressID("eq", coordinateAddress.id)
          // .orderStatus("eq", OrderStatus.PROCESSING)
        );
        const targetWeekday = weekDay ? weekDay : selectedDay;
        for (const addressOrder of addressOrders) {
          if (addressOrder.dishes?.find(dish => dish.weekDay === targetWeekday)) {
            coordinateWithOrders.orders.push(addressOrder)
          }
        }
      }
      if (coordinateWithOrders.orders.length > 0) {
        fetchedCoordinatesWithOrders.push(coordinateWithOrders);
      }
    }
    setCoordinatesWithOrdersCurrentDay([...fetchedCoordinatesWithOrders])
  }

  const fetchDrivers = async () => {
    const fetchedDrivers = await DataStore.query(User, user => user.role("eq", Role.DELIVERY));
    setDrivers(fetchedDrivers);
    setSelectedDrivers(fetchedDrivers);
  }

  useEffect(() => {
    setLoading(true);
    fetchCoordinates();
    fetchDrivers();
    const driversSubscription = DataStore.observe(User).subscribe(async (message) => {
      await fetchDrivers();
    });

    setLoading(false);
    return () => {
      driversSubscription.unsubscribe();
    }

  }, []);

  const columns: ColumnsType<CoordinateWithOrders> = [
    {
      title: 'Name',
      render: (value, record, index) => {
        return record.coordinate.name
      },
    },
    {
      title: 'Order amount',
      render: (value, record, index) => {
        return record.orders.length
      },
    },
    {
      title: 'Link to map',
      render: (value, record, index) => {
        return <a target={"_blank"}
                  href={`https://www.google.com/maps/place/${record.coordinate.latitude},${record.coordinate.longitude}`}>{`https://www.google.com/maps/place/${record.coordinate.longitude},${record.coordinate.latitude}`}</a>
      },
    },
    {
      title: 'Set driver',
      render: (value, record, index) => {
        return <Select
          placeholder="Select driver"
          showSearch
          disabled={isDriversAssigning}
          filterOption={(input, option) =>
            option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          value={record.coordinate.userID}
          style={width300}
          onSelect={async (value) => {
            await DataStore.save(
              Coordinate.copyOf(record.coordinate, updated => {
                updated.userID = value;
              })
            );
          }}>
          {drivers.map((driver) => <Select.Option key={driver.id}
                                                  value={driver.id}>{driver.email}</Select.Option>)}
        </Select>
      },
      width: 500,
    },
  ];

  const driversAutoAssign = async () => {
    if (selectedDrivers.length === 0) return;
    setDriversAssigning(true)
    if (selectedDrivers.length === 1) {
      for (const coordinateWithOrder of coordinatesWithOrdersCurrentDay) {
        await DataStore.save(Coordinate.copyOf(coordinateWithOrder.coordinate, updated => {
          updated.userID = selectedDrivers[0].id;
        }));
      }
    } else {
      let body: Body = {
        addresses: [],
        clusters: selectedDrivers.length,
        drivers: selectedDrivers.map(driver => driver.id)
      };
      for (const coordinateWithOrder of coordinatesWithOrdersCurrentDay) {
        const geo: GeoAddress = {
          drivers: [],
          id: coordinateWithOrder.coordinate.id,
          latitude: coordinateWithOrder.coordinate.latitude,
          longitude: coordinateWithOrder.coordinate.longitude
        }
        body.addresses.push(geo)
      }
      const result = await fetch('https://gkjmmh4hi0.execute-api.us-east-1.amazonaws.com/getClusters', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      })
      const clusters = await result.json();
      for (let key in clusters) {
        if (clusters.hasOwnProperty(key)) {
          let clusterCoordinates = clusters[key];
          for (const clusterCoordinate of clusterCoordinates) {
            const coordinate = await DataStore.query(Coordinate, clusterCoordinate)
            if (coordinate) {
              await DataStore.save(
                Coordinate.copyOf(coordinate, updated => {
                  updated.userID = key;
                })
              );
            }
          }
        }
      }
    }
    setDriversAssigning(false)
    setDriversModalVisible(false);
  }

  const renderMaps = () => {
    if (isLoading || coordinatesWithOrdersCurrentDay.length === 0) return null;
    if (driverOnMap) {
      return drivers.map((driver) => {
        if (driver.id === driverOnMap) {
          return <ManyPointsMapComponent
            // @ts-ignore
            center={{lat: 34.6671732, lng: 33.0132906}}
            zoom={12}
            places={coordinatesWithOrdersCurrentDay.filter(coordinateWithOrders => coordinateWithOrders.coordinate.userID === driver.id).map(coordinate => coordinate.coordinate)}
          />
        }
      })
    } else {
      return <ManyPointsMapComponent
        // @ts-ignore
        center={{lat: 34.6671732, lng: 33.0132906}}
        zoom={12}
        places={coordinatesWithOrdersCurrentDay.map(coordinate => coordinate.coordinate)}
      />
    }
  }

  if (isLoading) {
    return <Spin size="large"/>
  }

  return (
    <>
      <Modal
        confirmLoading={isDriversAssigning}
        okButtonProps={{disabled: selectedDrivers.length === 0}}
        title="Select drivers to assign"
        visible={isDriversModalVisible}
        onOk={driversAutoAssign}
        onCancel={() => setDriversModalVisible(false)}>
        <Space direction="vertical">
          {selectedDrivers.length === 0 && <Text strong type="danger">And who do you think deliver it?</Text>}
          {drivers.map((driver) =>
            <Col span={8}>
              <Checkbox
                checked={selectedDrivers.includes(driver)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedDrivers([...selectedDrivers, driver])
                  } else {
                    setSelectedDrivers([...selectedDrivers.filter(sDriver => sDriver.id !== driver.id)])
                  }
                }}>{driver.email}</Checkbox>
            </Col>)}
        </Space>
      </Modal>
      <Content>
        <Title>Coordinates ({coordinatesWithOrdersCurrentDay.length})</Title>
        <Button
          loading={isDriversAssigning}
          disabled={isDriversAssigning}
          onClick={() => setDriversModalVisible(true)} type="primary">
          Auto assign drivers
        </Button>
        <Tabs defaultActiveKey={selectedDay} onChange={(activeKey) => {
          setLoading(true);
          fetchCoordinates(activeKey as WeekDay);
          setSelectedDay(activeKey as WeekDay)
          setLoading(false);
        }}>
          {Object.values(WeekDay).map(weekDay => <TabPane tab={`${weekDay}`} key={weekDay}/>)}
        </Tabs>
        <Table
          size={"middle"}
          rowKey="id"
          columns={columns}
          dataSource={coordinatesWithOrdersCurrentDay}
          expandable={{
            expandedRowRender: record => {
              return <List
                size="small"
                dataSource={record.orders}
                renderItem={item =>
                  <List.Item
                    key={item.id}>{item.orderNumber} {item.customer?.firstName} {item.customer?.lastName} {item.customer?.company}</List.Item>}
              />
            },
            rowExpandable: record => true,
          }}
        />
        <Radio.Group size={"large"} onChange={(e) => {
          if (e.target.value === "all") {
            setDriverOnMap(null);
          } else {
            setDriverOnMap(e.target.value);
          }
        }} defaultValue="all">
          <Radio.Button value="all">All drivers ({coordinatesWithOrdersCurrentDay.length})</Radio.Button>
          {drivers.map((driver => <Radio.Button
            value={driver.id}>{driver.email} ({coordinatesWithOrdersCurrentDay.filter(coordinateWithOrders => coordinateWithOrders.coordinate.userID === driver.id).length})</Radio.Button>))}
        </Radio.Group>
        <div style={{height: 30}}/>
        {renderMaps()}
      </Content>
    </>
  )
}

export default MapCoordinatesPage

