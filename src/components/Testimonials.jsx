import {
  FaQuoteLeft,
  FaStar
} from "react-icons/fa";

import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials-section">

      <div className="testimonials-header">

        <span>TESTIMONIALS</span>

        <h2>
          What Parents Say About Us
        </h2>

        <p>
          Hear from parents and guardians who trust
          Praise-El Junior School with their children's
          education and development.
        </p>

      </div>

      <div className="testimonial-grid">

        <div className="testimonial-card">

          <FaQuoteLeft className="quote-icon" />

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p>
            Praise-El Junior School has transformed my
            child academically and socially. The teachers
            are dedicated, caring and always supportive.
          </p>

          <div className="testimonial-footer">

            <div className="avatar">
              A
            </div>

            <div>
              <h4>Mrs. Akello</h4>
              <span>Parent</span>
            </div>

          </div>

        </div>

        <div className="testimonial-card">

          <FaQuoteLeft className="quote-icon" />

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p>
            The school provides a safe and nurturing
            environment. My child enjoys learning and
            looks forward to school every day.
          </p>

          <div className="testimonial-footer">

            <div className="avatar">
              N
            </div>

            <div>
              <h4>Mr. Namanya</h4>
              <span>Parent</span>
            </div>

          </div>

        </div>

        <div className="testimonial-card">

          <FaQuoteLeft className="quote-icon" />

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p>
            We appreciate the balance between academics,
            discipline and co-curricular activities.
            Praise-El truly nurtures future leaders.
          </p>

          <div className="testimonial-footer">

            <div className="avatar">
              K
            </div>

            <div>
              <h4>Mrs. Katushabe</h4>
              <span>Parent</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;