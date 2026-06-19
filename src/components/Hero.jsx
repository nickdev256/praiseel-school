import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

import {
  FaArrowRight,
  FaGraduationCap,
  FaShieldAlt,
  FaUsers,
  FaTrophy,
} from "react-icons/fa";

import heroBg from "../assets/hero4.jpg";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
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
          <Link to="/apply-online" className="apply-btn">
            Apply Now
            <span>
              <FaArrowRight />
            </span>
          </Link>

          <Link to="/about" className="discover-btn">
            Discover More
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features-container">
        <Link to="/admissions" className="feature-item">
          <div className="feature-icon">
            <FaGraduationCap />
          </div>

          <div>
            <h4>Quality Education</h4>
            <p>Strong academic foundation</p>
          </div>
        </Link>

        <div className="divider"></div>

        <Link to="/about" className="feature-item">
          <div className="feature-icon">
            <FaShieldAlt />
          </div>

          <div>
            <h4>Safe Environment</h4>
            <p>A secure and caring learning space</p>
          </div>
        </Link>

        <div className="divider"></div>

        <Link to="/about" className="feature-item">
          <div className="feature-icon">
            <FaUsers />
          </div>

          <div>
            <h4>Holistic Growth</h4>
            <p>Building character, confidence & creativity</p>
          </div>
        </Link>

        <div className="divider"></div>

        <Link to="/gallery" className="feature-item">
          <div className="feature-icon">
            <FaTrophy />
          </div>

          <div>
            <h4>Excellence Always</h4>
            <p>Preparing leaders of tomorrow</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;