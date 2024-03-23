import React from 'react';
import { FaFacebook, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>Need Help?</h3>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/Terms and condition">Terms and Conditions</a></li>
            <li><a href="/privacy and policy">Privacy and policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>My Account</h3>
          <ul>
            <li><a href="/register">Sign up</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>Join US</h3>
          <ul className='social-icons'>
            <li><FaFacebook /><a href="/facebook">Facebook</a></li>
            <li><FaTwitterSquare /><a href="/twitter">Twitter</a></li>
            <li><FaInstagramSquare /><a href="/instagram">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-info">
          <p>Copyright&copy; 2024 <a href="/">StarShop</a>. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;