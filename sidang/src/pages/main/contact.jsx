import React from "react";
import "../../styles/main/contact.css"; 

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Left Info Section */}
      <div className="contact-info">
        <h5 className="contact-subtitle">Get In Touch</h5>
        <h2 className="contact-title">Contact Us</h2>

        <div className="contact-section">
          <h4>General Inquiries</h4>
          <p>
            Contact us for any booking enquiry or trip suggestions.
          </p>
        </div>

        <div className="contact-section">
          <h4>Feedback</h4>
          <p>
            Comment and rate our services from a scale of 1-10. This helps us
            improve our service delivery to fit our customers’ requests.
          </p>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="E-mail" required />
          <textarea placeholder="Type your message" rows="6" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
