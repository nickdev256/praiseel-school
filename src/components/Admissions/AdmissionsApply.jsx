import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaFileDownload,
  FaClock,
  FaUserGraduate,
  FaShieldAlt,
} from "react-icons/fa";

import "./AdmissionsApply.css";

function AdmissionsApply() {
  return (
    <section className="apply-section">

      <div className="apply-overlay"></div>

      <div className="apply-container">
        <div className="apply-content">
          <span className="apply-tag">
            ONLINE ADMISSIONS
          </span>

          <h2>
            Begin Your Child's Journey with
            <br />
            <span>Praise-El Junior School</span>
          </h2>

          <p>
            We are excited to welcome new learners into our
            caring, Christ-centered learning community.
            Complete your application online in just a few
            minutes, and our admissions team will guide you
            through every step of the enrollment process.
          </p>

          <div className="apply-features">
            <div>
              <FaClock />
              <span>Quick Application</span>
            </div>

            <div>
              <FaShieldAlt />
              <span>Secure Submission</span>
            </div>

            <div>
              <FaUserGraduate />
              <span>Personal Admission Support</span>
            </div>
          </div>

          <div className="apply-buttons">
            <Link
              to="/apply-online"
              className="apply-btn primary"
            >
              Apply Online
              <FaArrowRight />
            </Link>

            <Link
              to="/prospectus"
              className="apply-btn secondary"
            >
              Download Prospectus
              <FaFileDownload />
            </Link>
          </div>
        </div>
      </div>


      <div className="apply-card">

        <span>ONLINE APPLICATION</span>

        <h2>
          Ready To Join Praise-El?
        </h2>

        <p>
          Complete our online application form
          and our admissions team will contact you.
        </p>

        <Link
          to="/apply-online"
          className="apply-btn"
        >
          Apply Online
        </Link>

      </div>

    </section>
  );
}

export default AdmissionsApply;