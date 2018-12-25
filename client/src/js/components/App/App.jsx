import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import routes from '../../routes.js';
import { Layout, Menu } from 'antd';
import AppLogo from '../AppLogo/AppLogo.jsx';
import { StyledLayout, StyledMenu, StyledContent } from './AppStyles';

const { SubMenu } = Menu;
const { Header, Sider } = Layout;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      config: null
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/config')
      .then(res => {
        const config = res.data;
        this.setState({config});
        console.log(config);
      });
  }

  render() {
    const isConfigPresent = (this.state.config) ? true : false;
    let renderThis;
    if (!isConfigPresent) {
      renderThis = <div>Loading Config</div>;
    }
    else {
      renderThis = (
        <StyledLayout>
          <Header>
            <AppLogo 
              color='white' 
              text={this.state.config.logo}></AppLogo>
          </Header>
          <Layout>
            <Sider 
              width={this.state.config.siderWidth} 
              theme="dark"
            >
              <StyledMenu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                theme="dark"
              >
                <Menu.Item>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </Menu.Item>
                <SubMenu key="nav1" title={<span>Screens</span>}>
                  <Menu.Item key="2">
                    <NavLink to="/form">Form</NavLink>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <NavLink to="/view">View</NavLink>
                  </Menu.Item>
                </SubMenu>
              </StyledMenu>
            </Sider>
            <Layout>
              <StyledContent>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
              </StyledContent>
            </Layout>
          </Layout>
        </StyledLayout>
      );
    }
    return (
      <Router>
        {renderThis}
      </Router>
    );
  }
}