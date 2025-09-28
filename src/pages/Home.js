import "./Home.css";
import heroImage from "../assets/images/general/Hero.jpg"; 
import {ReactComponent as DestinationIcon} from "../assets/icons/destination.svg";
import {ReactComponent as CalendarIcon} from "../assets/icons/calendar.svg";
import {ReactComponent as GuestsIcon} from "../assets/icons/guests.svg";
import {ReactComponent as PriceIcon} from "../assets/icons/price.svg";
import searchIcon from "../assets/icons/search.svg";
import { useRef, useState, useEffect } from "react";

// Import destination images (you'll need to add these to your assets)
import tentedCampsImage from "../assets/images/general/tented-camps.jpg";
import balloonSafariImage from "../assets/images/general/balloon-safari.jpg";
import maasaiMaraImage from "../assets/images/general/maasai-mara.jpg";
import nakuruParkImage from "../assets/images/general/nakuru-park.jpg";
import samburuParkImage from "../assets/images/general/samburu-park.jpg";

// Import CheckIcon for the offers section
import {ReactComponent as CheckIcon} from "../assets/icons/check.svg";

const CARDS_PER_VIEW = 3; // Change to your desired number of visible cards
const OFFERS_PER_VIEW = 3; // Number of visible offer cards

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

  // Carousel state for destinations dots
  const [destIndex, setDestIndex] = useState(0);
  const destTrackRef = useRef(null);

  useEffect(() => {
    const track = destTrackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const cardWidth = 380 + 30; // card width + gap (match your CSS)
      const scrollLeft = track.scrollLeft;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setDestIndex(newIndex);
    };

    track.addEventListener("scroll", handleScroll);
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate number of dots dynamically
  const numDots = Math.max(1, Math.ceil(row1.length / CARDS_PER_VIEW));

  // Carousel navigation handlers
  const handlePrev = (row, setRow, cards) => {
    setRow((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };
  const handleNext = (row, setRow, cards) => {
    setRow((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  // Sample offers data (add more for testing)
  const offers = [
    {
      title: "Maasai Mara",
      description: "Explore Kenya's Wildlife Paradise",
      provider: "With Christob Tours & Travel Ltd",
      features: [
        "A Visit To A Maasai Village",
        "Park Fees And Government Taxes",
        "Airport Pick-Up And Escort At The End Of Your Safari"
      ],
      price: "KES 950"
    },
    {
      title: "Amboseli Adventure",
      description: "See Kilimanjaro's Majestic Views",
      provider: "With Amboseli Safaris",
      features: [
        "Game Drives",
        "All Meals Included",
        "Guided Nature Walks"
      ],
      price: "KES 1200"
    },
    {
      title: "Samburu Experience",
      description: "Discover Unique Wildlife",
      provider: "With Samburu Expeditions",
      features: [
        "Cultural Visits",
        "Luxury Tented Camps",
        "River Safari"
      ],
      price: "KES 1100"
    },
    {
      title: "Lake Nakuru Birding",
      description: "Birdwatcher's Paradise",
      provider: "With Nakuru Bird Tours",
      features: [
        "Flamingo Watching",
        "Park Fees Included",
        "Expert Bird Guides"
      ],
      price: "KES 800"
    },
    {
      title: "Balloon Safari",
      description: "Soar Above the Savannah",
      provider: "With Balloon Safaris Kenya",
      features: [
        "Sunrise Balloon Ride",
        "Champagne Breakfast",
        "Wildlife Spotting"
      ],
      price: "KES 2000"
    },
    {
      title: "Tsavo Explorer",
      description: "Vast Wilderness Awaits",
      provider: "With Tsavo Tours",
      features: [
        "Big Five Safari",
        "Luxury Lodge Stay",
        "Scenic Drives"
      ],
      price: "KES 1500"
    },
    {
      title: "Nairobi City Tour",
      description: "Discover Urban Kenya",
      provider: "With Nairobi Excursions",
      features: [
        "Museum Visits",
        "Giraffe Centre",
        "Karen Blixen House"
      ],
      price: "KES 600"
    }
    // Add more offers as needed for testing
  ];

  // Carousel state for offers dots
  const [offersIndex, setOffersIndex] = useState(0);
  const offersTrackRef = useRef(null);

  useEffect(() => {
    const track = offersTrackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const cardWidth = 350 + 30; // card width + gap (match your CSS)
      const scrollLeft = track.scrollLeft;
      const newIndex = Math.round(scrollLeft / (cardWidth * OFFERS_PER_VIEW));
      setOffersIndex(newIndex);
    };

    track.addEventListener("scroll", handleScroll);
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate number of dots dynamically
  const numOfferDots = Math.max(1, Math.ceil(offers.length / OFFERS_PER_VIEW));

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <h3 className="hero-header">DISCOVER YOUR NEXT</h3>
          <h1 className="HeroHeader" >ADVENTURE</h1>
          <h2 className="hero-Subheader">Your Gateway To Exploring Kenya's Wonders</h2>
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
          <div className="carousel-row">
            <div
              className="carousel-track"
              ref={destTrackRef}
              style={{ overflowX: "auto", scrollBehavior: "smooth", width: "100%" }}
            >
              <div className="carousel-cards" style={{ display: "flex", gap: "30px" }}>
                {row1.map((destination, idx) => (
                  <div
                    key={idx}
                    className="destination-card carousel-card"
                    style={{
                      minWidth: "380px",
                      maxWidth: "380px",
                      height: "480px",
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
                        height: "200px",
                        borderRadius: "18px 18px 0 0",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    ></div>
                    <div className="card-content">
                      <h3>{destination.title}</h3>
                      <p>{destination.description}</p>
                      <a href="#" className="read-more">
                        Explore {destination.title} →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-dots">
              {Array.from({ length: numDots }).map((_, idx) => (
                <span
                  key={idx}
                  className={`carousel-dot${destIndex === idx ? " active" : ""}`}
                  onClick={() => {
                    if (destTrackRef.current) {
                      const cardWidth = 380 + 30;
                      destTrackRef.current.scrollTo({ left: idx * cardWidth * CARDS_PER_VIEW, behavior: "smooth" });
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
      
<section className="offers-section">
  <h2 className="offers-heading">Explore Our Offers</h2>
  <p className="offers-subheading">Recommended Packages</p>
  
  <div className="offers-carousel-row">
    <div
      className="offers-carousel-track"
      ref={offersTrackRef}
      style={{ overflowX: "auto", scrollBehavior: "smooth", width: "100%" }}
    >
      <div className="offers-carousel-cards" style={{ display: "flex", gap: "30px" }}>
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className="package-card offers-carousel-card"
            style={{
              minWidth: "350px",
              maxWidth: "350px",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              marginRight: "30px"
            }}
          >
            <div className="package-header">
              <h3>{offer.title}</h3>
              <p className="package-description">{offer.description}</p>
              <p className="package-provider">{offer.provider}</p>
            </div>
            <div className="package-features">
              {offer.features.map((feature, fidx) => (
                <div className="feature-item" key={fidx}>
                  {/* Replace with your CheckIcon if available */}
                  <span className="feature-icon">✔</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="package-footer">
              <div className="price-info">
                <span className="per-person">Per Person</span>
                <span className="price">{offer.price}</span>
              </div>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="carousel-dots">
      {Array.from({ length: numOfferDots }).map((_, idx) => (
        <span
          key={idx}
          className={`carousel-dot${offersIndex === idx ? " active" : ""}`}
          onClick={() => {
            if (offersTrackRef.current) {
              const cardWidth = 350 + 30;
              offersTrackRef.current.scrollTo({ left: idx * cardWidth * OFFERS_PER_VIEW, behavior: "smooth" });
            }
          }}
        />
      ))}
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