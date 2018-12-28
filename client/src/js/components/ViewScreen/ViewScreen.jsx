import React from 'react';
import { Menu } from 'antd';
import { StyledMenuContainer, StyledMenu } from './ViewScreenStyles.jsx';

export default class ViewScreen extends React.Component {
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
            <Menu.Item disabled={true}>
              View Title
            </Menu.Item>
          </StyledMenu>
        </StyledMenuContainer>
      </div>
    );
  }
}