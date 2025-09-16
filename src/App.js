import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Booking from "./pages/Booking";

// Admin
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function AdminLayout({ children }) {
  return <div className="admin-layout">{children}</div>; // Admin pages have no navbar/footer
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PublicLayout>
              <About />
            </PublicLayout>
          }
        />
        <Route
          path="/destinations"
          element={
            <PublicLayout>
              <Destinations />
            </PublicLayout>
          }
        />
        <Route
          path="/booking"
          element={
            <PublicLayout>
              <Booking />
            </PublicLayout>
          }
        />

        {/* Admin routes */}
        <Route
          path="/admin/login"
          element={
            <AdminLayout>
              <AdminLogin />
            </AdminLayout>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
