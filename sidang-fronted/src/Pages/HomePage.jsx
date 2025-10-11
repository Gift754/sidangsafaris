import React, { useState } from "react";
import "../styles/Home.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Book from "../assets/icons/pointer.png";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import Destination from "../assets/icons/destination.png";
import DateIcon from "../assets/icons/date.png"; // renamed to avoid clash with JS Date
import Guests from "../assets/icons/guests.png";
import Price from "../assets/icons/price.png";
import DestinationsPage from "./DestinationsPage";
import Packages from "../components/Packages";
import Contact from "../components/Contact";

function HomePage() {
  const [startDate, setStartDate] = useState(null);

  return (
    <div className="landing">
      <div className="HomePage">
        <p className="head1">DISCOVER YOUR NEXT</p>
        <h1 className="head2">ADVENTURE</h1>

        <div className="hero">
          <h3 className="head3">Your gateway to exploring Kenya's wonders</h3>
          Sidan Adventures is a premier tour company based in Kenya, dedicated
          to providing exceptional travel experiences that showcase the rich
          cultural heritage, diverse landscapes, and unique wildlife of this
          East African gem. Established with a passion for exploration and a
          commitment to excellence, Sidang Safaris has become a trusted name in
          the travel industry, offering personalized and unforgettable
          adventures.
        </div>

        <Link to="/about" className="aboutLink">
          <button className="desktopAbout">
            <p>Learn More</p>
            <img src={Book} alt="Book Icon" className="book" />
          </button>
        </Link>

        <p className="adventure">Search Your Adventure</p>

        <form className="search-bar">
          <div className="search-container">
            {/* Destination */}
            <div className="search-item dest">
              <img
                src={Destination}
                alt="destination icon"
                className="search-icon"
              />
              <div className="input-group">
                <label htmlFor="destination">
                  Destination <FaCaretDown className="caret" />
                </label>
                <select id="destination" name="destination" defaultValue="">
                  <option value="" disabled hidden className="rare">
                    Choose your destination
                  </option>
                  <option value="Nairobi">Nairobi</option>
                  <option value="Mombasa">Mombasa</option>
                  <option value="Maasai Mara">Maasai Mara</option>
                </select>
              </div>
            </div>

            {/* Date */}
            <div className="search-item">
              <img src={DateIcon} alt="date icon" className="search-icon" />
              <div className="input-group">
                <label htmlFor="date">
                  Date <FaCaretDown className="caret" />
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Choose your date"
                  className="date-input"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="search-item">
              <img src={Guests} alt="guests icon" className="search-icon" />
              <div className="input-group">
                <label htmlFor="guests">
                  Guests <FaCaretDown className="caret" />
                </label>
                <input
                  type="text"
                  placeholder="Input Number of Guests"
                  name="guests"
                />
              </div>
            </div>

            {/* Price */}
            <div className="search-item">
              <img src={Price} alt="price icon" className="search-icon" />
              <div className="input-group">
                <label htmlFor="price">
                  Price <FaCaretDown className="caret" />
                </label>
                <input
                  id="price"
                  type="number"
                  name="price"
                  placeholder="Max price"
                />
              </div>
            </div>

            <button type="submit" className="search-button">
              Search
              <FiSearch className="search-icon-btn" />
            </button>
          </div>
        </form>
      </div>
      <DestinationsPage />
      <Packages />
      <Contact />
    </div>
  );
}

export default HomePage;
