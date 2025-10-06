import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="home-holder">
          <Navbar />
        </div>
      </Router>
    </>
  );
}

export default App;
