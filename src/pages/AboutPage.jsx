import { Link } from "react-router-dom";
import {
  FaBullseye,
  FaEye,
  FaGraduationCap,
  FaUsers,
  FaAward,
  FaBookOpen,
  FaArrowRight,
} from "react-icons/fa";

import "./AboutPage.css";

import hero from "../assets/about-school.jpg";
import headteacher from "../assets/headteacher.jpg";
import teachersImg from "../assets/gallery2.jpg";

function AboutPage() {
  return (
    <main className="about-page">

      {/* HERO */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="about-overlay">

          <span className="hero-tag">
            ABOUT PRAISE-EL
          </span>

          <h1>
            Building Future Leaders
            Through Excellence
          </h1>

          <p>
            Providing quality Nursery and Primary
            education in a caring, safe and inspiring
            environment.
          </p>

          <div className="hero-buttons">

            <Link
              to="/contact"
              className="primary-btn"
            >
              Contact Us
            </Link>

            <Link
              to="/admissions"
              className="secondary-btn"
            >
              Apply Now
            </Link>

          </div>

        </div>
      </section>

      {/* ABOUT SCHOOL */}

      <section className="school-story">

        <div className="story-image">

          <img
            src={hero}
            alt="Praise-El School"
          />

        </div>

        <div className="story-content">

          <span>WHO WE ARE</span>

          <h2>
            Welcome To
            Praise-El Junior School
          </h2>

          <p>
            Praise-El Junior School is committed to
            nurturing learners academically,
            spiritually and socially through quality
            education and strong Christian values.
          </p>

          <p>
            Our school provides a supportive learning
            environment where children develop
            confidence, creativity, discipline and
            leadership skills that prepare them for
            lifelong success.
          </p>

          <div className="story-stats">

            <div>
              <h3>500+</h3>
              <span>Learners</span>
            </div>

            <div>
              <h3>35+</h3>
              <span>Teachers</span>
            </div>

            <div>
              <h3>15+</h3>
              <span>Years</span>
            </div>

          </div>

        </div>

      </section>

      {/* VISION MISSION */}

      <section className="vision-mission">

        <div className="vm-card">

          <div className="vm-icon">
            <FaEye />
          </div>

          <h3>Our Vision</h3>

          <p>
            To be a centre of excellence nurturing
            responsible, confident and innovative
            learners.
          </p>

        </div>

        <div className="vm-card">

          <div className="vm-icon">
            <FaBullseye />
          </div>

          <h3>Our Mission</h3>

          <p>
            To provide holistic education through
            quality teaching, discipline and
            leadership development.
          </p>

        </div>

      </section>

      {/* HEADTEACHER */}

      <section className="headteacher-section">

        <div className="headteacher-image">

          <img
            src={headteacher}
            alt="Head Teacher"
          />

        </div>

        <div className="headteacher-content">

          <span>MESSAGE FROM THE HEADTEACHER</span>

          <h2>
            Inspiring Every Child
            To Excel
          </h2>

          <p>
            At Praise-El Junior School, we believe
            that every learner possesses unique gifts
            and talents. Our commitment is to provide
            a nurturing environment where each child
            grows academically, morally and socially.
          </p>

          <p>
            Through teamwork, innovation and
            dedication, we continue to shape future
            leaders prepared to positively impact
            their communities.
          </p>

          <Link
            to="/contact"
            className="message-btn"
          >
            Contact School
            <FaArrowRight />
          </Link>

        </div>

      </section>

      {/* CORE VALUES */}

      <section className="core-values">

        <div className="section-title">

          <span>OUR VALUES</span>

          <h2>
            What We Stand For
          </h2>

        </div>

        <div className="values-grid">

          <div className="value-card">
            <FaGraduationCap />
            <h3>Excellence</h3>
          </div>

          <div className="value-card">
            <FaUsers />
            <h3>Leadership</h3>
          </div>

          <div className="value-card">
            <FaAward />
            <h3>Discipline</h3>
          </div>

          <div className="value-card">
            <FaBookOpen />
            <h3>Integrity</h3>
          </div>

        </div>

      </section>

      {/* TEACHERS */}

      <section className="teachers-section">

        <img
          src={teachersImg}
          alt="Teachers"
        />

        <div className="teachers-overlay">

          <span>OUR TEAM</span>

          <h2>
            Professional &
            Dedicated Teachers
          </h2>

          <p>
            Passionate educators committed to
            academic excellence and learner success.
          </p>

        </div>

      </section>

      {/* CTA */}

      <section className="about-cta">

        <h2>
          Join The Praise-El Family
        </h2>

        <p>
          Give your child the opportunity to learn,
          grow and succeed in a nurturing school
          environment.
        </p>

        <div className="cta-buttons">

          <Link
            to="/admissions"
            className="primary-btn"
          >
            Apply Now
          </Link>

          <Link
            to="/contact"
            className="secondary-btn"
          >
            Contact Us
          </Link>

        </div>

      </section>

    </main>
  );
}

export default AboutPage;