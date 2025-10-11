import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <div className="Contact-Details">
        <p>Get In Touch</p>
        <h2 className="title-contact">Contact Us</h2>
        <div className="side">
          <h4 className="small">General Inquiries</h4>
          <p className="inquiry">
            Contact us for any booking enquiry or trip suggestions
          </p>
        </div>
        <div className="side">
          <h4 className="small">Feedback</h4>
          <p className="inquiry">
            Comment and rate our services from a scale of 1-10. This helps us
            improve our service delivery to fit our customers requests.
          </p>
        </div>
      </div>

      <form action="" className="contact-form">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea
          name="msg"
          id="msg"
          placeholder="Type your message"
        ></textarea>
        <button type="submit" className="submit-btn">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
