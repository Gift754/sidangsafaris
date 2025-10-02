import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import Home from "./pages/main/Home";
import About from "./pages/main/About";
import Destinations from "./pages/main/Destinations";
import Booking from "./pages/main/Booking";
import Contact from "./pages/main/contact";
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
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
