import "./ApplyForm.css";

function ApplyForm() {
  return (
    <section className="apply-form-section">

      <div className="apply-form-card">

        <div className="section-title">
          <span>APPLICATION FORM</span>
          <h2>Student Information</h2>
        </div>

        <form className="apply-form">

          <input
            type="text"
            placeholder="Student Full Name"
          />

          <input
            type="date"
          />

          <select>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <select>
            <option>Class Applying For</option>
            <option>Baby Class</option>
            <option>Middle Class</option>
            <option>Top Class</option>
            <option>P1</option>
            <option>P2</option>
            <option>P3</option>
            <option>P4</option>
            <option>P5</option>
            <option>P6</option>
            <option>P7</option>
          </select>

          <input
            type="text"
            placeholder="Current School"
          />

          <input
            type="text"
            placeholder="Parent/Guardian Name"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <textarea
            rows="5"
            placeholder="Additional Information"
          ></textarea>

          <div className="upload-grid">

            <div>
              <label>Birth Certificate</label>
              <input type="file" />
            </div>

            <div>
              <label>Passport Photo</label>
              <input type="file" />
            </div>

            <div>
              <label>Report Card</label>
              <input type="file" />
            </div>

            <div>
              <label>Transfer Letter</label>
              <input type="file" />
            </div>

          </div>

          <button type="submit">
            Submit Application
          </button>

        </form>

      </div>

    </section>
  );
}

export default ApplyForm;