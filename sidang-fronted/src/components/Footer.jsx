import React from "react";
import Logo from "../assets/images/logo/Sidang.svg";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <img src={Logo} alt="Logo" className="logo-footer" />
        <div className="social-links">
          <AiFillInstagram className="social-icon" />
          <IoLogoLinkedin className="social-icon" />
          <FaSquareXTwitter className="social-icon" />
          <FaFacebookSquare className="social-icon" />
        </div>
      </div>

      <div className="info">
        <div className="find-me">
          <h3>Phone</h3>
          <p>+254 722 826 464</p>
        </div>
        <div className="find-me">
          <h3>Email</h3>
          <p>info@wankareadventures.co.ke</p>
        </div>
        <div className="find-me">
          <h3>Address</h3>
          <p>Nairobi</p>
          <p>Kenya</p>
        </div>
      </div>

      <div className="quick-links">
        <h3>Quick Links</h3>
        <Link className="foot-links" to="/">
          Home
        </Link>

        <Link className="foot-links" to="/about">
          About Us
        </Link>
        <Link className="foot-links">Contact Us</Link>
        <Link className="foot-links">Our Gallery</Link>
        <Link className="foot-links" to="/book">
          Book Now
        </Link>
        <Link className="foot-links" to="/destinations">
          Destinations
        </Link>
      </div>

      <div className="quick-destinations">
        <h3>Our Destinations</h3>
        <ul>
          <li>Kenya</li>
          <li>Mauritius</li>
          <li>South Africa</li>
          <li>Tanzaniaa</li>
          <li>Amboseli</li>
          <li>Maasai Mara</li>
          <li>Malindi Watamu</li>
          <li>Mombasa North Coast</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
