import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const DivAppContainer = styled.div`
height: 100%;
background-color: #EEEEEE;
`
export const DivTopNavBar = styled.div`
position: fixed;
height: 50px;
width: 100%;
background-color: #3F51B5;
`
export const DivLogo = styled.div`
width: 250px;
height: 50px;
color: white;
text-align: center;
vertical-align: middle;
line-height: 50px;
`
export const DivBottomContainer = styled.div`
padding-top: 50px;
display: flex;
height: 100%;
`
export const Main = styled.main`
flex: 1, 1, auto; /* growth factor 1, shrink factor 1, auto calculate width */
`
export const DivSideBar = styled.div`
flex: 0 0 250px; /* don't grow, don't shrink, stay fixed at 250px */
background-color: white;
box-shadow: 5px 0 5px -2px #DDDDDD;
margin-right: 5px;
`
export const Ul = styled.ul`
list-style-type: none;
`
export const Link = styled(NavLink)`
display: inline-block;
width: 100%;
line-height: 35px;
padding: 5px 15px 5px 15px;
text-decoration: none;
&:hover {
  background-color: #EEEEEE;
}
`