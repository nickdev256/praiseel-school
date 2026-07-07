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

        {/* Phone */}
        <div className="contact-item">
          <FaPhoneAlt className="icon" />

          <p>
            <a href="tel:0744523317">
              0744523317
            </a>
          </p>

          <p>
            <a href="tel:0786971859">
              0786971859
            </a>
          </p>
        </div>


        {/* Email */}
        <div className="contact-item">
          <FaEnvelope className="icon" />

          <p>
            <a href="mailto:info@praiseel.ac.ug">
              info@praiseel.ac.ug
            </a>
          </p>
        </div>


        {/* Location */}
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />

          <p>
            Kokoola–Kalagi,
            <br />
            Mukono District
          </p>
        </div>

      </div>

    </section>
  );
}

export default AdmissionsContact;