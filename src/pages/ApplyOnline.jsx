
import Footer from "../components/Footer";

import ApplyHero from "../components/ApplyOnline/ApplyHero";
import ApplyInstructions from "../components/ApplyOnline/ApplyInstructions";
import ApplyForm from "../components/ApplyOnline/ApplyForm";
import RequiredDocuments from "../components/ApplyOnline/RequiredDocuments";
import ApplyFAQ from "../components/ApplyOnline/ApplyFAQ";
import AdmissionsContact from "../components/Admissions/AdmissionsContact";

function ApplyOnline() {
  return (
    <>
      <Navbar />

      <ApplyHero />

      <ApplyInstructions />

      <ApplyForm />

      <RequiredDocuments />

      <ApplyFAQ />

      <AdmissionsContact />

      <Footer />
    </>
  );
}

export default ApplyOnline;