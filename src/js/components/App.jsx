import React from 'react';
import {Route, NavLink, BrowserRouter} from 'react-router-dom';
import Dashboard from './screens/Dashboard.jsx';
import Screen1 from './screens/Screen1.jsx';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
            <h1>Simple SPA</h1>
            <ul className="header">
              <li><NavLink to="/">Dashboard</NavLink></li>
              <li><NavLink to="/screen1">Screen1</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Dashboard}/>
              <Route path="/screen1" component={Screen1}/>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}