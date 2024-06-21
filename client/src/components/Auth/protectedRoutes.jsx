import React from "react";
import { Navigate, Outlet } from "react-router-dom";
export default function protectedRoutes() {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/sign-in" />;
  return <Outlet />;
}
