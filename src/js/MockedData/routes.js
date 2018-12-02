import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard.jsx';
import Screen1 from '../components/Screen1/Screen1.jsx';

export const routes = [
    {
      path: "/dashboard",
      exact: true,
      main: () => <Dashboard></Dashboard>
    },
    {
      path: "/screen1",
      exact: true,
      main: () => <Screen1></Screen1>
    }
  ];