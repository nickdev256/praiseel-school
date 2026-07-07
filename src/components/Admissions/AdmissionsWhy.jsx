import {
  FaGraduationCap,
  FaUserTie,
  FaShieldAlt,
  FaLaptop
} from "react-icons/fa";

import "./AdmissionsWhy.css";

function AdmissionsWhy() {
  const features = [
    {
      icon: <FaGraduationCap />,
      title: "Academic Excellence",
      desc: "We deliver a strong academic foundation with learner-centered and results-driven teaching."
    },
    {
      icon: <FaUserTie />,
      title: "Qualified Teachers",
      desc: "Highly trained and dedicated educators committed to every learner's success."
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe Environment",
      desc: "A secure, disciplined, and child-friendly environment that supports growth."
    },
    {
      icon: <FaLaptop />,
      title: "ICT Integration",
      desc: "Modern digital learning tools integrated into everyday classroom teaching."
    }
  ];


  return (
    <section className="adm-why">

      <div className="section-title">
        <span>WHY PRAISE-EL</span>
        <h2>Why Choose Us</h2>
        <p>We focus on academic excellence, discipline, and holistic child development</p>

      </div>

      <div className="why-grid">

        {features.map((item, index) => (
          <div className="why-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            
            <div className="icon-wrapper">
              {item.icon}
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <div className="card-glow"></div>

          </div>
        ))}

        <div className="why-card">
          <FaGraduationCap />
          <h3>Academic Excellence</h3>
          <p>
            Strong academic foundation and
            learner-centered teaching.
          </p>
        </div>

        <div className="why-card">
          <FaUserTie />
          <h3>Qualified Teachers</h3>
          <p>
            Dedicated and experienced
            educators.
          </p>
        </div>

        <div className="why-card">
          <FaShieldAlt />
          <h3>Safe Environment</h3>
          <p>
            Secure and child-friendly
            learning environment.
          </p>
        </div>

        <div className="why-card">
          <FaLaptop />
          <h3>ICT Integration</h3>
          <p>
            Technology-supported learning.
          </p>
        </div>


      </div>

    </section>
  );
}

export default AdmissionsWhy;