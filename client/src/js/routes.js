import React from 'react';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import FormScreen from './components/FormScreen/FormScreen.jsx';

const routes = [
    {
      path: "/dashboard",
      exact: true,
      main: () => <Dashboard></Dashboard>
    },
    {
      path: "/form",
      exact: true,
      main: () => <FormScreen></FormScreen>
    },
    {
      path: "/view",
      exact: true,
      main: () => <ViewScreen></ViewScreen>
    },
  ];

export default routes;