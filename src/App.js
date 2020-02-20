
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
// import BasicRoute from './routes';
// import Form from "./component/Form"

function App() {
  const { Header, Content, Footer } = Layout;
  
  return (
    <div>
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1" >
          <span>Dashboard</span>
        </Menu.Item>
        <Menu.Item key="2" >
          <span>Customers</span>
        </Menu.Item>
        <Menu.Item key="3">          
          <span>Items</span>
        </Menu.Item>
        <Menu.Item key="4">          
          <span>Order</span>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Customers</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}> <h4>Manage Customers</h4></div>

     {/* <Form/> */}

    </Content>
    <Footer style={{ textAlign: 'center' }}></Footer>
  </Layout>
  </div>
  );
}

export default App;
