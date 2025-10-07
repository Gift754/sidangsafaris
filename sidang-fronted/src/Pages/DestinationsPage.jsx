import React from "react";
import DestinationCard from "../components/DestinationCard";
import tented from "../assets/images/general/tented-camps.jpg";
import balloon from "../assets/images/general/balloon-safari.jpg";
import mara from "../assets/images/general/maasai-mara.jpg";
import nakuru from "../assets/images/general/nakuru-park.jpg";
import samburu from "../assets/images/general/samburu-park.jpg";
import amboseli from "../assets/images/general/tented-camps.jpg";

const destinations = [
  { title: "Tented Camps", image: tented },
  { title: "Balloon Safaris", image: balloon },
  { title: "Maasai Mara", image: mara },
  { title: "Nakuru National Park", image: nakuru },
  { title: "Balloon Safaris", image: balloon },
  { title: "Samburu National Park", image: samburu },
  { title: "Nakuru National Park", image: nakuru },
  { title: "Amboseli National Park", image: amboseli },
];

function DestinationsPage() {
  return (
    <div className="DestinationsPage">
      <p className="tags">Get To Explore Different Destinations</p>
      <h2 className="tags">Featured Destinations</h2>
      <div className="grid-view">
        {destinations.map((destination, index) => {
          return (
            <DestinationCard
              key={index}
              title={destination.title}
              image={destination.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DestinationsPage;
