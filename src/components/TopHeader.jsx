import React from 'react';
import styles from '../styles/topHeader.module.scss';
import { Link } from 'react-router-dom';

const TopHeader = () => (
  <div className={styles.topHeader}>
    <span>FREE SHIPPING ON ALL HERMAN MILLER! FEB. 25–28.</span>
    <Link to="/contact" className={styles.supportLink}>Support</Link>
  </div>
);

export default TopHeader;
