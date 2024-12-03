import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/" className="link">
          MyApp
        </Link>
      </div>
      <div className="links">
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/contact" className="link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
