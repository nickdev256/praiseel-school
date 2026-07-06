<<<<<<< HEAD
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
=======
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope
} from "react-icons/fa";

>>>>>>> 59323cb84f3c081155a6f4945fc50d83cd636cc3
import "./AdmissionsContact.css";

function AdmissionsContact() {
  return (
    <section className="adm-contact">

      <div className="section-title">
        <span>CONTACT</span>
        <h2>Admissions Office</h2>
      </div>

      <div className="contact-grid">

<<<<<<< HEAD
        {/* Phone */}
        <div className="contact-item">
          <FaPhoneAlt className="icon" />
          <p><a href="tel:0744523317">0744523317</a></p>
          <p><a href="tel:0786971859">0786971859</a></p>
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
          <p>Kokoola–Kalagi, Mukono District</p>
        </div>

=======
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

>>>>>>> 59323cb84f3c081155a6f4945fc50d83cd636cc3
      </div>

    </section>
  );
}

export default AdmissionsContact;