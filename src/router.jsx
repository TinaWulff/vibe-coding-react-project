import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // Example: { path: '', element: <HomePage /> },
    ],
  },
]);

export default router;
