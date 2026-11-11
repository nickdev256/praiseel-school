import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaArrowRight,
  FaBars,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";

import "./Navbar.css";
import logo from "../assets/logo.png";

/* ============================================================
   CONTENT
============================================================ */

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/admissions", label: "Admissions" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
];

const PHONE_DISPLAY = "0744 523 317";
const PHONE_LINK = "tel:+256744523317";
const EMAIL = "info.praiseeljuniorschool256@gmail.com";
const LOCATION = "Kokoola–Kalagi, Mukono";

// From September onward, advertise next year's intake.
const now = new Date();
const admissionYear =
  now.getMonth() >= 8 ? now.getFullYear() + 1 : now.getFullYear();

const linkClass = ({ isActive }) => (isActive ? "nb-link is-active" : "nb-link");

/* ============================================================
   NAVBAR
============================================================ */

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the page changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Compact navbar after the user scrolls a little.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll and allow Escape while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <div className={`nb ${scrolled ? "is-scrolled" : ""}`}>
      {/* ================= TOP BAR ================= */}
      <div className="nb-topbar">
        <div className="nb-topbar-inner">
          <div className="nb-topbar-left">
            <a href={PHONE_LINK}>
              <FaPhoneAlt aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="nb-topbar-email">
              <FaEnvelope aria-hidden="true" />
              {EMAIL}
            </a>
            <span>
              <FaMapMarkerAlt aria-hidden="true" />
              {LOCATION}
            </span>
          </div>

          <Link to="/admissions" className="nb-topbar-chip">
            <span className="nb-dot" aria-hidden="true" />
            Admissions {admissionYear} open
          </Link>
        </div>
      </div>

      {/* ================= MAIN BAR ================= */}
      <header className="nb-bar">
        <Link to="/" className="nb-brand" aria-label="Praise-El Junior School, home">
          <img src={logo} alt="" />
          <span>
            <strong>Praise-El Junior School</strong>
            <small>Aspiring for Excellence</small>
          </span>
        </Link>

        <nav className="nb-menu" aria-label="Main">
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        <Link to="/apply-online" className="nb-cta">
          <span>Apply Online</span>
          <i aria-hidden="true">
            <FaArrowRight />
          </i>
        </Link>

        <button
          type="button"
          className="nb-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nb-drawer"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`nb-backdrop ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="nb-drawer"
        className={`nb-drawer ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile menu"
      >
        <nav className="nb-drawer-links" aria-label="Mobile">
          {links.map(({ to, label, end }, i) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={linkClass}
              style={{ "--i": i }}
              onClick={() => setMenuOpen(false)}
            >
              <span>{label}</span>
              <FaArrowRight aria-hidden="true" />
            </NavLink>
          ))}
        </nav>

        <Link
          to="/apply-online"
          className="nb-cta nb-cta-full"
          onClick={() => setMenuOpen(false)}
        >
          <span>Apply Online</span>
          <i aria-hidden="true">
            <FaArrowRight />
          </i>
        </Link>

        <div className="nb-drawer-contact">
          <a href={PHONE_LINK}>
            <FaPhoneAlt aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`}>
            <FaEnvelope aria-hidden="true" />
            {EMAIL}
          </a>
          <span>
            <FaMapMarkerAlt aria-hidden="true" />
            {LOCATION}
          </span>
        </div>
      </aside>
    </div>
  );
}

export default Navbar;