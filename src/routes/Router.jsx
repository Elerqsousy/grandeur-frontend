import { createBrowserRouter } from 'react-router-dom';
import Root from './root';
import ErrorPage from '../components/error_page';
import DetailPage from '../components/DetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/detailPage',
        element: <DetailPage />,
        // loader: fetch()
      },
    ],

  },
]);

export default router;
