import { useEffect, useState } from "react";
import "./Statistics.css";

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

      <div className="stats-header">

        <span>OUR ACHIEVEMENTS</span>

        <h2>
          Excellence In Numbers
        </h2>

        <p>
          Our commitment to quality education is reflected
          in the achievements of our learners, teachers
          and school community.
        </p>

      </div>

      <div className="stats-grid">

        <div className="stat-card">

          <h3>
            <Counter
              end={500}
              suffix="+"
            />
          </h3>

          <p>Students</p>

        </div>

        <div className="stat-card">

          <h3>
            <Counter
              end={35}
              suffix="+"
            />
          </h3>

          <p>Qualified Teachers</p>

        </div>

        <div className="stat-card">

          <h3>
            <Counter
              end={98}
              suffix="%"
            />
          </h3>

          <p>Success Rate</p>

        </div>

        <div className="stat-card">

          <h3>
            <Counter
              end={10}
              suffix="+"
            />
          </h3>

          <p>Years Experience</p>

        </div>

      </div>

    </section>
  );
}

export default Statistics;