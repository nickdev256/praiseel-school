import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaArrowRight,
  FaBaby,
  FaBookOpen,
  FaBus,
  FaCalendarAlt,
  FaCheck,
  FaChevronDown,
  FaClock,
  FaDownload,
  FaEnvelope,
  FaFileAlt,
  FaGraduationCap,
  FaLaptop,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaStar,
  FaUserGraduate,
  FaUserTie,
  FaUtensils,
} from "react-icons/fa";

import heroImage from "../assets/hero1.jpg";
import "./Admissions.css";

/* ============================================================
   CONTENT
============================================================ */

// From September onward, advertise next year's intake.
const now = new Date();
const admissionYear =
  now.getMonth() >= 8 ? now.getFullYear() + 1 : now.getFullYear();

const quickFacts = [
  { icon: FaGraduationCap, title: "Baby Class – P7", text: "Nursery & primary" },
  { icon: FaCalendarAlt, title: "Year-round intake", text: "Subject to space" },
  { icon: FaUtensils, title: "Balanced meals", text: "Provided daily" },
  { icon: FaBus, title: "School transport", text: "Selected routes" },
];

const reasons = [
  {
    icon: FaGraduationCap,
    title: "Academic Excellence",
    text: "A strong academic foundation through learner-centred, results-driven teaching.",
  },
  {
    icon: FaUserTie,
    title: "Qualified Teachers",
    text: "Trained, dedicated educators committed to every learner's growth and success.",
  },
  {
    icon: FaShieldAlt,
    title: "Safe Environment",
    text: "A secure, disciplined and child-friendly campus where every learner feels valued.",
  },
  {
    icon: FaLaptop,
    title: "ICT Integration",
    text: "Modern digital learning tools built into everyday classroom teaching.",
  },
];

const programs = [
  {
    icon: FaBaby,
    label: "Early Years",
    title: "Nursery Section",
    text: "A joyful beginning that builds confidence, communication, creativity and foundational skills.",
    classes: ["Baby Class", "Middle Class", "Top Class"],
    tone: "dark",
  },
  {
    icon: FaGraduationCap,
    label: "Primary Education",
    title: "Primary Section",
    text: "A strong academic journey focused on knowledge, leadership, discipline and character.",
    classes: ["P1", "P2", "P3", "P4", "P5", "P6", "P7"],
    tone: "gold",
  },
];

const steps = [
  { icon: FaFileAlt, title: "Submit application", text: "Complete and submit the online admission form." },
  { icon: FaMapMarkerAlt, title: "Visit the school", text: "Tour our campus and meet the admissions team." },
  { icon: FaBookOpen, title: "Assessment", text: "Your child completes an age-appropriate assessment." },
  { icon: FaStar, title: "Admission offer", text: "Successful applicants receive an offer of a place." },
  { icon: FaUserGraduate, title: "Enrollment", text: "Complete registration and join the Praise-El family." },
];

const requirements = [
  "A copy of the learner's birth certificate",
  "Two recent passport-size photographs",
  "Previous school report card",
  "Transfer letter, where applicable",
  "Parent or guardian identification",
  "Completed school admission form",
];

const faqs = [
  {
    question: "When are admissions open?",
    answer:
      "Admissions are open throughout the year, subject to space availability. Parents are encouraged to apply before the beginning of each school term.",
  },
  {
    question: "Which classes are available?",
    answer:
      "We admit learners into Baby Class, Middle Class, Top Class and Primary One through Primary Seven.",
  },
  {
    question: "Does the school provide meals?",
    answer:
      "Yes. The school provides balanced meals prepared under proper hygiene and nutrition standards.",
  },
  {
    question: "Does the school provide transport?",
    answer:
      "School transport is available along selected routes. Contact the admissions office to confirm whether your location is covered.",
  },
  {
    question: "Can a learner transfer during the term?",
    answer:
      "Mid-term transfers may be accepted depending on available space, previous school records and the learner's assessment.",
  },
];

/* ============================================================
   HELPERS
============================================================ */

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
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
  }, [inView, threshold]);

  return [ref, inView];
}

function Reveal({ as: Tag = "div", className = "", delay = 0, children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`ad-reveal ${inView ? "is-in" : ""} ${className}`.trim()}
      style={{ "--delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Eyebrow({ children, light = false }) {
  return <span className={`ad-eyebrow ${light ? "light" : ""}`}>{children}</span>;
}

function ArrowButton({ to, href, variant = "gold", children, ...rest }) {
  const className = `ad-btn ad-btn-${variant}`;
  const inner = (
    <>
      <span>{children}</span>
      <i aria-hidden="true">
        <FaArrowRight />
      </i>
    </>
  );
  return href ? (
    <a href={href} className={className} {...rest}>
      {inner}
    </a>
  ) : (
    <Link to={to} className={className} {...rest}>
      {inner}
    </Link>
  );
}

function SectionHeading({ label, title, text, light = false, align = "center" }) {
  return (
    <Reveal className={`ad-heading ${align} ${light ? "light" : ""}`}>
      <Eyebrow light={light}>{label}</Eyebrow>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}

/* ============================================================
   PAGE
============================================================ */

function Admissions() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) =>
    setOpenFaq((current) => (current === index ? null : index));

  return (
    <>
      <Navbar />

      <main className="ad">
        {/* ================= HERO ================= */}
        <section
          className="ad-hero"
          aria-labelledby="ad-hero-title"
          style={{ "--ad-hero-bg": `url(${heroImage})` }}
        >
          <div className="ad-hero-bg" aria-hidden="true" />

          <div className="ad-container ad-hero-grid">
            <div className="ad-hero-copy">
              <nav className="ad-crumbs" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Admissions</span>
              </nav>

              <span className="ad-pill">
                <span className="ad-pulse" aria-hidden="true" />
                Admissions for {admissionYear} are open
              </span>

              <h1 id="ad-hero-title">
                Give your child a <em>brighter future</em>.
              </h1>

              <p>
                Join a caring Christian learning community committed to
                academic excellence, discipline, confidence and the growth of
                every child.
              </p>

              <div className="ad-hero-actions">
                <ArrowButton to="/apply-online">Apply online</ArrowButton>
                <ArrowButton href="#admission-process" variant="ghost">
                  How to apply
                </ArrowButton>
              </div>
            </div>

            <aside className="ad-hero-card" aria-label="Admissions summary">
              <div className="ad-hero-card-top">
                <span className="ad-hero-card-icon" aria-hidden="true">
                  <FaGraduationCap />
                </span>
                <div>
                  <small>Admissions {admissionYear}</small>
                  <strong>Applications are open</strong>
                </div>
              </div>

              <ul>
                <li>
                  <FaCheck aria-hidden="true" /> Nursery admissions
                </li>
                <li>
                  <FaCheck aria-hidden="true" /> Primary admissions
                </li>
                <li>
                  <FaCheck aria-hidden="true" /> Transfer admissions
                </li>
              </ul>

              <Link to="/apply-online" className="ad-hero-card-link">
                Start your application
                <FaArrowRight aria-hidden="true" />
              </Link>

              <a href="tel:+256744523317" className="ad-hero-card-call">
                <FaPhoneAlt aria-hidden="true" />
                <span>
                  <small>Questions? Call admissions</small>
                  0744 523 317
                </span>
              </a>
            </aside>
          </div>
        </section>

        {/* ================= QUICK FACTS ================= */}
        <div className="ad-container">
          <ul className="ad-facts">
            {quickFacts.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 80}>
                <span className="ad-fact-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* ================= WHY ================= */}
        <section className="ad-section" id="why-praise-el">
          <div className="ad-container">
            <SectionHeading
              label="Why Praise-El?"
              title={
                <>
                  A strong foundation for <em>lifelong success</em>.
                </>
              }
              text="We provide more than classroom instruction. Our learners receive the support, values and opportunities they need to thrive."
            />

            <div className="ad-why-grid">
              {reasons.map(({ icon: Icon, title, text }, i) => (
                <Reveal as="article" className="ad-why-card" key={title} delay={i * 80}>
                  <span className="ad-why-num" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <span className="ad-why-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROGRAMS ================= */}
        <section className="ad-section ad-programs">
          <div className="ad-container">
            <SectionHeading
              label="Classes available"
              title={
                <>
                  Learning at <em>every stage</em>.
                </>
              }
              text="Age-appropriate education in our Nursery and Primary sections that supports each learner's complete development."
            />

            <div className="ad-program-grid">
              {programs.map(({ icon: Icon, label, title, text, classes, tone }, i) => (
                <Reveal
                  as="article"
                  className={`ad-program ${tone}`}
                  key={title}
                  delay={i * 120}
                >
                  <div className="ad-program-top">
                    <span className="ad-program-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <div>
                      <small>{label}</small>
                      <h3>{title}</h3>
                    </div>
                  </div>
                  <p>{text}</p>
                  <ul>
                    {classes.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="ad-section ad-process" id="admission-process">
          <div className="ad-container">
            <SectionHeading
              light
              label="Admission process"
              title={
                <>
                  Your journey to <em className="ad-nowrap">Praise-El</em>.
                </>
              }
              text="A simple, supportive process designed to help your family at every stage."
            />

            <ol className="ad-steps">
              {steps.map(({ icon: Icon, title, text }, i) => (
                <Reveal as="li" className="ad-step" key={title} delay={i * 90}>
                  <span className="ad-step-dot" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="ad-step-num">Step {i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ================= REQUIREMENTS ================= */}
        <section className="ad-section">
          <div className="ad-container ad-req-grid">
            <Reveal className="ad-req-copy">
              <Eyebrow>Enrollment checklist</Eyebrow>
              <h2>
                Documents <em>required</em> for admission.
              </h2>
              <p>
                Prepare the following documents before submitting your
                application. Our admissions team will help you if any
                additional information is needed.
              </p>
              <a href="/admission-form.pdf" className="ad-btn ad-btn-berry" download>
                <span>Download admission form</span>
                <i aria-hidden="true">
                  <FaDownload />
                </i>
              </a>
            </Reveal>

            <Reveal className="ad-req-card" delay={120}>
              <div className="ad-req-card-head">
                <span aria-hidden="true">
                  <FaFileAlt />
                </span>
                <h3>Admission requirements</h3>
              </div>
              <ul>
                {requirements.map((item, i) => (
                  <li key={item}>
                    <span className="ad-req-num" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="ad-section ad-faq">
          <div className="ad-container ad-faq-grid">
            <div className="ad-faq-intro">
              <Eyebrow>Questions &amp; answers</Eyebrow>
              <h2>
                Frequently asked <em>questions</em>.
              </h2>
              <p>Answers to common questions about joining Praise-El Junior School.</p>

              <a href="tel:+256744523317" className="ad-faq-help">
                <span aria-hidden="true">
                  <FaPhoneAlt />
                </span>
                <span>
                  <small>Need more help?</small>
                  <strong>0744 523 317</strong>
                </span>
              </a>
            </div>

            <div className="ad-faq-list">
              {faqs.map(({ question, answer }, index) => {
                const isOpen = openFaq === index;
                return (
                  <div className={`ad-faq-item ${isOpen ? "is-open" : ""}`} key={question}>
                    <h3>
                      <button
                        type="button"
                        id={`ad-faq-q-${index}`}
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                        aria-controls={`ad-faq-a-${index}`}
                      >
                        <span>{question}</span>
                        <i aria-hidden="true">
                          <FaChevronDown />
                        </i>
                      </button>
                    </h3>
                    <div
                      className="ad-faq-answer"
                      id={`ad-faq-a-${index}`}
                      role="region"
                      aria-labelledby={`ad-faq-q-${index}`}
                    >
                      <div>
                        <p>{answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="ad-section ad-contact">
          <div className="ad-container">
            <SectionHeading
              label="Contact admissions"
              title={
                <>
                  We are <em>ready to help</em>.
                </>
              }
              text="Speak with our admissions team about applications, school visits, classes and enrollment."
            />

            <div className="ad-contact-grid">
              <Reveal as="article" className="ad-contact-card">
                <span aria-hidden="true">
                  <FaPhoneAlt />
                </span>
                <h3>Call us</h3>
                <a href="tel:+256744523317">0744 523 317</a>
                <a href="tel:+256786971859">0786 971 859</a>
              </Reveal>

              <Reveal as="article" className="ad-contact-card" delay={80}>
                <span aria-hidden="true">
                  <FaEnvelope />
                </span>
                <h3>Email us</h3>
                <a href="mailto:info.praiseeljuniorschool256@gmail.com">
                  info.praiseeljuniorschool256@gmail.com
                </a>
              </Reveal>

              <Reveal as="article" className="ad-contact-card" delay={160}>
                <span aria-hidden="true">
                  <FaMapMarkerAlt />
                </span>
                <h3>Visit our school</h3>
                <p>
                  Kokoola–Kalagi
                  <br />
                  Mukono District, Uganda
                </p>
              </Reveal>

              <Reveal as="article" className="ad-contact-card" delay={240}>
                <span aria-hidden="true">
                  <FaClock />
                </span>
                <h3>Office hours</h3>
                <p>
                  Mon–Fri: 8:00 AM – 5:00 PM
                  <br />
                  Saturday: 9:00 AM – 1:00 PM
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="ad-section ad-cta-wrap">
          <Reveal className="ad-container">
            <div className="ad-cta" style={{ "--ad-cta-bg": `url(${heroImage})` }}>
              <div className="ad-cta-copy">
                <Eyebrow light>Online admissions</Eyebrow>
                <h2>
                  Ready to join the <em><span className="ad-nowrap">Praise-El</span> family</em>?
                </h2>
                <p>
                  Apply online in a few minutes. Our admissions team will
                  review your application and contact you about next steps.
                </p>

                <ul className="ad-cta-features">
                  <li>
                    <FaClock aria-hidden="true" /> Quick application
                  </li>
                  <li>
                    <FaShieldAlt aria-hidden="true" /> Secure submission
                  </li>
                  <li>
                    <FaUserGraduate aria-hidden="true" /> Personal support
                  </li>
                </ul>
              </div>

              <div className="ad-cta-actions">
                <ArrowButton to="/apply-online">Apply now</ArrowButton>
                <a href="/prospectus.pdf" className="ad-text-link" download>
                  <FaDownload aria-hidden="true" />
                  Download prospectus
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Admissions;