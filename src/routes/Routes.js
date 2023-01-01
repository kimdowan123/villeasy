import React from 'react';
import { useRoutes } from 'react-router-dom';
import { MainPage, AdminPage } from '../pages/index';
import ReservationPage from '../pages/ReservationPage/ReservationPage';
import MapPage from '../pages/MapPage/MapPage';
import QApage from '../pages/QApage/QApage';


const Router = () => {

  const routes = useRoutes([
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/admin',
      element: <AdminPage />,
    },
    {
      path: '/reservation',
      element: <ReservationPage />
    },
    {
      path: '/map',
      element: <MapPage />
    },
    {
      path: '/QA',
      element: <QApage/>
    }

  ]);
  return routes;
};

export default Router;