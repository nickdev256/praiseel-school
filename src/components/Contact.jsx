import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

import "./Contact.css";
import contactHero from "../assets/contact.jpg";

function Contact() {

  return (
    <>

      {/* HERO */}

      <section
        className="contact-hero"
        style={{
          backgroundImage:`url(${contactHero})`
        }}
      >

        <div className="contact-overlay"></div>


        <div className="contact-hero-content">

          <span>
            CONTACT PRAISE-EL
          </span>


          <h1>
            We Are Here To Support
            Your Child's Future
          </h1>


          <p>
            Have questions about admissions,
            school programs, or visits?
            Our team is ready to help you.
          </p>


          <div className="quick-contact">

            <div>
              <FaPhoneAlt/>
              <p>0756070601</p>
            </div>


            <div>
              <FaEnvelope/>
              <p>Email Us</p>
            </div>


            <div>
              <FaMapMarkerAlt/>
              <p>Mukono, Uganda</p>
            </div>

          </div>


        </div>


      </section>



      {/* YOUR CONTACT SECTION */}

      <section className="contact-section">

        {/* existing contact form and information */}

      </section>

    </>
  );
}

export default Contact;