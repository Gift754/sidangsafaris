import React from "react";
import tented from "../assets/images/general/tented-camps.jpg";
import balloon from "../assets/images/general/balloon-safari.jpg";
import mara from "../assets/images/general/maasai-mara.jpg";
import nakuru from "../assets/images/general/nakuru-park.jpg";
import samburu from "../assets/images/general/samburu-park.jpg";
import amboseli from "../assets/images/general/tented-camps.jpg";
import RankedCard from "../components/RankedCard";

const ranks = [
  { title: "Tented Camps", image: tented, rating: 4.8 },
  { title: "Balloon Safaris", image: balloon, rating: 4.8 },
  { title: "Maasai Mara", image: mara, rating: 4.8 },
  { title: "Nakuru National Park", image: nakuru, rating: 4.8 },
  { title: "Balloon Safaris", image: balloon, rating: 4.8 },
  { title: "Samburu National Park", image: samburu, rating: 4.8 },
  { title: "Nakuru National Park", image: nakuru, rating: 4.8 },
  { title: "Amboseli National Park", image: amboseli, rating: 4.8 },
];

function RankedSection() {
  return (
    <div className="grid-view">
      {ranks.map((rank, index) => {
        return (
          <RankedCard
            key={index}
            title={rank.title}
            image={rank.image}
            rating={rank.rating}
          />
        );
      })}
    </div>
  );
}

export default RankedSection;
