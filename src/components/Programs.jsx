import {
  FaBaby,
  FaUsers,
  FaStar,
  FaPuzzlePiece,
  FaGraduationCap,
  FaLaptopCode,
  FaTrophy,
  FaChalkboardTeacher,
  FaHeart,
  FaShieldAlt,
} from "react-icons/fa";

import "./Programs.css";

import nurseryImg from "../assets/nursery.jpg";
import primaryImg from "../assets/p.jpg";

function Programs() {
  return (
    <section className="programs">

      <div className="programs-header">

        <span className="program-tag">
          OUR PROGRAMS
        </span>

        <h2>
          Academic Excellence At Every Stage
        </h2>

        <p>
          We provide quality Nursery and Primary education
          designed to nurture confident, disciplined and
          successful learners.
        </p>

      </div>

      <div className="timeline-line"></div>

      {/* NURSERY */}

      <div className="program-row">

        <div className="program-image">

          <img
            src={nurseryImg}
            alt="Nursery"
          />

          <div className="program-badge">
            <FaBaby />
            <span>NURSERY SECTION</span>
          </div>

        </div>

        <div className="program-content">

          <h3>
            Early Childhood Learning
          </h3>

          <p>
            Our Nursery Section comprises Baby Class,
            Middle Class and Top Class. We focus on
            creativity, communication, confidence and
            foundational literacy and numeracy skills.
          </p>

          <div className="program-features">

            <div>
              <FaBaby />
              <span>Baby Class</span>
            </div>

            <div>
              <FaUsers />
              <span>Middle Class</span>
            </div>

            <div>
              <FaStar />
              <span>Top Class</span>
            </div>

            <div>
              <FaPuzzlePiece />
              <span>Play Learning</span>
            </div>

          </div>

        </div>

      </div>

      {/* PRIMARY */}

      <div className="program-row reverse">

        <div className="program-content">

          <h3>
            Building Future Leaders
          </h3>

          <p>
            From Primary One to Primary Seven, learners
            receive quality education that promotes
            academic excellence, leadership and character
            development.
          </p>

          <div className="program-features">

            <div>
              <FaGraduationCap />
              <span>P1 - P7</span>
            </div>

            <div>
              <FaChalkboardTeacher />
              <span>Leadership</span>
            </div>

            <div>
              <FaLaptopCode />
              <span>ICT</span>
            </div>

            <div>
              <FaTrophy />
              <span>Sports</span>
            </div>

          </div>

        </div>

        <div className="program-image">

          <img
            src={primaryImg}
            alt="Primary"
          />

          <div className="program-badge right">
            <FaGraduationCap />
            <span>PRIMARY SECTION</span>
          </div>

        </div>

      </div>

      {/* VALUES */}

      <div className="values-strip">

        <div className="value-box">

          <FaUsers />

          <div>
            <h4>Holistic Development</h4>

            <p>
              We nurture academic, social,
              emotional and spiritual growth.
            </p>
          </div>

        </div>

        <div className="value-box">

          <FaShieldAlt />

          <div>
            <h4>Safe & Supportive</h4>

            <p>
              A secure and caring environment
              where every child thrives.
            </p>
          </div>

        </div>

        <div className="value-box">

          <FaTrophy />

          <div>
            <h4>Excellence Driven</h4>

            <p>
              High standards and outstanding
              academic performance.
            </p>
          </div>

        </div>

        <div className="value-box">

          <FaHeart />

          <div>
            <h4>Heart For Every Child</h4>

            <p>
              Every learner is valued,
              supported and inspired.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Programs;