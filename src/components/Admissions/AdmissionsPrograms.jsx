import "./AdmissionsPrograms.css";

function AdmissionsPrograms() {
  return (
    <section className="adm-programs">

      <div className="section-title">
        <span>PROGRAMS</span>
        <h2>Classes Available</h2>
      </div>

      <div className="programs-grid">

        <div className="program-card">

          <h3>Nursery Section</h3>

          <ul>
            <li>Baby Class</li>
            <li>Middle Class</li>
            <li>Top Class</li>
          </ul>

        </div>

        <div className="program-card">

          <h3>Primary Section</h3>

          <ul>
            <li>P1</li>
            <li>P2</li>
            <li>P3</li>
            <li>P4</li>
            <li>P5</li>
            <li>P6</li>
            <li>P7</li>
          </ul>

        </div>

      </div>

    </section>
  );
}

export default AdmissionsPrograms;