import React from 'react';
import './NewsLetter.css';
import { FaEnvelopeOpenText } from 'react-icons/fa';

const NewsLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Thank you for subscribing!");
  };

  return (
    <section className="newsletter">
      <FaEnvelopeOpenText size={48} color="#fff" />
      <h1>Join Our Colorful World ✨</h1>
      <p>Be the first to receive exclusive deals, product drops, and styling tips!</p>

      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default NewsLetter;
