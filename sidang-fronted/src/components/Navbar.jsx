import React from "react";
import Logo from "../assets/images/logo/sidang_logo.svg";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import Book from "../assets/icons/image.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="Sidang Logo" className="logo" />

      <nav className="topNav">
        <Link className="navlist" to="/">
          Home
        </Link>
        <div className="hover-content">
          <Link className="navlist" to="/explore">
            Explore
            <FaCaretDown className="dropIcon" />
          </Link>
          <div className="hoverNav">
            <Link className="navhover" to="about">
              About Us
            </Link>
            <Link className="navhover" to="destination">
              Destinations
            </Link>
          </div>
        </div>

        <Link className="navlist" to="/booking">
          Booking
        </Link>

        <Link className="navlist" to="/contact">
          Contact Us
        </Link>
      </nav>
      <Link to="/book" className="bookLink">
        <button className="desktopBook">
          <p>Book Now</p>

          <img src={Book} alt="Book Icon" className="book" />
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
