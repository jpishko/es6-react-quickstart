import React from 'react';
import { Menu, Icon, Tabs, Card } from 'antd';
import Spacer from '../Spacer/Spacer.jsx';
import { StyledMenuContainer, StyledMenu, StyledTabContainer, StyledCardContainer } from './FormScreenStyles.jsx';
 
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

export default class FormScreen extends React.Component {
  constructor() {
    super();
  }

  handleMenuClick(e) {
    console.log('click ', e);
  }

  handleTabChange(key) {
    console.log(key);
  }

  render() {
    return (
      <div>
        <StyledMenuContainer>
          <StyledMenu
            onClick={this.handleMenuClick}
            selectedKeys={[]}
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item key="back">
              <Icon type="caret-left" />Back
            </Menu.Item>
            <Menu.Item key="save">
              <Icon type="save" />Save
            </Menu.Item>
            <SubMenu title={<span><Icon type="setting" />Actions</span>}>
              <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
          </StyledMenu>
        </StyledMenuContainer>

        <Spacer height="50"></Spacer>
        <h1>Title</h1>

        <StyledTabContainer>
          <Tabs onChange={this.handleTabChange} type="card">
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </StyledTabContainer>

        <Spacer height="25"></Spacer>

        <StyledCardContainer>
          <Card
            type="inner"
            title="Section Title"
          >
            Content
          </Card>
        </StyledCardContainer>
      </div>
    );
  }
}