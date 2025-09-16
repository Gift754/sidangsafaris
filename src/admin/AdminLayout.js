// src/admin/AdminLayout.js
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Admin.css";

export default function AdminLayout() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("isAdmin");
    navigate("/admin/login", { replace: true });
  }

  return (
    <div className="admin-root">
      <aside className="admin-sidebar">
        <div className="admin-logo">Sidang Admin</div>
        <nav>
          <ul>
            <li><Link to="/admin">Dashboard</Link></li>
            <li><Link to="/admin/destinations">Destinations</Link></li>
            <li><Link to="/admin/gallery">Gallery</Link></li>
            <li><Link to="/admin/packages">Packages</Link></li>
            <li><Link to="/admin/users">Admins</Link></li>
          </ul>
        </nav>
        <button className="admin-logout" onClick={logout}>Logout</button>
      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
