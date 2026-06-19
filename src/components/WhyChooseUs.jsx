import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaShieldAlt,
  FaLaptopCode,
  FaFutbol,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";

import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why-section">

      <div className="why-header">

        <span className="why-tag">
          WHY CHOOSE PRAISE-EL
        </span>

        <div className="header-lines">

          <span></span>

          <div className="header-icon">
            <FaUserGraduate />
          </div>

          <span></span>

        </div>

        <h2>
          Providing Excellence In Education
        </h2>

        <p>
          We are committed to nurturing confident,
          disciplined and successful learners through
          quality education and holistic development.
        </p>

        <div className="header-dots">

          <span></span>
          <span></span>
          <span></span>

        </div>

      </div>

      <div className="why-grid">

        {/* CARD 1 */}

        <div className="why-card">

          <div className="card-dots"></div>

          <div className="icon-box">
            <FaChalkboardTeacher />
          </div>

          <h3>
            Qualified Teachers
          </h3>

          <div className="small-line"></div>

          <p>
            Dedicated and experienced teachers focused
            on every child's academic and personal growth.
          </p>

          <a href="/about">
            Learn More
            <FaArrowRight />
          </a>

        </div>

        {/* CARD 2 */}

        <div className="why-card">

          <div className="card-dots"></div>

          <div className="icon-box">
            <FaLaptopCode />
          </div>

          <h3>
            Modern Learning
          </h3>

          <div className="small-line"></div>

          <p>
            Interactive learning supported by technology
            and innovative teaching approaches.
          </p>

          <a href="/about">
            Learn More
            <FaArrowRight />
          </a>

        </div>

        {/* CARD 3 */}

        <div className="why-card">

          <div className="card-dots"></div>

          <div className="icon-box">
            <FaShieldAlt />
          </div>

          <h3>
            Safe Environment
          </h3>

          <div className="small-line"></div>

          <p>
            A secure and nurturing school environment
            where every learner feels valued.
          </p>

          <a href="/about">
            Learn More
            <FaArrowRight />
          </a>

        </div>

        {/* CARD 4 */}

        <div className="why-card">

          <div className="card-dots"></div>

          <div className="icon-box">
            <FaAward />
          </div>

          <h3>
            Academic Excellence
          </h3>

          <div className="small-line"></div>

          <p>
            Strong academic performance and consistent
            learner achievement year after year.
          </p>

          <a href="/about">
            Learn More
            <FaArrowRight />
          </a>

        </div>

        {/* CARD 5 */}

        <div className="why-card">

          <div className="card-dots"></div>

          <div className="icon-box">
            <FaFutbol />
          </div>

          <h3>
            Co-Curricular Activities
          </h3>

          <div className="small-line"></div>

          <p>
            Sports, music, drama and clubs that develop
            talents beyond the classroom.
          </p>

          <a href="/about">
            Learn More
            <FaArrowRight />
          </a>

        </div>

        {/* CARD 6 */}

        <div className="why-card">

          <div className="card-dots"></div>

          <div className="icon-box">
            <FaUserGraduate />
          </div>

          <h3>
            Holistic Development
          </h3>

          <div className="small-line"></div>

          <p>
            Building character, leadership and confidence
            for lifelong success.
          </p>

          <a href="/about">
            Learn More
            <FaArrowRight />
          </a>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;