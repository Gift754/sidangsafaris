import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import Footer from "./components/Footer";
import EmailSubscription from "./components/EmailSubscription";
import DestPage from "./Pages/DestPage";
import BookingPage from "./Pages/BookingPage";

function App() {
  return (
    <>
      <div className="wrapper">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/destination" element={<DestPage />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
          <EmailSubscription />
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
