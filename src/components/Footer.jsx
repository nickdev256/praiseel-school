import "./Footer.css";
import logo from "../assets/logo.png";
import footerBg from "../assets/footer-bg.jpg";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${footerBg})`
      }}
    >
      <div className="footer-overlay">

        <div className="footer-container">

          <div className="footer-brand">

            <img
              src={logo}
              alt="Praise-El Junior School"
            />

            <h2>
              Praise-El Junior School
            </h2>

            <p className="motto">
              Aspiring For Excellence
            </p>

            <p>
              Nurturing young minds through quality
              education, discipline, leadership and
              character development.
            </p>

          </div>

          <div className="footer-links">

            <h3>Quick Links</h3>

            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/academics">Academics</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact</a>

          </div>

          <div className="footer-contact">

            <h3>Contact Us</h3>

            <p>
              <FaPhoneAlt />
              0744523317
            </p>

            <p>
              <FaPhoneAlt />
              0786971859
            </p>

            <p>
              <FaPhoneAlt />
              0756070601
            </p>

            <p>
              <FaPhoneAlt />
              0758028596
            </p>

            <p>
              <FaPhoneAlt />
              0752446049
            </p>

            <p>
              <FaEnvelope />
              info@praiseel.ac.ug
            </p>

          </div>

          <div className="footer-location">

            <h3>Location</h3>

            <p>
              <FaMapMarkerAlt />
              Kokoola-Kalagi,
              Along Gayaza Road,
              Mukono District,
              Uganda
            </p>

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

        <div className="footer-bottom">

          © 2026 Praise-El Junior School.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;