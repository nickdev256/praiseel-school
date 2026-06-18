import "./AboutPage.css";

import hero from "../assets/hero1.jpg";
import chairman from "../assets/headteacher.jpg";
import teacherImg from "../assets/gallery2.jpg";

function AboutPage() {
  return (
    <main className="about-page">

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="about-overlay">

          <span>ABOUT US</span>

          <h1>
            Praise-El Junior School
          </h1>

          <p>
            Aspiring For Excellence
          </p>

        </div>
      </section>

      <section className="about-intro">

        <div className="container">

          <h2>
            Welcome To Praise-El Junior School
          </h2>

          <p>
            Praise-El Junior School is committed to
            providing quality Nursery and Primary
            education in a caring, safe and inspiring
            environment. We nurture learners
            academically, morally and socially while
            preparing them for future success.
          </p>

        </div>

      </section>

      <section className="vision-mission">

        <div className="box">

          <h3>Our Vision</h3>

          <p>
            To be a centre of excellence nurturing
            responsible, confident and innovative
            learners.
          </p>

        </div>

        <div className="box">

          <h3>Our Mission</h3>

          <p>
            To provide holistic education through
            quality teaching, discipline and
            leadership development.
          </p>

        </div>

      </section>

      <section className="chairman-section">

        <div className="chairman-image">

          <img
            src={chairman}
            alt="Head Teacher"
          />

        </div>

        <div className="chairman-content">

          <span>MESSAGE</span>

          <h2>
            Message From The Head Teacher
          </h2>

          <p>
            At Praise-El Junior School, we believe
            every child has unique potential.
            Through dedication, innovation and
            teamwork, we continue to provide a
            strong educational foundation that
            empowers our learners to excel.
          </p>

        </div>

      </section>

      <section className="teachers-section">

        <div className="teacher-overlay">

          <h2>
            Our Professional Teachers
          </h2>

          <p>
            Dedicated educators committed to
            academic excellence and learner success.
          </p>

        </div>

        <img
          src={teacherImg}
          alt="Teachers"
        />

      </section>

    </main>
  );
}

export default AboutPage;