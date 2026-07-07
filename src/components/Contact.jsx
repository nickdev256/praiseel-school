import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  const contactDetails = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      text: "0756070601"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      text: "info.praiseeljuniorschool256@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      text: "Mukono, Uganda"
    },
    {
      icon: <FaClock />,
      title: "Office Hours",
      text: "Mon - Fri : 8:00AM - 5:00PM"
    }
  ];

  return (
    <section className="contact-section">


      <div className="contact-header">

        <span>CONTACT PRAISE-EL</span>

        <h2>
          Let's Connect With Our School
        </h2>

        <p>
          Have questions about admissions, school visits,
          or learning programs? Our team is ready to assist you.
        </p>

      </div>


      <div className="contact-container">


        <div className="contact-info">

          <h3>
            Get In Touch
          </h3>


          {
            contactDetails.map((item,index)=>(
              <div className="info-box" key={index}>

                <div className="icon">
                  {item.icon}
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>

              </div>
            ))
          }

        </div>



        <div className="contact-form">

          <h3>
            Send Us A Message
          </h3>

          <form>

            <div className="form-group">

              <input 
                type="text"
                placeholder="Your Name"
              />


              <input 
                type="email"
                placeholder="Email Address"
              />

            </div>


            <input
              type="text"
              placeholder="Subject"
            />


            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>


            <button>
              Send Message
            </button>


          </form>

        </div>


      </div>

    </section>
  );
}

export default Contact;