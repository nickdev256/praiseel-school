import { Link } from "react-router-dom";
import "./AdmissionsApply.css";

function AdmissionsApply() {
  return (
    <section className="apply-section">

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