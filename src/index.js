import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import ErrorPage from './components/error_page';
import Root from './routes/root';
import store from './redux/store';
import SplashScreen from './components/splash_screen';

const isUserLoggedIn = () => {
  const status = sessionStorage.getItem('status');
  return status === 'true';
};

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
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
