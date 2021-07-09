import React, {useEffect, useState} from 'react'
import Amplify, {Auth, DataStore} from 'aws-amplify'
import {withAuthenticator} from '@aws-amplify/ui-react'
import {Role, User} from "./models";
import awsExports from './aws-exports';
import './App.css'

import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Layout, Menu} from 'antd';
import {ImportOutlined, MenuUnfoldOutlined, MenuFoldOutlined, ProfileOutlined} from "@ant-design/icons";
import OrdersPage from "./pages/OrdersPage";
import CustomersPage from "./pages/CustomersPage";
import ProfilePage from "./pages/ProfilePage";

const {Header, Content, Footer, Sider} = Layout;

Amplify.configure(awsExports);

const App = () => {
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    subscribeOnUsersUpdate();
    createSignedUserIfNotExist();
  }, [])

  const createSignedUserIfNotExist = async () => {
    const cognitoUser = await Auth.currentAuthenticatedUser();
    const newUser: Omit<User, "id"> = {
      email: cognitoUser.attributes.email,
      sub: cognitoUser.attributes.sub,
      role: Role.GUEST
    };
    const existed = await DataStore.query(User, (user) => user.email('eq', newUser.email))
    if (existed.length === 0) {
      const createdUser = await DataStore.save(
        new User(newUser), (user) => user.email('ne', newUser.email)
      );
      console.log('just created: ', createdUser)
    }
  }

  const subscribeOnUsersUpdate = async () => {
    DataStore.observe(User).subscribe(event => {
      if (event.opType === 'INSERT') {
        console.log('created user: ', event.element);
      }
    });
  }

  const onCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Router>
      <Layout style={{minHeight: '100vh'}}>

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
            <Menu.Item key="profile" icon={<ProfileOutlined />}>
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
            <Route exact path="/customers" component={CustomersPage}/>
            <Route exact path="/profile" component={ProfilePage}/>
          </Content>
          <Footer style={{textAlign: 'center'}}>
            DINENATION GROUP
          </Footer>
        </Layout>

      </Layout>
    </Router>
  )
}

export default withAuthenticator(App, {
  usernameAlias: "email"
})
