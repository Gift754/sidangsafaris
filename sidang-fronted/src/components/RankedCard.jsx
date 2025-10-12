import React from "react";
import Book from "../assets/icons/pointer.png";
import { FaStar } from "react-icons/fa";
function RankedCard({ image, title, rating }) {
  return (
    <div
      className="destination-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <img src={Book} alt="pointer" className=" pointer" />
      <h3 className="title-ranked">{title}</h3>
      <div className="rate rater">
        <FaStar className="star" /> {rating}
      </div>
    </div>
  );
}

export default RankedCard;
