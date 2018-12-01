import React from 'react';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Screen1 from './components/Screen1/Screen1.jsx';

export const routes = [
    {
      path: "/",
      exact: true,
      main: () => <Dashboard></Dashboard>
    },
    {
      path: "/screen1",
      main: () => <Screen1></Screen1>
    }
  ];