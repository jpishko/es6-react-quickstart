import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {routes} from '../../MockedData/routes';
import {DivAppContainer, DivTopNavBar, DivLogo, DivBottomContainer, Main, DivSideBar, Ul, Link} from './AppStyles.jsx';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <DivAppContainer>

          <DivTopNavBar>
            <DivLogo>
                React Quick Start
            </DivLogo>
          </DivTopNavBar>

          <DivBottomContainer>
            <DivSideBar>
              <nav>
                <Ul>
                  <li><Link to="/dashboard" activeStyle={{backgroundColor: '#eeeeee'}}>Dashboard</Link></li>
                  <li><Link to="/screen1" activeStyle={{backgroundColor: '#eeeeee'}}>Screen1</Link></li>
                </Ul>
              </nav>
            </DivSideBar>

            <Main>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main} />
              ))}
            </Main>
          </DivBottomContainer>

        </DivAppContainer>
      </Router>
    );
  }
}