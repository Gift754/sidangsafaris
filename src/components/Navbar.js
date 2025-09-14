import { Link } from "react-router-dom";
import "./Navbar.css";
import { ReactComponent as Logo } from "../assets/images/logo/Sidang.svg"; 
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <Logo className="logo-svg" alt="Sidang Safaris Logo" />
        </div>

        {/* Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
            <span>Explore ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/destinations">Destinations</Link></li>
              <li><Link to="/packages">Packages</Link></li>
            </ul>
          </li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        {/* CTA Button */}
        <Link to="/booking" className="btn-book">
          Book Now →
        </Link>
      </div>
    </nav>
  );
}
