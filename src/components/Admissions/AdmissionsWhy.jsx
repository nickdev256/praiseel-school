import {
  FaGraduationCap,
  FaUserTie,
  FaShieldAlt,
  FaLaptop
} from "react-icons/fa";

import "./AdmissionsWhy.css";

function AdmissionsWhy() {
  return (
    <section className="adm-why">

      <div className="section-title">
        <span>WHY PRAISE-EL</span>
        <h2>Why Choose Us</h2>
      </div>

      <div className="why-grid">

        <div className="why-card">
          <FaGraduationCap />
          <h3>Academic Excellence</h3>
          <p>
            Strong academic foundation and
            learner-centered teaching.
          </p>
        </div>

        <div className="why-card">
          <FaUserTie />
          <h3>Qualified Teachers</h3>
          <p>
            Dedicated and experienced
            educators.
          </p>
        </div>

        <div className="why-card">
          <FaShieldAlt />
          <h3>Safe Environment</h3>
          <p>
            Secure and child-friendly
            learning environment.
          </p>
        </div>

        <div className="why-card">
          <FaLaptop />
          <h3>ICT Integration</h3>
          <p>
            Technology-supported learning.
          </p>
        </div>

      </div>

    </section>
  );
}

export default AdmissionsWhy;