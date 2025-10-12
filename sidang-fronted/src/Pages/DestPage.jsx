import React from "react";
import DestinationsPage from "./DestinationsPage";
import "../styles/Dest.css";
import RankedSection from "./RankedSection";

function DestPage() {
  return (
    <div className="DestPage">
      <div className="about-hero">
        <p className="head1">DISCOVER YOUR NEXT</p>
        <h1 className="head2">DESTINATION</h1>

        <div className="hero">
          Let us interest you with our most featured destinations, the recent
          ones and the most rated ones as well for your own reference during
          booking. this will help you decide the best destinations for a
          vacation, an organisations team building, a honey moon or just even a
          place to chill with family and friends to take off that steam that has
          been accumulating over time.
        </div>
      </div>
      <div className="DestinationsPage">
        <p className="tags tag">Destinations By Rank</p>
        <h2 className="tags">Most Ranked Destinations</h2>
        <RankedSection />
      </div>
      <div className="DestinationsPage">
        <p className="tags tag">Get To Explore Different Destinations</p>
        <h2 className="tags">Featured Destinations</h2>
        <DestinationsPage />
      </div>
    </div>
  );
}

export default DestPage;
