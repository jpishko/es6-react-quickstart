import React from 'react';
import {Route, NavLink, BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';
import Dashboard from './screens/Dashboard.jsx';
import Screen1 from './screens/Screen1.jsx';

const StyledDivAppContainer = styled.div`
  height: 100;
  background-color: #EEEEEE;
`
const StyledDivTopNavBar = styled.div`
  position: fixed;
  height: 50px;
  width: 100%;
  background-color: #3F51B5;
`
const StyledDivLogo = styled.div`
  height: 100px;
  width: 100%;
`
const StyledDivBottomContainer = styled.div`
  position: absolute;
  padding-top: 50px;
  display: flex;
  height: 100%;
`
const StyledMain = styled.main`
  flex-grow: 1;
  align-items: stretch;
`
const StyledDivSideBar = styled.div`
  flex-basis: 250px;
  background-color: white;
  box-shadow: 5px 0 5px -2px #DDDDDD;
  margin-right: 5px;
`
const StyledUl = styled.ul`
  list-style-type: none;
`
const StyledNavLink = styled(NavLink)`
  display: inline-block;
  width: 100%;
  line-height: 35px;
  padding: 5px 15px 5px 15px;
  text-decoration: none;
`

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <StyledDivAppContainer>

          <StyledDivTopNavBar>
            <StyledDivLogo>
                LOGO
            </StyledDivLogo>
          </StyledDivTopNavBar>

          <StyledDivBottomContainer>
            <StyledDivSideBar>
              <nav>
                <StyledUl>
                  <li><StyledNavLink to="/">Dashboard</StyledNavLink></li>
                  <li><StyledNavLink to="/screen1">Screen1</StyledNavLink></li>
                </StyledUl>
              </nav>
            </StyledDivSideBar>

            <StyledMain>
              <Route exact path="/" component={Dashboard}/>
              <Route path="/screen1" component={Screen1}/>
            </StyledMain>
          </StyledDivBottomContainer>

        </StyledDivAppContainer>
      </BrowserRouter>
    );
  }
}