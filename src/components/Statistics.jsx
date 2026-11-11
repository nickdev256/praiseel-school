import { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaTrophy,
  FaCalendarAlt,
} from "react-icons/fa";

import "./Statistics.css";
import schoolKids from "../assets/school-kids.jpg";

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2500;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function Statistics() {
  return (
    <section className="stats-section">

      {/* TOP AREA */}

      <div className="stats-top">

        <div className="stats-watermark">
          🎓
        </div>

        <div className="stats-header">

          <span className="stats-tag">
            OUR ACHIEVEMENTS
          </span>

          <h2>
            Excellence In Numbers
          </h2>

          <div className="title-line"></div>

          <p>
            Our commitment to quality education is reflected
            in the achievements of our learners, teachers
            and school community.
          </p>

        </div>

        <div className="stats-image">
          <img
            src={schoolKids}
            alt="Students"
          />
        </div>

      </div>

      {/* STATS AREA */}

      <div className="stats-bottom">

        <div className="stat-card">

          <div className="stat-icon">
            <FaGraduationCap />
          </div>

          <h3>
            <Counter end={500} suffix="+" />
          </h3>

          <span></span>

          <p>Students</p>

        </div>

        <div className="stat-card">

          <div className="stat-icon">
            <FaChalkboardTeacher />
          </div>

          <h3>
            <Counter end={35} suffix="+" />
          </h3>

          <span></span>

          <p>Qualified Teachers</p>

        </div>

        <div className="stat-card">

          <div className="stat-icon">
            <FaTrophy />
          </div>

          <h3>
            <Counter end={98} suffix="%" />
          </h3>

          <span></span>

          <p>Success Rate</p>

        </div>

        <div className="stat-card">

          <div className="stat-icon">
            <FaCalendarAlt />
          </div>

          <h3>
            <Counter end={10} suffix="+" />
          </h3>

          <span></span>

          <p>Years Experience</p>

        </div>

      </div>

      <div className="stats-quote">
        Every Child Matters, Every Achievement Counts.
      </div>

    </section>
  );
}

export default Statistics;