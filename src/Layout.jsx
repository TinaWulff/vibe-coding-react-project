import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => (
  <div>
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <small>© {new Date().getFullYear()} Vibe Coding Project</small>
    </footer>
  </div>
);

export default Layout;
