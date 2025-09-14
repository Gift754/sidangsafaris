import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo/Sidang.svg"; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Sidang Safaris Logo" />
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
