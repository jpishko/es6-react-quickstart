import React from 'react';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import FormScreen from './components/FormScreen/FormScreen.jsx';
import ViewScreen from './components/ViewScreen/ViewScreen.jsx';

const routes = [
    {
      path: "/",
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