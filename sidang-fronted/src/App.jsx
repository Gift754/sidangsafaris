import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DestinationsPage from "./Pages/DestinationsPage";
import Booking from "./Pages/Booking";

function App() {
  return (
    <>
      <div className="wrapper">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/booking" element={<Booking />} /> 
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
