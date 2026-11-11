import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck, FaFileAlt, FaPhoneAlt } from "react-icons/fa";

import "./ApplyHero.css";
import hero from "../../assets/apply-hero1.jpg";

// From September onward, advertise next year's intake.
const now = new Date();
const admissionYear =
  now.getMonth() >= 8 ? now.getFullYear() + 1 : now.getFullYear();

const checklist = [
  "Learner's birth certificate",
  "Recent passport photo",
  "Previous report card",
  "Transfer letter (if applicable)",
];

function ApplyHero() {
  return (
    <section
      className="ap-hero"
      aria-labelledby="ap-hero-title"
      style={{ "--ap-hero-bg": `url(${hero})` }}
    >
      <div className="ap-hero-bg" aria-hidden="true" />

      <div className="ap-container ap-hero-grid">
        <div className="ap-hero-copy">
          <nav className="ap-crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/admissions">Admissions</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Apply online</span>
          </nav>

          <span className="ap-pill">
            <span className="ap-pulse" aria-hidden="true" />
            Online application · {admissionYear} intake
          </span>

          <h1 id="ap-hero-title">
            Begin your child&apos;s journey at <em>Praise-El</em>.
          </h1>

          <p>
            Complete the application form below. Our admissions team will
            review it and contact you about the next steps.
          </p>

          <div className="ap-hero-actions">
            <a href="#application-form" className="ap-btn ap-btn-gold">
              <span>Start application</span>
              <i aria-hidden="true">
                <FaArrowRight />
              </i>
            </a>
            <a href="tel:+256744523317" className="ap-hero-call">
              <FaPhoneAlt aria-hidden="true" />
              <span>
                <small>Need help applying?</small>
                0744 523 317
              </span>
            </a>
          </div>
        </div>

        <aside className="ap-hero-card" aria-label="Documents to prepare">
          <div className="ap-hero-card-top">
            <span aria-hidden="true">
              <FaFileAlt />
            </span>
            <div>
              <small>Before you start</small>
              <strong>Have these ready</strong>
            </div>
          </div>

          <ul>
            {checklist.map((item) => (
              <li key={item}>
                <FaCheck aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <p>
            Photos or scans on your phone are fine. You can also bring
            documents to the school office.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default ApplyHero;