import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      title: "Aspiring For Excellence",
      subtitle: "Nurturing Future Leaders Through Quality Education",
    },
    {
      image: hero2,
      title: "Learning Beyond",
      subtitle: "Building Creativity, Confidence & Character",
    },
    {
      image: hero3,
      title: "Safe & Caring Environment",
      subtitle: "Every Child Matters At Praise-El Junior School",
    },
    {
      image: hero4,
      title: "Academic Excellence",
      subtitle: "Strong Foundations For Lifelong Success",
    },
    {
      image: hero5,
      title: "Growing Together",
      subtitle: "Developing Responsible Citizens Of Tomorrow",
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
        aria-label="Previous Slide"
      >
        ❮
      </button>

      <button
        className="slider-arrow right"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        ❯
      </button>

      <div className="hero-content">
        <span className="hero-badge">
          Admissions Open For 2026
        </span>

        <div key={currentSlide} className="hero-text">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].subtitle}</p>
        </div>

        <div className="hero-buttons">
          <Link
            to="/admissions"
            className="btn-primary"
          >
            Apply Now
          </Link>

          <Link
            to="/about"
            className="btn-secondary"
          >
            Discover More
          </Link>
        </div>
      </div>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
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