import "./Home.css";
import heroImage from "../assets/images/general/Hero.jpg"; 
import {ReactComponent as DestinationIcon} from "../assets/icons/destination.svg";
import {ReactComponent as CalendarIcon} from "../assets/icons/calendar.svg";
import {ReactComponent as GuestsIcon} from "../assets/icons/guests.svg";
import {ReactComponent as PriceIcon} from "../assets/icons/price.svg";
import searchIcon from "../assets/icons/search.svg";
import { useState } from "react";

// Import destination images (you'll need to add these to your assets)
import tentedCampsImage from "../assets/images/general/tented-camps.jpg";
import balloonSafariImage from "../assets/images/general/balloon-safari.jpg";
import maasaiMaraImage from "../assets/images/general/maasai-mara.jpg";
import nakuruParkImage from "../assets/images/general/nakuru-park.jpg";
import samburuParkImage from "../assets/images/general/samburu-park.jpg";

// Import CheckIcon for the offers section
import {ReactComponent as CheckIcon} from "../assets/icons/check.svg";

export default function Home() {
  // Destination data
  const destinations = [
    {
      title: "Tented Camps",
      description: "Experience the wilderness in comfort with our luxury tented camps situated in the heart of nature.",
      image: tentedCampsImage,
    },
    {
      title: "Balloon Safaris",
      description: "Soar above stunning landscapes and witness wildlife from a unique perspective with our balloon safaris.",
      image: balloonSafariImage,
    },
    {
      title: "Maasai Mara",
      description: "Visit one of Africa's most magnificent game reserves, famous for the Great Migration and abundant wildlife.",
      image: maasaiMaraImage,
    },
    {
      title: "Nakuru National Park",
      description: "Famous for its flamingos and diverse birdlife, Lake Nakuru is a birdwatcher's paradise.",
      image: nakuruParkImage,
    },
    {
      title: "Samburu National Park",
      description: "Discover unique wildlife species and experience the rich culture of the Samburu people.",
      image: samburuParkImage,
    }
  ];

  const row1 = destinations.slice(0, 10);
  const row2 = destinations.slice(10, 20);

  // Carousel state for each row
  const [row1Index, setRow1Index] = useState(0);
  const [row2Index, setRow2Index] = useState(0);

  // Carousel navigation handlers
  const handlePrev = (row, setRow, cards) => {
    setRow((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };
  const handleNext = (row, setRow, cards) => {
    setRow((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

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
          {/* Search Header and Search Section in the same div */}
          <div className="search-area">
            <div className="search-header">
              <h3>Search Your Adventure</h3>
            </div>
            <div className="search-section"> 
              {/* Destination */}
              <div className="search-item">
                <DestinationIcon className="icon" />
                <div className="search-text">
                  <label>Destination</label>
                  <select>
                    <option value="">Choose your Destination</option>
                    <option value="maasai-mara">Maasai Mara</option>
                    <option value="amboseli">Amboseli</option>
                    <option value="samburu">Samburu</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="search-item">
                <CalendarIcon className="icon" />
                <div className="search-text">
                  <label>Date</label>
                  <input type="date" />
                </div>
              </div>

              {/* Guests */}
              <div className="search-item">
                <GuestsIcon className="icon" />
                <div className="search-text">
                  <label>Guests</label>
                  <select>
                    <option value="">Select Guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4+">4+ Guests</option>
                  </select>
                </div>
              </div>

              {/* Price */}
              <div className="search-item">
                <PriceIcon className="icon" />
                <div className="search-text">
                  <label>Budget</label>
                  <input type="number" placeholder="Enter amount" />
                </div>
              </div>

              {/* Search Button */}
              <div className="search-item search-button">
                <button>
                  Search <img src={searchIcon} alt="Search Icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="destinations-section">
        <h2 className="section-heading">Get To Explore Different Destinations</h2>
        <p className="section-subheading">Featured Destinations</p>
        <div className="destinations-rows">
          {/* Single Scrollable Row */}
          <div className="carousel-row">
            <button
              className="carousel-arrow left"
              onClick={() => {
                const track = document.querySelector('.carousel-track');
                if (track) track.scrollBy({ left: -400, behavior: 'smooth' });
              }}
              aria-label="Previous"
            >
              &lt;
            </button>
            <div className="carousel-track" style={{ overflowX: "auto", scrollBehavior: "smooth", width: "100%" }}>
              <div className="carousel-cards" style={{ display: "flex", gap: "30px" }}>
                {row1.map((destination, idx) => (
                  <div
                    key={idx}
                    className="destination-card carousel-card"
                    style={{
                      minWidth: "360px",
                      maxWidth: "400px",
                      height: "100%",
                      background: "#fff",
                      borderRadius: "18px",
                      boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start"
                    }}
                  >
                    <div
                      className="card-image"
                      style={{
                        backgroundImage: `url(${destination.image})`,
                        height: "220px",
                        borderRadius: "18px 18px 0 0",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    ></div>
                    <div
                      className="card-content"
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        padding: "24px"
                      }}
                    >
                      <h3 style={{ fontSize: "2rem", marginBottom: "12px" }}>{destination.title}</h3>
                      <p style={{ fontSize: "1.1rem", marginBottom: "18px" }}>{destination.description}</p>
                      <a href="#" className="read-more" style={{ fontSize: "1rem", marginTop: "auto" }}>
                        Explore {destination.title} →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="carousel-arrow right"
              onClick={() => {
                const track = document.querySelector('.carousel-track');
                if (track) track.scrollBy({ left: 400, behavior: 'smooth' });
              }}
              aria-label="Next"
            >
              &gt;
            </button>
          </div>
        </div>
      </section>
      <section>
      
<section className="offers-section">
  <h2 className="offers-heading">Explore Our Offers</h2>
  <p className="offers-subheading">Recommended Packages</p>
  
  <div className="packages-grid">
    {/* Package 1 */}
    <div className="package-card">
      <div className="package-header">
        <h3>Maasai Mara</h3>
        <p className="package-description">Explore Kenya's Wildlife Paradise</p>
        <p className="package-provider">With Christob Tours & Travel Ltd</p>
      </div>
      
      <div className="package-features">
        <div className="feature-item">
          <CheckIcon className="feature-icon" />
          <span>A Visit To A Maasai Village</span>
        </div>
        <div className="feature-item">
          <CheckIcon className="feature-icon" />
          <span>Park Fees And Government Taxes</span>
        </div>
        <div className="feature-item">
          <CheckIcon className="feature-icon" />
          <span>Airport Pick-Up And Escort At The End Of Your Safari</span>
        </div>
      </div>
      
      <div className="package-footer">
        <div className="price-info">
          <span className="per-person">Per Person</span>
          <span className="price">KES 950</span>
        </div>
        <button className="book-now-btn">Book Now</button>
      </div>
    </div>
    
    {/* Package 2 */}
    <div className="package-card">
      <div className="package-header">
        <h3>Maasai Mara</h3>
        <p className="package-description">Explore Kenya's Wildlife Paradise</p>
        <p className="package-provider">With Christob Tours & Travel Ltd</p>
      </div>
      
      <div className="package-features">
        <div className="feature-item">
          <CheckIcon className="feature-icon" />
          <span>A Visit To A Maasai Village</span>
        </div>
        <div className="feature-item">
          <CheckIcon className="feature-icon" />
          <span>Park Fees And Government Taxes</span>
        </div>
        <div className="feature-item">
          <CheckIcon className="feature-icon" />
          <span>Airport Pick-Up And Escort At The End Of Your Safari</span>
        </div>
      </div>
      
      <div className="package-footer">
        <div className="price-info">
          <span className="per-person">Per Person</span>
          <span className="price">KES 950</span>
        </div>
        <button className="book-now-btn">Book Now</button>
      </div>
    </div>
    
    {/* Package 3 */}
    <div className="package-card">
      <div className="package-header">
        <h3>Maasai M.</h3>
        <p className="package-description">Explore Kenya with Christob</p>
        <p className="package-provider">With Christob Tours & Travel Ltd</p>
      </div>
      
      <div className="package-features">
        <div className="feature-item">
          <CheckIcon className="feature-icon" />
          <span>A Visit To A Mark Fees Award</span>
        </div>
        <div className="feature-item">
          <CheckIcon className="feature-icon" />
          <span>Airport Pick-Up and Escort At the End Of Your Safari</span>
        </div>
      </div>
      
      <div className="package-footer">
        <div className="price-info">
          <span className="per-person">Per Person</span>
          <span className="price">KES 950</span>
        </div>
        <button className="book-now-btn">Book Now</button>
      </div>
    </div>
  </div>
</section>
      </section>
      <section>
        {/* Testimonials Section */}
<section className="testimonials-section">
  <div className="container">
    <h2 className="testimonials-heading">What our customers say about us.</h2>
    
    <div className="testimonials-grid">
      {/* Testimonial 1 */}
      <div className="testimonial-card">
        <div className="testimonial-content">
          <p>We had an amazing time on our trip to Kenya with Sidan Adventures. The tour was well-organised and the guides were very knowledgeable.</p>
        </div>
        <div className="testimonial-author">
          {/* Profile picture area (commented out as requested) */}
          {/* <div className="author-image"></div> */}
          <div className="author-details">
            <h4>Abaia Diana</h4>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="testimonial-card">
        <div className="testimonial-content">
          <p>We had an amazing time on our trip to Kenya with Sidan Adventures. The tour was well-organised and the guides were very knowledgeable.</p>
        </div>
        <div className="testimonial-author">
          {/* Profile picture area (commented out as requested) */}
          {/* <div className="author-image"></div> */}
          <div className="author-details">
            <h4>Jim Ahmed</h4>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="testimonial-card">
        <div className="testimonial-content">
          <p>We had an amazing time on our trip to Kenya with Sidan Adventures. The tour was well-organised and the guides were very knowledgeable.</p>
        </div>
        <div className="testimonial-author">
          {/* Profile picture area (commented out as requested) */}
          {/* <div className="author-image"></div> */}
          <div className="author-details">
            <h4>Abala Diana</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </section>
    </div>
  );
}