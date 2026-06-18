import { useState } from "react";
import "./ApplyFAQ.css";

function ApplyFAQ() {

  const [open, setOpen] = useState(1);

  return (
    <section className="apply-faq">

      <div className="section-title">
        <span>FAQ</span>
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="faq-container">

        <div
          className="faq-box"
          onClick={() => setOpen(open === 1 ? 0 : 1)}
        >

          <div className="faq-question">
            When are admissions open?
          </div>

          {open === 1 && (
            <p>
              Admissions are open throughout the year
              depending on class availability.
            </p>
          )}

        </div>

        <div
          className="faq-box"
          onClick={() => setOpen(open === 2 ? 0 : 2)}
        >

          <div className="faq-question">
            Can I apply online?
          </div>

          {open === 2 && (
            <p>
              Yes. Complete the online application
              form and submit required documents.
            </p>
          )}

        </div>

        <div
          className="faq-box"
          onClick={() => setOpen(open === 3 ? 0 : 3)}
        >

          <div className="faq-question">
            Do you provide transport?
          </div>

          {open === 3 && (
            <p>
              Contact the admissions office for
              transport availability.
            </p>
          )}

        </div>

      </div>

    </section>
  );
}

export default ApplyFAQ;