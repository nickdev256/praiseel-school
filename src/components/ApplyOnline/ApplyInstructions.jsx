import "./ApplyInstructions.css";

function ApplyInstructions() {
  return (
    <section className="apply-instructions">

      <div className="section-title">
        <span>HOW TO APPLY</span>
        <h2>Application Process</h2>
      </div>

      <div className="instruction-grid">

        <div className="instruction">
          <span>01</span>
          <h3>Complete Form</h3>
        </div>

        <div className="instruction">
          <span>02</span>
          <h3>Upload Documents</h3>
        </div>

        <div className="instruction">
          <span>03</span>
          <h3>Submit Application</h3>
        </div>

        <div className="instruction">
          <span>04</span>
          <h3>Admissions Review</h3>
        </div>

      </div>

    </section>
  );
}

export default ApplyInstructions;