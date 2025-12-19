import React, { useState } from 'react';
import styles from './Checkout.module.scss';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const [step, setStep] = useState(0);
  const { cart } = useCart();
  const navigate = useNavigate();

  const [shipping, setShipping] = useState({ method: 'standard', comment: '' });
  const [address, setAddress] = useState({ name: '', street: '', zip: '', city: '', country: '' });
  const [payment, setPayment] = useState({ method: 'card', name: '', number: '', month: '', year: '', cvc: '', save: false });
  const steps = ['Shipping', 'Address', 'Payment'];
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className={styles.checkoutPage}>
      <h1 className={styles.checkoutHeader}>Checkout</h1>
      <nav className={styles.checkoutSteps} aria-label="Checkout steps">
        {steps.map((s, i) => (
          <span key={s} className={step === i ? styles.activeStep : ''}>
            {s}{i < steps.length - 1 && <span className={styles.stepDivider}>/</span>}
          </span>
        ))}
      </nav>
      <div className={styles.checkoutMain}>
        <section className={styles.checkoutFormSection}>
          {step === 0 && (
            <form className={styles.paymentForm} onSubmit={e => { e.preventDefault(); setStep(1); }}>
              <h2>Shipping method</h2>
              <div>
                <label>
                  <input type="radio" name="shipping" value="standard" checked={shipping.method === 'standard'} onChange={() => setShipping(s => ({ ...s, method: 'standard' }))} />
                  Standard (2-4 days) – Free
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="shipping" value="express" checked={shipping.method === 'express'} onChange={() => setShipping(s => ({ ...s, method: 'express' }))} />
                  Express (1-2 days) – 39 kr
                </label>
              </div>
              <div>
                <label>
                  <span>Bemærkning til levering (valgfri):</span>
                  <textarea value={shipping.comment} onChange={e => setShipping(s => ({ ...s, comment: e.target.value }))} placeholder="Evt. besked til fragtmanden" style={{ width: '100%', minHeight: '60px', marginTop: '0.5em' }} />
                </label>
              </div>
              <button className={styles.payButton} type="submit">Fortsæt til adresse</button>
            </form>
          )}
          {step === 1 && (
            <form className={styles.paymentForm} onSubmit={e => { e.preventDefault(); setStep(2); }}>
              <h2>Delivery address</h2>
              <input type="text" placeholder="Navn" value={address.name} onChange={e => setAddress(a => ({ ...a, name: e.target.value }))} required />
              <input type="text" placeholder="Gade og nr." value={address.street} onChange={e => setAddress(a => ({ ...a, street: e.target.value }))} required />
              <input type="text" placeholder="Postnummer" value={address.zip} onChange={e => setAddress(a => ({ ...a, zip: e.target.value }))} required />
              <input type="text" placeholder="By" value={address.city} onChange={e => setAddress(a => ({ ...a, city: e.target.value }))} required />
              <input type="text" placeholder="Land" value={address.country} onChange={e => setAddress(a => ({ ...a, country: e.target.value }))} required />
              <button className={styles.payButton} type="submit">Fortsæt til betaling</button>
            </form>
          )}
          {step === 2 && (
            <form className={styles.paymentForm} onSubmit={e => { e.preventDefault(); navigate('/my-orders'); }}>
              <div className={styles.paymentTabs}>
                <button type="button" className={payment.method === 'paypal' ? styles.activeTab : ''} onClick={() => setPayment(p => ({ ...p, method: 'paypal' }))}>PayPal</button>
                <button type="button" className={payment.method === 'card' ? styles.activeTab : ''} onClick={() => setPayment(p => ({ ...p, method: 'card' }))}>Credit Card</button>
              </div>
              {payment.method === 'paypal' ? (
                <div className={styles.paypalBox}>[PayPal Button Placeholder]</div>
              ) : (
                <>
                  <div className={styles.paymentFields}>
                    <input type="text" placeholder="Cardholder Name" value={payment.name} onChange={e => setPayment(p => ({ ...p, name: e.target.value }))} />
                    <input type="text" placeholder="Card Number" value={payment.number} onChange={e => setPayment(p => ({ ...p, number: e.target.value }))} />
                    <div className={styles.paymentRow}>
                      <input type="text" placeholder="Month" value={payment.month} onChange={e => setPayment(p => ({ ...p, month: e.target.value }))} />
                      <input type="text" placeholder="Year" value={payment.year} onChange={e => setPayment(p => ({ ...p, year: e.target.value }))} />
                      <input type="text" placeholder="CVC" value={payment.cvc} onChange={e => setPayment(p => ({ ...p, cvc: e.target.value }))} />
                    </div>
                  </div>
                  <label className={styles.saveCardToggle}>
                    <input type="checkbox" checked={payment.save} onChange={e => setPayment(p => ({ ...p, save: e.target.checked }))} />
                    Save card data for future payments
                  </label>
                  <button className={styles.payButton} type="submit">Pay with card</button>
                </>
              )}
            </form>
          )}
        </section>
        <aside className={styles.checkoutCartSummary}>
          <h2>Your cart</h2>
          <div className={styles.cartList}>
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
                  <div className={styles.cartItemPrice}>${item.price}</div>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}