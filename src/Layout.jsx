

import { NavLink, Outlet } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';





const Layout = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Header />
    <main style={{ flex: 1, width: '100%', maxWidth: 1200, margin: '0 auto', padding: '2rem 1rem' }}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
