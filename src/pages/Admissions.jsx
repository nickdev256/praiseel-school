import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AdmissionsHero from "../components/Admissions/AdmissionsHero";
import AdmissionsWelcome from "../components/Admissions/AdmissionsWelcome";
import AdmissionsWhy from "../components/Admissions/AdmissionsWhy";
import AdmissionsProcess from "../components/Admissions/AdmissionsProcess";
import AdmissionsPrograms from "../components/Admissions/AdmissionsPrograms";
import AdmissionsRequirements from "../components/Admissions/AdmissionsRequirements";
import AdmissionsApply from "../components/Admissions/AdmissionsApply";
import AdmissionsFAQ from "../components/Admissions/AdmissionsFAQ";
import AdmissionsContact from "../components/Admissions/AdmissionsContact";
import AdmissionsCTA from "../components/Admissions/AdmissionsCTA";

function Admissions() {
  return (
    <>


      <AdmissionsWelcome />

      <AdmissionsWhy />

      <AdmissionsProcess />

      <AdmissionsPrograms />

      <AdmissionsRequirements />

      <AdmissionsApply />

      <AdmissionsFAQ />

      <AdmissionsContact />

      <AdmissionsCTA />

      <Footer />
    </>
  );
}

export default Admissions;