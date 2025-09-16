import React, { useState } from "react";
import "./Admin.css";

export default function AdminDashboard() {
  const [destinations, setDestinations] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [packages, setPackages] = useState([]);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Manage Destinations */}
      <section>
        <h2>Destinations</h2>
        <button>Add Destination</button>
      </section>

      {/* Manage Gallery */}
      <section>
        <h2>Gallery</h2>
        <button>Upload Photo</button>
      </section>

      {/* Manage Admins */}
      <section>
        <h2>Admins</h2>
        <button>Register New Admin</button>
      </section>

      {/* Manage Packages */}
      <section>
        <h2>Packages & Pricing</h2>
        <button>Update Packages</button>
      </section>
    </div>
  );
}
