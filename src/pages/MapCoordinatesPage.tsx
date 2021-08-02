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
import {ALL_DRIVERS} from "../constants";

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

interface CoordinatesByDays {
  MONDAY: CoordinateWithOrders[],
  TUESDAY: CoordinateWithOrders[],
  WEDNESDAY: CoordinateWithOrders[],
  THURSDAY: CoordinateWithOrders[],
  FRIDAY: CoordinateWithOrders[],
  SATURDAY: CoordinateWithOrders[],
  SUNDAY: CoordinateWithOrders[],
  WITHOUT_DAY: CoordinateWithOrders[],
}

const MapCoordinatesPage: React.FC = () => {
  const [coordinatesByDays, setCoordinatesByDays] = useState<CoordinatesByDays>({
    MONDAY: [],
    TUESDAY: [],
    WEDNESDAY: [],
    THURSDAY: [],
    FRIDAY: [],
    SATURDAY: [],
    SUNDAY: [],
    WITHOUT_DAY: [],
  });
  const [coordinates, setCoordinates] = useState<Coordinate[]>([]);
  const [drivers, setDrivers] = useState<User[]>([]);
  const [selectedDrivers, setSelectedDrivers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isDriversAssigning, setDriversAssigning] = useState(false);
  const [isDriversModalVisible, setDriversModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState<WeekDay>(today.toUpperCase() as WeekDay);
  const [driverOnMap, setDriverOnMap] = useState(ALL_DRIVERS);

  const fetchCoordinatesWithOrders = async () => {
    const fetchedCoordinates = await DataStore.query(Coordinate);
    const fetchedCoordinatesByDays: CoordinatesByDays = {
      MONDAY: [],
      TUESDAY: [],
      WEDNESDAY: [],
      THURSDAY: [],
      FRIDAY: [],
      SATURDAY: [],
      SUNDAY: [],
      WITHOUT_DAY: [],
    };
    for (const fetchedCoordinate of fetchedCoordinates) {
      const coordinateWithOrders: CoordinateWithOrders = {
        coordinate: fetchedCoordinate,
        orders: [],
      };
      const coordinateAddresses = await DataStore.query(Address, address => address.coordinateID("eq", fetchedCoordinate.id))
      for (const coordinateAddress of coordinateAddresses) {
        const addressOrders = await DataStore.query(Order, order => order
          .addressID("eq", coordinateAddress.id)
          .orderStatus("eq", OrderStatus.PROCESSING)
        );

        for (const addressOrder of addressOrders) {
          coordinateWithOrders.orders.push(addressOrder)
        }
      }

      let addedToDaysArray = false;
      for (const weekDay of Object.values(WeekDay)) {
        for (const order of coordinateWithOrders.orders) {
          if (addedToDaysArray) break;
          if (order.dishes) {
            for (const dish of order.dishes) {
              if (dish.weekDay === weekDay) {
                fetchedCoordinatesByDays[weekDay].push(coordinateWithOrders);
                addedToDaysArray = true;
                break;
              }
            }
          }
        }
        addedToDaysArray = false;
      }
    }
    setCoordinatesByDays(fetchedCoordinatesByDays)
  }

  const fetchCoordinates = async () => {
    const fetchedCoordinates = await DataStore.query(Coordinate);
    setCoordinates(fetchedCoordinates);
  }

  const fetchDrivers = async () => {
    const fetchedDrivers = await DataStore.query(User, user => user.role("eq", Role.DELIVERY));
    setDrivers(fetchedDrivers);
    setSelectedDrivers(fetchedDrivers);
  }

  const getCoordinatesForThisDay = (): Coordinate[] => {
    const coordinatesForTheDay: Coordinate[] = [];
    for (const coordinateForSelectedDay of coordinatesByDays[selectedDay]) {
      const foundInPureCoordinatesForThisFay = coordinates.find(coordinate => coordinate.id === coordinateForSelectedDay.coordinate.id)
      if (foundInPureCoordinatesForThisFay) {
        coordinatesForTheDay.push(foundInPureCoordinatesForThisFay);
      }
    }
    return coordinatesForTheDay;
  }

  const getOrdersForThisCoordinate = (targetCoordinateId: string): Order[] => {
    const targetOrders: Order[] = [];
    const targetCoordinateFromSelectedDays = coordinatesByDays[selectedDay].find(coordinate => coordinate.coordinate.id === targetCoordinateId);
    if (targetCoordinateFromSelectedDays) {
      for (const order of targetCoordinateFromSelectedDays.orders) {
        if (order.dishes) {
          for (const dish of order.dishes) {
            if (dish.weekDay === selectedDay) {
              targetOrders.push(order);
              break;
            }
          }
        }
      }
    }
    return targetOrders;
  }

  useEffect(() => {
    setLoading(true);
    fetchCoordinates();
    fetchCoordinatesWithOrders();
    fetchDrivers();
    const coordinatesSubscription = DataStore.observe(Coordinate).subscribe(async (message) => {
      console.log('RE-fetchCoordinates')
      await fetchCoordinates();
    });
    const driversSubscription = DataStore.observe(User).subscribe(async (message) => {
      await fetchDrivers();
    });

    setLoading(false);
    return () => {
      driversSubscription.unsubscribe();
      coordinatesSubscription.unsubscribe();
    }

  }, []);

  const columns: ColumnsType<Coordinate> = [
    {
      title: 'Name',
      render: (value, record, index) => {
        return record.name
      },
    },
    {
      title: 'Order amount',
      render: (value, record, index) => {
        return getOrdersForThisCoordinate(record.id).length
      },
    },
    {
      title: 'Link to map',
      render: (value, record, index) => {
        return <a target={"_blank"}
                  href={`https://www.google.com/maps/place/${record.latitude},${record.longitude}`}>{`https://www.google.com/maps/place/${record.longitude},${record.latitude}`}</a>
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
          value={record.userID}
          style={width300}
          onSelect={async (value) => {
            setLoading(true);
            await DataStore.save(
              Coordinate.copyOf(record, updated => {
                updated.userID = value;
              })
            );
            setTimeout(() => setLoading(false), 1000)
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
    const coordinatesToUpdate = getCoordinatesForThisDay();
    if (selectedDrivers.length === 1) {
      for (const coordinate of coordinatesToUpdate) {
        await DataStore.save(Coordinate.copyOf(coordinate, updated => {
          updated.userID = selectedDrivers[0].id;
        }));
      }
    } else {
      let body: Body = {
        addresses: [],
        clusters: selectedDrivers.length,
        drivers: selectedDrivers.map(driver => driver.id)
      };
      for (const coordinate of coordinatesToUpdate) {
        const geo: GeoAddress = {
          drivers: [],
          id: coordinate.id,
          latitude: coordinate.latitude,
          longitude: coordinate.longitude
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

  const renderMaps = (coordinates: Coordinate[]) => {
    if (isLoading || coordinates.length === 0) return null;
    if (driverOnMap === ALL_DRIVERS) {
      return <ManyPointsMapComponent
        // @ts-ignore
        center={{lat: 34.6671732, lng: 33.0132906}}
        zoom={12}
        places={coordinates}
      />
    } else if (driverOnMap) {
      return drivers.map((driver) => {
        if (driver.id === driverOnMap) {
          return <ManyPointsMapComponent
            // @ts-ignore
            center={{lat: 34.6671732, lng: 33.0132906}}
            zoom={12}
            places={coordinates.filter(coordinateWithOrders => coordinateWithOrders.userID === driver.id)}
          />
        } else {
          return null;
        }
      })
    }
  }

  const coordinatesForThisDay = getCoordinatesForThisDay();
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
        <Title>Coordinates ({coordinatesForThisDay.length})</Title>
        <Button
          loading={isDriversAssigning}
          disabled={isDriversAssigning}
          onClick={() => setDriversModalVisible(true)} type="primary">
          Auto assign drivers
        </Button>
        <Tabs defaultActiveKey={selectedDay} onChange={(activeKey) => {
          setLoading(true);
          setDriverOnMap(ALL_DRIVERS)
          setSelectedDay(activeKey as WeekDay)
          setTimeout(() => setLoading(false), 1000)
        }}>
          {Object.values(WeekDay).map(weekDay => <TabPane tab={`${weekDay}`} key={weekDay}/>)}
        </Tabs>
        <Table
          size={"middle"}
          rowKey="id"
          columns={columns}
          dataSource={coordinatesForThisDay}
          expandable={{
            expandedRowRender: record => {
              return <List
                size="small"
                dataSource={getOrdersForThisCoordinate(record.id)}
                renderItem={item =>
                  <List.Item
                    key={item.id}>{item.orderNumber} {item.customer?.firstName} {item.customer?.lastName} {item.customer?.company}</List.Item>}
              />
            },
            rowExpandable: record => true,
          }}
        />
        <Radio.Group size={"large"} onChange={(e) => setDriverOnMap(e.target.value.toLowerCase())} value={driverOnMap}>
          <Radio.Button value={ALL_DRIVERS}>All drivers ({coordinatesForThisDay.length})</Radio.Button>
          {drivers.map((driver => <Radio.Button
            value={driver.id}>{driver.email} ({coordinatesForThisDay.filter(coordinateWithOrders => coordinateWithOrders.userID === driver.id).length})</Radio.Button>))}
        </Radio.Group>
        <div style={{height: 30}}/>
        {renderMaps(coordinatesForThisDay)}
      </Content>
    </>
  )
}

export default MapCoordinatesPage

