import "./AdmissionsHero.css";
import hero from "../../assets/hero1.jpg";

function AdmissionsHero() {
  return (
    <section
      className="admissions-hero"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="hero-overlay">

        <span>ADMISSIONS OPEN 2026</span>

        <h1>
          Begin Your Child's Journey
          At Praise-El Junior School
        </h1>

        <p>
          Quality Nursery & Primary Education
          In A Safe Learning Environment
        </p>

      </div>
    </section>
  );
}

export default AdmissionsHero;