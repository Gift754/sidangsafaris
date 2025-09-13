import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo/Sidang.svg"; // replace with your actual logo path

export default function Navbar() {
  return (
    <nav className="navbar">
     <div className="logo">
          <img src={logo} alt="Sidang Safaris Logo" />
        </div>
      <div className="nav-container">
        {/* Logo */}
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
          {/* CTA Button */}
          <Link to="/booking" className="btn-book">
            Book Now →
          </Link>
        </ul>

      </div>
    </nav>
  );
}
