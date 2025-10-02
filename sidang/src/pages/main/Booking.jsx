import "../../styles/main/Booking.css";
import { useState } from "react";
import { FaMapMarkerAlt, FaLocationArrow, FaUsers, FaCar, FaCalendarAlt } from "react-icons/fa";

export default function Booking() {
  const [activeTab, setActiveTab] = useState("Regular");
  const [showPaymentPrompt, setShowPaymentPrompt] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(""); // track chosen payment

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPaymentPrompt(true);
  };

  const handlePaymentSelect = (method) => {
    setPaymentMethod(method);
    setShowPaymentPrompt(false);

    // ----------------------------
    // 🔐 PAYMENT INTEGRATION HERE
    // ----------------------------
    if (method === "mpesa") {
      // Call Mpesa Daraja API (STK Push) from backend
      // -> Safaricom sends prompt to user’s phone
      // -> On success/failure, receive callback in backend
      // -> Send email confirmation via Nodemailer/Spring Mail
      console.log("Mpesa payment selected");
    }
    if (method === "card") {
      // Use Stripe / Flutterwave / Paystack Checkout
      // -> Redirect or modal for card input
      // -> On success/failure, trigger email notification
      console.log("Card payment selected");
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-card">
        {/* Tabs */}
        <div className="booking-tabs">
          <button
            className={`tab ${activeTab === "Regular" ? "active" : ""}`}
            onClick={() => setActiveTab("Regular")}
          >
            Regular
          </button>
          <button
            className={`tab ${activeTab === "VIP" ? "active" : ""}`}
            onClick={() => setActiveTab("VIP")}
          >
            VIP
          </button>
        </div>

        {/* Trip Details Row */}
        <div className="trip-details">
          <div className="trip-field">
            <span className="icon"><FaMapMarkerAlt /></span>
            <select>
              <option>Pick-up Point</option>
              <option>Nairobi</option>
              <option>Mombasa</option>
            </select>
          </div>
          <div className="trip-field">
            <span className="icon"><FaLocationArrow /></span>
            <select>
              <option>Destination</option>
              <option>Amboseli</option>
              <option>Masai Mara</option>
            </select>
          </div>
          <div className="trip-field">
            <span className="icon"><FaUsers /></span>
            <select>
              <option>Guests</option>
              <option>1</option>
              <option>2</option>
              <option>3+</option>
            </select>
          </div>
        </div>

        {/* Form */}
        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            required
            className="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            className="lastname"
          />
          <input type="email" placeholder="E-mail" required className="email" />
          <textarea placeholder="Any Specifications Regarding your Trip?" />

          {/* Vehicle & Date */}
          <div className="form-row">
            <div className="trip-field">
              <span className="icon"><FaCar /></span>
              <select>
                <option>Vehicle</option>
                <option>SUV</option>
                <option>Van</option>
              </select>
            </div>
            <div className="trip-field">
              <span className="icon"><FaCalendarAlt /></span>
              <input type="date" />
            </div>
          </div>

          {/* Pay Button */}
          <button type="submit" className="pay-btn">
            Pay
          </button>
        </form>

        {/* Payment Method Prompt */}
        {showPaymentPrompt && (
          <div className="payment-prompt">
            <div className="prompt-content">
              <h3>Select Payment Method</h3>
              <button
                className="pay-option"
                onClick={() => handlePaymentSelect("mpesa")}
              >
                Mpesa
              </button>
              <button
                className="pay-option"
                onClick={() => handlePaymentSelect("card")}
              >
                Credit/Debit Card
              </button>
              <button
                className="pay-option cancel"
                onClick={() => setShowPaymentPrompt(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
