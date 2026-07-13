import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const footerGroups = [
  ["About Us", ["About PawsClaws", "Customer Care", "Gift Cards", "Careers"]],
  ["Our Stores", ["Store Locator", "Services", "Current Flyer"]],
  ["Learn More", ["Buy Online, Pick Up In Store", "AutoShip", "Puppy Centre", "FAQs"]],
  ["Shipping & Returns", ["Coupon Policy", "Shipping & Returns Policy"]],
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {footerGroups.map(([title, links]) => (
          <div className="footer-column" key={title}>
            <h3>{title}</h3>
            <ul>
              {links.map((label) => (
                <li key={label}>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-column connect">
          <h3>Connect</h3>
          <p>Still need some help?</p>
          <Link to="/contact" className="contact-button">Contact Us</Link>
          <p>- OR -</p>
          <p>Call us</p>
          <p>
            <strong>1-800-PAWS-CLAWS (738-8258)</strong>
          </p>
          <p>Mon - Sat: 8:00 AM - 10:00 PM (ET)</p>
          <p>Sun: 8:00 AM - 8:00 PM (ET)</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Privacy Policy | Accessibility | Terms of Use</p>
        <p>Copyright 2026 PawsClaws. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
