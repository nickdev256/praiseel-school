import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaShieldAlt,
  FaLaptopCode,
  FaFutbol,
  FaAward,
} from "react-icons/fa";

import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why-section">

      <div className="why-header">

        <span>WHY CHOOSE PRAISE-EL</span>

        <h2>
          Providing Excellence In Education
        </h2>

        <p>
          We are committed to nurturing confident,
          disciplined and successful learners through
          quality education and holistic development.
        </p>

      </div>

      <div className="why-grid">

        <div className="why-card">
          <div className="icon-box">
            <FaChalkboardTeacher />
          </div>

          <h3>Qualified Teachers</h3>

          <p>
            Dedicated and experienced teachers focused
            on every child's academic and personal growth.
          </p>
        </div>

        <div className="why-card">
          <div className="icon-box">
            <FaLaptopCode />
          </div>

          <h3>Modern Learning</h3>

          <p>
            Interactive learning supported by technology
            and innovative teaching approaches.
          </p>
        </div>

        <div className="why-card">
          <div className="icon-box">
            <FaShieldAlt />
          </div>

          <h3>Safe Environment</h3>

          <p>
            A secure and nurturing school environment
            where every learner feels valued.
          </p>
        </div>

        <div className="why-card">
          <div className="icon-box">
            <FaAward />
          </div>

          <h3>Academic Excellence</h3>

          <p>
            Strong academic performance and consistent
            learner achievement year after year.
          </p>
        </div>

        <div className="why-card">
          <div className="icon-box">
            <FaFutbol />
          </div>

          <h3>Co-Curricular Activities</h3>

          <p>
            Sports, music, drama and clubs that develop
            talents beyond the classroom.
          </p>
        </div>

        <div className="why-card">
          <div className="icon-box">
            <FaUserGraduate />
          </div>

          <h3>Holistic Development</h3>

          <p>
            Building character, leadership and confidence
            for lifelong success.
          </p>
        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;