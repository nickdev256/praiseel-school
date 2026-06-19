import { Link } from "react-router-dom";
import "./Footer.css";

import logo from "../assets/logo.png";
import footerBg from "../assets/footer-bg.jpg";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaGraduationCap,
  FaShieldAlt,
  FaUsers,
  FaHeart,
  FaPaperPlane,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >
      <div className="footer-overlay">

        {/* TOP LOGO */}

        <div className="footer-top-logo">
          <img src={logo} alt="Praise-El Junior School" />
        </div>

        {/* MAIN CONTENT */}

        <div className="footer-main">

          {/* BRAND */}

          <div className="footer-brand">

            <img src={logo} alt="Logo" />

            <h2>
              Praise-El
              <br />
              Junior School
            </h2>

            <span className="footer-motto">
              Aspiring For Excellence
            </span>

            <p>
              Nurturing young minds through
              quality education, discipline,
              leadership and character
              development.
            </p>

            <div className="footer-values">

              <div>
                <FaGraduationCap />
                <span>Quality Education</span>
              </div>

              <div>
                <FaShieldAlt />
                <span>Strong Values</span>
              </div>

              <div>
                <FaUsers />
                <span>Bright Futures</span>
              </div>

            </div>

          </div>

          {/* LINKS */}

          <div className="footer-links">

            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/academics">Academics</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/admissions">Admissions</Link>
            <Link to="/news">News & Events</Link>
            <Link to="/contact">Contact Us</Link>

          </div>

          {/* CONTACT */}

          <div className="footer-contact">

            <h3>Contact Us</h3>

            <a href="tel:0744523317">
              <FaPhoneAlt />
              0744 523 317
            </a>

            <a href="tel:0786971859">
              <FaPhoneAlt />
              0786 971 859
            </a>

            <a href="tel:0756070601">
              <FaPhoneAlt />
              0756 070 601
            </a>

            <a href="tel:0758028596">
              <FaPhoneAlt />
              0758 028 596
            </a>

            <a href="tel:0752446049">
              <FaPhoneAlt />
              0752 446 049
            </a>

            <a href="mailto:info@praiseel.ac.ug">
              <FaEnvelope />
              info@praiseel.ac.ug
            </a>

          </div>

          {/* LOCATION */}

          <div className="footer-location">

            <h3>Our Location</h3>

            <div className="location-box">

              <FaMapMarkerAlt />

              <p>
                Kokoola-Kalagi,
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

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

        {/* NEWSLETTER */}

        <div className="newsletter">

          <div className="newsletter-left">

            <div className="newsletter-icon">
              <FaEnvelope />
            </div>

            <div>
              <h4>Stay Connected</h4>

              <p>
                Subscribe for school updates
                and events.
              </p>
            </div>

          </div>

          <form className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email address"
            />

            <button type="submit">
              Subscribe
              <FaPaperPlane />
            </button>

          </form>

          <div className="newsletter-quote">
            “Every child is unique.
            Every dream is important.”
          </div>

        </div>

        {/* BOTTOM */}

        <div className="footer-bottom">

          <p>
            © 2026 Praise-El Junior School.
            All Rights Reserved.
          </p>

          <div className="footer-heart">
            <FaHeart />
          </div>

          <p>
            Designed by
            <span> Eth Tech Solutions</span>
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;