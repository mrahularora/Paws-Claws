import React, { useState } from "react";
import "../styles/Home.css";
import about from "../assets/about.jpg";
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";

const blogs = [
  {
    id: 1,
    image: blog1,
    category: "Pet Care",
    date: "13 Jul, 2026",
    title: "Simple ways to keep pets active indoors",
    description:
      "Enrichment toys, short training games, and routine play help pets stay healthy between walks.",
  },
  {
    id: 2,
    image: blog2,
    category: "Nutrition",
    date: "13 Jul, 2026",
    title: "Choosing food by age, size, and habit",
    description:
      "Match portions and formulas to your pet's life stage, activity level, and vet guidance.",
  },
];

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("mission");
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>Pet Shop</h1>
          <p>MAKE YOUR PETS HAPPY</p>
          <p>
            Food, toys, grooming, and everyday care essentials for healthier,
            happier pets.
          </p>
          <a className="read-more" href="/shop">Shop Now</a>
          <a className="play-video" href="/about">About Us</a>
        </div>
      </section>

      <div className="about-section">
        <div className="about-container">
          <div className="about-row">
            {/* Image Section */}
            <div className="about-image-container">
              <img src={about} alt="About Us" className="about-image" />
            </div>

            {/* Text Section */}
            <div className="about-content">
              <div className="about-header">
                <h6 className="text-primary">About Us</h6>
                <h2>We Keep Your Pets Happy All Time</h2>
              </div>
              <h4 className="about-description">
                We pair dependable products with practical pet care guidance so
                owners can shop with confidence.
              </h4>

              {/* Tabs Section */}
              <div className="about-tabs">
                <div className="tab-buttons">
                  <button
                    className={`tab-btn ${
                      activeTab === "mission" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("mission")}
                  >
                    Our Mission
                  </button>
                  <button
                    className={`tab-btn ${
                      activeTab === "vision" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("vision")}
                  >
                    Our Vision
                  </button>
                </div>

                <div className="tab-content">
                  {activeTab === "mission" && (
                    <div className="tab-panel active">
                      <p>
                        Make everyday pet care easier with trusted products,
                        friendly service, and clear advice.
                      </p>
                    </div>
                  )}
                  {activeTab === "vision" && (
                    <div className="tab-panel active">
                      <p>
                        Build a local pet store experience that feels useful,
                        warm, and simple from browsing to checkout.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="services">
        <h2>Our Excellent Pet Care Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <h4>Pet Boarding</h4>
            <p>Comfortable short-term care with clean routines.</p>
          </div>
          <div className="service-item">
            <h4>Pet Feeding</h4>
            <p>Food recommendations by age, size, and habit.</p>
          </div>
          <div className="service-item">
            <h4>Pet Grooming</h4>
            <p>Bathing, brushing, trims, and coat care basics.</p>
          </div>
          <div className="service-item">
            <h4>Pet Training</h4>
            <p>Positive routines for calmer daily behavior.</p>
          </div>
          <div className="service-item">
            <h4>Pet Exercise</h4>
            <p>Toys and play plans for active bodies and minds.</p>
          </div>
          <div className="service-item">
            <h4>Pet Treatment</h4>
            <p>Care essentials that support vet-led wellness.</p>
          </div>
        </div>
      </section>
      <div className="blog-section">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <h6 className="section-subtitle">Latest Blog</h6>
            <h1 className="section-title">
              Latest Articles From Our Blog Post
            </h1>
          </div>

          {/* Blog Grid */}
          <div className="blog-grid">
            {blogs.map((blog) => (
              <div key={blog.id} className="blog-card">
                {/* Blog Image */}
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                </div>
                {/* Blog Content */}
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>
                      <i className="icon-bookmark"></i> {blog.category}
                    </span>
                    <span>
                      <i className="icon-calendar"></i> {blog.date}
                    </span>
                  </div>
                  <h5 className="blog-title">{blog.title}</h5>
                  <p className="blog-description">{blog.description}</p>
                  <span className="blog-read-more">
                    Read More <i className="icon-chevron-right"></i>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
