import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight
} from "react-icons/fa";

import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">

        <div className="topbar-left">
          <span>
            <FaPhoneAlt />
            0744523317
          </span>

          <span>
            <FaEnvelope />
            info@praiseel.ac.ug
          </span>
        </div>

        <div className="topbar-right">
          <span>
            <FaMapMarkerAlt />
            Kokoola-Kalagi, Mukono
          </span>
        </div>

      </div>

      {/* NAVBAR */}
      <header className="navbar">

        <Link
          to="/"
          className="logo-section"
        >
          <img
            src={logo}
            alt="Praise-El Junior School"
          />

          <div className="school-info">
            <h2>Praise-El Junior School</h2>
            <span>Aspiring For Excellence</span>
          </div>
        </Link>

        <nav
          className={
            menuOpen
              ? "nav-menu active"
              : "nav-menu"
          }
        >
          <NavLink
            to="/"
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
          >
            About Us
          </NavLink>

          <NavLink
            to="/admissions"
            onClick={closeMenu}
          >
            Admissions
          </NavLink>

          <NavLink
            to="/gallery"
            onClick={closeMenu}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <NavLink
            to="/apply-online"
            onClick={closeMenu}
          >
            Apply Online
          </NavLink>

          <Link
            to="/admissions"
            className="mobile-btn"
            onClick={closeMenu}
          >
            Enroll Now
          </Link>
        </nav>

        <Link
          to="/admissions"
          className="enroll-btn"
        >
          Enroll Now
          <FaArrowRight />
        </Link>

        <div
          className="menu-icon"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </div>

      </header>
    </>
  );
}

export default Navbar;