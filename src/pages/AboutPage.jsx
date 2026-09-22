import "./AboutPage.css";

import hero from "../assets/hero1.jpg";
import teacherImg from "../assets/gallery2.jpg";

import directorImg from "../assets/school-director.jpg";
import headTeacherImg from "../assets/head-teacher.jpg";
import deputyImg from "../assets/deputy-headteacher.jpg";
import bursarImg from "../assets/school-bursar.jpg";

/* ============================================================
   SCHOOL ADMINISTRATION
============================================================ */

const administrators = [
  {
    id: 1,
    name: "Mr Kizito Silvesto",
    role: "School Director",
    image: directorImg,
  },
  {
    id: 2,
    name: "Mr Kagga Charles",
    role: "Head Teacher",
    image: headTeacherImg,
  },
  {
    id: 3,
    name: "Deputy Head Teacher",
    role: "Head of Admissions",
    image: deputyImg,
  },
  {
    id: 4,
    name: "Charles Birimuye",
    nickname: "Uncle Charles",
    role: "School Bursar & Head of Accounts",
    image: bursarImg,
  },
];

/* ============================================================
   SCHOOL STATISTICS
============================================================ */

const statistics = [
  {
    id: 1,
    icon: "cap",
    value: "15+",
    label: "Years of Impact",
  },
  {
    id: 2,
    icon: "people",
    value: "500+",
    label: "Happy Learners",
  },
  {
    id: 3,
    icon: "book",
    value: "Dedicated",
    label: "Professional Teachers",
  },
  {
    id: 4,
    icon: "trophy",
    value: "Bright",
    label: "Futures Ahead",
  },
];

/* ============================================================
   SCHOOL VALUES
============================================================ */

const values = [
  {
    id: 1,
    icon: "book",
    title: "Knowledge",
    description: "A strong foundation for life.",
    color: "burgundy",
  },
  {
    id: 2,
    icon: "heart",
    title: "Character",
    description: "Doing what is right, always.",
    color: "gold",
  },
  {
    id: 3,
    icon: "people",
    title: "Purpose",
    description: "Making a positive difference.",
    color: "burgundy",
  },
];

/* ============================================================
   ICONS
============================================================ */

function GraduationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M2.5 9 12 4l9.5 5L12 14 2.5 9Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />

      <path
        d="M6 11.2V16c3.7 2.6 8.3 2.6 12 0v-4.8"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />

      <path
        d="M21.5 9v6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        cx="9"
        cy="8"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="17"
        cy="9"
        r="2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M3.5 19c.4-4 2.3-6 5.5-6s5.1 2 5.5 6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />

      <path
        d="M14.8 14c3.3-.6 5.3 1 5.7 4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M12 6.5C9.7 4.8 6.9 4.2 4 5v13c2.9-.8 5.7-.2 8 1.5V6.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />

      <path
        d="M12 6.5c2.3-1.7 5.1-2.3 8-1.5v13c-2.9-.8-5.7-.2-8 1.5V6.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M7 4h10v4c0 4-2 6-5 6s-5-2-5-6V4Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />

      <path
        d="M7 6H4v2c0 2.4 1.3 3.8 3.5 4M17 6h3v2c0 2.4-1.3 3.8-3.5 4M12 14v4M8 20h8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M12 20S4 15.2 4 9.2C4 6.5 5.8 5 8.1 5c1.6 0 3 1 3.9 2.2C12.9 6 14.3 5 15.9 5 18.2 5 20 6.5 20 9.2 20 15.2 12 20 12 20Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M2.5 12c2.5-4 5.7-6 9.5-6s7 2 9.5 6c-2.5 4-5.7 6-9.5 6s-7-2-9.5-6Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        cx="11"
        cy="13"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="11"
        cy="13"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="m13 11 7-7m0 0h-4m4 0v4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M14 7l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function StatisticIcon({ type }) {
  if (type === "cap") {
    return <GraduationIcon />;
  }

  if (type === "people") {
    return <PeopleIcon />;
  }

  if (type === "book") {
    return <BookIcon />;
  }

  return <TrophyIcon />;
}

function ValueIcon({ type }) {
  if (type === "heart") {
    return <HeartIcon />;
  }

  if (type === "people") {
    return <PeopleIcon />;
  }

  return <BookIcon />;
}

/* ============================================================
   ABOUT PAGE
============================================================ */

function AboutPage() {
  return (
    <main className="pa-page">
      {/* ======================================================
          HERO
      ======================================================= */}

      <section className="pa-hero">
        <div className="pa-hero-copy">
          <span className="pa-kicker">
            About Praise-El
          </span>

          <h1>
            Where young minds
            <br />
            grow with purpose.
          </h1>

          <p>
            At Praise-El Junior School, we nurture confident,
            compassionate and capable learners who are prepared
            to create a brighter tomorrow.
          </p>

          <a
            className="pa-button"
            href="#our-story"
          >
            Discover Our Story
            <ArrowIcon />
          </a>

          <small>
            Discipline
            <span>•</span>
            Opportunity
            <span>•</span>
            A Brighter Tomorrow
          </small>
        </div>

        <div
          className="pa-hero-photo"
          style={{
            backgroundImage: `url(${hero})`,
          }}
          role="img"
          aria-label="Praise-El Junior School learners"
        />

        {/* SCHOOL STATISTICS */}

        <div className="pa-statistics">
          {statistics.map((statistic) => (
            <article
              className="pa-statistic"
              key={statistic.id}
            >
              <span className="pa-statistic-icon">
                <StatisticIcon type={statistic.icon} />
              </span>

              <div>
                <strong>{statistic.value}</strong>
                <small>{statistic.label}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ======================================================
          OUR STORY
      ======================================================= */}

      <section
        className="pa-story"
        id="our-story"
      >
        <div className="pa-story-visual">
          <img
            className="pa-story-main"
            src={teacherImg}
            alt="Learners at Praise-El Junior School"
          />

          <img
            className="pa-story-small"
            src={hero}
            alt="Praise-El Junior School learners"
          />

          <p className="pa-handwritten-text">
            Curious minds
            <strong>Brighter tomorrows</strong>
          </p>
        </div>

        <div className="pa-story-content">
          <span className="pa-section-label">
            <i />
            Our Story
          </span>

          <h2>Our Story</h2>

          <p>
            Praise-El Junior School was founded on a simple
            belief — every child matters. What began as a small
            community of learners has grown into a respected
            nursery and primary school known for academic
            excellence, strong values and a caring, family-like
            environment.
          </p>

          <p>
            We continue to build on this foundation, preparing
            children not just for the next class, but for life.
          </p>

          <div className="pa-values">
            {values.map((value) => (
              <article
                className="pa-value"
                key={value.id}
              >
                <span
                  className={`pa-value-icon ${value.color}`}
                >
                  <ValueIcon type={value.icon} />
                </span>

                <div>
                  <strong>{value.title}</strong>
                  <small>{value.description}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* VISION AND MISSION */}

        <div className="pa-purpose">
          <article className="pa-purpose-card">
            <span className="pa-purpose-number">
              01
            </span>

            <span className="pa-purpose-icon">
              <EyeIcon />
            </span>

            <div className="pa-purpose-content">
              <h3>Our Vision</h3>

              <p>
                To be a leading centre of excellence in early
                childhood and primary education, nurturing
                God-fearing, confident and responsible global
                citizens.
              </p>
            </div>

            <span
              className="pa-purpose-quote"
              aria-hidden="true"
            >
              ”
            </span>
          </article>

          <article className="pa-purpose-card">
            <span className="pa-purpose-number">
              02
            </span>

            <span className="pa-purpose-icon">
              <TargetIcon />
            </span>

            <div className="pa-purpose-content">
              <h3>Our Mission</h3>

              <p>
                To provide holistic, child-centred education
                that inspires academic growth, builds strong
                character and equips learners with the skills
                and values needed for a better world.
              </p>
            </div>

            <span
              className="pa-purpose-quote"
              aria-hidden="true"
            >
              ”
            </span>
          </article>
        </div>
      </section>

      {/* ======================================================
          SCHOOL ADMINISTRATION
      ======================================================= */}

      <section className="pa-leadership">
        <div className="pa-leadership-introduction">
          <span className="pa-section-label">
            <i />
            Leadership That Serves
          </span>

          <h2>School Administration</h2>

          <p>
            Our school is guided by a committed team of
            educators and professionals who lead with
            integrity, humility and a deep passion for child
            development.
          </p>
        </div>

        <div className="pa-leadership-grid">
          {administrators.map((administrator) => (
            <article
              className="pa-leader-card"
              key={administrator.id}
            >
              <div className="pa-leader-image">
                <img
                  src={administrator.image}
                  alt={`${administrator.name}, ${administrator.role}`}
                />
              </div>

              <div className="pa-leader-information">
                <h3>{administrator.name}</h3>

                {administrator.nickname && (
                  <span>
                    ({administrator.nickname})
                  </span>
                )}

                <p>{administrator.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ======================================================
          HEAD TEACHER'S MESSAGE
      ======================================================= */}

      <section className="pa-message">
        <div className="pa-headteacher-photo">
          <img
            src={headTeacherImg}
            alt="Mr Kagga Charles, Head Teacher"
          />
        </div>

        <div className="pa-message-content">
          <span className="pa-message-label">
            <i />
            Head Teacher&apos;s Message
          </span>

          <div className="pa-message-body">
            <span
              className="pa-large-quote"
              aria-hidden="true"
            >
              “
            </span>

            <div>
              <p>
                At Praise-El Junior School, we believe in the
                incredible potential of every child. Each learner
                comes to us with unique talents, abilities and
                dreams, and it is our responsibility to provide
                an environment where those gifts can be
                discovered, nurtured and developed.
                <br />
                <br />
                Our commitment goes beyond academic achievement.
                We provide holistic education that strengthens
                character, encourages creativity, builds
                confidence and teaches learners to become
                responsible members of their communities. Through
                quality teaching, discipline, strong Christian
                values and individual support, we prepare our
                learners to overcome challenges and pursue
                excellence in everything they do.
                <br />
                <br />
                We also recognise that education is a shared
                responsibility. Therefore, we value the strong
                partnership between the school, parents,
                guardians, teachers and the wider community. By
                working together, we can provide every child with
                the guidance, encouragement and opportunities
                they need to succeed.
                <br />
                <br />
                At Praise-El Junior School, every learner is
                known, valued and inspired to achieve their best.
                Together, we are raising a generation that leads
                with knowledge, strong character, confidence and
                purpose.
              </p>

              <div className="pa-message-author">
                <strong>Mr Kagga Charles</strong>
                <small>Head Teacher</small>
              </div>
            </div>
          </div>
        </div>

        <div className="pa-message-brand">
          <BookIcon />

          <p>
            Same Learners
            <strong>Brighter Tomorrows</strong>
          </p>
        </div>
      </section>

      {/* ======================================================
          PROFESSIONAL TEACHERS
      ======================================================= */}

      <section
        className="pa-teachers"
        style={{
          backgroundImage: `url(${teacherImg})`,
        }}
      >
        <div className="pa-teachers-overlay" />

        <div className="pa-teachers-content">
          <h2>
            Teaching with care.
            <br />
            Leading with purpose.
          </h2>

          <a
            className="pa-button pa-small-button"
            href="/teachers"
          >
            Meet Our Teachers
            <ArrowIcon />
          </a>
        </div>

        <p className="pa-teachers-quote">
          Great teachers
          <strong>Change everything</strong>
        </p>
      </section>
    </main>
  );
}

export default AboutPage;