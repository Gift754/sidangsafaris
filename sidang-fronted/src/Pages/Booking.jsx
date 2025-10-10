import "../styles/Booking.css";
import { useState } from "react";
import { FaMapMarkerAlt, FaLocationArrow, FaUsers, FaCar, FaCalendarAlt } from "react-icons/fa";

export default function Booking() {
  const [activeTab, setActiveTab] = useState("Regular");
  const [showPaymentPrompt, setShowPaymentPrompt] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pickup: "",
    destination: "",
    guests: "",
    vehicle: "",
    date: "",
    phone: "",
    amount: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPaymentPrompt(true);
  };

  const handlePaymentSelect = async (method) => {
    setPaymentMethod(method);
    setShowPaymentPrompt(false);

    if (method === "mpesa") {
      try {
        const res = await fetch("http://localhost:5000/api/stkpush", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phone: form.phone,
            amount: form.amount || 10
          })
        });

        const data = await res.json();
        if (data.success) {
          alert("📲 Payment prompt sent to your phone!");
        } else {
          alert("Payment failed: " + data.message);
        }
      } catch (err) {
        console.error(err);
        alert("Error connecting to payment service.");
      }
    }

    if (method === "card") {
      alert("Card payment gateway coming soon!");
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

        {/* Trip Details */}
        <div className="trip-details">
          <div className="trip-field">
            <span className="icon"><FaMapMarkerAlt /></span>
            <select name="pickup" onChange={handleChange}>
              <option>Pick-up Point</option>
              <option>Nairobi</option>
              <option>Mombasa</option>
            </select>
          </div>
          <div className="trip-field">
            <span className="icon"><FaLocationArrow /></span>
            <select name="destination" onChange={handleChange}>
              <option>Destination</option>
              <option>Amboseli</option>
              <option>Masai Mara</option>
            </select>
          </div>
          <div className="trip-field">
            <span className="icon"><FaUsers /></span>
            <select name="guests" onChange={handleChange}>
              <option>Guests</option>
              <option>1</option>
              <option>2</option>
              <option>3+</option>
            </select>
          </div>
        </div>

        {/* Booking Form */}
        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            required
            onChange={handleChange}
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            required
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            required
            onChange={handleChange}
          />
          <textarea
            name="notes"
            placeholder="Any Specifications Regarding your Trip?"
            onChange={handleChange}
          />

          <div className="form-row">
            <div className="trip-field">
              <span className="icon"><FaCar /></span>
              <select name="vehicle" onChange={handleChange}>
                <option>Vehicle</option>
                <option>Safari Land Cruiser</option>
                <option>Van</option>
                <option>Bus</option>
              </select>
            </div>
            <div className="trip-field">
              <span className="icon"><FaCalendarAlt /></span>
              <input name="date" type="date" onChange={handleChange} />
            </div>
          </div>

          {/* Payment Inputs */}
          <input
            name="phone"
            type="text"
            placeholder="M-Pesa Phone (2547XXXXXXX)"
            required
            onChange={handleChange}
          />
          <input
            name="amount"
            type="number"
            placeholder="Amount (KES)"
            required
            onChange={handleChange}
          />

          <button type="submit" className="pay-btn">
            Pay
          </button>
        </form>

        {/* Payment Modal */}
        {showPaymentPrompt && (
          <div className="payment-prompt">
            <div className="prompt-content">
              <h3>Select Payment Method</h3>
              <button
                className="pay-option"
                onClick={() => handlePaymentSelect("mpesa")}
              >
                M-Pesa
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
