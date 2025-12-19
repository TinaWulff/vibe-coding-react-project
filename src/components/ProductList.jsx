import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductList.module.scss';
import { useFavorites } from '../context/FavoritesContext';

const ProductList = ({ products, variant }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  return (
    <div className={styles.grid}>
      {products.map((product) => {
        const favorite = isFavorite(product.id);
        return (
          <div key={product.id || product.title} className={styles.productCard}>
            <Link
              to={`/shop/${product.id}`}
              className={styles.productLink}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className={
                styles.productImage + (variant === 'tall' ? ' ' + styles.productImageTall : '')
              }>
                {product.thumbnail && <img src={product.thumbnail} alt={product.title} className={styles.productImg} />}
              </div>
              <div className={styles.productTitle}>{product.title}</div>
              <div className={styles.productPrice}>${product.price}</div>
            </Link>
            <button
              className={styles.favoriteBtn}
              aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
              onClick={() => favorite ? removeFavorite(product.id) : addFavorite(product)}
              type="button"
            >
              {favorite ? (
                <span className={styles.heart}>&#10084;&#65039;</span> // filled heart
              ) : (
                <span className={styles.heartOutline}>&#9825;</span> // empty heart
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
