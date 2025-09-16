// src/admin/RequireAdmin.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAdmin({ children }) {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const location = useLocation();

  if (!isAdmin) {
    // redirect to login, keep intended path in state
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
}
