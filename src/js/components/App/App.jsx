import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import {routes} from '../../MockedData/routes';
import {Layout, Menu} from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Layout style={{height: '100%'}}>
          <Header className="header">
            <div style={{color: 'white'}}>React Quick Start</div>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff', boxShadow: "5px 0 5px -2px #DDDDDD", marginRight: "5px" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <Menu.Item><NavLink to="/dashboard">Dashboard</NavLink></Menu.Item>
                <SubMenu key="nav1" title={<span>Screens</span>}>
                  <Menu.Item key="2"><NavLink to="/screen1">Screen1</NavLink></Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <Content style={{background: '#fff', padding: '5px', margin: 0, minHeight: 280,}}>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    );
  }
}