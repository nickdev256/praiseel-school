import "./Programs.css";

import nurseryImg from "../assets/nursery.jpg";
import primaryImg from "../assets/primary.jpg";

function Programs() {
  return (
    <section className="programs-section">

      <div className="programs-header">

        <span>OUR PROGRAMS</span>

        <h2>
          Academic Excellence At Every Stage
        </h2>

        <p>
          We provide quality Nursery and Primary education
          designed to nurture confident, disciplined and
          successful learners.
        </p>

      </div>

      <div className="programs-wrapper">

        {/* Nursery */}

        <div className="program-card">

          <div className="program-image">
            <img
              src={nurseryImg}
              alt="Nursery Section"
            />
          </div>

          <div className="program-info">

            <span>NURSERY SECTION</span>

            <h3>
              Early Childhood Learning
            </h3>

            <p>
              Our Nursery Section comprises Baby Class,
              Middle Class and Top Class. We focus on
              creativity, communication, confidence and
              foundational literacy and numeracy skills.
            </p>

            <ul>
              <li>Baby Class</li>
              <li>Middle Class</li>
              <li>Top Class</li>
              <li>Play-Based Learning</li>
            </ul>

            <button>
              Learn More
            </button>

          </div>

        </div>

        {/* Primary */}

        <div className="program-card reverse">

          <div className="program-image">
            <img
              src={primaryImg}
              alt="Primary Section"
            />
          </div>

          <div className="program-info">

            <span>PRIMARY SECTION</span>

            <h3>
              Building Future Leaders
            </h3>

            <p>
              From Primary One to Primary Seven, learners
              receive quality education that promotes
              academic excellence, leadership and character
              development.
            </p>

            <ul>
              <li>Primary One - Seven</li>
              <li>Leadership Training</li>
              <li>ICT Integration</li>
              <li>Co-Curricular Activities</li>
            </ul>

            <button>
              Learn More
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Programs;