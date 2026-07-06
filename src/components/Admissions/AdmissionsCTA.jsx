import { Link } from "react-router-dom";
import "./AdmissionsCTA.css";

function AdmissionsCTA() {
  return (
    <section className="adm-cta">

<<<<<<< HEAD
      <div className="cta-content">

        <h2>Ready To Join Praise-El?</h2>

        <p>Admissions for 2026 are now open</p>

        <Link to="/apply-online" className="cta-btn">
          Apply Now
        </Link>

      </div>
=======
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
>>>>>>> 59323cb84f3c081155a6f4945fc50d83cd636cc3

    </section>
  );
}

export default AdmissionsCTA;