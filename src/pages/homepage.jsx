import React, { useState } from "react";
import "../css/Home.css";
import about from "../assets/about.jpg";
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";

const blogs = [
  {
    id: 1,
    image: blog1,
    category: "Web Design",
    date: "01 Jan, 2045",
    title: "Dolor sit magna rebum clita rebum dolor",
    description:
      "Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est stet tempor eos dolor",
  },
  {
    id: 2,
    image: blog2,
    category: "Web Design",
    date: "01 Jan, 2045",
    title: "Dolor sit magna rebum clita rebum dolor",
    description:
      "Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est stet tempor eos dolor",
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
            Dolore tempor aliqua lorem rebum kasd elitr eirmod dolore diam eos
            kasd. Kasd clita ea justo est sed kasd erat clita sea.
          </p>
          <button className="read-more">Read More</button>
          <button className="play-video">Play Video</button>
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
                Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet
                no labore lorem sit clita duo justo magna dolore.
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
                        Tempor erat elitr at rebum at at clita aliquyam
                        consetetur. Diam dolor diam ipsum et, tempor voluptua
                        sit consetetur sit.
                      </p>
                    </div>
                  )}
                  {activeTab === "vision" && (
                    <div className="tab-panel active">
                      <p>
                        Tempor erat elitr at rebum at at clita aliquyam
                        consetetur. Diam dolor diam ipsum et, tempor voluptua
                        sit consetetur sit.
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
            <p>Kasd dolor no lorem sit tempor...</p>
            <a href="#">Read More</a>
          </div>
          <div className="service-item">
            <h4>Pet Feeding</h4>
            <p>Kasd dolor no lorem sit tempor...</p>
            <a href="#">Read More</a>
          </div>
          <div className="service-item">
            <h4>Pet Grooming</h4>
            <p>Kasd dolor no lorem sit tempor...</p>
            <a href="#">Read More</a>
          </div>
          <div className="service-item">
            <h4>Pet Training</h4>
            <p>Kasd dolor no lorem sit tempor...</p>
            <a href="#">Read More</a>
          </div>
          <div className="service-item">
            <h4>Pet Exercise</h4>
            <p>Kasd dolor no lorem sit tempor...</p>
            <a href="#">Read More</a>
          </div>
          <div className="service-item">
            <h4>Pet Treatment</h4>
            <p>Kasd dolor no lorem sit tempor...</p>
            <a href="#">Read More</a>
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
                  <a href="#" className="blog-read-more">
                    Read More <i className="icon-chevron-right"></i>
                  </a>
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
