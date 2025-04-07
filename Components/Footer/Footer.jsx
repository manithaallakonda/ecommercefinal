import React from 'react';
import './Footer.css';

import footerLogo from '../Assets/logo_big.png';
import instagramIcon from '../Assets/instagram_icon.png';
import pinterestIcon from '../Assets/pintester_icon.png';
import whatsappIcon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={footerLogo} alt="Trendora Logo" />
          <p className="footer-title">Trendora</p>
          <span className="footer-tagline">Your Everyday Fashion Destination 🛍️</span>
        </div>

        <div className="footer-sections">
          <ul className="footer-links">
            <h4>Company</h4>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
          <ul className="footer-links">
            <h4>Shop</h4>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Gift Cards</li>
            <li>Seasonal Offers</li>
          </ul>
          <ul className="footer-links">
            <h4>Support</h4>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
          <ul className="footer-links">
            <h4>Connect</h4>
            <li>Instagram</li>
            <li>Pinterest</li>
            <li>WhatsApp</li>
            <li>Community</li>
          </ul>
        </div>
      </div>

      <div className="footer-social">
        <div className="footer-icons-container">
          <img src={instagramIcon} alt="Instagram" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterestIcon} alt="Pinterest" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsappIcon} alt="WhatsApp" />
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>© 2025 Trendora. All rights reserved. | Crafted for the bold and fashionable 💖</p>
      </div>
    </footer>
  );
};

export default Footer;
