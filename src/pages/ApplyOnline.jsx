import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ApplyHero from "../components/ApplyOnline/ApplyHero";
import ApplyInstructions from "../components/ApplyOnline/ApplyInstructions";
import ApplyForm from "../components/ApplyOnline/ApplyForm";
import RequiredDocuments from "../components/ApplyOnline/RequiredDocuments";
import ApplyFAQ from "../components/ApplyOnline/ApplyFAQ";

function ApplyOnline() {
  return (
    <>
      <Navbar />

      <main className="apply-online-page">
        <ApplyHero />

        <ApplyInstructions />

        <ApplyForm />

        <RequiredDocuments />

        <ApplyFAQ />
      </main>

      <Footer />
    </>
  );
}

export default ApplyOnline;