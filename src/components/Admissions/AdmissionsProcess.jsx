import "./AdmissionsProcess.css";

function AdmissionsProcess() {
  return (
    <section className="process">

      <div className="section-title">
        <span>ADMISSION PROCESS</span>
        <h2>How To Apply</h2>
      </div>

      <div className="process-grid">

        <div className="step">
          <span>01</span>
          <h3>Submit Application</h3>
        </div>

        <div className="step">
          <span>02</span>
          <h3>School Visit</h3>
        </div>

        <div className="step">
          <span>03</span>
          <h3>Assessment</h3>
        </div>

        <div className="step">
          <span>04</span>
          <h3>Admission Offer</h3>
        </div>

        <div className="step">
          <span>05</span>
          <h3>Enrollment</h3>
        </div>

      </div>

    </section>
  );
}

export default AdmissionsProcess;