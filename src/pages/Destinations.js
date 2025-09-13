import "./Destinations.css";

export default function Destinations() {
  return (
    <div className="destinations">
      <h1>Discover Your Next Destination</h1>

      <h2>Most Ranked Destinations</h2>
      <div className="cards">
        <div className="card">Masai Mara</div>
        <div className="card">Amboseli</div>
        <div className="card">Lake Nakuru</div>
        <div className="card">Tsavo</div>
      </div>

      <h2>Recent Trips</h2>
      <div className="cards">
        <div className="card">Trip 1</div>
        <div className="card">Trip 2</div>
        <div className="card">Trip 3</div>
        <div className="card">Trip 4</div>
      </div>
    </div>
  );
}
