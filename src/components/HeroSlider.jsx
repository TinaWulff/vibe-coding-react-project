
import React, { useEffect, useState } from 'react';
import styles from './HeroSlider.module.scss';

const SLIDE_COUNT = 4;

const HeroSlider = () => {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    async function fetchSlides() {
      const res = await fetch('https://dummyjson.com/products?limit=' + SLIDE_COUNT);
      const data = await res.json();
      setSlides(data.products.map(p => ({
        image: p.thumbnail,
        title: p.title,
        description: p.description || '',
      })));
    }
    fetchSlides();
  }, []);

  const nextSlide = () => setCurrent((c) => (c + 1) % slides.length);
  const prevSlide = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  if (!slides.length) return <div className={styles.hero}>Loading...</div>;

  return (
    <div className={styles.heroSlider}>
      <button className={styles.arrow} onClick={prevSlide} aria-label="Previous slide">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5 19l-7-7 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className={styles.slide}>
        <img src={slides[current].image} alt={slides[current].title} className={styles.slideImage} />
        <div className={styles.slideContent}>
          <h2>{slides[current].title}</h2>
          <p>{slides[current].description}</p>
        </div>
      </div>
      <button className={styles.arrow} onClick={nextSlide} aria-label="Next slide">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default HeroSlider;
