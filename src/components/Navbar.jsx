import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        <div className="topbar-left">
          <span>
            <FaPhoneAlt />
            0744 523 317
          </span>

          <span>
            <FaEnvelope />
            info.praiseeljuniorschool256@gmail.com
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
        <Link to="/" className="logo-section">
          <img
            src={logo}
            alt="Praise-El Junior School"
          />

          <div className="school-info">
            <h2>Praise-El Junior School</h2>
            <span>Aspiring For Excellence</span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="nav-menu">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/admissions"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Admissions
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/apply-online"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Apply Online
          </NavLink>
        </nav>

        <Link
          to="/admissions"
          className="enroll-btn"
        >
          <span>Enroll Now</span>

          <div className="btn-circle">
            <FaArrowRight />
          </div>
        </Link>

        {/* MOBILE MENU ICON */}
        <div
          className="mobile-menu"
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

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div className="mobile-nav">

          <NavLink
            to="/"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/admissions"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Admissions
          </NavLink>

          <NavLink
            to="/gallery"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/apply-online"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Apply Online
          </NavLink>

          <Link
            to="/admissions"
            className="mobile-enroll-btn"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Enroll Now
          </Link>

        </div>
      )}
    </>
  );
}

export default Navbar;