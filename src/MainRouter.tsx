import {Layout, Menu, Spin, Typography} from "antd";
import {
  CompassOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ReconciliationOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  FileSearchOutlined,
  CodeSandboxOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import {Link, Route} from "react-router-dom";
import OrdersPage from "./pages/OrdersPage";
import ProfilePage from "./pages/ProfilePage";
import React, {useEffect, useState} from "react";
import CoordinatesPage from "./pages/CoordinatesPage";
import AddressesPage from "./pages/AddressesPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import CustomersPage from "./pages/CustomersPage";
import KitchenPage from "./pages/KitchenPage";
import BoxesPage from "./pages/BoxesPage";
import ReportsPage from "./pages/ReportsPage";
import MapCoordinatesPage from "./pages/MapCoordinatesPage";
import {DataStore, Hub} from "aws-amplify";
import { LoadingOutlined } from '@ant-design/icons';
import WarehousesPage from "./pages/stocktaking/WarehousesPage";
import DepartmentsPage from "./pages/stocktaking/DepartmentsPage";

const antIcon = <LoadingOutlined style={{
  fontSize: 124,
  position: 'absolute',
  top: 200,
  left: '47%',
}} spin />;

// Return value should be component
const CustomSpinner = () => <Spin indicator={antIcon} />


const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

const MainRouter: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [isSyncing, setSyncing] = useState(true)

  const onCollapse = () => {
    setCollapsed(!collapsed)
  }

  useEffect(() => {
    console.log('useEffect router')
    DataStore.start();
    const listener = Hub.listen("datastore", async hubData => {
      const {event, data} = hubData.payload;
      console.log(event)
      if (event === "ready") {
        setSyncing(false)
      }
    })
    return () => {
      listener();
    }
  }, [])

  if (isSyncing) {
    return <CustomSpinner/>
  }

  const path = window.location.pathname.replace(new RegExp("/(\\w*)"), "$1")
  return <Layout style={{minHeight: '100vh'}}>
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}>
      <div className="logo"/>
      <Menu theme="dark" defaultSelectedKeys={[path ? path : 'orders']} mode="inline">
        <Menu.Item key="orders" icon={<ReconciliationOutlined/>}>
          <span>Orders</span>
          <Link to="/"/>
        </Menu.Item>
        <Menu.Item key="kitchen" icon={<FileSearchOutlined/>}>
          <span>Kitchen</span>
          <Link to="/kitchen"/>
        </Menu.Item>
        <Menu.Item key="boxes" icon={<CodeSandboxOutlined/>}>
          <span>Boxes</span>
          <Link to="/boxes"/>
        </Menu.Item>
        <SubMenu key="coordinatesSubMenu" icon={<CompassOutlined/>} title="Coordinates">
          <Menu.Item key="coordinates/dictionary">
            <span>Dictionary</span>
            <Link to="/coordinates/dictionary"/>
          </Menu.Item>
          <Menu.Item key="coordinates/map">
            <span>Days maps</span>
            <Link to="/coordinates/map"/>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="stocktakingSubMenu" icon={<ReconciliationOutlined />} title="Stocktaking">
          <Menu.Item key="stocktaking/warehouses">
            <span>Warehouses</span>
            <Link to="/stocktaking/warehouses"/>
          </Menu.Item>
          <Menu.Item key="stocktaking/departments">
            <span>Departments</span>
            <Link to="/stocktaking/departments"/>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="addresses" icon={<HomeOutlined/>}>
          <span>Addresses</span>
          <Link to="/addresses"/>
        </Menu.Item>
        <Menu.Item key="customers" icon={<UsergroupAddOutlined/>}>
          <span>Customers</span>
          <Link to="/customers"/>
        </Menu.Item>
        <Menu.Item key="reports" icon={<LineChartOutlined/>}>
          <span>Reports</span>
          <Link to="/reports"/>
        </Menu.Item>
        <Menu.Item key="profile" icon={<UserOutlined/>}>
          <span>Profile</span>
          <Link to="/profile"/>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{background: '#fff', padding: 0, paddingLeft: 16}}>
        {collapsed ? <MenuUnfoldOutlined onClick={onCollapse}/> : <MenuFoldOutlined onClick={onCollapse}/>}
      </Header>
      <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
        <Route exact path="/" component={OrdersPage}/>
        <Route exact path="/orders" component={OrdersPage}/>
        <Route exact path="/kitchen" component={KitchenPage}/>
        <Route exact path="/coordinates/dictionary" component={CoordinatesPage}/>
        <Route exact path="/coordinates/map" component={MapCoordinatesPage}/>
        <Route exact path="/addresses" component={AddressesPage}/>
        <Route exact path="/customers" component={CustomersPage}/>
        <Route exact path="/boxes" component={BoxesPage}/>
        <Route exact path="/profile" component={ProfilePage}/>
        <Route exact path="/reports" component={ReportsPage}/>
        <Route exact path="/orderDetails/:orderId" component={OrderDetailsPage}/>
        <Route exact path="/stocktaking/products" component={ProfilePage}/>
        <Route exact path="/stocktaking/products/:productId" component={ProfilePage}/>
        <Route exact path="/stocktaking/warehouses" component={WarehousesPage}/>
        <Route exact path="/stocktaking/warehouses/:warehouseId" component={ProfilePage}/>
        <Route exact path="/stocktaking/departments" component={DepartmentsPage}/>
        <Route exact path="/stocktaking/categories" component={ProfilePage}/>
        <Route exact path="/stocktaking/types" component={ProfilePage}/>
      </Content>
      <Footer style={{textAlign: 'center'}}>
        DINENATION GROUP
      </Footer>
    </Layout>

  </Layout>
}

export default MainRouter;
