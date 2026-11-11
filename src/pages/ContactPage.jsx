import { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaDirections,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaRedo,
  FaWhatsapp,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import heroImage from "../assets/hero1.jpg";
import "./ContactPage.css";

/* ============================================================
   CONTACT DETAILS
============================================================ */

const PHONES = [
  { display: "+256 744 523 317", link: "tel:+256744523317" },
  { display: "+256 786 971 859", link: "tel:+256786971859" },
];
const EMAIL = "info.praiseeljuniorschool256@gmail.com";
const [EMAIL_USER, EMAIL_DOMAIN] = EMAIL.split("@");

// Lets long email addresses wrap neatly after the "@".
function EmailText() {
  return (
    <>
      {EMAIL_USER}@<wbr />
      {EMAIL_DOMAIN}
    </>
  );
}
const ADDRESS = ["Kokoola–Kalagi", "Mukono District, Uganda"];

const whatsappNumber = "256744523317";
const whatsappMessage = encodeURIComponent(
  "Hello Praise-El Junior School. I would like to get more information about the school.",
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const mapQuery = encodeURIComponent("Kokoola Kalagi, Mukono, Uganda");
const mapEmbed = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
const directionsLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

/* ============================================================
   OFFICE HOURS (school time zone)
   [openHour, closeHour] in 24h — null means closed.
============================================================ */

const TIME_ZONE = "Africa/Kampala";
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const HOURS = {
  0: null,
  1: [8, 17],
  2: [8, 17],
  3: [8, 17],
  4: [8, 17],
  5: [8, 17],
  6: [9, 13],
};

const hoursList = [
  { label: "Monday – Friday", days: [1, 2, 3, 4, 5], value: "8:00 AM – 5:00 PM" },
  { label: "Saturday", days: [6], value: "9:00 AM – 1:00 PM" },
  { label: "Sunday", days: [0], value: "Closed" },
];

const formatHour = (h) => `${h % 12 || 12}:00 ${h < 12 ? "AM" : "PM"}`;

function getSchoolTime() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const get = (type) => parts.find((p) => p.type === type)?.value;
  return {
    day: DAYS.indexOf(get("weekday")),
    time: Number(get("hour")) + Number(get("minute")) / 60,
  };
}

function getOfficeStatus() {
  const { day, time } = getSchoolTime();
  const today = HOURS[day];

  if (today && time >= today[0] && time < today[1]) {
    return { open: true, day, text: `Open now · closes ${formatHour(today[1])}` };
  }

  if (today && time < today[0]) {
    return { open: false, day, text: `Closed · opens today at ${formatHour(today[0])}` };
  }

  for (let offset = 1; offset <= 7; offset += 1) {
    const next = (day + offset) % 7;
    if (HOURS[next]) {
      const when = offset === 1 ? "tomorrow" : DAYS[next];
      return { open: false, day, text: `Closed · opens ${when} at ${formatHour(HOURS[next][0])}` };
    }
  }

  return { open: false, day, text: "Closed" };
}

function useOfficeStatus() {
  const [status, setStatus] = useState(getOfficeStatus);

  useEffect(() => {
    const timer = setInterval(() => setStatus(getOfficeStatus()), 60_000);
    return () => clearInterval(timer);
  }, []);

  return status;
}

/* ============================================================
   HELPERS
============================================================ */

function useInView(threshold = 0.15) {
  const [node, setNode] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!node || inView) return undefined;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [node, inView, threshold]);

  return [setNode, inView];
}

function Reveal({ as: Tag = "div", className = "", delay = 0, children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`ct-reveal ${inView ? "is-in" : ""} ${className}`.trim()}
      style={{ "--delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Eyebrow({ children, light = false }) {
  return <span className={`ct-eyebrow ${light ? "light" : ""}`}>{children}</span>;
}

/* ============================================================
   MESSAGE FORM
   No server needed: the message is sent through WhatsApp or the
   visitor's email app, already filled in and ready to send.
============================================================ */

const SUBJECTS = [
  "Admissions",
  "School visit",
  "School fees",
  "Transport",
  "Learner support",
  "Other",
];

const MAX_MESSAGE = 1000;

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  subject: SUBJECTS[0],
  message: "",
};

function validate(values) {
  const errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  const phone = values.phone.trim();
  const email = values.email.trim();

  if (!phone && !email) {
    errors.phone = "Add a phone number or an email so we can reply.";
  } else if (phone && !/^[+\d][\d\s-]{6,}$/.test(phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Please write a short message (at least 10 characters).";
  }

  return errors;
}

function buildMessage(values) {
  const details = [
    `Name: ${values.name.trim()}`,
    values.phone.trim() && `Phone: ${values.phone.trim()}`,
    values.email.trim() && `Email: ${values.email.trim()}`,
    `Subject: ${values.subject}`,
  ].filter(Boolean);

  return [
    "Hello Praise-El Junior School,",
    "",
    ...details,
    "",
    values.message.trim(),
  ].join("\n");
}

function Field({ id, label, error, hint, required, children }) {
  return (
    <div className={`ct-field ${error ? "has-error" : ""}`}>
      <label htmlFor={id}>
        {label}
        {required ? (
          <span className="ct-req" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ct-optional">(optional)</span>
        )}
      </label>
      {children}
      {error ? (
        <p className="ct-error" id={`${id}-error`} role="alert">
          {error}
        </p>
      ) : (
        hint && (
          <p className="ct-hint" id={`${id}-hint`}>
            {hint}
          </p>
        )
      )}
    </div>
  );
}

function MessageForm({ status }) {
  const uid = useId();
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sentWith, setSentWith] = useState(null);

  const ids = {
    name: `${uid}-name`,
    phone: `${uid}-phone`,
    email: `${uid}-email`,
    subject: `${uid}-subject`,
    message: `${uid}-message`,
  };

  const update = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const describedBy = (key) =>
    errors[key] ? `${ids[key]}-error` : `${ids[key]}-hint`;

  const handleSubmit = (event) => {
    event.preventDefault();
    const method = event.nativeEvent.submitter?.value || "whatsapp";

    const found = validate(values);
    setErrors(found);

    const firstError = Object.keys(found)[0];
    if (firstError) {
      document.getElementById(ids[firstError])?.focus();
      return;
    }

    const text = buildMessage(values);

    if (method === "email") {
      const subject = `${values.subject} enquiry from ${values.name.trim()}`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(text)}`;
    } else {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener,noreferrer",
      );
    }

    setSentWith(method);
  };

  const reset = () => {
    setValues(emptyForm);
    setErrors({});
    setSentWith(null);
  };

  return (
    <div className="ct-form-grid">
      {/* ---------- info panel ---------- */}
      <Reveal as="aside" className="ct-form-info">
        <Eyebrow light>Send us a message</Eyebrow>
        <h2>
          How can we <em>help you</em>?
        </h2>
        <p>
          Write to us about admissions, visits, fees or anything else. Our
          team will reply as soon as possible.
        </p>

        <ol className="ct-form-steps">
          <li>
            <span aria-hidden="true">1</span>
            <div>
              <strong>Fill in the form</strong>
              Tell us who you are and what you need.
            </div>
          </li>
          <li>
            <span aria-hidden="true">2</span>
            <div>
              <strong>Choose WhatsApp or email</strong>
              Your message opens ready to send.
            </div>
          </li>
          <li>
            <span aria-hidden="true">3</span>
            <div>
              <strong>Press send</strong>
              We reply during office hours.
            </div>
          </li>
        </ol>

        <div className={`ct-form-status ${status.open ? "is-open" : ""}`}>
          <span className="ct-status-dot" aria-hidden="true" />
          {status.text}
        </div>
      </Reveal>

      {/* ---------- form card ---------- */}
      <Reveal className="ct-form-card" delay={120}>
        {sentWith ? (
          <div className="ct-sent" role="status">
            <span className="ct-sent-icon" aria-hidden="true">
              <FaCheckCircle />
            </span>
            <h3>Your message is ready to send</h3>
            <p>
              {sentWith === "email"
                ? "Your email app has opened with the message filled in. Press send there to deliver it to our office."
                : "WhatsApp has opened in a new tab with your message filled in. Press send there to reach our team."}
            </p>
            <p className="ct-sent-note">
              Nothing opened? Call us on{" "}
              <a href={PHONES[0].link}>{PHONES[0].display}</a> or email{" "}
              <a href={`mailto:${EMAIL}`} className="ct-break">
                <EmailText />
              </a>
              .
            </p>
            <button type="button" className="ct-btn ct-btn-navy" onClick={reset}>
              <span>Write another message</span>
              <i aria-hidden="true">
                <FaRedo />
              </i>
            </button>
          </div>
        ) : (
          <form className="ct-form" onSubmit={handleSubmit} noValidate>
            <div className="ct-form-row">
              <Field id={ids.name} label="Full name" error={errors.name} required>
                <input
                  id={ids.name}
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Sarah Namukasa"
                  value={values.name}
                  onChange={update}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? `${ids.name}-error` : undefined}
                  required
                />
              </Field>

              <Field
                id={ids.subject}
                label="Subject"
                required
              >
                <select
                  id={ids.subject}
                  name="subject"
                  value={values.subject}
                  onChange={update}
                >
                  {SUBJECTS.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="ct-form-row">
              <Field
                id={ids.phone}
                label="Phone number"
                error={errors.phone}
                hint="Phone or email — at least one."
              >
                <input
                  id={ids.phone}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="e.g. 0700 123 456"
                  value={values.phone}
                  onChange={update}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={describedBy("phone")}
                />
              </Field>

              <Field id={ids.email} label="Email address" error={errors.email}>
                <input
                  id={ids.email}
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="e.g. parent@example.com"
                  value={values.email}
                  onChange={update}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? `${ids.email}-error` : undefined}
                />
              </Field>
            </div>

            <Field
              id={ids.message}
              label="Your message"
              error={errors.message}
              hint={`${values.message.length}/${MAX_MESSAGE} characters`}
              required
            >
              <textarea
                id={ids.message}
                name="message"
                rows={6}
                maxLength={MAX_MESSAGE}
                placeholder="How can we help? For admissions, tell us your child's age and the class you are interested in."
                value={values.message}
                onChange={update}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={describedBy("message")}
                required
              />
            </Field>

            <div className="ct-form-actions">
              <button type="submit" value="whatsapp" className="ct-btn ct-btn-whatsapp">
                <span>Send via WhatsApp</span>
                <i aria-hidden="true">
                  <FaWhatsapp />
                </i>
              </button>
              <button type="submit" value="email" className="ct-btn ct-btn-outline">
                <span>Send by email</span>
                <i aria-hidden="true">
                  <FaPaperPlane />
                </i>
              </button>
            </div>

            <p className="ct-form-note">
              <span aria-hidden="true">*</span> Required. Your details are only
              used to reply to your message.
            </p>
          </form>
        )}
      </Reveal>
    </div>
  );
}

/* ============================================================
   PAGE
============================================================ */

function ContactPage() {
  const status = useOfficeStatus();

  return (
    <>
      <Navbar />

      <main className="ct">
        {/* ================= HERO ================= */}
        <section
          className="ct-hero"
          aria-labelledby="ct-hero-title"
          style={{ "--ct-hero-bg": `url(${heroImage})` }}
        >
          <div className="ct-hero-bg" aria-hidden="true" />

          <div className="ct-container ct-hero-grid">
            <div className="ct-hero-copy">
              <nav className="ct-crumbs" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Contact us</span>
              </nav>

              <Eyebrow light>Get in touch</Eyebrow>

              <h1 id="ct-hero-title">
                We would love to <em>hear from you</em>.
              </h1>

              <p>
                Contact Praise-El Junior School about admissions, school
                visits, learner support or anything else. Our team is ready
                to help.
              </p>

              <div className="ct-hero-actions">
                <a href="#contact-form" className="ct-btn ct-btn-gold">
                  <span>Send a message</span>
                  <i aria-hidden="true">
                    <FaArrowRight />
                  </i>
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-btn ct-btn-whatsapp"
                >
                  <span>Chat on WhatsApp</span>
                  <i aria-hidden="true">
                    <FaWhatsapp />
                  </i>
                </a>
              </div>
            </div>

            {/* quick contact card */}
            <aside className="ct-quick" aria-label="Quick contact">
              <div className={`ct-status ${status.open ? "is-open" : ""}`}>
                <span className="ct-status-dot" aria-hidden="true" />
                <span>
                  <strong>School office</strong>
                  {status.text}
                </span>
              </div>

              <a href={PHONES[0].link} className="ct-quick-row">
                <span className="ct-quick-icon" aria-hidden="true">
                  <FaPhoneAlt />
                </span>
                <span>
                  <small>Call the office</small>
                  <strong>{PHONES[0].display}</strong>
                </span>
                <FaArrowRight aria-hidden="true" className="ct-quick-arrow" />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ct-quick-row"
              >
                <span className="ct-quick-icon whatsapp" aria-hidden="true">
                  <FaWhatsapp />
                </span>
                <span>
                  <small>WhatsApp</small>
                  <strong>Chat with our team</strong>
                </span>
                <FaArrowRight aria-hidden="true" className="ct-quick-arrow" />
              </a>

              <a href={`mailto:${EMAIL}`} className="ct-quick-row">
                <span className="ct-quick-icon" aria-hidden="true">
                  <FaEnvelope />
                </span>
                <span>
                  <small>Email</small>
                  <strong className="ct-break">
                    <EmailText />
                  </strong>
                </span>
                <FaArrowRight aria-hidden="true" className="ct-quick-arrow" />
              </a>
            </aside>
          </div>
        </section>

        {/* ================= CONTACT CARDS ================= */}
        <section className="ct-cards-wrap" aria-label="Contact information">
          <div className="ct-container ct-cards">
            <Reveal as="article" className="ct-card">
              <span className="ct-card-icon" aria-hidden="true">
                <FaPhoneAlt />
              </span>
              <h2>Call us</h2>
              {PHONES.map(({ display, link }) => (
                <a key={link} href={link}>
                  {display}
                </a>
              ))}
            </Reveal>

            <Reveal as="article" className="ct-card" delay={80}>
              <span className="ct-card-icon whatsapp" aria-hidden="true">
                <FaWhatsapp />
              </span>
              <h2>WhatsApp</h2>
              <p>Quick answers from the Praise-El team.</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ct-card-link"
              >
                Start a chat <FaArrowRight aria-hidden="true" />
              </a>
            </Reveal>

            <Reveal as="article" className="ct-card" delay={160}>
              <span className="ct-card-icon" aria-hidden="true">
                <FaEnvelope />
              </span>
              <h2>Email us</h2>
              <a href={`mailto:${EMAIL}`} className="ct-break">
                <EmailText />
              </a>
            </Reveal>

            <Reveal as="article" className="ct-card" delay={240}>
              <span className="ct-card-icon" aria-hidden="true">
                <FaMapMarkerAlt />
              </span>
              <h2>Visit us</h2>
              <p>
                {ADDRESS[0]}
                <br />
                {ADDRESS[1]}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ================= MESSAGE FORM ================= */}
        <section className="ct-section ct-form-section" id="contact-form">
          <div className="ct-container">
            <MessageForm status={status} />
          </div>
        </section>

        {/* ================= VISIT & HOURS ================= */}
        <section className="ct-section ct-visit">
          <div className="ct-container ct-visit-grid">
            <Reveal className="ct-map">
              <iframe
                title="Map showing Praise-El Junior School, Kokoola–Kalagi, Mukono"
                src={mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>

            <Reveal className="ct-visit-copy" delay={120}>
              <Eyebrow>Visit our school</Eyebrow>
              <h2>
                Come and <em>see us</em>.
              </h2>
              <p className="ct-address">
                <FaMapMarkerAlt aria-hidden="true" />
                <span>
                  {ADDRESS[0]}, {ADDRESS[1]}
                </span>
              </p>

              <div className="ct-hours">
                <div className="ct-hours-head">
                  <FaClock aria-hidden="true" />
                  <h3>Office hours</h3>
                  <span className={`ct-hours-badge ${status.open ? "is-open" : ""}`}>
                    {status.open ? "Open now" : "Closed now"}
                  </span>
                </div>

                <dl>
                  {hoursList.map(({ label, days, value }) => (
                    <div
                      key={label}
                      className={days.includes(status.day) ? "is-today" : ""}
                    >
                      <dt>
                        {label}
                        {days.includes(status.day) && <small>Today</small>}
                      </dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="ct-visit-actions">
                <a
                  href={directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-btn ct-btn-navy"
                >
                  <span>Get directions</span>
                  <i aria-hidden="true">
                    <FaDirections />
                  </i>
                </a>
                <a href={PHONES[0].link} className="ct-text-link">
                  <FaPhoneAlt aria-hidden="true" />
                  Call before visiting
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= FLOATING WHATSAPP ================= */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="ct-float"
          aria-label="Chat with Praise-El Junior School on WhatsApp"
        >
          <FaWhatsapp aria-hidden="true" />
          <span>Chat with us</span>
        </a>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;