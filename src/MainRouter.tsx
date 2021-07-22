import {Layout, Menu} from "antd";
import {
  CompassOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ReconciliationOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  FileSearchOutlined,
  CodeSandboxOutlined
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

const {Header, Content, Footer, Sider} = Layout;

const MainRouter: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = () => {
    setCollapsed(!collapsed)
  }

  useEffect(() => {
    // history.push("/orders");
  }, [])

  const path = window.location.pathname.replace(new RegExp("/(\\w*)"), "$1")
  return <Layout style={{minHeight: '100vh'}}>

    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}>
      <div className="logo"/>
      <Menu theme="dark" defaultSelectedKeys={[path ? path: 'orders']} mode="inline">
        <Menu.Item key="orders" icon={<ReconciliationOutlined/>}>
          <span>Orders</span>
          <Link to="/"/>
        </Menu.Item>
        <Menu.Item key="kitchen" icon={<FileSearchOutlined/>}>
          <span>Kitchen</span>
          <Link to="/kitchen"/>
        </Menu.Item>
        <Menu.Item key="boxes" icon={<CodeSandboxOutlined />}>
          <span>Boxes</span>
          <Link to="/boxes"/>
        </Menu.Item>
        <Menu.Item key="coordinates" icon={<CompassOutlined/>}>
          <span>Coordinates</span>
          <Link to="/coordinates"/>
        </Menu.Item>
        <Menu.Item key="addresses" icon={<HomeOutlined/>}>
          <span>Addresses</span>
          <Link to="/addresses"/>
        </Menu.Item>
        <Menu.Item key="customers" icon={<UsergroupAddOutlined/>}>
          <span>Customers</span>
          <Link to="/customers"/>
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
        <Route exact path="/coordinates" component={CoordinatesPage}/>
        <Route exact path="/addresses" component={AddressesPage}/>
        <Route exact path="/customers" component={CustomersPage}/>
        <Route exact path="/boxes" component={BoxesPage}/>
        <Route exact path="/profile" component={ProfilePage}/>
        <Route exact path="/orderDetails/:orderId" component={OrderDetailsPage}/>
      </Content>
      <Footer style={{textAlign: 'center'}}>
        DINENATION GROUP
      </Footer>
    </Layout>

  </Layout>
}

export default MainRouter;
