import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">About Pet Valu</a></li>
            <li><a href="#">Companions for Change</a></li>
            <li><a href="#">Customer Care Policy</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Your Rewards™</a></li>
            <li><a href="#">Franchise Opportunities</a></li>
            <li><a href="#">Investor Relations</a></li>
          </ul>
        </div>

        {/* Our Stores Section */}
        <div className="footer-column">
          <h3>Our Stores</h3>
          <ul>
            <li><a href="#">Store Locator</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Current Flyer</a></li>
          </ul>
        </div>

        {/* Learn More Section */}
        <div className="footer-column">
          <h3>Learn More</h3>
          <ul>
            <li><a href="#">Buy Online, Pick Up In Store</a></li>
            <li><a href="#">AutoShip</a></li>
            <li><a href="#">Puppy Centre</a></li>
            <li><a href="#">Kitten Centre</a></li>
            <li><a href="#">Resource Centre</a></li>
            <li><a href="#">Product Recall</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Shipping & Returns Section */}
        <div className="footer-column">
          <h3>Shipping & Returns</h3>
          <ul>
            <li><a href="#">Coupon Policy</a></li>
            <li><a href="#">Shipping & Returns Policy</a></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className="footer-column connect">
          <h3>Connect</h3>
          <p>Still need some help?</p>
          <button className="contact-button">Contact Us</button>
          <p>- OR -</p>
          <p>Call us</p>
          <p><strong>1-800-PAWS-CLAWS(738-8258)</strong></p>
          <p>Mon - Sat: 8:00 AM - 10:00 PM (ET)</p>
          <p>Sun: 8:00 AM - 8:00 PM (ET)</p>
         
        </div>
      </div>
      <div className="footer-bottom">
        <p>Privacy Policy • Accessibility • Terms of Use</p>
        <p>Copyright © 2024 PawsClaws. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
