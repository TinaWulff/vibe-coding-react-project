

import React, { useEffect, useState } from 'react';
import styles from './CategoryList.module.scss';

const CategoryList = ({ categories }) => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    async function fetchCategoryData() {
      const promises = categories.map(async (cat) => {
        let label = '';
        if (typeof cat === 'string') {
          label = cat.charAt(0).toUpperCase() + cat.slice(1);
        } else {
          label = String(cat);
        }
        try {
          const res = await fetch(`https://dummyjson.com/products/category/${cat}?limit=1`);
          const data = await res.json();
          let image = null;
          if (data && data.products && data.products[0] && data.products[0].thumbnail) {
            image = data.products[0].thumbnail;
          }
          return { label, image };
        } catch {
          return { label, image: null };
        }
      });
      const results = await Promise.all(promises);
      setCategoryData(results);
    }
    if (categories && categories.length) fetchCategoryData();
  }, [categories]);

  const fallback = 'https://dummyimage.com/600x600/cccccc/222222&text=No+Image';
  return (
    <div className={styles.grid}>
      {categoryData.map((cat, i) => (
        <div key={cat.label} className={styles.categoryCard}>
          <div className={styles.categoryImage}>
            <img
              src={cat.image ? cat.image : fallback}
              alt={typeof cat.label === 'string' ? cat.label : ''}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div className={styles.categoryTitle}>{typeof cat.label === 'string' ? cat.label : ''}</div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
