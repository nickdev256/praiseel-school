import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope
} from "react-icons/fa";

import "./AdmissionsContact.css";

function AdmissionsContact() {
  return (
    <section className="adm-contact">

      <div className="section-title">
        <span>CONTACT</span>
        <h2>Admissions Office</h2>
      </div>

      <div className="contact-grid">

        <div>
          <FaPhoneAlt />
          <p>0744523317</p>
          <p>0786971859</p>
        </div>

        <div>
          <FaEnvelope />
          <p>info@praiseel.ac.ug</p>
        </div>

        <div>
          <FaMapMarkerAlt />
          <p>
            Kokoola-Kalagi,
            Mukono District
          </p>
        </div>

      </div>

    </section>
  );
}

export default AdmissionsContact;