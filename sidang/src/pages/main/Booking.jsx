import "../../styles/main/Booking.css";
import { useState } from "react";

export default function Booking() {
  const [activeTab, setActiveTab] = useState("Regular");
  const [paymentMethod, setPaymentMethod] = useState(""); // track chosen payment

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just simulate payment
    console.log("Booking submitted with payment method:", paymentMethod);

    // ----------------------------
    // 🔐 PAYMENT INTEGRATION HERE
    // ----------------------------
    // if (paymentMethod === "mpesa") {
    //   Call Mpesa Daraja API (STK Push) from backend
    //   -> Safaricom sends prompt to user’s phone
    //   -> On success/failure, receive callback in backend
    //   -> Send email confirmation via Nodemailer/Spring Mail
    // }
    //
    // if (paymentMethod === "card") {
    //   Use Stripe / Flutterwave / Paystack Checkout
    //   -> Redirect or modal for card input
    //   -> On success/failure, trigger email notification
    // }
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
            <span className="icon">📍</span>
            <select>
              <option>Pick-up Point</option>
              <option>Nairobi</option>
              <option>Mombasa</option>
            </select>
          </div>
          <div className="trip-field">
            <span className="icon">📌</span>
            <select>
              <option>Destination</option>
              <option>Amboseli</option>
              <option>Masai Mara</option>
            </select>
          </div>
          <div className="trip-field">
            <span className="icon">👥</span>
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
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="E-mail" required />
          <textarea placeholder="Any Specifications Regarding your Trip?" />

          {/* Vehicle & Date */}
          <div className="form-row">
            <div className="trip-field">
              <span className="icon">🚙</span>
              <select>
                <option>Vehicle</option>
                <option>SUV</option>
                <option>Van</option>
              </select>
            </div>
            <div className="trip-field">
              <span className="icon">📅</span>
              <input type="date" />
            </div>
          </div>

          {/* Payment Options */}
          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="mpesa"
                checked={paymentMethod === "mpesa"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Mpesa
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Credit/Debit Card
            </label>
          </div>

          {/* Card Input Field (only if card selected) */}
          {paymentMethod === "card" && (
            <input type="text" placeholder="Enter your Card Details" />
          )}

          {/* Pay Button */}
          <button type="submit" className="pay-btn">
            Pay
          </button>
        </form>
      </div>
    </div>
  );
}
