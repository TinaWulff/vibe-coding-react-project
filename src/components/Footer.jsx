import React from 'react';
import { NavLink } from 'react-router-dom';
import NewsletterSignup from './NewsletterSignup';
import styles from '../styles/footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.signup}><NewsletterSignup /></div>
      <div className={styles.linksSection}>
        <h4>Links</h4>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
          <li><NavLink to="/favorites">Favorites</NavLink></li>
          <li><NavLink to="/cart">Cart</NavLink></li>
          <li><NavLink to="/my-orders">My Orders</NavLink></li>
        </ul>
      </div>
      <div className={styles.linksSection}>
        <h4>Info</h4>
        <ul>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/faq">FAQ</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </div>
    <div className={styles.copyright}>
      COPYRIGHTS SITE.COM. ALL RIGHTS RESERVED
    </div>
  </footer>
);

export default Footer;
