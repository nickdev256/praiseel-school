import { Link, NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaBars,
} from "react-icons/fa";

import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
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

            <h2>
              Praise-El Junior School
            </h2>

            <span>
              Aspiring For Excellence
            </span>

          </div>

        </Link>

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

        <div className="mobile-menu">
          <FaBars />
        </div>

      </header>
    </>
  );
}

export default Navbar;