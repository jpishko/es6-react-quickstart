import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Content } = Layout;

export const StyledLayout = styled(Layout)`
height: 100%;
`;

export const StyledMenu = styled(Menu)`
height: '100%';
border-right: 0;
`;

export const StyledContent = styled(Content)`
margin: 0;
min-height: 280px;
`;