import {Layout, Menu} from "antd";
import {ImportOutlined, MenuFoldOutlined, MenuUnfoldOutlined, ProfileOutlined} from "@ant-design/icons";
import {Link, Route, useHistory} from "react-router-dom";
import OrdersPage from "./pages/OrdersPage";
import CustomersPage from "./pages/CustomersPage";
import ProfilePage from "./pages/ProfilePage";
import React, {useEffect, useState} from "react";

const {Header, Content, Footer, Sider} = Layout;

const MainRouter: React.FC = () => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = () => {
    setCollapsed(!collapsed)
  }

  useEffect(() => {
    history.push("/orders");
  }, [])

  return <Layout style={{minHeight: '100vh'}}>

    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}>
      <div className="logo"/>
      <Menu theme="dark" defaultSelectedKeys={['orders']} mode="inline">
        <Menu.Item key="orders">
          <ImportOutlined/>
          <span>Orders</span>
          <Link to="/"/>
        </Menu.Item>
        <Menu.Item key="customers">
          <ImportOutlined/>
          <span>Customers</span>
          <Link to="/customers"/>
        </Menu.Item>
        <Menu.Item key="profile" icon={<ProfileOutlined/>}>
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
        <Route exact path="/customers" component={CustomersPage}/>
        <Route exact path="/profile" component={ProfilePage}/>
      </Content>
      <Footer style={{textAlign: 'center'}}>
        DINENATION GROUP
      </Footer>
    </Layout>

  </Layout>
}

export default MainRouter;
