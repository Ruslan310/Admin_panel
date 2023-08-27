import React, {useEffect, useState} from 'react';
import {
  Button,
  Input,
  Layout,
  Typography,
  Select,
  Table,
  Space, Progress
} from 'antd';
import {DataStore} from "aws-amplify";
import {Company, Customer, WeekDay, WPOrder} from "../models";
import {PROCESSING} from "../constants";
import {ColumnsType} from "antd/es/table";
import {today} from "../utils/utils";
import {CSVLink} from "react-csv";
import {Data} from "react-csv/components/CommonPropTypes";

const {Text, Title} = Typography;
const width300 = {width: 300}
const {Content} = Layout;

interface KitchenDish {
  name: string;
  dishType: string;
  quantity: number;
  weekDay: WeekDay | keyof typeof WeekDay;
}

interface KitchenDishIndividual {
  WPOrderNumber: string;
  customerName: string;
  customerEmail: string;
  name: string;
  dishType: string;
  quantity: number;
  weekDay: WeekDay | keyof typeof WeekDay;
}

interface OrderItem {
  name: string,
  quantity: number,
  dishType: string,
}
interface OrderIndividualItem {
  customer: string;
  name: string,
  quantity: number,
  dishType: string,
}

enum TypeDishMenu {
  KITCHEN = "Kitchen_Dishes",
  INDIVIDUAL = "Individual_Dishes",
}

const CompanyMenuPage = () => {
  const [progress, setProgress] = useState(0);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isCompaniesLoading, setCompaniesLoading] = useState(true);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [kitchenDishes, setKitchenDishes] = useState<KitchenDish[]>([]);
  const [kitchenIndividualDishes, setKitchenIndividualDishes] = useState<KitchenDishIndividual[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [searchName, setSearchName] = useState('')
  const [selectedDay, setSelectedDay] = useState<WeekDay>(today.toUpperCase() as WeekDay);
  const [csvData, setCsvData] = useState<Data>([]);
  const [isCustomers, setIsCustomers] = useState<boolean>(false);
  const [typeMenu, setTypeMenu] = useState<TypeDishMenu>();

  const filename = `${typeMenu}_${selectedCompany}_${selectedDay}`

  useEffect(() => {
    const compSubs = DataStore.observeQuery(Company).subscribe(msg => {
      if (msg.items.length > 0) {
        setCompanies(msg.items)
        isCompaniesLoading && setCompaniesLoading(false)
      }
    });
    const customers = DataStore
      .observeQuery(Customer, customer =>
      customer.and(customer => [customer.companyId.eq(null)]))
      .subscribe(msg => {
        setIsCustomers(!!msg.items.length)
      })
    return () => {
      compSubs.unsubscribe();
      customers.unsubscribe()
    };
  }, [])

  const fullNameFilter = (
    <>
      <Typography>Dish name</Typography>
      <Input
        placeholder="Search Name"
        value={searchName}
        onChange={e => {
          const currValue = e.target.value;
          setSearchName(currValue);
        }}
      />
    </>
  );

  const columns: ColumnsType<KitchenDish> = [
    {
      title: fullNameFilter,
      dataIndex: 'name',
      sorter: (a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      defaultSortOrder: 'descend',
      sorter: (a, b) => {
        if (a.quantity < b.quantity) {
          return -1;
        }
        if (a.quantity > b.quantity) {
          return 1;
        }
        return 0;
      }
    },
    {
      title: 'Dish type',
      dataIndex: 'dishType',
      sorter: (a, b) => {
        if (a.dishType < b.dishType) {
          return -1;
        }
        if (a.dishType > b.dishType) {
          return 1;
        }
        return 0;
      }
    },
  ];

  const headers = [
    {
      label: "Dish name",
        key: "name"
    },
    {
      label: "Quantity",
      key: "quantity"
    },
    {
      label: "Dish type",
      key: "dishType"
    },
  ];

  const individualheaders = [
    {
      label: "Customer",
      key: "customer"
    },
    {
      label: "Dish name",
      key: "name"
    },
    {
      label: "Quantity",
      key: "quantity"
    },
    {
      label: "Dish type",
      key: "dishType"
    },
  ];

  return (
    <Content>
      <Title>{`Company menu ${isCustomers ? '- without company' : ''}`}</Title>
      <Space direction={"vertical"} style={{marginBottom: 15}}>
        <Space>
          <Text> Select company: </Text>
          <Select<string, { value: string; children: string }>
            placeholder="Select company"
            showSearch
            filterOption={(input, option) =>
              option ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
            }
            value={selectedCompany}
            style={width300}
            onSelect={company => {
              setProgress(0)
              setKitchenDishes([])
              setSelectedCompany(company)
            }}>
            {companies.map((el) => <Select.Option key={el.id} value={el.name}>{el.name}</Select.Option>)}
          </Select>
        </Space>
        <Space>
          <Text> Select day: </Text>
          <Select<string, { value: string; children: string }>
            placeholder="Select company"
            showSearch
            filterOption={(input, option) =>
              option ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
            }
            value={selectedDay}
            style={width300}
            onSelect={(activeKey) => {
              setProgress(0)
              setSelectedDay(activeKey as WeekDay)
            }}>
            {Object.values(WeekDay).map((el) => <Select.Option key={el} value={el}>{el}</Select.Option>)}
          </Select>
        </Space>
        <Button disabled={isLoading || !selectedCompany} type="primary" onClick={async () => {
          setLoading(true)
          DataStore
            .observeQuery(WPOrder,
              order => order.and(order => [
                order.WPOrderStatus.eq(PROCESSING),
                order.companyName.eq(selectedCompany)
              ]))
            .subscribe(msg => {
              if (msg.isSynced) {
                console.log('synced: ', msg.items.length)
                let newItems: KitchenDish[] = [];
                let individualDish: KitchenDishIndividual[] = [];
                let filterOrderByCompany = msg.items.filter(order => order.companyName === selectedCompany)
                for (const order of filterOrderByCompany) {
                  if (order.WPDishes) {
                    for (const dish of order.WPDishes) {
                      let found = newItems.find(kitchenDish => kitchenDish.name === dish.name && kitchenDish.weekDay === dish.weekDay);
                      if (found) {
                        found.quantity = found.quantity + dish.quantity
                      } else {
                        newItems.push(JSON.parse(JSON.stringify(dish)));
                      }
                    }
                    for (const dish of order.WPDishes) {
                      individualDish.push(JSON.parse(JSON.stringify({
                        ...dish,
                        WPOrderNumber: order.WPOrderNumber,
                        customerName: order.customerName,
                        customerEmail: order.customerEmail,
                      })));
                    }
                  }
                }
                setKitchenIndividualDishes(individualDish);
                setKitchenDishes(newItems);
                setLoading(false)
              }
            });
        }}>
          Search
        </Button>
      <Space>
        {kitchenDishes && !!kitchenDishes.length && (
          <Button onClick={async () => {
            const companyOrders = kitchenDishes.filter(dish => dish.weekDay === selectedDay)
            const invoice: OrderItem[] = [];
            setProgress(1);
            let count = 1;
            console.log('companyOrders: ', companyOrders)
            for (const order of companyOrders) {
              const newItem: OrderItem = {
                name: order.name,
                quantity: order.quantity,
                dishType: order.dishType,
              };
              invoice.push(newItem)
              count++;
              setProgress(Math.ceil((count/companyOrders.length)*90))
            }
            setProgress(100)
            setCsvData(invoice);
            setTypeMenu(TypeDishMenu.KITCHEN)
          }} type="primary">
            Print menu
          </Button>
        )}
        {kitchenIndividualDishes && !!kitchenIndividualDishes.length && (
          <Button onClick={async () => {
            const companyOrders = kitchenIndividualDishes.filter(dish => dish.weekDay === selectedDay)
            const invoice: OrderIndividualItem[] = [];
            setProgress(1);
            let count = 1;
            console.log('companyOrders: ', companyOrders)
            for (const order of companyOrders) {
              const newItem: OrderIndividualItem = {
                customer: order.customerName,
                name: order.name,
                quantity: order.quantity,
                dishType: order.dishType,
              };
              invoice.push(newItem)
              count++;
              setProgress(Math.ceil((count/companyOrders.length)*90))
            }
            setProgress(100)
            setCsvData(invoice);
            setTypeMenu(TypeDishMenu.INDIVIDUAL)
          }} type="primary">
            Print individual menu
          </Button>
        )}
      </Space>

        {progress > 0 && kitchenDishes && !!kitchenDishes.length && <Progress percent={progress}/>}
        {progress === 100 && kitchenDishes && !!kitchenDishes.length && typeMenu === TypeDishMenu.KITCHEN &&
          <CSVLink filename={filename} headers={headers} data={csvData}>Download menu</CSVLink>
        }
        {progress === 100 && kitchenIndividualDishes && !!kitchenIndividualDishes.length && typeMenu === TypeDishMenu.INDIVIDUAL &&
          // <CSVLink separator={";"} headers={individualheaders} data={csvData}>Download individual menu</CSVLink>}
          <CSVLink filename={filename} headers={individualheaders} data={csvData}>Download individual menu</CSVLink>}
      </Space>
      <Table
        loading={isLoading}
        pagination={{defaultPageSize: 100, showSizeChanger: true, pageSizeOptions: ['10', '50', '100']}}
        size={"middle"}
        rowKey={(record, index) => record.name + record.dishType + record.quantity}
        columns={columns}
        dataSource={kitchenDishes.filter(dish => dish.weekDay === selectedDay).filter(dish => dish.name.toLowerCase().includes(searchName.toLowerCase()))}
      />
    </Content>
  )
};

export default CompanyMenuPage;
