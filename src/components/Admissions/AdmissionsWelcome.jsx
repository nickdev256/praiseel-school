import "./AdmissionsWelcome.css";
import hero from "../../assets/hero1.jpg";

function AdmissionsWelcome() {
  return (
    <section
      className="admissions-welcome"
      style={{
        backgroundImage: `url(${hero})`
      }}
    >

      <div className="overlay"></div>

      <div className="container">

        <span className="subtitle">
          ADMISSIONS 2026
        </span>

        <h1>
          Join Praise-El Nursery & Primary School
        </h1>

        <p>
          We warmly welcome applications from families seeking a strong academic foundation,
          character development, and a nurturing environment where every child can thrive.
        </p>

        <div className="highlights">
          <span>✔ Quality Education</span>
          <span>✔ Safe Learning Environment</span>
          <span>✔ Experienced Teachers</span>
        </div>

      </div>

    </section>
  );
}

export default AdmissionsWelcome;