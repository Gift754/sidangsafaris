import "./Home.css";
import heroImage from "../assets/images/general/Hero.jpg"; // Replace with your safari background

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <h3>DISCOVER YOUR NEXT</h3>
          <h1>ADVENTURE</h1>
          <h2>Your Gateway To Exploring Kenya's Wonders</h2>
          <p>
            Sidang Safaris is a premier tour company based in Kenya, 
            dedicated to providing exceptional travel experiences 
            that showcase the rich cultural heritage, diverse landscapes, 
            and unique wildlife of this East African gem. 
            Established with a passion for exploration and a commitment to excellence, 
            Sidang Safaris has become a trusted name in the travel industry, 
            offering personalized and unforgettable adventures.
          </p>
          <a href="/about" className="btn-learn">Learn More →</a>
        </div>
              <div className="search-section"> 
        <h3>Search Your Adventure</h3>
        <div className="search-bar">
          <select><option>Destination</option></select>
          <input type="date" />
          <select><option>Guests</option></select>
          <input type="number" placeholder="Budget" />
          <button>Search 🔍</button>
        </div>
      </div>
      </section>


    </div>
  );
}
