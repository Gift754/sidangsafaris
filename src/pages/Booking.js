import "./Booking.css";

export default function Booking() {
  return (
    <div className="booking">
      <h1>Booking</h1>
      <form className="booking-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Phone" required />
        <input type="text" placeholder="Destination" required />
        <input type="date" required />
        <button type="submit" className="btn">Book Now</button>
      </form>
    </div>
  );
}
