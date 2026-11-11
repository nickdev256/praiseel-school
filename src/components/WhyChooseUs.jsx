import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaShieldAlt,
  FaAward,
  FaFutbol,
  FaCross,
  FaUsers,
  FaUserTie,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";

import "./WhyChooseUs.css";
import schoolKids from "../assets/school-kids.jpg";

function WhyChooseUs() {
  return (
    <section className="why-choose-section">

      {/* HEADER */}

      <div className="why-header">

        <span className="why-tag">
          WHY CHOOSE PRAISE-EL
        </span>

        <h2>
          Building Future Leaders
          <br />
          Through Excellence
        </h2>

        <p>
          We provide a nurturing and stimulating environment where every
          child discovers their potential and grows in character,
          knowledge and faith.
        </p>

      </div>

      {/* MAIN CONTENT */}

      <div className="why-content">

        {/* LEFT IMAGE */}

        <div className="why-image-wrapper">

          <img
            src={schoolKids}
            alt="Praise-El Students"
            className="why-image"
          />

          <div className="quote-card">

            <span className="quote-mark">"</span>

            <h3>
              Nurturing hearts.
              <br />
              Building minds.
              <br />
              Shaping destiny.
            </h3>

          </div>

        </div>

        {/* RIGHT FEATURES */}

        <div className="features-list">

          <div className="timeline"></div>

          <div className="feature-row">

            <div className="feature-icon teacher">
              <FaChalkboardTeacher />
            </div>

            <div className="feature-content">

              <h4>
                Qualified & Caring Teachers
              </h4>

              <p>
                Experienced, passionate and dedicated teachers committed
                to every child's success.
              </p>

            </div>

          </div>

          <div className="feature-row">

            <div className="feature-icon learning">
              <FaLaptopCode />
            </div>

            <div className="feature-content">

              <h4>
                Modern Learning Experience
              </h4>

              <p>
                ICT-enabled classrooms and innovative teaching methods
                that make learning engaging and effective.
              </p>

            </div>

          </div>

          <div className="feature-row">

            <div className="feature-icon safety">
              <FaShieldAlt />
            </div>

            <div className="feature-content">

              <h4>
                Safe & Secure Environment
              </h4>

              <p>
                A well-secured child-friendly environment that promotes
                confidence and peace of mind.
              </p>

            </div>

          </div>

          <div className="feature-row">

            <div className="feature-icon award">
              <FaAward />
            </div>

            <div className="feature-content">

              <h4>
                Academic Excellence
              </h4>

              <p>
                Strong academic culture that consistently delivers
                outstanding results.
              </p>

            </div>

          </div>

          <div className="feature-row">

            <div className="feature-icon sports">
              <FaFutbol />
            </div>

            <div className="feature-content">

              <h4>
                Sports & Co-Curricular Activities
              </h4>

              <p>
                Opportunities to discover talents, build confidence and
                develop teamwork.
              </p>

            </div>

          </div>

          <div className="feature-row">

            <div className="feature-icon christian">
              <FaCross />
            </div>

            <div className="feature-content">

              <h4>
                Christian Values & Discipline
              </h4>

              <p>
                Building strong character and moral values rooted in
                Christian faith.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* STATS BAR */}

      <div className="stats-bar">

        <div className="stat-box">

          <div className="stat-icon">
            <FaUsers />
          </div>

          <div>
            <h3>500+</h3>
            <span>LEARNERS</span>
            <p>Growing and achieving every day</p>
          </div>

        </div>

        <div className="stat-box">

          <div className="stat-icon">
            <FaUserTie />
          </div>

          <div>
            <h3>30+</h3>
            <span>TEACHERS</span>
            <p>Qualified, experienced and dedicated</p>
          </div>

        </div>

        <div className="stat-box">

          <div className="stat-icon">
            <FaCalendarAlt />
          </div>

          <div>
            <h3>15+</h3>
            <span>YEARS</span>
            <p>Of impactful academic excellence</p>
          </div>

        </div>

        <div className="cta-box">

          <h4>
            Join the Praise-El Family
          </h4>

          <button>

            Discover More

            <span>
              <FaArrowRight />
            </span>

          </button>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;