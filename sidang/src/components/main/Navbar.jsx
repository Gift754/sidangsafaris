import { Link, useLocation } from "react-router-dom";
import "../../styles/main/Navbar.css";
import Logo from "../../assets/images/logo/Sidang.svg";
import { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.location.reload();
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={handleHomeClick}>
            <img src={Logo} alt="Sidang Safaris Logo" className="logo-svg" />
          </Link>
        </div>

        {/* Hamburger icon for small screens */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
        </div>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={handleHomeClick}>
              Home
            </Link>
          </li>
          <li className="dropdown">
            <span>Explore ▾</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/destinations">Destinations</Link>
              </li>
              <li>
                <Link to="/packages">Packages</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          {/* Book Now inside nav for small screens */}
          <li className="mobile-book">
            <Link to="/booking" className="btn-book">
              Book Now →
            </Link>
          </li>
        </ul>

        {/* Book Now for large screens */}
        <div className="desktop-book">
          <Link to="/booking" className="btn-book">
            Book Now →
          </Link>
        </div>
      </div>
    </nav>
  );
}
