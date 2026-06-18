import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">

      <div className="contact-header">

        <span>CONTACT US</span>

        <h2>
          We'd Love To Hear From You
        </h2>

        <p>
          Reach out to us for admissions,
          inquiries or school visits.
        </p>

      </div>

      <div className="contact-container">

        {/* CONTACT INFO */}

        <div className="contact-info">

          <h3>Get In Touch</h3>

          <div className="info-box">

            <FaPhoneAlt className="icon" />

            <div>
              <h4>Phone</h4>
              <p>+256 700 000 000</p>
            </div>

          </div>

          <div className="info-box">

            <FaEnvelope className="icon" />

            <div>
              <h4>Email</h4>
              <p>info@praiseel.ac.ug</p>
            </div>

          </div>

          <div className="info-box">

            <FaMapMarkerAlt className="icon" />

            <div>
              <h4>Location</h4>
              <p>Mukono, Uganda</p>
            </div>

          </div>

          <div className="info-box">

            <FaClock className="icon" />

            <div>
              <h4>Office Hours</h4>
              <p>Mon - Fri : 8:00AM - 5:00PM</p>
            </div>

          </div>

        </div>

        {/* CONTACT FORM */}

        <div className="contact-form">

          <form>

            <div className="form-group">

              <input
                type="text"
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                required
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;