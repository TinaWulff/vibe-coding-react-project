import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import styles from './List.module.scss';

const List = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [sortBy, setSortBy] = useState('popular');
	const [visibleCount, setVisibleCount] = useState(6);

	useEffect(() => {
		async function fetchProducts() {
			setLoading(true);
			const res = await fetch('https://dummyjson.com/products?limit=100&select=title,price,thumbnail,category,rating');
			const data = await res.json();
			setProducts(data.products);
			setLoading(false);
		}
		fetchProducts();
	}, []);

	function getSortedProducts() {
		let sorted = [...products];
		if (sortBy === 'price-asc') sorted.sort((a, b) => a.price - b.price);
		else if (sortBy === 'price-desc') sorted.sort((a, b) => b.price - a.price);
		else if (sortBy === 'name-asc') sorted.sort((a, b) => a.title.localeCompare(b.title));
		else if (sortBy === 'name-desc') sorted.sort((a, b) => b.title.localeCompare(a.title));
		else if (sortBy === 'rating') sorted.sort((a, b) => b.rating - a.rating);
		// 'popular' fallback: ingen sortering
		return sorted;
	}

	const visibleProducts = getSortedProducts().slice(0, visibleCount);

	return (
		<div>
			<h1 className={styles.shopHeader}>Shop</h1>
			<p className={styles.shopSubheader}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</p>
			<div className={styles.shopMain}>
				{/* Filtersektion */}
				<aside className={styles.shopFilter}>
					<h3 style={{ fontSize: '1.1em', marginBottom: 8 }}>Filters</h3>
					<div style={{ color: '#888', fontSize: 14, marginBottom: 8, cursor: 'pointer' }}>Clear filters</div>
					<div style={{ fontWeight: 'bold', marginBottom: 4 }}>Categories</div>
					<div>
						<label style={{ display: 'block', marginBottom: 4 }}><input type="checkbox" /> Itar</label>
						<label style={{ display: 'block', marginBottom: 4 }}><input type="checkbox" /> Kafan</label>
						<label style={{ display: 'block', marginBottom: 4 }}><input type="checkbox" /> Capes</label>
						<label style={{ display: 'block', marginBottom: 4 }}><input type="checkbox" /> Food</label>
					</div>
				</aside>
				{/* Produktsektion */}
				<section className={styles.shopProducts}>
					<div className={styles.shopSortBar}>
						<div />
						<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
							<span style={{ fontSize: 14, color: '#666' }}>Sort By</span>
							<select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ padding: '0.3em 1em', fontSize: 14 }}>
								<option value="popular">Popular</option>
								<option value="price-asc">Price: Low to High</option>
								<option value="price-desc">Price: High to Low</option>
								<option value="name-asc">Name: A-Z</option>
								<option value="name-desc">Name: Z-A</option>
								<option value="rating">Rating</option>
							</select>
						</div>
						<span style={{ fontSize: 14, color: '#666' }}>Showing {visibleProducts.length} of {products.length} Products</span>
					</div>
					{loading ? (
						<div style={{ textAlign: 'center' }}>Loading...</div>
					) : (
						<>
							<ProductList products={visibleProducts} />
							{visibleCount < products.length && (
								<div className={styles.shopLoadMore}>
									<button onClick={() => setVisibleCount(c => c + 6)} style={{ padding: '0.75rem 2rem', fontSize: '1rem', border: '1px solid #222', background: '#fff', cursor: 'pointer' }}>
										Load more products
									</button>
								</div>
							)}
						</>
					)}
				</section>
			</div>
		</div>
	);
};

export default List;
