import React from 'react';
import {Route, NavLink, BrowserRouter} from 'react-router-dom';
import Dashboard from './screens/Dashboard.jsx';
import Screen1 from './screens/Screen1.jsx';
//import { Button } from 'reactstrap';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <div className="topNavbar">
            <div className="logo">
                LOGO
            </div>
          </div>

          <div className="bottomContainer">
            <div className="sidebar">
              <nav>
                <ul>
                  <li><NavLink to="/">Dashboard</NavLink></li>
                  <li><NavLink to="/screen1">Screen1</NavLink></li>
                </ul>
              </nav>
            </div>

            <main>
              <Route exact path="/" component={Dashboard}/>
              <Route path="/screen1" component={Screen1}/>
            </main>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}