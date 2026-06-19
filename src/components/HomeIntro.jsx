import { useState } from "react";
import {
  FaSchool,
  FaEye,
  FaBullseye,
  FaMapMarkerAlt,
  FaHandshake,
  FaGraduationCap,
  FaBookOpen,
  FaShieldAlt,
  FaCross,
  FaArrowRight,
  FaUsers,
  FaChalkboardTeacher,
  FaStar,
  FaCertificate,
} from "react-icons/fa";

import "./HomeIntro.css";
import aboutImage from "../assets/about-school.jpg";

function HomeIntro() {
  const [tab, setTab] = useState("about");

  const content = {
    about: {
      heading: "WELCOME TO PRAISE-EL JUNIOR SCHOOL",
      title: "Aspiring For Excellence",
      text: `
      Praise-El Junior School is committed to providing quality Nursery and Primary education in a safe, caring and stimulating environment. We nurture learners academically, morally, spiritually and socially while preparing them to become responsible citizens and future leaders.
      `,
    },

    vision: {
      heading: "OUR VISION",
      title: "Guiding Every Child Towards Success",
      text: `
      To be a leading centre of academic excellence that nurtures confident, innovative, disciplined and responsible learners equipped with knowledge, skills and values for lifelong success.
      `,
    },

    mission: {
      heading: "OUR MISSION",
      title: "Educating For A Better Tomorrow",
      text: `
      To provide holistic education through quality teaching, character development, spiritual growth and co-curricular activities that empower every learner to excel academically and socially.
      `,
    },

    visit: {
      heading: "VISIT OUR SCHOOL",
      title: "Experience Praise-El Firsthand",
      text: `
      We warmly welcome parents and guardians to visit our campus, meet our dedicated staff and experience the vibrant learning environment that makes Praise-El Junior School unique.
      `,
    },

    partnership: {
      heading: "PARENT PARTNERSHIP",
      title: "Working Together For Success",
      text: `
      We believe that strong partnerships between parents, teachers and learners create the best foundation for success. Together we support every child's growth and achievement.
      `,
    },
  };

  return (
    <section className="intro">

      {/* TABS */}

      <div className="about-tabs">

        <button
          className={tab === "about" ? "active" : ""}
          onClick={() => setTab("about")}
        >
          <FaSchool />
          About Us
        </button>

        <button
          className={tab === "vision" ? "active" : ""}
          onClick={() => setTab("vision")}
        >
          <FaEye />
          Vision
        </button>

        <button
          className={tab === "mission" ? "active" : ""}
          onClick={() => setTab("mission")}
        >
          <FaBullseye />
          Mission
        </button>

        <button
          className={tab === "visit" ? "active" : ""}
          onClick={() => setTab("visit")}
        >
          <FaMapMarkerAlt />
          Visit Us
        </button>

        <button
          className={tab === "partnership" ? "active" : ""}
          onClick={() => setTab("partnership")}
        >
          <FaHandshake />
          Partnership
        </button>

      </div>

      {/* ABOUT SECTION */}

      <div className="about-card">

        {/* LEFT */}

        <div className="about-left">

          <div className="image-wrapper">

            <img
              src={aboutImage}
              alt="Praise-El Junior School"
            />

            <div className="image-badge">

              <div className="badge-icon">
                <FaCertificate />
              </div>

              <div>
                <h4>Excellence in Education</h4>

                <p>
                  Nurturing minds, building
                  character and shaping futures.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="about-right">

          <small>
            {content[tab].heading}
          </small>

          <div className="gold-line"></div>

          <h2>
            {content[tab].title}
          </h2>

          <p>
            {content[tab].text}
          </p>

          <div className="highlights">

            <div className="highlight">
              <FaGraduationCap />
              <span>
                Qualified & Caring Teachers
              </span>
            </div>

            <div className="highlight">
              <FaBookOpen />
              <span>
                Modern Learning Approach
              </span>
            </div>

            <div className="highlight">
              <FaShieldAlt />
              <span>
                Safe & Nurturing Environment
              </span>
            </div>

            <div className="highlight">
              <FaCross />
              <span>
                Strong Christian Foundation
              </span>
            </div>

          </div>

          <a
            href="/about"
            className="learn-more-btn"
          >
            Learn More About Us

            <span>
              <FaArrowRight />
            </span>
          </a>

        </div>

      </div>

      {/* STATS */}

      <div className="stats-bar">

        <div className="stat-item">

          <FaUsers />

          <div>
            <h3>500+</h3>
            <p>Happy Students</p>
          </div>

        </div>

        <div className="stat-item">

          <FaChalkboardTeacher />

          <div>
            <h3>30+</h3>
            <p>Dedicated Teachers</p>
          </div>

        </div>

        <div className="stat-item">

          <FaStar />

          <div>
            <h3>15+</h3>
            <p>Years of Excellence</p>
          </div>

        </div>

        <div className="stat-item">

          <FaCertificate />

          <div>
            <h3>100%</h3>
            <p>PLE Registration</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default HomeIntro;