import React from "react";
import "../styles/About.css";
import aboutBanner from "../assets/about.jpg";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">About Us</h1>
      <div className="about-us-intro">
        <img
          src={aboutBanner}
          alt="Happy Pets"
          className="about-us-image"
        />
        <p className="about-us-text">
          At PawsClaws, we strive to provide the best care for your beloved
          pets. From expert grooming services to nutritious meals and playful
          toys, our mission is to make every pet feel loved and cared for. Our
          team focuses on practical recommendations, reliable supplies, and a
          shopping experience that helps owners make confident choices.
        </p>
      </div>
      <div className="about-story">
        <div>
          <h2>Built Around Everyday Pet Care</h2>
          <p>
            Pet care is not one big decision. It is the food you buy every
            month, the toy that keeps a bored pet busy, the brush that makes
            grooming calmer, and the advice that helps you choose well.
          </p>
        </div>
        <div>
          <h2>What We Care About</h2>
          <p>
            We keep our shelves focused on useful essentials, comfort products,
            and care items that solve real problems for dogs, cats, birds,
            fish, reptiles, and small pets.
          </p>
        </div>
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
      <div className="about-values">
        <div>
          <strong>Care-first service</strong>
          <span>Friendly help before the hard sell.</span>
        </div>
        <div>
          <strong>Practical products</strong>
          <span>Items chosen for daily use, comfort, and value.</span>
        </div>
        <div>
          <strong>Local support</strong>
          <span>Guidance for families, first-time owners, and longtime pet people.</span>
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
