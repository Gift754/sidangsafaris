import React from "react";
import Logo from "../assets/images/logo/sidang_logo.svg";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import Book from "../assets/icons/pointer.png";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [ham, setHam] = useState(false);

  const handleClick = () => {
    setHam(!ham);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToContact: true } });
    } else {
      const contactSection = document.getElementById("contact");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <img src={Logo} alt="Sidang Logo" className="logo" />

      <nav className={`topNav ${ham ? "showMenu" : ""}`}>
        <Link className="navlist" to="/" onClick={handleClick}>
          Home
        </Link>
        <div className="hover-content">
          <Link className="navlist explore" onClick={handleOpen}>
            Explore
            <FaCaretDown className="dropIcon" />
          </Link>
          {open && (
            <div className={`hoverNav ${open ? "show" : ""}`}>
              <Link
                className="navhover"
                to="about"
                onClick={() => {
                  handleClick();
                  handleOpen();
                }}
              >
                About Us
              </Link>
              <Link
                className="navhover"
                to="destination"
                onClick={() => {
                  handleClick();
                  handleOpen();
                }}
              >
                Destinations
              </Link>
            </div>
          )}
        </div>

        <Link className="navlist" to="/booking" onClick={handleClick}>
          Booking
        </Link>

        <Link
          className="navlist"
          onClick={() => {
            handleContactClick();
            handleClick();
          }}
        >
          Contact Us
        </Link>
      </nav>
      <Link to="/book" className="bookLink">
        <button className="desktopBook">
          <p>Book Now</p>

          <img src={Book} alt="Book Icon" className="book" />
        </button>
      </Link>

      <div className="hamburger" onClick={handleClick}>
        {ham ? (
          <HiX size={28} className="ham" />
        ) : (
          <HiMenu size={28} className="close-icon" />
        )}
      </div>
    </div>
  );
}

export default Navbar;
