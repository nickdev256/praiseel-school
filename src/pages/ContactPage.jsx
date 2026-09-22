import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import "./ContactPage.css";

function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="contact-page">
        <section className="contact-page-hero">
          <div
            className="contact-page-pattern"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </div>

          <div className="contact-page-container">
            <div className="contact-page-hero-content">
              <span className="contact-page-label">
                Contact Praise-El
              </span>

              <h1>
                We Would Love to
                <span>Hear From You.</span>
              </h1>

              <p>
                Contact our team for information about
                admissions, school programs, campus visits
                and any other questions about Praise-El
                Junior School.
              </p>

              <div className="contact-page-quick-links">
                <a href="tel:+256744523317">
                  <span>
                    <FaPhoneAlt />
                  </span>

                  <div>
                    <small>Call admissions</small>
                    <strong>0744 523 317</strong>
                  </div>
                </a>

                <a href="mailto:info.praiseeljuniorschool256@gmail.com">
                  <span>
                    <FaEnvelope />
                  </span>

                  <div>
                    <small>Send an email</small>
                    <strong>Email the school</strong>
                  </div>
                </a>

                <div className="contact-page-location">
                  <span>
                    <FaMapMarkerAlt />
                  </span>

                  <div>
                    <small>Visit the school</small>
                    <strong>Kokoola–Kalagi, Mukono</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-page-form-section">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;