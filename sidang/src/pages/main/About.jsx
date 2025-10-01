import "../../styles/main/About.css";
import CountUp from "react-countup";

export default function About() {
  return (
    <div className="about">
      {/* === ABOUT US Section === */}
      <section className="about-header">
        <h1>ABOUT US</h1>

        {/* Images in grid arrangement */}
        <div className="about-images">
          <img
            src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
            alt="Safari jeep"
          />
          <img
            src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg"
            alt="Tour van"
          />
          <img
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg"
            alt="African landscape"
          />
        </div>

        {/* Company description */}
        <div className="about-description">
          <h2>Sidang</h2>
          <p>
            Sidang is a premier tour company based in Kenya, dedicated to
            providing exceptional travel experiences that showcase the rich
            cultural heritage, diverse landscapes, and unique wildlife of this
            East African gem. Established with a passion for exploration and a
            commitment to excellence, Sidang has become a trusted name in the
            travel industry, offering personalized and unforgettable adventures.
          </p>
        </div>
      </section>

      {/* === Mission Section === */}
      <section className="about-mission">
        <div className="mission-overlay">
          <h2>Mission</h2>
          <p>
            At Sidang, our mission is to enrich lives through transformative
            travel experiences. We strive to create memorable journeys that
            connect people with the beauty, culture, and natural wonders of
            Kenya & Africa, fostering a deep appreciation for our world’s
            diversity.
          </p>
        </div>
      </section>

      {/* === Our Journey Section === */}
      <section className="about-journey">
        <h2>Our Journey</h2>
        <div className="journey-stats">
          <div>
            <h3>
              <CountUp end={20} duration={3} />+
            </h3>
            <p>Years</p>
          </div>
          <div>
            <h3>
              <CountUp end={50} duration={3} />+
            </h3>
            <p>Staff</p>
          </div>
          <div>
            <h3>
              <CountUp end={20000} duration={3} separator="," />+
            </h3>
            <p>Satisfied Customers</p>
          </div>
          <div>
            <h3>
              <CountUp end={500} duration={3} />+
            </h3>
            <p>Destinations</p>
          </div>
        </div>
      </section>
    </div>
  );
}
