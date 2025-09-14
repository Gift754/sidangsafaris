import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Booking from "./pages/Booking";
import "./App.css";

function App() {
  return (
    <Router>
      <div id="app-wrapper">
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App; 
