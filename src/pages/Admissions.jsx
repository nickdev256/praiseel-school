import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaArrowRight,
  FaBaby,
  FaBookOpen,
  FaCalendarAlt,
  FaCheck,
  FaChevronDown,
  FaClock,
  FaCross,
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
} from "react-icons/fa";

import heroImage from "../assets/hero1.jpg";
import "./Admissions.css";

const reasons = [
  {
    id: 1,
    icon: <FaGraduationCap />,
    title: "Academic Excellence",
    description:
      "We deliver a strong academic foundation through learner-centred and results-driven teaching.",
  },
  {
    id: 2,
    icon: <FaUserTie />,
    title: "Qualified Teachers",
    description:
      "Our trained and dedicated educators are committed to every learner's growth and success.",
  },
  {
    id: 3,
    icon: <FaShieldAlt />,
    title: "Safe Environment",
    description:
      "A secure, disciplined and child-friendly environment where every learner feels valued.",
  },
  {
    id: 4,
    icon: <FaLaptop />,
    title: "ICT Integration",
    description:
      "Modern digital learning tools are incorporated into everyday classroom teaching.",
  },
];

const programs = [
  {
    id: 1,
    icon: <FaBaby />,
    label: "Early Years",
    title: "Nursery Section",
    description:
      "A joyful beginning that develops confidence, communication, creativity and foundational skills.",
    classes: ["Baby Class", "Middle Class", "Top Class"],
  },
  {
    id: 2,
    icon: <FaGraduationCap />,
    label: "Primary Education",
    title: "Primary Section",
    description:
      "A strong academic journey focused on knowledge, leadership, discipline and character development.",
    classes: ["P1", "P2", "P3", "P4", "P5", "P6", "P7"],
  },
];

const processSteps = [
  {
    id: 1,
    icon: <FaFileAlt />,
    title: "Submit Application",
    description: "Complete and submit the online admission form.",
  },
  {
    id: 2,
    icon: <FaMapMarkerAlt />,
    title: "School Visit",
    description: "Visit our campus and meet the admissions team.",
  },
  {
    id: 3,
    icon: <FaBookOpen />,
    title: "Assessment",
    description: "The learner completes an age-appropriate assessment.",
  },
  {
    id: 4,
    icon: <FaStar />,
    title: "Admission Offer",
    description: "Successful applicants receive an admission offer.",
  },
  {
    id: 5,
    icon: <FaUserGraduate />,
    title: "Enrollment",
    description: "Complete registration and officially join Praise-El.",
  },
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
    id: 1,
    question: "When are admissions open?",
    answer:
      "Admissions are open throughout the year, subject to space availability. Parents are encouraged to apply before the beginning of each school term.",
  },
  {
    id: 2,
    question: "Which classes are available?",
    answer:
      "We admit learners into Baby Class, Middle Class, Top Class and Primary One through Primary Seven.",
  },
  {
    id: 3,
    question: "Does the school provide meals?",
    answer:
      "Yes. The school provides balanced meals prepared under proper hygiene and nutrition standards.",
  },
  {
    id: 4,
    question: "Does the school provide transport?",
    answer:
      "School transport is available along selected routes. Contact the admissions office to confirm whether your location is covered.",
  },
  {
    id: 5,
    question: "Can a learner transfer during the term?",
    answer:
      "Mid-term transfers may be accepted depending on available space, previous school records and the learner's assessment.",
  },
];

function SectionHeading({
  label,
  title,
  description,
  light = false,
}) {
  return (
    <div
      className={`admissions-heading ${
        light ? "light" : ""
      }`}
    >
      <span>{label}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function Admissions() {
  const [openFaq, setOpenFaq] = useState(0);

  function toggleFaq(index) {
    setOpenFaq((current) =>
      current === index ? null : index
    );
  }

  return (
    <>
      <Navbar />

      <main className="admissions-page">
        {/* HERO */}

        <section
          className="admissions-hero"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="admissions-hero-overlay" />

          <div
            className="admissions-hero-shapes"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </div>

          <div className="admissions-container admissions-hero-content">
            <div className="admissions-hero-tag">
              <FaGraduationCap />
              <span>Admissions for 2026 are now open</span>
            </div>

            <h1>
              Give Your Child
              <span>A Brighter Future.</span>
            </h1>

            <p>
              Join a caring Christian learning community
              committed to academic excellence, discipline,
              confidence and the development of every child.
            </p>

            <div className="admissions-hero-buttons">
              <Link
                to="/apply-online"
                className="admissions-button admissions-button-gold"
              >
                Apply Online

                <i aria-hidden="true">
                  <FaArrowRight />
                </i>
              </Link>

              <a
                href="#admission-process"
                className="admissions-button admissions-button-outline"
              >
                How to Apply

                <i aria-hidden="true">
                  <FaArrowRight />
                </i>
              </a>
            </div>

            <div className="admissions-hero-benefits">
              <div>
                <FaCheck />
                <span>Quality Education</span>
              </div>

              <div>
                <FaCheck />
                <span>Qualified Teachers</span>
              </div>

              <div>
                <FaCheck />
                <span>Safe Environment</span>
              </div>
            </div>
          </div>

          <a
            href="#why-praise-el"
            className="admissions-scroll"
            aria-label="Explore the admissions page"
          >
            <span />
            Explore Admissions
          </a>
        </section>

        {/* WHY PRAISE-EL */}

        <section
          className="admissions-why"
          id="why-praise-el"
        >
          <div className="admissions-container">
            <SectionHeading
              label="Why Praise-El?"
              title="A Strong Foundation for Lifelong Success"
              description="We provide more than classroom instruction. Our learners receive the support, values and opportunities they need to thrive."
            />

            <div className="admissions-why-grid">
              {reasons.map((reason, index) => (
                <article
                  className="admissions-why-card"
                  key={reason.id}
                >
                  <span className="admissions-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="admissions-card-icon">
                    {reason.icon}
                  </div>

                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>

                  <span className="admissions-card-line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAMS */}

        <section className="admissions-programs">
          <div className="admissions-container">
            <SectionHeading
              label="Classes Available"
              title="Learning at Every Stage"
              description="Our Nursery and Primary sections provide age-appropriate education that supports each learner's complete development."
            />

            <div className="admissions-program-grid">
              {programs.map((program) => (
                <article
                  className="admissions-program-card"
                  key={program.id}
                >
                  <div className="admissions-program-top">
                    <div className="admissions-program-icon">
                      {program.icon}
                    </div>

                    <div>
                      <span>{program.label}</span>
                      <h3>{program.title}</h3>
                    </div>
                  </div>

                  <p className="admissions-program-description">
                    {program.description}
                  </p>

                  <div className="admissions-class-list">
                    {program.classes.map((className) => (
                      <span key={className}>
                        <FaCheck />
                        {className}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ADMISSION PROCESS */}

        <section
          className="admissions-process"
          id="admission-process"
        >
          <div className="admissions-container">
            <SectionHeading
              label="Admission Process"
              title="Your Journey to Praise-El"
              description="Our admissions process is simple, supportive and designed to help your family at every stage."
              light
            />

            <div className="admissions-process-grid">
              {processSteps.map((step, index) => (
                <article
                  className="admissions-step"
                  key={step.id}
                >
                  <span className="admissions-step-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="admissions-step-icon">
                    {step.icon}
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* REQUIREMENTS */}

        <section className="admissions-requirements">
          <div className="admissions-container admissions-requirements-layout">
            <div className="admissions-requirements-content">
              <span className="admissions-small-label">
                Enrollment Checklist
              </span>

              <h2>Documents Required for Admission</h2>

              <p>
                Prepare the following documents before
                submitting your application. Our admissions
                team will help you if additional information
                is required.
              </p>

              <a
                href="/admission-form.pdf"
                className="admissions-download-button"
                download
              >
                <FaDownload />
                Download Admission Form
              </a>
            </div>

            <div className="admissions-requirements-card">
              <div className="admissions-document-icon">
                <FaFileAlt />
              </div>

              <h3>Admission Requirements</h3>

              <ul>
                {requirements.map((requirement) => (
                  <li key={requirement}>
                    <span>
                      <FaCheck />
                    </span>

                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ONLINE APPLICATION */}

        <section className="admissions-apply">
          <div className="admissions-apply-overlay" />

          <div className="admissions-container admissions-apply-layout">
            <div className="admissions-apply-content">
              <span className="admissions-small-label light">
                Online Admissions
              </span>

              <h2>
                Begin Your Child&apos;s Journey
                <span>With Praise-El.</span>
              </h2>

              <p>
                Complete your application online in only a
                few minutes. Our admissions team will review
                it and contact you with guidance on the next
                steps.
              </p>

              <div className="admissions-apply-features">
                <div>
                  <FaClock />
                  <span>Quick Application</span>
                </div>

                <div>
                  <FaShieldAlt />
                  <span>Secure Submission</span>
                </div>

                <div>
                  <FaUserGraduate />
                  <span>Personal Support</span>
                </div>
              </div>

              <div className="admissions-apply-buttons">
                <Link
                  to="/apply-online"
                  className="admissions-button admissions-button-gold"
                >
                  Apply Online

                  <i aria-hidden="true">
                    <FaArrowRight />
                  </i>
                </Link>

                <a
                  href="/prospectus.pdf"
                  className="admissions-text-link"
                  download
                >
                  <FaDownload />
                  Download Prospectus
                </a>
              </div>
            </div>

            <aside className="admissions-application-card">
              <div className="admissions-application-card-icon">
                <FaGraduationCap />
              </div>

              <span>Admissions 2026</span>
              <h3>Applications Are Open</h3>

              <p>
                Secure an opportunity for your child to
                learn, grow and excel at Praise-El Junior
                School.
              </p>

              <ul>
                <li>
                  <FaCheck />
                  Nursery admissions
                </li>

                <li>
                  <FaCheck />
                  Primary admissions
                </li>

                <li>
                  <FaCheck />
                  Transfer admissions
                </li>
              </ul>

              <Link to="/apply-online">
                Start Your Application
                <FaArrowRight />
              </Link>
            </aside>
          </div>
        </section>

        {/* FAQ */}

        <section className="admissions-faq">
          <div className="admissions-container admissions-faq-layout">
            <div className="admissions-faq-introduction">
              <span className="admissions-small-label">
                Questions &amp; Answers
              </span>

              <h2>Frequently Asked Questions</h2>

              <p>
                Find answers to common questions about
                joining Praise-El Junior School.
              </p>

              <div className="admissions-faq-help">
                <FaPhoneAlt />

                <div>
                  <small>Need more assistance?</small>

                  <a href="tel:+256744523317">
                    0744 523 317
                  </a>
                </div>
              </div>
            </div>

            <div className="admissions-faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <article
                    className={`admissions-faq-item ${
                      isOpen ? "active" : ""
                    }`}
                    key={faq.id}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <span>{faq.question}</span>
                      <FaChevronDown />
                    </button>

                    <div
                      className="admissions-faq-answer"
                      id={`faq-answer-${faq.id}`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTACT */}

        <section className="admissions-contact">
          <div className="admissions-container">
            <SectionHeading
              label="Contact Admissions"
              title="We Are Ready to Help"
              description="Speak with our admissions team for guidance about applications, school visits, classes and enrollment."
            />

            <div className="admissions-contact-grid">
              <article className="admissions-contact-card">
                <span>
                  <FaPhoneAlt />
                </span>

                <h3>Call Us</h3>

                <a href="tel:+256744523317">
                  0744 523 317
                </a>

                <a href="tel:+256786971859">
                  0786 971 859
                </a>
              </article>

              <article className="admissions-contact-card">
                <span>
                  <FaEnvelope />
                </span>

                <h3>Email Us</h3>

                <a href="mailto:info.praiseeljuniorschool256@gmail.com">
                  info.praiseeljuniorschool256@gmail.com
                </a>
              </article>

              <article className="admissions-contact-card">
                <span>
                  <FaMapMarkerAlt />
                </span>

                <h3>Visit Our School</h3>

                <p>
                  Kokoola–Kalagi
                  <br />
                  Mukono District, Uganda
                </p>
              </article>

              <article className="admissions-contact-card">
                <span>
                  <FaCalendarAlt />
                </span>

                <h3>Office Hours</h3>

                <p>
                  Monday–Friday: 8:00 AM–5:00 PM
                  <br />
                  Saturday: 9:00 AM–1:00 PM
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}

        <section className="admissions-final-cta">
          <div
            className="admissions-final-symbol"
            aria-hidden="true"
          >
            <FaCross />
          </div>

          <div>
            <span>Give Your Child the Best Start</span>

            <h2>
              Ready to Join the Praise-El Family?
            </h2>

            <p>
              Admissions for Nursery and Primary classes
              are currently open.
            </p>
          </div>

          <Link
            to="/apply-online"
            className="admissions-final-button"
          >
            Apply Now
            <FaArrowRight />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Admissions;