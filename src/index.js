import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import Root from './routes/root';
import ErrorPage from './components/error_page';
import ReservationsPage from './routes/reservations_page.tsx';
import store from './redux/store';
import HomePage from './routes/HomePage';
import SplashScreen from './components/splash_screen';
import ProtectedRoute from './routes/ProtectedRoute';
import UnitForm from './components/UnitForm';
import ReservationForm from './components/ReservationForm';
import UnitDisplayPage from './routes/UnitDisplayPage';

const router = createBrowserRouter([
  {
    path: '/splash',
    element: <SplashScreen />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: <ProtectedRoute element={Root} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/units/:unitId',
        element: <UnitDisplayPage />,
      },
      {
        path: '/reservations',
        element: <ReservationsPage />,
      },
      {
        path: '/unit-form',
        element: <UnitForm />,
      },
      {
        path: '/book-visit',
        element: <ReservationForm />,
      },
      {
        path: '/book-visit/:unitReservationId',
        element: <ReservationForm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
