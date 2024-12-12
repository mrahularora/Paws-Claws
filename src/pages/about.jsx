import React from "react";
import "../css/aboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">About Us</h1>
      <div className="about-us-intro">
        <img
          src="assets/about-us-banner.jpg"
          alt="Happy Pets"
          className="about-us-image"
        />
        <p className="about-us-text">
          At PawsClaws, we strive to provide the best care for your beloved
          pets. From expert grooming services to nutritious meals and playful
          toys, our mission is to make every pet feel loved and cared for.
        </p>
      </div>
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
      <div className="shop-today-section">
        <div className="shop-today-background">
          <div className="shop-today-content">
            <h2>Shop Today</h2>
            <p>
              Discover our exclusive collection of pet care products, from
              nutritious food to toys and grooming essentials. Pamper your pets
              with the best!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
