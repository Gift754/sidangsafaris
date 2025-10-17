import React from "react";
import "../styles/About.css";
import Safari1 from "../assets/images/general/safari1.png";
import Safari2 from "../assets/images/general/safari2.png";
import Safari3 from "../assets/images/general/safari3.png";
function AboutPage() {
  return (
    <div className="AboutPage">
      <div className="about">
        <h1 className="about-title">ABOUT US</h1>
        <div className="image-layout">
          <img src={Safari1} alt="Safari Car" className="about-img img1" />
          <img src={Safari2} alt="tented camps" className="about-img img2" />
          <img src={Safari3} alt="Balloon Safari" className="about-img img3" />
        </div>
        <div className="about-statement">
          <h2>Sidang</h2>
          Sidang is a premier tour company based in Kenya, dedicated to
          providing exceptional travel experiences that showcase the rich
          cultural heritage, diverse landscapes, and unique wildlife of this
          East African gem. Established with a passion for exploration and a
          commitment to excellence, Sidang has become a trusted name in the
          travel industry, offering personalized and unforgettable adventures.
        </div>
      </div>
      <div className="mission">
        <h2>Mission</h2>
        <div className="statement">
          At Sidang, our mission is to enrich lives through transformative
          travel experiences. We strive to create memorable journeys that
          connect people with the beauty, culture, and natural wonders of Kenya
          & Africa, fostering a deep appreciation for our world's diversity.
        </div>
      </div>

      <div className="reach">
        <h1 className="journey-title">Our Journey</h1>

        <div className="numbers">
          <div className="number-container">
            <h1>20+</h1>
            <p>Years</p>
          </div>
          <div className="number-container">
            <h1>50+</h1>
            <p>Staff</p>
          </div>
          <div className="number-container">
            <h1>20000+</h1>
            <p>Satisfied Customers</p>
          </div>
          <div className="number-container">
            <h1>500+</h1>
            <p>Destinations</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
