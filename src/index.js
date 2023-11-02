import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import ErrorPage from './components/error_page';
import Root from './routes/root';
import store from './redux/store';
import HomePage from './routes/HomePage';
import SplashScreen from './components/splash_screen';
import ProtectedRoute from './routes/ProtectedRoute';

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
