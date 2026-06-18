import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <>
      <Navbar />

      <div style={{ paddingTop: "160px" }}>
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default ContactPage;