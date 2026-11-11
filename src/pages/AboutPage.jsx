import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaBookOpen,
  FaBullseye,
  FaChalkboardTeacher,
  FaEye,
  FaGraduationCap,
  FaHeart,
  FaQuoteLeft,
  FaSchool,
  FaUsers,
} from "react-icons/fa";

import "./AboutPage.css";

import hero from "../assets/hero1.jpg";
import teacherImg from "../assets/gallery2.jpg";
import directorImg from "../assets/school-director.jpg";
import headTeacherImg from "../assets/head-teacher.jpg";
import deputyImg from "../assets/deputy-headteacher.jpg";
import bursarImg from "../assets/school-bursar.jpg";

// Hero background photo. To use a different picture, import it and
// assign it here, e.g. import aboutBg from "../assets/about-bg.jpg";
const heroBackground = hero;

/* ============================================================
   CONTENT
============================================================ */

const statistics = [
  { value: "15+", label: "Years of impact", icon: FaGraduationCap },
  { value: "500+", label: "Happy learners", icon: FaUsers },
  { value: "35+", label: "Professional teachers", icon: FaChalkboardTeacher },
  { value: "Baby–P7", label: "Nursery & primary", icon: FaSchool },
];

const values = [
  { title: "Knowledge", text: "A strong foundation for life.", icon: FaBookOpen },
  { title: "Character", text: "Doing what is right, always.", icon: FaHeart },
  { title: "Purpose", text: "Making a positive difference.", icon: FaUsers },
];

const purpose = [
  {
    number: "01",
    title: "Our Vision",
    icon: FaEye,
    text: "To be a leading centre of excellence in early childhood and primary education, nurturing God-fearing, confident and responsible global citizens.",
  },
  {
    number: "02",
    title: "Our Mission",
    icon: FaBullseye,
    text: "To provide holistic, child-centred education that inspires academic growth, builds strong character and equips learners with the skills and values needed for a better world.",
  },
];

const administrators = [
  { name: "Mr Kizito Silvesto", role: "School Director", image: directorImg },
  { name: "Mr Kagga Charles", role: "Head Teacher", image: headTeacherImg },
  // TODO: replace with the deputy's real name
  { name: "Deputy Head Teacher", role: "Head of Admissions", image: deputyImg },
  {
    name: "Charles Birimuye",
    nickname: "Uncle Charles",
    role: "School Bursar & Head of Accounts",
    image: bursarImg,
  },
];

const message = [
  "At Praise-El Junior School, we believe in the incredible potential of every child. Each learner comes to us with unique talents, abilities and dreams, and it is our responsibility to provide an environment where those gifts can be discovered, nurtured and developed.",
  "Our commitment goes beyond academic achievement. We provide holistic education that strengthens character, encourages creativity, builds confidence and teaches learners to become responsible members of their communities. Through quality teaching, discipline, strong Christian values and individual support, we prepare our learners to overcome challenges and pursue excellence in everything they do.",
  "We also recognise that education is a shared responsibility. We value the strong partnership between the school, parents, guardians, teachers and the wider community. By working together, we can give every child the guidance, encouragement and opportunities they need to succeed.",
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
      className={`ab-reveal ${inView ? "is-in" : ""} ${className}`.trim()}
      style={{ "--delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Eyebrow({ children, light = false }) {
  return <span className={`ab-eyebrow ${light ? "light" : ""}`}>{children}</span>;
}

/* ============================================================
   ABOUT PAGE
============================================================ */

function AboutPage() {
  return (
    <main className="ab">
      {/* ================= HERO ================= */}
      <section
        className="ab-hero"
        aria-labelledby="ab-hero-title"
        style={{ "--ab-hero-bg": `url(${heroBackground})` }}
      >
        <div className="ab-hero-bg" aria-hidden="true" />
        <div className="ab-hero-glow" aria-hidden="true" />

        <div className="ab-container ab-hero-head">
          <nav className="ab-crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">About us</span>
          </nav>

          <h1 id="ab-hero-title">
            Where young minds grow with <em>purpose</em>.
          </h1>

          <p>
            At Praise-El Junior School, we nurture confident, compassionate
            and capable learners who are prepared to create a brighter
            tomorrow.
          </p>

          <a className="ab-btn ab-btn-gold" href="#our-story">
            <span>Discover our story</span>
            <i aria-hidden="true">
              <FaArrowRight />
            </i>
          </a>
        </div>

        <div className="ab-container ab-hero-gallery">
          <figure className="ab-hg ab-hg-side">
            <img src={teacherImg} alt="Learners at Praise-El Junior School" />
          </figure>

          <figure className="ab-hg ab-hg-main">
            <img src={hero} alt="Praise-El Junior School learners" />
            <figcaption className="ab-hero-tag">
              <FaSchool aria-hidden="true" />
              <span>
                <strong>Nursery &amp; Primary</strong>
                <small>Baby Class – Primary Seven</small>
              </span>
            </figcaption>
          </figure>

          <div className="ab-hg ab-hg-card">
            <FaHeart aria-hidden="true" />
            <p>
              Every child <em>matters</em>.
            </p>
            <small>Our founding belief</small>
            <ul className="ab-motto" aria-label="Our motto">
              <li>Discipline</li>
              <li>Opportunity</li>
              <li>A brighter tomorrow</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <div className="ab-container">
        <ul className="ab-stats">
          {statistics.map(({ value, label, icon: Icon }, i) => (
            <Reveal as="li" key={label} delay={i * 80}>
              <span className="ab-stat-icon" aria-hidden="true">
                <Icon />
              </span>
              <span>
                <strong>{value}</strong>
                <small>{label}</small>
              </span>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* ================= STORY ================= */}
      <section className="ab-section ab-story" id="our-story">
        <div className="ab-container ab-story-grid">
          <Reveal className="ab-collage">
            <img
              className="ab-collage-main"
              src={teacherImg}
              alt="Learners at Praise-El Junior School"
              loading="lazy"
            />
            <img
              className="ab-collage-small"
              src={hero}
              alt=""
              loading="lazy"
            />
            <p className="ab-collage-note">
              Curious minds,
              <strong>brighter tomorrows.</strong>
            </p>
          </Reveal>

          <div className="ab-story-copy">
            <Eyebrow>Our story</Eyebrow>
            <h2>
              Founded on a simple belief: <em>every child matters</em>.
            </h2>
            <p>
              What began as a small community of learners has grown into a
              respected nursery and primary school known for academic
              excellence, strong values and a caring, family-like environment.
            </p>
            <p>
              We continue to build on this foundation, preparing children not
              just for the next class, but for life.
            </p>

            <ul className="ab-values">
              {values.map(({ title, text, icon: Icon }) => (
                <li key={title}>
                  <span aria-hidden="true">
                    <Icon />
                  </span>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="ab-section ab-purpose">
        <div className="ab-container ab-purpose-grid">
          {purpose.map(({ number, title, icon: Icon, text }, i) => (
            <Reveal
              as="article"
              key={title}
              className={`ab-purpose-card ${i === 0 ? "dark" : "gold"}`}
              delay={i * 120}
            >
              <div className="ab-purpose-top">
                <span className="ab-purpose-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="ab-purpose-num" aria-hidden="true">
                  {number}
                </span>
              </div>
              <h2>{title}</h2>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="ab-section ab-leaders">
        <div className="ab-container">
          <div className="ab-heading">
            <Reveal>
              <Eyebrow>Leadership that serves</Eyebrow>
              <h2>
                Our school <em>administration</em>.
              </h2>
            </Reveal>
            <p>
              A committed team of educators and professionals who lead with
              integrity, humility and a deep passion for child development.
            </p>
          </div>

          <div className="ab-leader-grid">
            {administrators.map(({ name, nickname, role, image }, i) => (
              <Reveal as="article" className="ab-leader" key={name} delay={i * 90}>
                <div className="ab-leader-photo">
                  <img src={image} alt={`${name}, ${role}`} loading="lazy" />
                </div>
                <h3>{name}</h3>
                {nickname && <span className="ab-leader-nick">“{nickname}”</span>}
                <p>{role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HEAD TEACHER'S MESSAGE ================= */}
      <section className="ab-section ab-message">
        <div className="ab-container ab-message-grid">
          <Reveal className="ab-message-photo">
            <div className="ab-arch light">
              <img
                src={headTeacherImg}
                alt="Mr Kagga Charles, Head Teacher"
                loading="lazy"
              />
            </div>
            <div className="ab-signature">
              <strong>Mr Kagga Charles</strong>
              <small>Head Teacher</small>
            </div>
          </Reveal>

          <div className="ab-message-copy">
            <Eyebrow>Head teacher&apos;s message</Eyebrow>

            <blockquote className="ab-pullquote">
              <FaQuoteLeft aria-hidden="true" />
              Every learner is known, valued and inspired to achieve their
              best.
            </blockquote>

            {message.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}

            <p className="ab-message-close">
              Together, we are raising a generation that leads with knowledge,
              strong character, confidence and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TEACHERS CTA ================= */}
      <section className="ab-section ab-cta-wrap">
        <Reveal className="ab-container">
          <div
            className="ab-cta"
            style={{ backgroundImage: `url(${teacherImg})` }}
          >
            <div className="ab-cta-copy">
              <Eyebrow light>Great teachers change everything</Eyebrow>
              <h2>
                Teaching with care. <em>Leading with purpose.</em>
              </h2>
              <Link className="ab-btn ab-btn-gold" to="/teachers">
                <span>Meet our teachers</span>
                <i aria-hidden="true">
                  <FaArrowRight />
                </i>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export default AboutPage;