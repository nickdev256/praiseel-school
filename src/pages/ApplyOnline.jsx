import { useRef, useState } from "react";

// Shared design tokens first, so component styles can build on them.
import "./ApplyOnline.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ApplyHero from "../components/ApplyOnline/ApplyHero";
import ApplyInstructions from "../components/ApplyOnline/ApplyInstructions";
import ApplyForm from "../components/ApplyOnline/ApplyForm";
import ApplySuccess from "../components/ApplyOnline/ApplySuccess";
import ApplyFAQ from "../components/ApplyOnline/ApplyFAQ";

function ApplyOnline() {
  const [result, setResult] = useState(null);
  const formAreaRef = useRef(null);

  const handleSuccess = (submission) => {
    setResult(submission);
    // Bring the confirmation into view.
    requestAnimationFrame(() =>
      formAreaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  };

  return (
    <>
      <Navbar />

      <main className="ap">
        <ApplyHero />
        <ApplyInstructions />

        <div ref={formAreaRef} id="application-form" className="ap-form-area">
          {result ? (
            <ApplySuccess result={result} onReset={() => setResult(null)} />
          ) : (
            <ApplyForm onSuccess={handleSuccess} />
          )}
        </div>

        <ApplyFAQ />
      </main>

      <Footer />
    </>
  );
}

export default ApplyOnline;