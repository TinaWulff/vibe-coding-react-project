
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import List from './pages/List';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import MyOrders from './pages/MyOrders';
import Favorites from './pages/Favorites';
import About from './pages/About';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Tak from './pages/Tak';
import NotFound from './pages/NotFound';
import RequireAuth from './components/RequireAuth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'shop',
        element: <List />
      },
      {
        path: 'shop/:id',
        element: <Detail />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'my-orders',
        element: <MyOrders />
      },
      {
        path: 'favorites',
        element: <Favorites />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'profile',
        element: (
          <RequireAuth>
            <Profile />
          </RequireAuth>
        ),
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'faq',
        element: <Faq />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'tak',
        element: <Tak />
      },
      {
        path: '*',
        element: <NotFound />
      },
    ]
  }
]);

export default router;
