import React from "react";
import "./Hero.css";
import {
  FaArrowRight,
  FaGraduationCap,
  FaShieldAlt,
  FaUsers,
  FaTrophy,
} from "react-icons/fa";

import heroBg from "../assets/hero2.jpg";

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
            <p>Building character, confidence & creativity</p>
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