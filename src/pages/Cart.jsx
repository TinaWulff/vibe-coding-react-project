

import React from 'react';
import styles from './Cart.module.scss';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
	const { cart, removeFromCart } = useCart();
	const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

	return (
		<section className={styles.cartPage}>
			<h1 className={styles.cartHeader}>Your cart</h1>
			<div style={{ color: '#444', marginBottom: 24 }}>Not ready to checkout? Continue Shopping</div>
			<section className={styles.cartMain}>
				{/* Cart List */}
				<section className={styles.cartList}>
					{cart.length === 0 && <div style={{ color: '#888', fontSize: '1.1em' }}>Your cart is empty.</div>}
					{cart.map((item, idx) => (
						<article className={styles.cartItem} key={item.id + '-' + item.size}>
							{item.image ? (
								<img className={styles.cartItemImg} src={item.image} alt={item.title} />
							) : (
								<div className={styles.cartItemImg} style={{ background: '#ccc' }} />
							)}
							<div className={styles.cartItemInfo}>
								<div className={styles.cartItemTitle}>{item.title}</div>
								<div className={styles.cartItemMeta}>Size: {item.size}</div>
								<div className={styles.cartItemMeta}>Quantity: {item.quantity}</div>
								<div className={styles.cartItemMeta} style={{ marginTop: 2 }}>by {item.brand}</div>
								<div className={styles.cartItemPrice}>${item.price}</div>
								<div className={styles.cartItemRemove} onClick={() => removeFromCart(idx)}>Remove</div>
							</div>
						</article>
					))}
				</section>
				{/* Order Summary */}
				<aside className={styles.cartSummary}>
					<div className={styles.cartSummaryTitle}>Order Summary</div>
					<input className={styles.cartSummaryInput} placeholder="Enter coupon code here" />
					<div className={styles.cartSummaryRow}><span>Subtotal</span><span>${subtotal}</span></div>
					<div className={styles.cartSummaryRow}><span>Shipping</span><span>Calculated at the next step</span></div>
					<div className={styles.cartSummaryTotal}><span>Total</span><span>${subtotal}</span></div>
					<Link to="/checkout" style={{ textDecoration: 'none' }}>
						<button className={styles.cartSummaryButton} type="button">Continue to checkout</button>
					</Link>
				</aside>
			</section>
			{/* Order Information */}
			<section className={styles.cartOrderInfo}>
				<h2 className={styles.cartOrderInfoTitle}>Order Information</h2>
				<section className={styles.cartOrderInfoSection}>
					<div className={styles.cartOrderInfoSectionTitle}>Return Policy</div>
					<div className={styles.cartOrderInfoSectionContent}>
						This is our example return policy which is everything you need to know about our returns.
					</div>
				</section>
				<section className={styles.cartOrderInfoSection}>
					<div className={styles.cartOrderInfoSectionTitle}>Shipping Options</div>
					<div className={styles.cartOrderInfoSectionContent}>Shipping Options</div>
				</section>
				<section className={styles.cartOrderInfoSection}>
					<div className={styles.cartOrderInfoSectionTitle}>Shipping Options</div>
					<div className={styles.cartOrderInfoSectionContent}>Shipping Options</div>
				</section>
			</section>
		</section>
	);
};

export default Cart;
