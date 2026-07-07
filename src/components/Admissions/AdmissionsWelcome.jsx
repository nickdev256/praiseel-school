import { Link } from "react-router-dom";
import "./AdmissionsWelcome.css";
import hero from "../../assets/hero1.jpg";

function AdmissionsWelcome() {
  return (
    <section
      className="admissions-welcome"
      style={{ backgroundImage: `url(${hero})` }}
    >

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <span className="hero-tag">
          ADMISSIONS 2026 NOW OPEN
        </span>

        <h1>
          Building Bright Futures
          <br />
          At Praise-El Nursery & Primary School
        </h1>

        <p>
          Give your child a strong academic foundation,
          quality care, and a safe environment where
          learners grow in confidence, discipline, and excellence.
        </p>


        <div className="hero-buttons">

          <Link to="/apply-online" className="primary-btn">
            Apply Now
          </Link>

          <Link to="/contact" className="secondary-btn">
            Contact Admissions
          </Link>

        </div>


        <div className="hero-features">

          <div>
            <strong>✓</strong>
            <span>
              Quality<br />Education
            </span>
          </div>


          <div>
            <strong>✓</strong>
            <span>
              Experienced<br />Teachers
            </span>
          </div>


          <div>
            <strong>✓</strong>
            <span>
              Safe<br />Environment
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AdmissionsWelcome;