import { Link } from "react-router-dom";
import "./AdmissionsCTA.css";

function AdmissionsCTA() {
  return (
    <section className="adm-cta">

      <h2>
        Ready To Join Praise-El?
      </h2>

      <p>
        Admissions For 2026 Are Open
      </p>

      <Link
        to="/apply-online"
        className="cta-btn"
      >
        Apply Now
      </Link>

    </section>
  );
}

export default AdmissionsCTA;