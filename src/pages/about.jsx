import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Heading */}
      <h1 className="about-us-heading">About Us</h1>

      {/* Picture and Text Section */}
      <div className="about-us-intro">
        <img
          src="https://via.placeholder.com/600x400"
          alt="Happy Pets"
          className="about-us-image"
        />
        <p className="about-us-text">
          We at PawsClaws believe in bringing joy to your pets. Our mission is
          to provide exceptional care and products to make every pet’s life
          better. From grooming to nutrition, we’ve got you covered!
        </p>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2 className="services-heading">Our Services</h2>
        <div className="services-cards">
          <div className="service-card">
            <h3>Pet Grooming</h3>
            <p>Keep your pets looking and feeling their best.</p>
          </div>
          <div className="service-card">
            <h3>Pet Boarding</h3>
            <p>Safe and caring boarding for your beloved pets.</p>
          </div>
          <div className="service-card">
            <h3>Pet Training</h3>
            <p>Expert training for well-behaved pets.</p>
          </div>
          <div className="service-card">
            <h3>Pet Healthcare</h3>
            <p>Comprehensive health checkups and treatments.</p>
          </div>
        </div>
      </div>

      {/* Final Picture with Text */}
      <div className="shop-today-section">
        <img
          src="https://via.placeholder.com/1200x500"
          alt="Shop Today"
          className="shop-today-image"
        />
        <div className="shop-today-text">
          <h2>Shop Today</h2>
          <p>Discover our wide range of products to keep your pets happy and healthy.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
