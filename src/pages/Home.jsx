import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';
import HeroSlider from '../components/HeroSlider';
import styles from './Home.module.scss';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      // Hent kategorier fra det korrekte endpoint
      const catRes = await fetch('https://dummyjson.com/products/category-list');
      const categories = await catRes.json();
      const prodRes = await fetch('https://dummyjson.com/products?limit=12&select=title,price,thumbnail,category');
      const prodData = await prodRes.json();
      setCategories(categories);
      setProducts(prodData.products);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <HeroSlider />
      <section className={styles.homeSection}>
        <h2 className={styles.homeSectionTitle}>Categories</h2>
        <p className={styles.homeSectionSubtitle}>
          Browse our product categories and find your favorites.<br />
          We have something for every taste and need.
        </p>
        <div className={styles.shopAllWrapper}>
          <Link to="/shop">
            <button className={styles.shopAllButton}>
              Shop All
            </button>
          </Link>
        </div>
        <CategoryList categories={categories.slice(0, 3)} />
      </section>
      <section className={styles.homeSection + ' ' + styles.latestArrivalsSection}>
        <h2 className={styles.homeSectionTitle}>Our latest arrivals</h2>
        <p className={styles.homeSectionSubtitle}>
          Check out the newest products in our shop.<br />
          Fresh arrivals are added every week – don’t miss out!
        </p>
        <div className={styles.shopAllWrapper}>
          <Link to="/shop">
            <button className={styles.shopAllButton}>
              Shop All
            </button>
          </Link>
        </div>
        <ProductList products={products.slice(0, 3)} variant="tall" />
      </section>
      <section className={styles.homeSection}>
        <h2 className={styles.homeSectionTitle}>Our Products</h2>
        <p className={styles.homeSectionSubtitle}>
          Discover our handpicked selection of products for you.<br />
          Quality, style, and value – all in one place.
        </p>
        <div className={styles.shopAllWrapper}>
          <Link to="/shop">
            <button className={styles.shopAllButton}>
              Shop All
            </button>
          </Link>
        </div>
        <ProductList products={products.slice(0, 3)} />
      </section>
    </div>
  );
};

export default Home;
