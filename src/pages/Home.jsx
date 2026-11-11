import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaBaby,
  FaBookOpen,
  FaBullseye,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaCross,
  FaEye,
  FaFlask,
  FaGraduationCap,
  FaHandshake,
  FaHeart,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaMusic,
  FaPuzzlePiece,
  FaQuoteLeft,
  FaRunning,
  FaSchool,
  FaShieldAlt,
  FaStar,
  FaTrophy,
  FaUsers,
  FaChalkboardTeacher,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import heroBg from "../assets/hero4.jpg";
import aboutImage from "../assets/about-school.jpg";
import schoolKids from "../assets/school-kids.jpg";
import nurseryImg from "../assets/nursery.jpg";
import primaryImg from "../assets/p.png";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

import "./Home.css";

/* ============================================================
   CONTENT
============================================================ */

const now = new Date();
// From September, advertise next year's intake.
const admissionYear =
  now.getMonth() >= 8 ? now.getFullYear() + 1 : now.getFullYear();

const introTabs = [
  {
    id: "about",
    label: "About",
    icon: FaSchool,
    title: "A school where every child is known.",
    text: "Praise-El Junior School provides quality nursery and primary education in a safe, caring and stimulating environment. We nurture learners academically, morally, spiritually and socially, preparing them to become responsible citizens and future leaders.",
  },
  {
    id: "vision",
    label: "Vision",
    icon: FaEye,
    title: "Guiding every child towards success.",
    text: "To be a leading centre of academic excellence that nurtures confident, innovative, disciplined and responsible learners equipped with knowledge, skills and values for lifelong success.",
  },
  {
    id: "mission",
    label: "Mission",
    icon: FaBullseye,
    title: "Educating for a better tomorrow.",
    text: "To provide holistic education through quality teaching, character development, spiritual growth and co-curricular activities that empower every learner to excel academically and socially.",
  },
  {
    id: "visit",
    label: "Visit",
    icon: FaMapMarkerAlt,
    title: "Come and see us in person.",
    text: "We warmly welcome parents and guardians to visit our campus, meet our dedicated staff and experience the vibrant learning environment that makes Praise-El Junior School unique.",
  },
  {
    id: "partnership",
    label: "Partnership",
    icon: FaHandshake,
    title: "Parents and teachers, one team.",
    text: "Strong partnerships between parents, teachers and learners create the best foundation for success. Together, we support every child's growth, development and achievement.",
  },
];

const highlights = [
  "Qualified and caring teachers",
  "Modern learning approach",
  "Safe and nurturing environment",
  "Strong Christian foundation",
];

const pillars = [
  { title: "Quality Education", text: "A strong academic foundation from Baby Class to P7.", icon: FaGraduationCap, link: "/academics" },
  { title: "Safe Environment", text: "A secure, caring campus where children thrive.", icon: FaShieldAlt, link: "/about" },
  { title: "Holistic Growth", text: "Character, confidence, faith and creativity.", icon: FaUsers, link: "/programs" },
  { title: "Excellence Always", text: "Preparing the leaders of tomorrow, today.", icon: FaTrophy, link: "/gallery" },
];

const marqueeItems = [
  "Quality Education",
  "Christian Values",
  "Safe Campus",
  "ICT Learning",
  "Sports & Games",
  "Music & Arts",
  "Leadership",
  "PLE Excellence",
];

const programs = [
  {
    category: "Nursery Section",
    ages: "Baby · Middle · Top Class",
    title: "Early Childhood Learning",
    text: "Creativity, communication, confidence and the first steps in literacy and numeracy, learned through play.",
    image: nurseryImg,
    icon: FaBaby,
    tags: [
      { label: "Baby Class", icon: FaBaby },
      { label: "Middle Class", icon: FaUsers },
      { label: "Top Class", icon: FaStar },
      { label: "Play Learning", icon: FaPuzzlePiece },
    ],
  },
  {
    category: "Primary Section",
    ages: "Primary One – Primary Seven",
    title: "Building Future Leaders",
    text: "Quality teaching that promotes academic excellence, leadership and character, all the way to PLE.",
    image: primaryImg,
    icon: FaGraduationCap,
    tags: [
      { label: "P1 – P7", icon: FaGraduationCap },
      { label: "Leadership", icon: FaChalkboardTeacher },
      { label: "ICT", icon: FaLaptopCode },
      { label: "Sports", icon: FaTrophy },
    ],
  },
];

const values = [
  { title: "Holistic Development", icon: FaUsers },
  { title: "Safe and Supportive", icon: FaShieldAlt },
  { title: "Excellence Driven", icon: FaTrophy },
  { title: "Heart for Every Child", icon: FaHeart },
];

const stats = [
  { end: 500, suffix: "+", label: "Happy learners" },
  { end: 35, suffix: "+", label: "Qualified teachers" },
  { end: 98, suffix: "%", label: "Success rate" },
  { end: 15, suffix: "+", label: "Years of excellence" },
];

const gallery = [
  { title: "Learning Together", text: "Strong foundations every day.", image: gallery1, icon: FaBookOpen, size: "tall" },
  { title: "Sports Day", text: "Team spirit in action.", image: gallery2, icon: FaRunning, size: "" },
  { title: "Music and Arts", text: "Discovering creative talents.", image: gallery3, icon: FaMusic, size: "" },
  { title: "Classroom Life", text: "Curious minds, bright futures.", image: gallery4, icon: FaUsers, size: "wide" },
  { title: "Science Activities", text: "Learning through discovery.", image: gallery5, icon: FaFlask, size: "wide" },
  { title: "Leadership", text: "Raising tomorrow's leaders.", image: gallery6, icon: FaTrophy, size: "" },
];

const testimonials = [
  {
    name: "Mrs. Akello",
    role: "Parent",
    message:
      "Praise-El Junior School has transformed my child academically and socially. The teachers are dedicated, caring and always supportive.",
  },
  {
    name: "Mr. Namanya",
    role: "Parent",
    message:
      "The school provides a safe and nurturing environment. My child enjoys learning and looks forward to school every day.",
  },
  {
    name: "Mrs. Katushabe",
    role: "Parent",
    message:
      "We appreciate the balance between academics, discipline and co-curricular activities. Praise-El truly nurtures future leaders.",
  },
];

/* ============================================================
   HELPERS
============================================================ */

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

function useInView(threshold = 0.2) {
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
  const [ref, inView] = useInView(0.12);
  return (
    <Tag
      ref={ref}
      className={`hm-reveal ${inView ? "is-in" : ""} ${className}`.trim()}
      style={{ "--delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Counter({ end, suffix = "", duration = 1800 }) {
  const [ref, inView] = useInView(0.5);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    if (prefersReducedMotion()) {
      setValue(end);
      return undefined;
    }
    let frame;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min((t - start) / duration, 1);
      setValue(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      <span aria-hidden="true">
        {value}
        {suffix}
      </span>
      <span className="hm-sr">
        {end}
        {suffix}
      </span>
    </span>
  );
}

function Eyebrow({ children, light = false }) {
  return <span className={`hm-eyebrow ${light ? "light" : ""}`}>{children}</span>;
}

function ArrowButton({ to, href, variant = "gold", children }) {
  const className = `hm-btn hm-btn-${variant}`;
  const inner = (
    <>
      <span>{children}</span>
      <i aria-hidden="true">
        <FaArrowRight />
      </i>
    </>
  );
  return href ? (
    <a href={href} className={className}>
      {inner}
    </a>
  ) : (
    <Link to={to} className={className}>
      {inner}
    </Link>
  );
}

/* ============================================================
   PAGE
============================================================ */

function Home() {
  const [activeTab, setActiveTab] = useState(introTabs[0].id);
  const tabRefs = useRef([]);
  const active = introTabs.find((t) => t.id === activeTab) || introTabs[0];

  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || prefersReducedMotion()) return undefined;
    const timer = setInterval(
      () => setSlide((s) => (s + 1) % testimonials.length),
      6500,
    );
    return () => clearInterval(timer);
  }, [paused]);

  const goTo = (index) =>
    setSlide((index + testimonials.length) % testimonials.length);

  const onTabKeyDown = (event, index) => {
    const last = introTabs.length - 1;
    const map = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    if (!(event.key in map)) return;
    event.preventDefault();
    const next = map[event.key];
    setActiveTab(introTabs[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <>
      <Navbar />

      <main className="hm">
        {/* ================= HERO ================= */}
        <section className="hm-hero" aria-labelledby="hm-hero-title">
          <div className="hm-hero-glow" aria-hidden="true" />

          <div className="hm-container hm-hero-grid">
            <div className="hm-hero-copy">
              <span className="hm-pill">
                <span className="hm-pulse" aria-hidden="true" />
                Admissions open for {admissionYear}
              </span>

              <h1 id="hm-hero-title">
                Aspiring for <em>excellence</em>, rooted in faith.
              </h1>

              <p>
                Quality nursery and primary education that nurtures confident,
                disciplined and kind young leaders, from Baby Class to P7.
              </p>

              <div className="hm-hero-actions">
                <ArrowButton to="/apply-online">Apply now</ArrowButton>
                <ArrowButton href="#visit" variant="ghost">
                  Book a visit
                </ArrowButton>
              </div>

              <dl className="hm-hero-stats">
                <div>
                  <dt>Learners</dt>
                  <dd>500+</dd>
                </div>
                <div>
                  <dt>Teachers</dt>
                  <dd>35+</dd>
                </div>
                <div>
                  <dt>Years</dt>
                  <dd>15+</dd>
                </div>
              </dl>
            </div>

            <div className="hm-hero-visual">
              <div className="hm-arch">
                <img src={heroBg} alt="Learners at Praise-El Junior School" />
              </div>

              <div className="hm-float hm-float-top">
                <span className="hm-float-icon">
                  <FaBookOpen aria-hidden="true" />
                </span>
                <div>
                  <strong>Nursery &amp; Primary</strong>
                  <small>Baby Class – Primary Seven</small>
                </div>
              </div>

              <div className="hm-float hm-float-bottom">
                <div className="hm-stars" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <strong>Loved by parents</strong>
              </div>

              <div className="hm-seal" aria-hidden="true">
                <svg viewBox="0 0 120 120">
                  <defs>
                    <path
                      id="hm-seal-path"
                      d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                    />
                  </defs>
                  <text>
                    <textPath href="#hm-seal-path" textLength="285">
                      PRAISE-EL JUNIOR SCHOOL • ASPIRING FOR EXCELLENCE •
                    </textPath>
                  </text>
                </svg>
                <FaGraduationCap />
              </div>
            </div>
          </div>
        </section>

        {/* ================= MARQUEE ================= */}
        <div className="hm-marquee" aria-label="What we offer">
          <div className="hm-marquee-track">
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1}>
                {marqueeItems.map((item) => (
                  <li key={item}>
                    <FaStar aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* ================= PILLARS ================= */}
        <section className="hm-section hm-pillars">
          <div className="hm-container hm-pillar-grid">
            {pillars.map(({ title, text, icon: Icon, link }, i) => (
              <Reveal key={title} delay={i * 80}>
                <Link to={link} className="hm-pillar">
                  <span className="hm-pillar-num">0{i + 1}</span>
                  <span className="hm-pillar-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="hm-pillar-link">
                    Learn more <FaArrowRight aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ================= INTRODUCTION ================= */}
        <section className="hm-section hm-intro" id="visit">
          <div className="hm-container hm-intro-grid">
            <Reveal className="hm-collage">
              <img
                className="hm-collage-main"
                src={aboutImage}
                alt="Learners in class at Praise-El Junior School"
                loading="lazy"
              />
              <img
                className="hm-collage-small"
                src={schoolKids}
                alt="Praise-El learners outdoors"
                loading="lazy"
              />
              <div className="hm-collage-badge">
                <strong>15+</strong>
                <span>years nurturing young minds</span>
              </div>
            </Reveal>

            <div className="hm-intro-copy">
              <Eyebrow>Welcome to Praise-El</Eyebrow>

              <div
                className="hm-tabs"
                role="tablist"
                aria-label="About Praise-El Junior School"
              >
                {introTabs.map(({ id, label, icon: Icon }, i) => (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    id={`hm-tab-${id}`}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    aria-selected={activeTab === id}
                    aria-controls="hm-tabpanel"
                    tabIndex={activeTab === id ? 0 : -1}
                    className={activeTab === id ? "is-active" : ""}
                    onClick={() => setActiveTab(id)}
                    onKeyDown={(e) => onTabKeyDown(e, i)}
                  >
                    <Icon aria-hidden="true" />
                    {label}
                  </button>
                ))}
              </div>

              <div
                key={active.id}
                className="hm-tabpanel"
                role="tabpanel"
                id="hm-tabpanel"
                aria-labelledby={`hm-tab-${active.id}`}
                tabIndex={0}
              >
                <h2>{active.title}</h2>
                <p>{active.text}</p>
              </div>

              <ul className="hm-checks">
                {highlights.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">
                      <FaCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <ArrowButton to="/about" variant="navy">
                More about us
              </ArrowButton>
            </div>
          </div>
        </section>

        <WhyChooseUs />

        {/* ================= PROGRAMS ================= */}
        <section className="hm-section hm-programs">
          <div className="hm-container">
            <Reveal className="hm-heading">
              <Eyebrow light>Our programs</Eyebrow>
              <h2>
                Academic excellence at <em>every stage</em>.
              </h2>
              <p>
                Two sections, one promise: confident, disciplined and
                successful learners.
              </p>
            </Reveal>

            <div className="hm-program-grid">
              {programs.map(
                ({ category, ages, title, text, image, icon: Icon, tags }, i) => (
                  <Reveal as="article" className="hm-program" key={category} delay={i * 120}>
                    <div className="hm-program-media">
                      <img
                        src={image}
                        alt={`${category} at Praise-El Junior School`}
                        loading="lazy"
                      />
                      <span className="hm-program-chip">
                        <Icon aria-hidden="true" />
                        {category}
                      </span>
                    </div>
                    <div className="hm-program-body">
                      <small>{ages}</small>
                      <h3>{title}</h3>
                      <p>{text}</p>
                      <ul>
                        {tags.map(({ label, icon: TagIcon }) => (
                          <li key={label}>
                            <TagIcon aria-hidden="true" />
                            {label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ),
              )}
            </div>

            <ul className="hm-values">
              {values.map(({ title, icon: Icon }) => (
                <li key={title}>
                  <Icon aria-hidden="true" />
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= ACHIEVEMENTS ================= */}
        <section className="hm-section hm-stats">
          <div className="hm-container hm-bento">
            <Reveal className="hm-bento-intro">
              <Eyebrow>Our achievements</Eyebrow>
              <h2>
                Excellence, <em>in numbers</em>.
              </h2>
              <p>
                Our commitment to quality education shows in the achievements
                of our learners, teachers and school community.
              </p>
              <blockquote>
                “Every child matters, every achievement counts.”
              </blockquote>
            </Reveal>

            {stats.map(({ end, suffix, label }, i) => (
              <Reveal
                key={label}
                className={`hm-stat hm-stat-${i + 1}`}
                delay={i * 90}
              >
                <strong>
                  <Counter end={end} suffix={suffix} />
                </strong>
                <span>{label}</span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ================= GALLERY ================= */}
        <section className="hm-section hm-gallery">
          <div className="hm-container">
            <div className="hm-heading hm-heading-split">
              <Reveal>
                <Eyebrow>Life at Praise-El</Eyebrow>
                <h2>
                  Moments that <em>shape</em> us.
                </h2>
              </Reveal>
              <ArrowButton to="/gallery" variant="navy">
                Full gallery
              </ArrowButton>
            </div>

            <div className="hm-gallery-grid">
              {gallery.map(({ title, text, image, icon: Icon, size }, i) => (
                <Reveal
                  as="figure"
                  key={title}
                  className={`hm-shot ${size}`}
                  delay={(i % 3) * 80}
                >
                  <img src={image} alt={title} loading="lazy" />
                  <figcaption>
                    <Icon aria-hidden="true" />
                    <span>
                      <strong>{title}</strong>
                      <small>{text}</small>
                    </span>
                  </figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="hm-section hm-voices">
          <div className="hm-container hm-voices-inner">
            <div className="hm-voices-head">
              <Eyebrow>What parents say</Eyebrow>
              <div className="hm-voices-nav">
                <button
                  type="button"
                  onClick={() => goTo(slide - 1)}
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(slide + 1)}
                  aria-label="Next testimonial"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>

            <div
              className="hm-slides"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
              aria-live={paused ? "polite" : "off"}
            >
              <FaQuoteLeft className="hm-quote-mark" aria-hidden="true" />
              {testimonials.map(({ name, role, message }, i) => (
                <figure
                  key={name}
                  className={`hm-slide ${i === slide ? "is-active" : ""}`}
                  aria-hidden={i !== slide}
                >
                  <blockquote>{message}</blockquote>
                  <figcaption>
                    <span className="hm-avatar" aria-hidden="true">
                      {name.split(" ").pop()[0]}
                    </span>
                    <span>
                      <strong>{name}</strong>
                      <small>{role}</small>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="hm-dots">
              {testimonials.map(({ name }, i) => (
                <button
                  key={name}
                  type="button"
                  className={i === slide ? "is-active" : ""}
                  onClick={() => goTo(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === slide}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="hm-section hm-cta-wrap">
          <Reveal className="hm-container hm-cta">
            <div>
              <Eyebrow light>Admissions {admissionYear}</Eyebrow>
              <h2>
                Give your child a <em>strong start</em>.
              </h2>
              <p>
                Places in Nursery and Primary are limited. Apply online or
                book a visit to meet our teachers.
              </p>
            </div>
            <div className="hm-cta-actions">
              <ArrowButton to="/apply-online">Apply now</ArrowButton>
              <ArrowButton href="#contact" variant="ghost">
                Contact us
              </ArrowButton>
            </div>
          </Reveal>
        </section>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;