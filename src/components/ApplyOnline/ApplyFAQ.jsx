import { useId, useState } from "react";
import { FaChevronDown, FaWhatsapp } from "react-icons/fa";

import "./ApplyFAQ.css";

const faqs = [
  {
    question: "When are admissions open?",
    answer:
      "Admissions are open throughout the year, depending on space in each class. We encourage parents to apply before the start of a new term.",
  },
  {
    question: "Can I apply online?",
    answer:
      "Yes. Complete the application form on this page. You can upload documents now, or send them later on WhatsApp or bring them to the school office.",
  },
  {
    question: "Which documents do I need?",
    answer:
      "A copy of the learner's birth certificate, a recent passport photo, the previous school report card and, for transfers, a transfer letter.",
  },
  {
    question: "What happens after I apply?",
    answer:
      "Our admissions team reviews your application and contacts you to arrange a school visit and an age-appropriate assessment.",
  },
  {
    question: "Do you provide transport?",
    answer:
      "School transport is available on selected routes. Contact the admissions office to confirm whether your area is covered.",
  },
];

function ApplyFAQ() {
  const uid = useId();
  const [open, setOpen] = useState(0);

  return (
    <section className="ap-section apq" aria-labelledby={`${uid}-title`}>
      <div className="ap-container apq-grid">
        <div className="apq-intro">
          <span className="ap-eyebrow">Questions &amp; answers</span>
          <h2 id={`${uid}-title`}>
            Frequently asked <em>questions</em>.
          </h2>
          <p>Still unsure about something? Our admissions team is happy to help.</p>

          <a
            href="https://wa.me/256744523317"
            target="_blank"
            rel="noopener noreferrer"
            className="ap-btn ap-btn-whatsapp"
          >
            <span>Ask on WhatsApp</span>
            <i aria-hidden="true">
              <FaWhatsapp />
            </i>
          </a>
        </div>

        <div className="apq-list">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = open === index;
            const qId = `${uid}-q-${index}`;
            const aId = `${uid}-a-${index}`;

            return (
              <div key={question} className={`apq-item ${isOpen ? "is-open" : ""}`}>
                <h3>
                  <button
                    type="button"
                    id={qId}
                    aria-expanded={isOpen}
                    aria-controls={aId}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span>{question}</span>
                    <i aria-hidden="true">
                      <FaChevronDown />
                    </i>
                  </button>
                </h3>
                <div className="apq-answer" id={aId} role="region" aria-labelledby={qId}>
                  <div>
                    <p>{answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ApplyFAQ;