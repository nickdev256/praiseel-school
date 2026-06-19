import React from "react";
import "./Hero.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaGraduationCap,
  FaShieldAlt,
  FaUsers,
  FaTrophy,
} from "react-icons/fa";

import heroBg from "../assets/hero-bg.jpg";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* TOP BAR */}
      <div className="topbar">
        <div className="topbar-left">
          <span>
            <FaPhoneAlt /> 0744 523 317
          </span>

          <span>
            <FaEnvelope /> info@praiseel.ac.ug
          </span>
        </div>

        <div className="topbar-right">
          <FaMapMarkerAlt /> Kokoola-Kalagi, Mukono
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo-section">
          <img src={logo} alt="logo" />

          <div className="school-info">
            <h2>Praise-El Junior School</h2>
            <p>Aspiring For Excellence</p>
          </div>
        </div>

        <ul className="nav-links">
          <li className="active">Home</li>
          <li>About Us</li>
          <li>Admissions</li>
          <li>Gallery</li>
          <li>Contact Us</li>
          <li>Apply Online</li>
        </ul>

        <button className="enroll-btn">
          Enroll Now
          <span>
            <FaArrowRight />
          </span>
        </button>
      </nav>

      {/* HERO CONTENT */}
      <div className="hero-content">
        <div className="admission-badge">
          <FaGraduationCap />
          <span>ADMISSIONS OPEN FOR 2026</span>
        </div>

        <h1>
          Aspiring For
          <br />
          <span>Excellence</span>
        </h1>

        <div className="yellow-line"></div>

        <p>
          Nurturing Future Leaders Through
          <br />
          Quality Education
        </p>

        <div className="hero-buttons">
          <button className="apply-btn">
            Apply Now
            <span>
              <FaArrowRight />
            </span>
          </button>

          <button className="discover-btn">
            Discover More
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features-container">
        <div className="feature-item">
          <div className="feature-icon">
            <FaGraduationCap />
          </div>

          <div>
            <h4>Quality Education</h4>
            <p>Strong academic foundation</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="feature-item">
          <div className="feature-icon">
            <FaShieldAlt />
          </div>

          <div>
            <h4>Safe Environment</h4>
            <p>A secure and caring learning space</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="feature-item">
          <div className="feature-icon">
            <FaUsers />
          </div>

          <div>
            <h4>Holistic Growth</h4>
            <p>Building character confidence & creativity</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="feature-item">
          <div className="feature-icon">
            <FaTrophy />
          </div>

          <div>
            <h4>Excellence Always</h4>
            <p>Preparing leaders of tomorrow</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;