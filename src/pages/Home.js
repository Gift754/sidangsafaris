import "./Home.css";
import heroImage from "../assets/images/general/Hero.jpg"; 
import destinationIcon from "../assets/icons/destination.svg";
import calendarIcon from "../assets/icons/calendar.svg";
import guestsIcon from "../assets/icons/guests.svg";
import priceIcon from "../assets/icons/price.svg";
import searchIcon from "../assets/icons/search.svg";

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
          <div className="btn-learn">
            <a href="/about" id="LearnMore">Learn More →</a>
          </div>
        </div>

        <div className="search-header">
          <h3>Search Your Adventure</h3>
        </div>

        {/* Search Section */}
        <div className="search-section"> 
          {/* Destination */}
          <label className="search-item">
            <img src={destinationIcon} alt="Destination Icon" className="icon" />
            <div className="search-text">
              <label>Destination</label>
              <span>Choose your Destination</span>
            </div>
            <select>
              <option value="">Choose your Destination</option>
              <option value="maasai-mara">Maasai Mara</option>
              <option value="amboseli">Amboseli</option>
              <option value="samburu">Samburu</option>
            </select>
          </label>

          {/* Date */}
          <label className="search-item">
            <img src={calendarIcon} alt="Date Icon" className="icon" />
            <div className="search-text">
              <label>Date</label>
              <span>Choose your dates</span>
            </div>
            <input type="date" />
          </label>

          {/* Guests */}
          <label className="search-item">
            <img src={guestsIcon} alt="Guests Icon" className="icon" />
            <div className="search-text">
              <label>Guests</label>
              <span>Select Number of Guests</span>
            </div>
            <select>
              <option value="">Guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4+">4+ Guests</option>
            </select>
          </label>

          {/* Price */}
          <label className="search-item">
            <img src={priceIcon} alt="Price Icon" className="icon" />
            <div className="search-text">
              <label>Price</label>
              <span>Set your Budget</span>
            </div>
            <input type="number" placeholder="Budget" />
          </label>

          {/* Search Button */}
          <div className="search-item search-button">
            <button>
              Search <img src={searchIcon} alt="Search Icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
