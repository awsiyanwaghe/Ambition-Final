import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>The Sanskrit Hub</h3>
          <p>Preserving the ancient language of Sanskrit and promoting Hindi education</p>
          <div className="social-links">
            <a href="#" className="social-icon">📘</a>
            <a href="#" className="social-icon">📷</a>
            <a href="#" className="social-icon">▶️</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📍 Andheri, Mumbai, India</p>
          <p>📞 +91 98201 23456</p>
          <p>✉️ info@sanskrithub.com</p>
        </div>
        
        <div className="footer-section">
          <h4>Working Hours</h4>
          <p>Monday - Friday: 9am - 7pm</p>
          <p>Saturday: 9am - 5pm</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 The Sanskrit Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;