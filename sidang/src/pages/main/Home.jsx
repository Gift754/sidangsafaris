import "../../styles/main/Home.css";
import heroImage from "../../assets/images/general/Hero.jpg";
import { IoMdSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

import {
  FaCalendarDays,
  FaPeopleGroup,
  FaDollarSign,
  FaCheck,
} from "react-icons/fa6";
import { useRef, useState, useEffect } from "react";

// Destination images
import tentedCampsImage from "../../assets/images/general/tented-camps.jpg";
import balloonSafariImage from "../../assets/images/general/balloon-safari.jpg";
import maasaiMaraImage from "../../assets/images/general/maasai-mara.jpg";
import nakuruParkImage from "../../assets/images/general/nakuru-park.jpg";
import samburuParkImage from "../../assets/images/general/samburu-park.jpg";

const CARDS_PER_VIEW = 3;
const OFFERS_PER_VIEW = 3;

export default function Home() {
  const destinations = [
    {
      title: "Tented Camps",
      description: "Experience the wilderness in comfort...",
      image: tentedCampsImage,
    },
    {
      title: "Balloon Safaris",
      description: "Soar above stunning landscapes...",
      image: balloonSafariImage,
    },
    {
      title: "Maasai Mara",
      description: "Visit one of Africa's most magnificent game reserves...",
      image: maasaiMaraImage,
    },
    {
      title: "Nakuru National Park",
      description: "Famous for its flamingos...",
      image: nakuruParkImage,
    },
    {
      title: "Samburu National Park",
      description: "Discover unique wildlife species...",
      image: samburuParkImage,
    },
  ];

  const offers = [
    {
      title: "Maasai Mara",
      description: "Explore Kenya's Wildlife Paradise",
      provider: "With Christob Tours & Travel Ltd",
      features: [
        "A Visit To A Maasai Village",
        "Park Fees And Government Taxes",
        "Airport Pick-Up And Escort At The End Of Your Safari",
      ],
      price: "KES 950",
    },
    {
      title: "Amboseli Adventure",
      description: "See Kilimanjaro's Majestic Views",
      provider: "With Amboseli Safaris",
      features: ["Game Drives", "All Meals Included", "Guided Nature Walks"],
      price: "KES 1200",
    },
    {
      title: "Samburu Experience",
      description: "Discover Unique Wildlife",
      provider: "With Samburu Expeditions",
      features: ["Cultural Visits", "Luxury Tented Camps", "River Safari"],
      price: "KES 1100",
    },
    // add more offers...
  ];

  // Refs and states for carousel scroll tracking
  const destTrackRef = useRef(null);
  const offersTrackRef = useRef(null);
  const [destIndex, setDestIndex] = useState(0);
  const [offersIndex, setOffersIndex] = useState(0);

  useEffect(() => {
    const track = destTrackRef.current;
    if (!track) return;
    const handleScroll = () => {
      const cardWidth = 380 + 30;
      setDestIndex(Math.round(track.scrollLeft / cardWidth));
    };
    track.addEventListener("scroll", handleScroll);
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const track = offersTrackRef.current;
    if (!track) return;
    const handleScroll = () => {
      const cardWidth = 350 + 30;
      setOffersIndex(
        Math.round(track.scrollLeft / (cardWidth * OFFERS_PER_VIEW))
      );
    };
    track.addEventListener("scroll", handleScroll);
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  const numDots = Math.ceil(destinations.length / CARDS_PER_VIEW);
  const numOfferDots = Math.ceil(offers.length / OFFERS_PER_VIEW);

  return (
    <div className="home">
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <h3 className="hero-header">DISCOVER YOUR NEXT</h3>
          <h1 className="HeroHeader">ADVENTURE</h1>
          <h2 className="hero-Subheader">
            Your Gateway To Exploring Kenya's Wonders
          </h2>
          <p>
            Sidang Safaris is a premier tour company based in Kenya, dedicated
            to providing exceptional travel experiences that showcase the rich
            cultural heritage, diverse landscapes, and unique wildlife of this
            East African gem. Established with a passion for exploration and a
            commitment to excellence, Sidang Safaris has become a trusted name
            in the travel industry, offering personalized and unforgettable
            adventures.
          </p>
          <div className="btn-learn">
            <a href="/about" id="LearnMore">
              Learn More →
            </a>
          </div>

          {/* Search Section */}
          <div className="search-area">
            <div className="search-header">
              <h3>Search Your Adventure</h3>
            </div>
            <div className="search-section">
              {[
                {
                  icon: <IoLocationOutline />,
                  label: "Destination",
                  type: "select",
                  options: [
                    "Choose your Destination",
                    "Maasai Mara",
                    "Amboseli",
                    "Samburu",
                  ],
                },
                { icon: <FaCalendarDays />, label: "Date", type: "date" },
                {
                  icon: <FaPeopleGroup />,
                  label: "Guests",
                  type: "select",
                  options: [
                    "Select Guests",
                    "1 Guest",
                    "2 Guests",
                    "3 Guests",
                    "4+ Guests",
                  ],
                },
                {
                  icon: <FaDollarSign />,
                  label: "Budget",
                  type: "number",
                  placeholder: "Enter amount",
                },
              ].map((item, idx) => (
                <div key={idx} className="search-item">
                  {item.icon}
                  <div className="search-text">
                    <label>{item.label}</label>
                    {item.type === "select" ? (
                      <select>
                        {item.options.map((opt, i) => (
                          <option key={i}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={item.type}
                        placeholder={item.placeholder || ""}
                      />
                    )}
                  </div>
                </div>
              ))}
              <div className="search-item search-button">
                <button>
                  <IoMdSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="destinations-section">
        <h2 className="section-heading">
          Get To Explore Different Destinations
        </h2>
        <p className="section-subheading">Featured Destinations</p>
        <div className="scroll">
          <div className="carousel-row">
            <div className="carousel-track" ref={destTrackRef}>
              <div className="carousel-cards">
                {destinations.map((dest, idx) => (
                  <div key={idx} className="destination-card">
                    <div
                      className="card-image"
                      style={{ backgroundImage: `url(${dest.image})` }}
                    ></div>
                    <div className="card-content">
                      <h3>{dest.title}</h3>
                      <p>{dest.description}</p>
                      <a href="#" className="read-more">
                        Explore {dest.title} →
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
                  className={`carousel-dot${
                    destIndex === idx ? " active" : ""
                  }`}
                  onClick={() =>
                    destTrackRef.current.scrollTo({
                      left: idx * (380 + 30) * CARDS_PER_VIEW,
                      behavior: "smooth",
                    })
                  }
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="offers-section">
        <h2 className="offers-heading">Explore Our Offers</h2>
        <p className="offers-subheading">Recommended Packages</p>
        <div className="scroll2">
          <div className="offers-carousel-row">
            <div className="offers-carousel-track" ref={offersTrackRef}>
              <div className="offers-carousel-cards">
                {offers.map((offer, idx) => (
                  <div key={idx} className="package-card offers-carousel-card">
                    <div className="package-header">
                      <h3>{offer.title}</h3>
                      <p className="package-description">{offer.description}</p>
                      <p className="package-provider">{offer.provider}</p>
                    </div>
                    <div className="package-features">
                      {offer.features.map((feat, fidx) => (
                        <div className="feature-item" key={fidx}>
                          <span className="feature-icon">✔</span>
                          <span>{feat}</span>
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
                  className={`carousel-dot${
                    offersIndex === idx ? " active" : ""
                  }`}
                  onClick={() =>
                    offersTrackRef.current.scrollTo({
                      left: idx * (350 + 30) * OFFERS_PER_VIEW,
                      behavior: "smooth",
                    })
                  }
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
