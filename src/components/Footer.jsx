import { Link } from "react-router-dom";

import {
  FaEnvelope,
  FaFacebookF,
  FaGraduationCap,
  FaHeart,
  FaInstagram,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaShieldAlt,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../assets/logo1.png";
import footerBg from "../assets/footer-bg.jpg";

import "./Footer.css";

/* ============================================================
   CONTACT LINKS
============================================================ */

const whatsappNumber = "256744523317";

const whatsappMessage = encodeURIComponent(
  "Hello Praise-El Junior School. I would like to learn more about the school and admissions."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

/* ============================================================
   FOOTER
============================================================ */

function Footer() {
  function handleNewsletterSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");

    if (!email) {
      return;
    }

    form.reset();
  }

  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >
      <div className="footer-overlay">
        {/* ====================================================
            TOP LOGO
        ===================================================== */}

        <div className="footer-top-logo">
          <Link
            to="/"
            aria-label="Go to the Praise-El Junior School homepage"
          >
            <img
              src={logo}
              alt="Praise-El Junior School"
            />
          </Link>
        </div>

        {/* ====================================================
            MAIN FOOTER CONTENT
        ===================================================== */}

        <div className="footer-main">
          {/* SCHOOL BRAND */}

          <div className="footer-brand">
            <h2>
              Praise-El
              <br />
              Junior School
            </h2>

            <span className="footer-motto">
              Aspiring for Excellence
            </span>

            <p>
              Nurturing young minds through quality
              education, discipline, leadership and
              character development.
            </p>

            <div className="footer-values">
              <div>
                <FaGraduationCap aria-hidden="true" />
                <span>Quality Education</span>
              </div>

              <div>
                <FaShieldAlt aria-hidden="true" />
                <span>Strong Values</span>
              </div>

              <div>
                <FaUsers aria-hidden="true" />
                <span>Bright Futures</span>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}

          <nav
            className="footer-links"
            aria-label="Footer navigation"
          >
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>

            <Link to="/about">
              About Us
            </Link>

            <Link to="/admissions">
              Admissions
            </Link>

            <Link to="/apply-online">
              Apply Online
            </Link>

            <Link to="/gallery">
              Gallery
            </Link>

            <Link to="/contact">
              Contact Us
            </Link>
          </nav>

          {/* CONTACT INFORMATION */}

          <div className="footer-contact">
            <h3>Contact Us</h3>

            <a href="tel:+256744523317">
              <FaPhoneAlt aria-hidden="true" />

              <span>
                +256 744 523 317
              </span>
            </a>

            <a href="tel:+256786971859">
              <FaPhoneAlt aria-hidden="true" />

              <span>
                +256 786 971 859
              </span>
            </a>

            <a href="tel:+256756070601">
              <FaPhoneAlt aria-hidden="true" />

              <span>
                +256 756 070 601
              </span>
            </a>

            {/* WHATSAPP CONTACT */}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp-link"
              aria-label="Chat with Praise-El Junior School on WhatsApp"
            >
              <FaWhatsapp aria-hidden="true" />

              <span>
                WhatsApp: +256 744 523 317
              </span>
            </a>

            {/* EMAIL */}

            <a href="mailto:info.praiseeljuniorschool256@gmail.com">
              <FaEnvelope aria-hidden="true" />

              <span>
                info.praiseeljuniorschool256@gmail.com
              </span>
            </a>
          </div>

          {/* LOCATION AND SOCIAL MEDIA */}

          <div className="footer-location">
            <h3>Our Location</h3>

            <div className="location-box">
              <FaMapMarkerAlt aria-hidden="true" />

              <p>
                Kokoola–Kalagi,
                <br />
                Along Gayaza Road,
                <br />
                Mukono District,
                <br />
                Uganda
              </p>
            </div>

            <h4>Follow Us</h4>

            <div className="socials">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Praise-El Junior School on Facebook"
              >
                <FaFacebookF aria-hidden="true" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Praise-El Junior School on Instagram"
              >
                <FaInstagram aria-hidden="true" />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Praise-El Junior School on WhatsApp"
              >
                <FaWhatsapp aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* ====================================================
            NEWSLETTER
        ===================================================== */}

        <div className="newsletter">
          <div className="newsletter-left">
            <div className="newsletter-icon">
              <FaEnvelope aria-hidden="true" />
            </div>

            <div>
              <h4>Stay Connected</h4>

              <p>
                Subscribe for school updates and events.
              </p>
            </div>
          </div>

          <form
            className="newsletter-form"
            onSubmit={handleNewsletterSubmit}
          >
            <label
              htmlFor="footer-newsletter-email"
              className="sr-only"
            >
              Email address
            </label>

            <input
              id="footer-newsletter-email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              autoComplete="email"
              required
            />

            <button type="submit">
              <span>Subscribe</span>
              <FaPaperPlane aria-hidden="true" />
            </button>
          </form>

          <div className="newsletter-quote">
            “Every child is unique. Every dream is
            important.”
          </div>
        </div>

        {/* ====================================================
            FOOTER BOTTOM
        ===================================================== */}

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Praise-El Junior
            School. All Rights Reserved.
          </p>

          <div
            className="footer-heart"
            aria-hidden="true"
          >
            <FaHeart />
          </div>

          <p>
            Designed by{" "}
            <a
              href="https://www.ethtechsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Eth Tech Solutions
            </a>
          </p>
        </div>
      </div>

      {/* ======================================================
          FLOATING WHATSAPP BUTTON
      ======================================================= */}

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="footer-floating-whatsapp"
        aria-label="Chat with Praise-El Junior School on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />

        <span>Chat with us</span>
      </a>
    </footer>
  );
}

export default Footer;