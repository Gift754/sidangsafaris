import React from "react";
import "../styles/EmailSubscription.css";

function EmailSubscription() {
  return (
    <div className="subscription">
      <h2>Start Your Journey With Us Today</h2>
      <p>
        Sign up for our Newsletter to get exclusive travel deals, inside tips
        and destination inspiration. Don’t miss on the adventure - join our
        emailing deals today.
      </p>
      <form className="subscribe-form">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <button className="subscribe-btn">Subscribe</button>
      </form>
    </div>
  );
}

export default EmailSubscription;
