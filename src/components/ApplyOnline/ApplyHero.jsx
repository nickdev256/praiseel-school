import "./ApplyHero.css";
import hero from "../../assets/apply-hero1.jpg";

function ApplyHero() {
  return (
    <section
      className="apply-hero"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="apply-hero-overlay">

        <span>ONLINE APPLICATION</span>

        <h1>
          Begin Your Child's Journey
          At Praise-El Junior School
        </h1>

        <p>
          Complete the application form below
          and our admissions team will contact you.
        </p>

      </div>
    </section>
  );
}

export default ApplyHero;