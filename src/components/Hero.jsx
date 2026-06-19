import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGraduationCap,
  FaShieldAlt,
  FaUsers,
  FaTrophy
} from "react-icons/fa";

import "./Hero.css";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";

function Hero() {
  const slides = [
    {
      image: hero1,
      title: "Aspiring For",
      highlight: "Excellence",
      subtitle:
        "Nurturing Future Leaders Through Quality Education",
    },
    {
      image: hero2,
      title: "Learning",
      highlight: "Beyond",
      subtitle:
        "Building Creativity, Confidence & Character",
    },
    {
      image: hero3,
      title: "Safe & Caring",
      highlight: "Environment",
      subtitle:
        "Every Child Matters At Praise-El Junior School",
    },
    {
      image: hero4,
      title: "Academic",
      highlight: "Excellence",
      subtitle:
        "Strong Foundations For Lifelong Success",
    },
    {
      image: hero5,
      title: "Growing",
      highlight: "Together",
      subtitle:
        "Developing Responsible Citizens Of Tomorrow",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="hero">

      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={slide.title}
          className={`hero-bg ${
            index === currentSlide ? "active" : ""
          }`}
        />
      ))}

      <div className="overlay"></div>

      <button
        className="slider-arrow left"
        onClick={prevSlide}
      >
        ❮
      </button>

      <button
        className="slider-arrow right"
        onClick={nextSlide}
      >
        ❯
      </button>

      <div className="hero-content">

        <div className="hero-badge">
          <FaGraduationCap />
          Admissions Open For 2026
        </div>

        <div
          key={currentSlide}
          className="hero-text"
        >
          <h1>
            {slides[currentSlide].title}
            <span>
              {slides[currentSlide].highlight}
            </span>
          </h1>

          <div className="hero-line"></div>

          <p>
            {slides[currentSlide].subtitle}
          </p>
        </div>

        <div className="hero-buttons">

          <Link
            to="/admissions"
            className="btn-primary"
          >
            Apply Now
            <FaArrowRight />
          </Link>

          <Link
            to="/about"
            className="btn-secondary"
          >
            Discover More
            <FaArrowRight />
          </Link>

        </div>

      </div>

      <div className="hero-features">

        <div className="feature-card">
          <div className="feature-icon">
            <FaGraduationCap />
          </div>

          <div>
            <h4>Quality Education</h4>
            <p>
              Strong academic foundation
            </p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaShieldAlt />
          </div>

          <div>
            <h4>Safe Environment</h4>
            <p>
              Secure and caring learning space
            </p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaUsers />
          </div>

          <div>
            <h4>Holistic Growth</h4>
            <p>
              Character, confidence & creativity
            </p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaTrophy />
          </div>

          <div>
            <h4>Excellence Always</h4>
            <p>
              Preparing leaders of tomorrow
            </p>
          </div>
        </div>

      </div>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() =>
              setCurrentSlide(index)
            }
            className={`dot ${
              index === currentSlide
                ? "active-dot"
                : ""
            }`}
          />
        ))}
      </div>

    </section>
  );
}

export default Hero;