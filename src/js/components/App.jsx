import React from 'react';
import {Route, NavLink, BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';
import Dashboard from './screens/Dashboard.jsx';
import Screen1 from './screens/Screen1.jsx';

const StyledDivAppContainer = styled.div`
  height: 100%;
  background-color: #EEEEEE;
`
const StyledDivTopNavBar = styled.div`
  position: fixed;
  height: 50px;
  width: 100%;
  background-color: #3F51B5;
`
const StyledDivLogo = styled.div`
  width: 250px;
  height: 50px;
  color: white;
  text-align: center;
  vertical-align: middle;
  line-height: 50px;
`
const StyledDivBottomContainer = styled.div`
  padding-top: 50px;
  display: flex;
  height: 100%;
`
const StyledMain = styled.main`
  flex: 1, 1, auto; /* growth factor 1, shrink factor 1, auto calculate width */
`
const StyledDivSideBar = styled.div`
  flex: 0 0 250px; /* don't grow, don't shrink, stay fixed at 250px */
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
  &:hover {
    background-color: #EEEEEE;
  }
`

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeLink: "dashboard"
    };
    this.setActiveLink = this.setActiveLink.bind(this);
  }

  setActiveLink(event) {
    event.preventDefault();
    let currentActiveLink = document.querySelector(`a[data-name="${this.state.activeLink}"]`);
    currentActiveLink.style.backgroundColor = "";
    let newActiveLinkName = event.target.attributes["data-name"].value;
    let newActiveLink = document.querySelector(`a[data-name="${newActiveLinkName}"]`);
    newActiveLink.style.backgroundColor = "#EEEEEE";
    this.setState({activeLink: newActiveLinkName});
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
                  <li><StyledNavLink to="/" data-name="dashboard" onClick={this.setActiveLink}>Dashboard</StyledNavLink></li>
                  <li><StyledNavLink to="/screen1" data-name="screen1" onClick={this.setActiveLink}>Screen1</StyledNavLink></li>
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