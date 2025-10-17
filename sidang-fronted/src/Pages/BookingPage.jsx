import React, { useState } from "react";

import "..//styles/Booking.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateIcon from "../assets/icons/date.png";
import { FaCaretDown } from "react-icons/fa";
import Vehicle from "../assets/icons/vehicle.png";
import Arrow from "../assets/icons/arrows.png";

function BookingPage() {
  const [startDate, setStartDate] = useState(null);
  const [selected, setSelected] = useState("Regular");
  return (
    <div className="BookingPage">
      <div className="booking-hero">
        <h2 className="heading">BOOKING</h2>
      </div>
      <form action="" className="booking-form">
        <div className="selection">
          <div class="package-toggle">
            {["Regular", "VIP"].map((type) => (
              <button
                key={type}
                type="button"
                className={`toggle-btn ${selected === type ? "active" : ""}`}
                onClick={() => setSelected(type)}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="destination-selection">
            <div className="input-group-2">
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

            <img src={Arrow} alt="" className="arrow" />
            <div className="input-group-2">
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
          <div className="guest">
            <div className="input-group-2">
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
        </div>
        <input type="hidden" name="packageType" value={selected} />
        <div className="formcont">
          <div className="inputs">
            <label htmlFor="name" className="name" id="label">
              First Name
              <input
                type="text"
                name="name"
                id="name"
                placeholder="First Name"
              />
            </label>
            <label htmlFor="name" className="name" id="label">
              Last Name
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Last Name"
              />
            </label>
            <label htmlFor="name" className="name" id="label">
              E-mail
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
              />
            </label>
            <label htmlFor="description" className="description" id="label">
              Description
              <textarea name="description" id="description">
                Any Specifications Regarding your Trip?
              </textarea>
            </label>
            <div className="selects">
              <div className="search-item dest select-item">
                <img
                  src={Vehicle}
                  alt="destination icon"
                  className="search-icon"
                />
                <div className="input-group-2">
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
              <div className="search-item select-item">
                <img src={DateIcon} alt="date icon" className="search-icon" />
                <div className="input-group-2">
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
            </div>

            <button type="submit" className="submitBtn">
              Pay
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookingPage;
