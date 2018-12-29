import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import routes from '../../routes.js';
import { Layout, Menu } from 'antd';
import AppLogo from '../AppLogo/AppLogo.jsx';
import { StyledLayout, StyledMenu, StyledContent } from './AppStyles';
import { BackBtnProvider, BackBtnConsumer } from '../../contexts/BackBtnContext';

const { SubMenu } = Menu;
const { Header, Sider } = Layout;
const API = 'http://localhost:5000/api';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      backBtnPath: '',
      config: null
    };
    this.updateBackBtnPath = this.updateBackBtnPath.bind(this);
  }

  componentDidMount() {
    axios.get(`${API}/config`)
      .then(res => {
        const config = res.data;
        this.setState({
          config,
          backBtnPath: '/'
        });
      });
  }

  updateBackBtnPath(destination) {
    let newPath = `/${destination}`;
    if (this.state.backBtnPath !== newPath) {
      this.setState({backBtnPath: newPath})
      console.log("backBtnPath updated to: " + destination);
    }
  }

  render() {
    const isConfigPresent = (this.state.config) ? true : false;
    let renderThis;
    if (!isConfigPresent) {
      renderThis = <div>Loading Config</div>;
    }
    else {
      renderThis = (
        <BackBtnProvider value={this.state.backBtnPath}>
          <StyledLayout>
            <Header>
              <AppLogo 
                color={this.state.config.logo.color}
                text={this.state.config.logo.text}>
              </AppLogo>
            </Header>
            <Layout>
              <Sider 
                width={this.state.config.siderWidth} 
                theme="dark"
              >
                <StyledMenu
                  mode="inline"
                  defaultSelectedKeys={['home']}
                  defaultOpenKeys={['screens']}
                  theme="dark"
                >
                  <Menu.Item key="home">
                    <NavLink to="/" onClick={() => this.updateBackBtnPath("")}>Dashboard</NavLink>
                  </Menu.Item>
                  <SubMenu key="screens" title={<span>Screens</span>}>
                    <Menu.Item>
                      <NavLink to="/form">Form</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                      <NavLink to="view" onClick={() => this.updateBackBtnPath("view")}>View</NavLink>
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
        </BackBtnProvider>
      );
    }
    return (
      <Router>
        {renderThis}
      </Router>
    );
  }
}