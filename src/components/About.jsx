import { useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  const [activeTab, setActiveTab] = useState("about");

  const content = {
    about: {
      title: "Welcome To Praise-El Junior School",
      subtitle: "Aspiring For Excellence",
      text: `Praise-El Junior School is committed to providing quality Nursery and Primary education in a safe, caring and stimulating environment. We nurture young minds through academic excellence, discipline, creativity and leadership development, preparing learners to become responsible citizens and future leaders.`,
    },

    vision: {
      title: "Our Vision",
      subtitle: "Guiding The Future",
      text: `To be a leading centre of academic excellence that nurtures confident, responsible and innovative learners equipped to thrive in a changing world.`,
    },

    mission: {
      title: "Our Mission",
      subtitle: "What We Stand For",
      text: `To provide holistic education through quality teaching, character development, spiritual growth and co-curricular activities that empower every child to achieve their full potential.`,
    },

    visit: {
      title: "Visit Our School",
      subtitle: "Experience Praise-El",
      text: `We welcome parents and guardians to visit our campus, interact with our dedicated staff and experience the vibrant learning environment that makes Praise-El Junior School unique.`,
    },

    partnership: {
      title: "Parent Partnership",
      subtitle: "Working Together",
      text: `We believe strong partnerships between parents and the school are essential for learner success. Together we create a supportive environment that promotes academic and personal growth.`,
    },
  };

  return (
    <section className="about-section">

      <div className="about-container">

        <div className="about-tabs">

          <button
            className={activeTab === "about" ? "active" : ""}
            onClick={() => setActiveTab("about")}
          >
            About Us
          </button>

          <button
            className={activeTab === "vision" ? "active" : ""}
            onClick={() => setActiveTab("vision")}
          >
            Vision
          </button>

          <button
            className={activeTab === "mission" ? "active" : ""}
            onClick={() => setActiveTab("mission")}
          >
            Mission
          </button>

          <button
            className={activeTab === "visit" ? "active" : ""}
            onClick={() => setActiveTab("visit")}
          >
            Visit Us
          </button>

          <button
            className={activeTab === "partnership" ? "active" : ""}
            onClick={() => setActiveTab("partnership")}
          >
            Partnership
          </button>

        </div>

        <div className="about-card">

          <h2>
            {content[activeTab].title}
          </h2>

          <span>
            {content[activeTab].subtitle}
          </span>

          <p>
            {content[activeTab].text}
          </p>

          <Link
            to="/about"
            className="learn-more-btn"
          >
            Learn More →
          </Link>

        </div>

      </div>

    </section>
  );
}

export default About;