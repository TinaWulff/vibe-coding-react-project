import React from 'react';
import { NavLink } from 'react-router-dom';
import TopHeader from './TopHeader';
import styles from '../styles/header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <TopHeader />
    <nav className={styles.nav}>
      <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
      <NavLink to="/shop" className={({ isActive }) => isActive ? styles.active : ''}>Shop</NavLink>
      <NavLink to="/favorites" className={({ isActive }) => isActive ? styles.active : ''}>Favorites</NavLink>
      <NavLink to="/checkout" className={({ isActive }) => isActive ? styles.active : ''}>Checkout</NavLink>
      <NavLink to="/my-orders" className={({ isActive }) => isActive ? styles.active : ''}>My Orders</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink>
      <NavLink to="/faq" className={({ isActive }) => isActive ? styles.active : ''}>FAQ</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>Contact</NavLink>
      <span className={styles.spacer} />
      <NavLink to="/cart" className={({ isActive }) => isActive ? styles.active : ''}>Cart</NavLink>
      <NavLink to="/login" className={({ isActive }) => isActive ? styles.active : ''}>Login</NavLink>
    </nav>
  </header>
);

export default Header;
