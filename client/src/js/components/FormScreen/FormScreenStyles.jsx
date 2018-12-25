import styled from 'styled-components';
import { Menu } from 'antd';

export const StyledMenuContainer = styled.div`
    position: fixed;
    top: 64px;
    width: 100%;
    z-index: 1000;
`;

export const StyledMenu = styled(Menu)`
    background: #143A78;
`;

export const StyledTabContainer = styled.div`
& {
    margin: 5px;
}

& > .ant-tabs-card > .ant-tabs-content {
    height: 120px;
    margin-top: -16px;
    background: #fff;
}
  
& > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
    background: #fff;
    padding: 16px;
}

& > .ant-tabs-card > .ant-tabs-bar {
    border-color: #fff;
}

& > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
    border-color: transparent;
    background: transparent;
}

& > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
    border-color: #fff;
    background: #fff;
}
`;

export const StyledCardContainer = styled.div`
    margin: 5px;
`;