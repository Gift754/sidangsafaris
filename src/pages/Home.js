import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>DISCOVER YOUR NEXT ADVENTURE</h1>
        <p>Your Gateway To Exploring Kenya's Wonders</p>
        <button className="btn">Search Your Adventure</button>
      </section>

      <section className="featured">
        <h2>Featured Destinations</h2>
        <div className="cards">
          <div className="card">Destination 1</div>
          <div className="card">Destination 2</div>
          <div className="card">Destination 3</div>
          <div className="card">Destination 4</div>
        </div>
      </section>

      <section className="packages">
        <h2>Recommended Packages</h2>
        <div className="package-card">Masai Mara Safari</div>
        <div className="package-card">Lake Nakuru Tour</div>
        <div className="package-card">Amboseli Experience</div>
      </section>

      <section className="testimonials">
        <h2>What our customers say about us</h2>
        <div className="testimonial">“Amazing trip!” - Jane</div>
        <div className="testimonial">“Unforgettable safari!” - John</div>
        <div className="testimonial">“Best service ever!” - Mary</div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message"></textarea>
          <button type="submit" className="btn">Send</button>
        </form>
      </section>
    </div>
  );
}
