import { useState } from "react";
import "./AdmissionsFAQ.css";

function AdmissionsFAQ() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const faqs = [
    {
      q: "When are admissions open?",
      a: "Admissions are open throughout the year, with peak intake periods before each term begins."
    },
    {
      q: "Do you provide meals?",
      a: "Yes, we provide balanced meals prepared under proper school nutrition guidelines."
    },
    {
      q: "Do you provide transport?",
      a: "Yes, school transport is available on selected routes around Mukono and nearby areas."
    },
    {
      q: "Can I transfer mid-term?",
      a: "Yes, transfers are allowed depending on availability of space and academic requirements."
    }
  ];


  return (
    <section className="faq">

      <div className="section-title">
        <span>FAQ</span>
        <h2>Frequently Asked Questions</h2>
      </div>


      <div className="faq-list">

        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >

            <div className="faq-question">
              {item.q}
            </div>


            {openIndex === index && (
              <div className="faq-answer">
                {item.a}
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default AdmissionsFAQ;