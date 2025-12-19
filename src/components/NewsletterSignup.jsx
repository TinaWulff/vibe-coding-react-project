import React, { useState } from 'react';
import styles from './NewsletterSignup.module.scss';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.section}>
      <h3>Sign up for our newsletter</h3>
      <p>Be the first to know about our special offers, news, and updates.</p>
      {submitted ? (
        <div className={styles.thankyou}>Thank you for signing up!</div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'inline-block' }}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Sign Up
          </button>
        </form>
      )}
    </section>
  );
};

export default NewsletterSignup;
