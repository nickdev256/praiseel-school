import { useState } from "react";
import "./HomeIntro.css";

function HomeIntro() {
  const [tab, setTab] = useState("about");

  const content = {
    about: {
      title: "Welcome To Praise-El Junior School",
      subtitle: "Aspiring For Excellence",
      text: `
      Praise-El Junior School is committed to providing quality Nursery and Primary education in a safe, caring and stimulating environment. We nurture learners academically, morally, spiritually and socially while preparing them to become responsible citizens and future leaders.

      Our dedicated teachers, modern learning approaches and strong values-based education help every child discover their talents, develop confidence and achieve their full potential.
      `,
    },

    vision: {
      title: "Our Vision",
      subtitle: "Guiding Every Child Towards Success",
      text: `
      To be a leading centre of academic excellence that nurtures confident, innovative, disciplined and responsible learners equipped with knowledge, skills and values for lifelong success.
      `,
    },

    mission: {
      title: "Our Mission",
      subtitle: "Educating For A Better Tomorrow",
      text: `
      To provide holistic education through quality teaching, character development, spiritual growth and co-curricular activities that empower every learner to excel academically and socially.
      `,
    },

    visit: {
      title: "Visit Our School",
      subtitle: "Experience Praise-El Firsthand",
      text: `
      We warmly welcome parents and guardians to visit our campus, meet our dedicated staff and experience the vibrant learning environment that makes Praise-El Junior School unique.
      `,
    },

    partnership: {
      title: "Parent Partnership",
      subtitle: "Working Together For Success",
      text: `
      We believe that strong partnerships between parents, teachers and learners create the best foundation for success. Together we support every child's growth and achievement.
      `,
    },
  };

  return (
    <section className="intro">

      {/* FEATURE CARDS */}

      <div className="feature-cards">

        <div className="feature-card active">
          <small>ADMISSIONS OPEN</small>
          <h3>
            Welcoming applications for the
            2026 academic intake.
          </h3>
        </div>

        <div className="feature-card">
          <small>NURSERY SECTION</small>
          <h3>
            Building strong foundations through
            early childhood education.
          </h3>
        </div>

        <div className="feature-card">
          <small>PRIMARY SECTION</small>
          <h3>
            Academic excellence guided by the
            Uganda National Curriculum.
          </h3>
        </div>

        <div className="feature-card">
          <small>PARENT PARTNERSHIP</small>
          <h3>
            Parents and teachers working
            together for every child's success.
          </h3>
        </div>

      </div>

      {/* TABS */}

      <div className="about-tabs">

        <button
          className={tab === "about" ? "active" : ""}
          onClick={() => setTab("about")}
        >
          About Us
        </button>

        <button
          className={tab === "vision" ? "active" : ""}
          onClick={() => setTab("vision")}
        >
          Vision
        </button>

        <button
          className={tab === "mission" ? "active" : ""}
          onClick={() => setTab("mission")}
        >
          Mission
        </button>

        <button
          className={tab === "visit" ? "active" : ""}
          onClick={() => setTab("visit")}
        >
          Visit Us
        </button>

        <button
          className={tab === "partnership" ? "active" : ""}
          onClick={() => setTab("partnership")}
        >
          Partnership
        </button>

      </div>

      {/* CONTENT CARD */}

      <div className="about-card">

        <h2>
          {content[tab].title}
        </h2>

        <span>
          {content[tab].subtitle}
        </span>

        <p>
          {content[tab].text}
        </p>

        <a href="/">
          Learn More →
        </a>

      </div>

    </section>
  );
}

export default HomeIntro;