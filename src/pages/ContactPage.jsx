import {
  FaArrowRight,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import "./ContactPage.css";

const whatsappNumber = "256744523317";

const whatsappMessage = encodeURIComponent(
  "Hello Praise-El Junior School. I would like to get more information about the school."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="contact-page">
        {/* HERO */}

        <section className="contact-page-hero">
          <div className="contact-page-shape shape-one" />
          <div className="contact-page-shape shape-two" />

          <div className="contact-page-hero-content">
            <span className="contact-page-label">
              Get In Touch
            </span>

            <h1>
              We Would Love to
              <span>Hear From You.</span>
            </h1>

            <p>
              Contact Praise-El Junior School for admissions,
              school visits, learner support or any other
              information. Our team is ready to assist you.
            </p>

            <div className="contact-page-hero-buttons">
              <a
                href="#contact-form"
                className="contact-page-primary-button"
              >
                Send a Message
                <FaArrowRight />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-page-whatsapp-button"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT INFORMATION */}

        <section className="contact-page-information">
          <div className="contact-page-container">
            <div className="contact-page-heading">
              <span>Contact Information</span>

              <h2>Connect With Our School</h2>

              <p>
                Use any of the options below to speak with our
                school administration and admissions team.
              </p>
            </div>

            <div className="contact-page-information-grid">
              <article className="contact-page-information-card">
                <div className="contact-page-card-icon">
                  <FaPhoneAlt />
                </div>

                <h3>Call Us</h3>

                <a href="tel:+256744523317">
                  +256 744 523 317
                </a>

                <a href="tel:+256786971859">
                  +256 786 971 859
                </a>
              </article>

              <article className="contact-page-information-card">
                <div className="contact-page-card-icon">
                  <FaWhatsapp />
                </div>

                <h3>WhatsApp</h3>

                <p>
                  Chat directly with the Praise-El team for
                  quick assistance.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-page-card-link"
                >
                  Start WhatsApp Chat
                  <FaArrowRight />
                </a>
              </article>

              <article className="contact-page-information-card">
                <div className="contact-page-card-icon">
                  <FaEnvelope />
                </div>

                <h3>Email Us</h3>

                <a href="mailto:info.praiseeljuniorschool256@gmail.com">
                  info.praiseeljuniorschool256@gmail.com
                </a>
              </article>

              <article className="contact-page-information-card">
                <div className="contact-page-card-icon">
                  <FaMapMarkerAlt />
                </div>

                <h3>Visit Our School</h3>

                <p>
                  Kokoola–Kalagi
                  <br />
                  Mukono District, Uganda
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT FORM */}

        <section
          className="contact-page-form-section"
          id="contact-form"
        >
          <div className="contact-page-container">
            <div className="contact-page-form-heading">
              <span>Send Us a Message</span>

              <h2>How Can We Help You?</h2>

              <p>
                Complete the form below and our team will
                respond as soon as possible.
              </p>
            </div>

            <Contact />
          </div>
        </section>

        {/* OFFICE HOURS */}

        <section className="contact-page-office">
          <div className="contact-page-office-icon">
            <FaClock />
          </div>

          <div>
            <span>School Office Hours</span>

            <h2>Visit or Call During Working Hours</h2>

            <p>
              Monday–Friday: 8:00 AM–5:00 PM
              <br />
              Saturday: 9:00 AM–1:00 PM
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            WhatsApp Us
          </a>
        </section>

        {/* FLOATING WHATSAPP BUTTON */}

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-page-floating-whatsapp"
          aria-label="Chat with Praise-El Junior School on WhatsApp"
          title="Chat with us on WhatsApp"
        >
          <FaWhatsapp />

          <span>Chat with us</span>
        </a>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;