
import { Link } from "react-router-dom";

import {
  FaEye,
  FaBullseye,
  FaChurch,
  FaShieldAlt,
  FaTrophy,
  FaUserTie,
  FaHandshake,
  FaGraduationCap,
  FaUsers,
  FaSchool,
  FaArrowRight,
} from "react-icons/fa";

import "./AboutPage.css";

import hero from "../assets/about-school.jpg";
import aboutImage from "../assets/gallery1.jpg";
import headteacher from "../assets/headteacher.jpg";
import teachersImg from "../assets/gallery2.jpg";
import logo from "../assets/logo.png";

function AboutPage() {
  return (
    <main className="about-page">

      {/* WATERMARK */}
      <div className="page-watermark">
        <FaSchool />
      </div>

      {/* HERO */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="hero-overlay">

          <img
            src={logo}
            alt="Praise-El"
            className="hero-logo"
          />

          <div className="hero-content">

            <span>ABOUT PRAISE-EL</span>

            <h1>
              Building Future Leaders
              <br />
              <strong>Through Excellence</strong>
            </h1>

            <p>Learn • Lead • Grow</p>

          </div>

        </div>

        <div className="hero-wave"></div>

      </section>

      {/* INTRO */}

      <section className="about-intro">

        <div className="intro-decoration"></div>

        <div className="intro-image">
          <img src={aboutImage} alt="Students" />
        </div>

        <div className="intro-content">

          <span>WHO WE ARE</span>

          <h2>
            Welcome To
            <br />
            Praise-El Junior School
          </h2>

          <p>
            Praise-El Junior School is a Christian based institution
            committed to providing quality Nursery and Primary education
            in a caring, safe and inspiring environment.
          </p>

          <p>
            We nurture learners academically, morally and socially
            while preparing them for future success.
          </p>

          <div className="intro-features">

            <div className="feature-box">
              <FaSchool />
              <div>
                <h4>Quality Education</h4>
                <p>Strong academic foundation.</p>
              </div>
            </div>

            <div className="feature-box">
              <FaShieldAlt />
              <div>
                <h4>Safe Environment</h4>
                <p>Secure and supportive learning.</p>
              </div>
            </div>

            <div className="feature-box">
              <FaUsers />
              <div>
                <h4>Holistic Growth</h4>
                <p>Character and leadership.</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* VISION + MISSION */}

      <section className="vision-bar">

        <div className="vision-card">

          <FaEye />

          <div>
            <h3>OUR VISION</h3>

            <p>
              To be a centre of excellence nurturing
              responsible, confident and innovative learners.
            </p>
          </div>

        </div>

        <div className="divider"></div>

        <div className="vision-card">

          <FaBullseye />

          <div>
            <h3>OUR MISSION</h3>

            <p>
              To provide holistic education through quality
              teaching, discipline and leadership development.
            </p>
          </div>

        </div>

      </section>

      {/* HEAD TEACHER */}

      <section className="headteacher-section">

        <div className="message-card">

          <span>MESSAGE</span>

          <h2>
            Message From The
            <br />
            Head Teacher
          </h2>

          <blockquote>
            At Praise-El Junior School, we believe every child
            has unique potential. Through dedication, innovation
            and teamwork, we continue to provide a strong
            educational foundation that empowers our learners.
          </blockquote>

          <h4>Joyce Namagembe</h4>

          <p>Head Teacher</p>

        </div>

        <div className="headteacher-image">

          <div className="teacher-decoration"></div>

          <img
            src={headteacher}
            alt="Head Teacher"
          />

          <div className="teacher-badge">
            <h4>
              Dedicated.
              <br />
              Experienced.
              <br />
              Passionate.
            </h4>
          </div>

        </div>

      </section>

      {/* VALUES */}

      <section className="values-section">

        <h2>OUR CORE VALUES</h2>

        <div className="values-line">

          <div className="value-item">
            <FaChurch />
            <h4>Faith</h4>
          </div>

          <div className="value-item">
            <FaShieldAlt />
            <h4>Discipline</h4>
          </div>

          <div className="value-item">
            <FaTrophy />
            <h4>Excellence</h4>
          </div>

          <div className="value-item">
            <FaUserTie />
            <h4>Leadership</h4>
          </div>

          <div className="value-item">
            <FaHandshake />
            <h4>Integrity</h4>
          </div>

        </div>

      </section>

      {/* EDUCATORS SECTION */}

      <section className="teachers-team-section">

        <div className="teachers-card">

          <div className="teachers-text">

            <span>OUR EDUCATORS</span>

            <h2>
              Professional.
              Passionate.
              Dedicated To Excellence.
            </h2>

            <p>
              Our teachers are qualified, experienced and
              committed to bringing out the best in every child.
            </p>

            <Link
              to="/contact"
              className="team-btn"
            >
              Meet Our Team
              <FaArrowRight />
            </Link>

          </div>

          <div className="teachers-image">
            <img
              src={teachersImg}
              alt="Teachers"
            />
          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="stats-strip">

        <div>
          <FaGraduationCap />
          <h3>500+</h3>
          <p>Learners</p>
        </div>

        <div>
          <FaUsers />
          <h3>35+</h3>
          <p>Teachers</p>
        </div>

        <div>
          <FaTrophy />
          <h3>98%</h3>
          <p>Pass Rate</p>
        </div>

        <div>
          <FaSchool />
          <h3>15+</h3>
          <p>Years Excellence</p>
        </div>

      </section>

      {/* CTA */}

      <section className="join-strip">

        <div className="join-left">

          <h2>
            Ready To Join
            Praise-El Family?
          </h2>

          <p>
            Give your child the gift of quality education
            and a bright future.
          </p>

        </div>

        <div className="join-buttons">

          <Link
            to="/admissions"
            className="apply-btn"
          >
            APPLY NOW
          </Link>

          <Link
            to="/contact"
            className="contact-btn"
          >
            CONTACT US
          </Link>

        </div>

      </section>

    </main>
  );
}

export default AboutPage;

