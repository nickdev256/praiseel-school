import {
  useEffect,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  FaArrowRight,
  FaBaby,
  FaBookOpen,
  FaBullseye,
  FaCalendarAlt,
  FaCertificate,
  FaChalkboardTeacher,
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
} from "react-icons/fa";

/* ============================================================
   SHARED COMPONENTS
============================================================ */

import Navbar from "../components/Navbar";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

/* ============================================================
   IMAGES
============================================================ */

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

/* ============================================================
   CSS
============================================================ */

import "./Home.css";

/* ============================================================
   HOME INTRODUCTION CONTENT
============================================================ */

const introductionContent = {
  about: {
    heading: "Welcome to Praise-El Junior School",
    title: "Aspiring for Excellence",
    text: `
      Praise-El Junior School is committed to providing quality
      nursery and primary education in a safe, caring and
      stimulating environment. We nurture learners academically,
      morally, spiritually and socially while preparing them to
      become responsible citizens and future leaders.
    `,
  },

  vision: {
    heading: "Our Vision",
    title: "Guiding Every Child Towards Success",
    text: `
      To be a leading centre of academic excellence that nurtures
      confident, innovative, disciplined and responsible learners
      equipped with knowledge, skills and values for lifelong
      success.
    `,
  },

  mission: {
    heading: "Our Mission",
    title: "Educating for a Better Tomorrow",
    text: `
      To provide holistic education through quality teaching,
      character development, spiritual growth and co-curricular
      activities that empower every learner to excel academically
      and socially.
    `,
  },

  visit: {
    heading: "Visit Our School",
    title: "Experience Praise-El Firsthand",
    text: `
      We warmly welcome parents and guardians to visit our campus,
      meet our dedicated staff and experience the vibrant learning
      environment that makes Praise-El Junior School unique.
    `,
  },

  partnership: {
    heading: "Parent Partnership",
    title: "Working Together for Success",
    text: `
      We believe that strong partnerships between parents,
      teachers and learners create the best foundation for
      success. Together, we support every child's growth,
      development and achievement.
    `,
  },
};

const introductionTabs = [
  {
    id: "about",
    label: "About Us",
    icon: FaSchool,
  },
  {
    id: "vision",
    label: "Vision",
    icon: FaEye,
  },
  {
    id: "mission",
    label: "Mission",
    icon: FaBullseye,
  },
  {
    id: "visit",
    label: "Visit Us",
    icon: FaMapMarkerAlt,
  },
  {
    id: "partnership",
    label: "Partnership",
    icon: FaHandshake,
  },
];

/* ============================================================
   HERO FEATURES
============================================================ */

const heroFeatures = [
  {
    id: 1,
    title: "Quality Education",
    description: "Building a strong academic foundation.",
    icon: FaGraduationCap,
    link: "/academics",
  },
  {
    id: 2,
    title: "Safe Environment",
    description: "A secure and caring learning space.",
    icon: FaShieldAlt,
    link: "/about",
  },
  {
    id: 3,
    title: "Holistic Growth",
    description: "Developing character and confidence.",
    icon: FaUsers,
    link: "/programs",
  },
  {
    id: 4,
    title: "Excellence Always",
    description: "Preparing the leaders of tomorrow.",
    icon: FaTrophy,
    link: "/gallery",
  },
];

/* ============================================================
   SCHOOL HIGHLIGHTS
============================================================ */

const schoolHighlights = [
  {
    id: 1,
    icon: FaGraduationCap,
    text: "Qualified and Caring Teachers",
  },
  {
    id: 2,
    icon: FaBookOpen,
    text: "Modern Learning Approach",
  },
  {
    id: 3,
    icon: FaShieldAlt,
    text: "Safe and Nurturing Environment",
  },
  {
    id: 4,
    icon: FaCross,
    text: "Strong Christian Foundation",
  },
];

/* ============================================================
   INTRODUCTION STATISTICS
============================================================ */

const introductionStatistics = [
  {
    id: 1,
    icon: FaUsers,
    value: "500+",
    label: "Happy Learners",
  },
  {
    id: 2,
    icon: FaChalkboardTeacher,
    value: "35+",
    label: "Dedicated Teachers",
  },
  {
    id: 3,
    icon: FaStar,
    value: "15+",
    label: "Years of Excellence",
  },
  {
    id: 4,
    icon: FaCertificate,
    value: "100%",
    label: "PLE Registration",
  },
];

/* ============================================================
   PROGRAMS
============================================================ */

const programs = [
  {
    id: 1,
    category: "Nursery Section",
    title: "Early Childhood Learning",
    description:
      "Our Nursery Section comprises Baby Class, Middle Class and Top Class. We focus on creativity, communication, confidence and foundational literacy and numeracy skills.",
    image: nurseryImg,
    icon: FaBaby,
    imagePosition: "left",
    features: [
      {
        label: "Baby Class",
        icon: FaBaby,
      },
      {
        label: "Middle Class",
        icon: FaUsers,
      },
      {
        label: "Top Class",
        icon: FaStar,
      },
      {
        label: "Play Learning",
        icon: FaPuzzlePiece,
      },
    ],
  },
  {
    id: 2,
    category: "Primary Section",
    title: "Building Future Leaders",
    description:
      "From Primary One to Primary Seven, learners receive quality education that promotes academic excellence, leadership and character development.",
    image: primaryImg,
    icon: FaGraduationCap,
    imagePosition: "right",
    features: [
      {
        label: "P1 – P7",
        icon: FaGraduationCap,
      },
      {
        label: "Leadership",
        icon: FaChalkboardTeacher,
      },
      {
        label: "ICT",
        icon: FaLaptopCode,
      },
      {
        label: "Sports",
        icon: FaTrophy,
      },
    ],
  },
];

const schoolValues = [
  {
    id: 1,
    title: "Holistic Development",
    description:
      "We nurture academic, social, emotional and spiritual growth.",
    icon: FaUsers,
  },
  {
    id: 2,
    title: "Safe and Supportive",
    description:
      "A secure and caring environment where every child thrives.",
    icon: FaShieldAlt,
  },
  {
    id: 3,
    title: "Excellence Driven",
    description:
      "High standards and outstanding academic performance.",
    icon: FaTrophy,
  },
  {
    id: 4,
    title: "Heart for Every Child",
    description:
      "Every learner is valued, supported and inspired.",
    icon: FaHeart,
  },
];

/* ============================================================
   GALLERY
============================================================ */

const galleryItems = [
  {
    id: 1,
    title: "Learning Together",
    description:
      "Building strong foundations every day.",
    image: gallery1,
    icon: FaBookOpen,
    className: "featured",
  },
  {
    id: 2,
    title: "Sports Day",
    description: "Team spirit in action.",
    image: gallery2,
    icon: FaRunning,
    className: "side",
  },
  {
    id: 3,
    title: "Music and Arts",
    description: "Discovering creative talents.",
    image: gallery3,
    icon: FaMusic,
    className: "side",
  },
  {
    id: 4,
    title: "Classroom Life",
    description: "Curious minds and bright futures.",
    image: gallery4,
    icon: FaUsers,
    className: "bottom",
  },
  {
    id: 5,
    title: "Science Activities",
    description: "Learning through discovery.",
    image: gallery5,
    icon: FaFlask,
    className: "bottom",
  },
  {
    id: 6,
    title: "Leadership",
    description: "Raising tomorrow's leaders.",
    image: gallery6,
    icon: FaTrophy,
    className: "bottom",
  },
];

/* ============================================================
   TESTIMONIALS
============================================================ */

const testimonials = [
  {
    id: 1,
    name: "Mrs. Akello",
    role: "Parent",
    initial: "A",
    message:
      "Praise-El Junior School has transformed my child academically and socially. The teachers are dedicated, caring and always supportive.",
  },
  {
    id: 2,
    name: "Mr. Namanya",
    role: "Parent",
    initial: "N",
    message:
      "The school provides a safe and nurturing environment. My child enjoys learning and looks forward to school every day.",
  },
  {
    id: 3,
    name: "Mrs. Katushabe",
    role: "Parent",
    initial: "K",
    message:
      "We appreciate the balance between academics, discipline and co-curricular activities. Praise-El truly nurtures future leaders.",
  },
];

/* ============================================================
   ANIMATED COUNTER
============================================================ */

function Counter({
  end,
  suffix = "",
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let currentValue = 0;

    const duration = 2000;
    const intervalTime = 25;
    const steps = duration / intervalTime;
    const increment = end / steps;

    const timer = window.setInterval(() => {
      currentValue += increment;

      if (currentValue >= end) {
        setCount(end);
        window.clearInterval(timer);
        return;
      }

      setCount(Math.floor(currentValue));
    }, intervalTime);

    return () => {
      window.clearInterval(timer);
    };
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

/* ============================================================
   HOME PAGE
============================================================ */

function Home() {
  const [activeTab, setActiveTab] =
    useState("about");

  const activeContent =
    introductionContent[activeTab] ||
    introductionContent.about;

  return (
    <>
      <Navbar />

      <main className="home-page">
        {/* ====================================================
            HERO
        ===================================================== */}

        <section
          className="home-hero"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        >
          <div className="home-hero-overlay" />

          <div className="home-hero-decoration">
            <span />
            <span />
            <span />
          </div>

          <div className="home-hero-container">
            <div className="home-hero-content">
              <div className="home-admission-badge">
                <FaGraduationCap />

                <span>
                  Admissions Open for 2026
                </span>
              </div>

              <h1>
                Aspiring for
                <span>Excellence</span>
              </h1>

              <div className="home-title-line" />

              <p>
                Nurturing future leaders through
                quality education, strong values,
                confidence and purpose.
              </p>

              <div className="home-hero-buttons">
                <Link
                  to="/apply-online"
                  className="home-primary-button"
                >
                  Apply Now

                  <span>
                    <FaArrowRight />
                  </span>
                </Link>

                <Link
                  to="/about"
                  className="home-secondary-button"
                >
                  Discover More

                  <span>
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="home-features">
            {heroFeatures.map(
              (
                {
                  id,
                  title,
                  description,
                  icon: Icon,
                  link,
                },
                index,
              ) => (
                <div
                  className="home-feature-wrapper"
                  key={id}
                >
                  <Link
                    to={link}
                    className="home-feature"
                  >
                    <span className="home-feature-icon">
                      <Icon />
                    </span>

                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </Link>

                  {index <
                    heroFeatures.length - 1 && (
                    <span className="home-feature-divider" />
                  )}
                </div>
              ),
            )}
          </div>

          <div className="home-scroll-indicator">
            <span />
            Scroll to explore
          </div>
        </section>

        {/* ====================================================
            INTRODUCTION
        ===================================================== */}

        <section className="home-introduction">
          <div className="home-section-container">
            <div
              className="home-introduction-tabs"
              role="tablist"
              aria-label="About Praise-El Junior School"
            >
              {introductionTabs.map(
                ({
                  id,
                  label,
                  icon: Icon,
                }) => (
                  <button
                    type="button"
                    role="tab"
                    key={id}
                    aria-selected={
                      activeTab === id
                    }
                    className={
                      activeTab === id
                        ? "home-tab active"
                        : "home-tab"
                    }
                    onClick={() =>
                      setActiveTab(id)
                    }
                  >
                    <Icon />
                    <span>{label}</span>
                  </button>
                ),
              )}
            </div>

            <div className="home-about-layout">
              <div className="home-about-image-column">
                <div className="home-about-image-frame">
                  <span className="home-image-border" />

                  <img
                    src={aboutImage}
                    alt="Praise-El Junior School learners"
                  />

                  <div className="home-excellence-badge">
                    <span className="home-badge-icon">
                      <FaCertificate />
                    </span>

                    <div>
                      <h3>
                        Excellence in Education
                      </h3>

                      <p>
                        Nurturing minds, building
                        character and shaping futures.
                      </p>
                    </div>
                  </div>

                  <div className="home-image-pattern">
                    {Array.from({
                      length: 9,
                    }).map((_, index) => (
                      <span key={index} />
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="home-about-content"
                key={activeTab}
              >
                <span className="home-section-label">
                  {activeContent.heading}
                </span>

                <div className="home-gold-line" />

                <h2>{activeContent.title}</h2>

                <p className="home-about-description">
                  {activeContent.text}
                </p>

                <div className="home-highlights">
                  {schoolHighlights.map(
                    ({
                      id,
                      icon: Icon,
                      text,
                    }) => (
                      <article
                        className="home-highlight"
                        key={id}
                      >
                        <span>
                          <Icon />
                        </span>

                        <h3>{text}</h3>
                      </article>
                    ),
                  )}
                </div>

                <Link
                  to="/about"
                  className="home-learn-button"
                >
                  Learn More About Us

                  <span>
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
            </div>

            <div className="home-introduction-statistics">
              {introductionStatistics.map(
                ({
                  id,
                  icon: Icon,
                  value,
                  label,
                },
                index,
              ) => (
                  <article
                    className="home-introduction-statistic"
                    key={id}
                  >
                    <span className="home-statistic-icon">
                      <Icon />
                    </span>

                    <div>
                      <strong>{value}</strong>
                      <p>{label}</p>
                    </div>

                    {index <
                      introductionStatistics.length -
                        1 && (
                      <span className="home-statistic-divider" />
                    )}
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ====================================================
            WHY CHOOSE US
        ===================================================== */}

        <WhyChooseUs />

        {/* ====================================================
            PROGRAMS
        ===================================================== */}

        <section className="programs">
          <div className="programs-header">
            <span className="program-tag">
              Our Programs
            </span>

            <h2>
              Academic Excellence at Every Stage
            </h2>

            <p>
              We provide quality nursery and primary
              education designed to nurture confident,
              disciplined and successful learners.
            </p>
          </div>

          <div className="timeline-line" />

          {programs.map(
            ({
              id,
              category,
              title,
              description,
              image,
              imagePosition,
              icon: CategoryIcon,
              features,
            }) => (
              <article
                className={
                  imagePosition === "right"
                    ? "program-row reverse"
                    : "program-row"
                }
                key={id}
              >
                <div className="program-image">
                  <img
                    src={image}
                    alt={category}
                  />

                  <div
                    className={
                      imagePosition === "right"
                        ? "program-badge right"
                        : "program-badge"
                    }
                  >
                    <CategoryIcon />
                    <span>{category}</span>
                  </div>
                </div>

                <div className="program-content">
                  <h3>{title}</h3>

                  <p>{description}</p>

                  <div className="program-features">
                    {features.map(
                      ({
                        label,
                        icon: Icon,
                      }) => (
                        <div key={label}>
                          <Icon />
                          <span>{label}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </article>
            ),
          )}

          <div className="values-strip">
            {schoolValues.map(
              ({
                id,
                title,
                description,
                icon: Icon,
              }) => (
                <article
                  className="value-box"
                  key={id}
                >
                  <Icon />

                  <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                </article>
              ),
            )}
          </div>
        </section>

        {/* ====================================================
            ACHIEVEMENTS
        ===================================================== */}

        <section className="stats-section">
          <div className="stats-top">
            <div
              className="stats-watermark"
              aria-hidden="true"
            >
              <FaGraduationCap />
            </div>

            <div className="stats-header">
              <span className="stats-tag">
                Our Achievements
              </span>

              <h2>Excellence in Numbers</h2>

              <div className="title-line" />

              <p>
                Our commitment to quality education
                is reflected in the achievements of
                our learners, teachers and school
                community.
              </p>
            </div>

            <div className="stats-image">
              <img
                src={schoolKids}
                alt="Praise-El Junior School learners"
              />
            </div>
          </div>

          <div className="stats-bottom">
            <article className="stat-card">
              <div className="stat-icon">
                <FaGraduationCap />
              </div>

              <h3>
                <Counter
                  end={500}
                  suffix="+"
                />
              </h3>

              <span />
              <p>Students</p>
            </article>

            <article className="stat-card">
              <div className="stat-icon">
                <FaChalkboardTeacher />
              </div>

              <h3>
                <Counter
                  end={35}
                  suffix="+"
                />
              </h3>

              <span />
              <p>Qualified Teachers</p>
            </article>

            <article className="stat-card">
              <div className="stat-icon">
                <FaTrophy />
              </div>

              <h3>
                <Counter
                  end={98}
                  suffix="%"
                />
              </h3>

              <span />
              <p>Success Rate</p>
            </article>

            <article className="stat-card">
              <div className="stat-icon">
                <FaCalendarAlt />
              </div>

              <h3>
                <Counter
                  end={15}
                  suffix="+"
                />
              </h3>

              <span />
              <p>Years of Excellence</p>
            </article>
          </div>

          <div className="stats-quote">
            Every Child Matters, Every Achievement
            Counts.
          </div>
        </section>

        {/* ====================================================
            GALLERY
        ===================================================== */}

        <section className="gallery-section">
          <div className="gallery-header">
            <span className="gallery-tag">
              Our Gallery
            </span>

            <h2>
              Life at Praise-El Junior School
            </h2>

            <p>
              Explore moments of learning, creativity,
              leadership, sports and fun from our
              vibrant school community.
            </p>
          </div>

          <div className="gallery-layout">
            <article className="featured-card">
              <img
                src={galleryItems[0].image}
                alt={galleryItems[0].title}
              />

              <div className="featured-label">
                <FaStar />
                Featured
              </div>

              <div className="featured-overlay">
                <div className="overlay-icon">
                  <FaBookOpen />
                </div>

                <div>
                  <h3>
                    {galleryItems[0].title}
                  </h3>

                  <p>
                    {galleryItems[0].description}
                  </p>
                </div>
              </div>
            </article>

            <div className="gallery-side">
              {galleryItems
                .slice(1, 3)
                .map(
                  ({
                    id,
                    title,
                    description,
                    image,
                    icon: Icon,
                  }) => (
                    <article
                      className="side-card"
                      key={id}
                    >
                      <img
                        src={image}
                        alt={title}
                      />

                      <div className="side-overlay">
                        <Icon />

                        <div>
                          <h4>{title}</h4>
                          <span>
                            {description}
                          </span>
                        </div>
                      </div>
                    </article>
                  ),
                )}
            </div>
          </div>

          <div className="bottom-gallery">
            {galleryItems
              .slice(3)
              .map(
                ({
                  id,
                  title,
                  description,
                  image,
                  icon: Icon,
                }) => (
                  <article
                    className="bottom-card"
                    key={id}
                  >
                    <img
                      src={image}
                      alt={title}
                    />

                    <div className="bottom-overlay">
                      <Icon />

                      <div>
                        <h4>{title}</h4>
                        <span>
                          {description}
                        </span>
                      </div>
                    </div>
                  </article>
                ),
              )}
          </div>

          <div className="gallery-stats">
            <div className="gallery-stat-item">
              <FaUsers />

              <div>
                <h3>500+</h3>
                <p>Happy Learners</p>
              </div>
            </div>

            <div className="gallery-stat-item">
              <FaGraduationCap />

              <div>
                <h3>35+</h3>
                <p>Dedicated Teachers</p>
              </div>
            </div>

            <div className="gallery-stat-item">
              <FaTrophy />

              <div>
                <h3>20+</h3>
                <p>School Activities</p>
              </div>
            </div>

            <div className="gallery-stat-item">
              <FaSchool />

              <div>
                <h3>1</h3>
                <p>Big Family</p>
              </div>
            </div>
          </div>

          <div className="gallery-btn">
            <Link to="/gallery">
              View Full Gallery
              <FaArrowRight />
            </Link>
          </div>
        </section>

        {/* ====================================================
            TESTIMONIALS
        ===================================================== */}

        <section className="testimonials-section">
          <div className="testimonials-header">
            <span>Testimonials</span>

            <h2>What Parents Say About Us</h2>

            <p>
              Hear from parents and guardians who
              trust Praise-El Junior School with
              their children&apos;s education and
              development.
            </p>
          </div>

          <div className="testimonial-grid">
            {testimonials.map(
              ({
                id,
                name,
                role,
                initial,
                message,
              }) => (
                <article
                  className="testimonial-card"
                  key={id}
                >
                  <FaQuoteLeft className="quote-icon" />

                  <div className="stars">
                    {Array.from({
                      length: 5,
                    }).map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>

                  <p>{message}</p>

                  <div className="testimonial-footer">
                    <div className="avatar">
                      {initial}
                    </div>

                    <div>
                      <h4>{name}</h4>
                      <span>{role}</span>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </section>

        {/* ====================================================
            CONTACT
        ===================================================== */}

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Home;