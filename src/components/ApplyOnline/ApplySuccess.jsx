import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck, FaPhoneAlt, FaRedo, FaWhatsapp } from "react-icons/fa";

import "./ApplySuccess.css";

const WHATSAPP_NUMBER = "256744523317";

function ApplySuccess({ result, onReset }) {
  const headingRef = useRef(null);

  const reference = result?.reference;
  const learner = result?.values?.studentName?.trim();
  const viaEmail = result?.method === "email";

  // Move focus here so screen readers announce the confirmation.
  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  const docsMessage = encodeURIComponent(
    `Hello Praise-El Junior School. I am sending documents for application ${
      reference || ""
    }${learner ? ` (${learner})` : ""}.`,
  );

  return (
    <section className="ap-section aps" aria-labelledby="aps-title">
      <div className="ap-container">
        <div className="aps-card" role="status">
          <span className="aps-icon" aria-hidden="true">
            <FaCheck />
          </span>

          <h2 id="aps-title" ref={headingRef} tabIndex={-1}>
            {viaEmail ? (
              <>
                Almost done — <em>press send</em>.
              </>
            ) : (
              <>
                Application <em>submitted</em>.
              </>
            )}
          </h2>

          <p className="aps-lead">
            {viaEmail
              ? "Your email app has opened with the application filled in. Press send there to deliver it to our admissions office."
              : `Thank you for applying to Praise-El Junior School${
                  learner ? ` for ${learner}` : ""
                }. Our admissions team will contact you shortly.`}
          </p>

          {reference && (
            <div className="aps-ref">
              <small>Your reference number</small>
              <strong>{reference}</strong>
              <span>Please quote this when you contact the school.</span>
            </div>
          )}

          <ol className="aps-next">
            <li>
              <span aria-hidden="true">1</span>
              {viaEmail
                ? "Press send in your email app."
                : "Our team reviews your application."}
            </li>
            <li>
              <span aria-hidden="true">2</span>
              Send any missing documents on WhatsApp or bring them to the office.
            </li>
            <li>
              <span aria-hidden="true">3</span>
              We contact you to arrange a visit and assessment.
            </li>
          </ol>

          <div className="aps-actions">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${docsMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ap-btn ap-btn-whatsapp"
            >
              <span>Send documents on WhatsApp</span>
              <i aria-hidden="true">
                <FaWhatsapp />
              </i>
            </a>
            <Link to="/" className="ap-btn ap-btn-navy">
              <span>Back to home</span>
              <i aria-hidden="true">
                <FaArrowRight />
              </i>
            </Link>
          </div>

          <div className="aps-foot">
            <a href="tel:+256744523317">
              <FaPhoneAlt aria-hidden="true" />
              Questions? 0744 523 317
            </a>
            {onReset && (
              <button type="button" onClick={onReset}>
                <FaRedo aria-hidden="true" />
                Apply for another child
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplySuccess;