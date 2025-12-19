

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './Detail.module.scss';


const Detail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const { addToCart } = useCart();
	const [size, setSize] = useState('M');
	const [quantity, setQuantity] = useState(1);
	const [added, setAdded] = useState(false);

	useEffect(() => {
		async function fetchProduct() {
			setLoading(true);
			const res = await fetch(`https://dummyjson.com/products/${id}`);
			const data = await res.json();
			setProduct(data);
			setLoading(false);
		}
		fetchProduct();
	}, [id]);

	if (loading) return <div>Loading...</div>;
	if (!product) return <div>Product not found</div>;

	const handleAdd = () => {
		addToCart(product, size, quantity);
		setAdded(true);
		setTimeout(() => setAdded(false), 1200);
	};

	return (
		<div className={styles.detailPage}>
			<div className={styles.detailGrid}>
				<div className={styles.detailImages}>
					{/* Billedgalleri */}
					{product.images && product.images.length > 0 ? (
						<div className={styles.imageGrid}>
							{product.images.slice(0, 4).map((img, i) => (
								<img key={i} src={img} alt={product.title} className={styles.detailImg} />
							))}
						</div>
					) : (
						<div className={styles.imageGrid}>
							<div className={styles.detailImg} style={{ background: '#ccc' }} />
							<div className={styles.detailImg} style={{ background: '#ccc' }} />
							<div className={styles.detailImg} style={{ background: '#ccc' }} />
							<div className={styles.detailImg} style={{ background: '#ccc' }} />
						</div>
					)}
				</div>
				<div className={styles.detailInfo}>
					<h1 className={styles.detailTitle}>{product.title}</h1>
					<div className={styles.detailPrice}>${product.price}</div>
					<div className={styles.detailDesc}>{product.description}</div>
					<div className={styles.detailVendor}>by {product.brand || 'Vendor Name'}</div>
					{/* Størrelse og quantity mockup */}
					<div className={styles.detailOptions}>
						<div className={styles.detailLabel}>Size</div>
						<div className={styles.detailSizes}>
							{['S', 'M', 'L'].map((s) => (
								<button
									key={s}
									onClick={() => setSize(s)}
									style={{
										background: size === s ? '#222' : '#fff',
										color: size === s ? '#fff' : '#222',
										border: '1px solid #222',
										borderRadius: 4,
										padding: '0.5em 1.2em',
										fontWeight: 500,
										cursor: 'pointer',
									}}
								>
									{s}
								</button>
							))}
						</div>
						<div className={styles.detailLabel}>Quantity</div>
						<div className={styles.detailQty}>
							<button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
							<span>{quantity}</span>
							<button onClick={() => setQuantity(q => q + 1)}>+</button>
						</div>
					</div>
					<button className={styles.detailAddToCart} onClick={handleAdd} disabled={added}>
						{added ? 'Added!' : `Add to Cart – $${product.price}`}
					</button>
					<div className={styles.detailShipping}>
						<span>Free standard shipping</span>
						<a href="#">Free Returns</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
