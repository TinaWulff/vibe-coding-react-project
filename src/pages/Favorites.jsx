import React from 'react';
import ProductList from '../components/ProductList';
import { useFavorites } from '../context/FavoritesContext';

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '2rem' }}>Mine favoritter</h1>
      {favorites.length === 0 ? (
        <p>Du har ingen favoritter endnu.</p>
      ) : (
        <ProductList products={favorites} />
      )}
    </div>
  );
}
