import React from "react";
import Book from "../assets/icons/pointer.png";

function DestinationCard({ title, image }) {
  return (
    <div
      className="destination-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <img src={Book} alt="pointer" className=" pointer" />
      <h3 className="title">{title}</h3>
    </div>
  );
}

export default DestinationCard;
