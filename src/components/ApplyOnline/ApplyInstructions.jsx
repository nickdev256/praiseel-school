import { FaClipboardList, FaCloudUploadAlt, FaPaperPlane, FaUserCheck } from "react-icons/fa";

import "./ApplyInstructions.css";

const steps = [
  {
    icon: FaClipboardList,
    title: "Complete the form",
    text: "Tell us about the learner and the class you are applying for.",
  },
  {
    icon: FaCloudUploadAlt,
    title: "Add documents",
    text: "Upload photos or scans of the required documents.",
  },
  {
    icon: FaPaperPlane,
    title: "Submit application",
    text: "Check your details and send your application.",
  },
  {
    icon: FaUserCheck,
    title: "Admissions review",
    text: "Our team reviews it and contacts you about next steps.",
  },
];

function ApplyInstructions() {
  return (
    <section className="ap-steps-wrap" aria-labelledby="ap-steps-title">
      <div className="ap-container">
        <h2 id="ap-steps-title" className="ap-steps-title">
          How to apply
        </h2>

        <ol className="ap-steps">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="ap-step">
              <div className="ap-step-top">
                <span className="ap-step-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="ap-step-num" aria-hidden="true">
                  0{i + 1}
                </span>
              </div>
              <h3>
                <span className="ap-sr">Step {i + 1}: </span>
                {title}
              </h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ApplyInstructions;