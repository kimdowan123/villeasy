import React from 'react';
import { useRoutes } from 'react-router-dom';
import { MainPage, AdminPage } from '../pages/index';

const Router = () => {

  const routes = useRoutes([
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/admin',
      element:  <AdminPage />,
    },
  ]);
  return routes;
};

export default Router;