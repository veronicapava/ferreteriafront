import React from "react";
import { useAuth } from "../../context/authContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  return user ? <Outlet /> : <Navigate to="/login" />;
  return <>{children}</>;
};

export default ProtectedRoute;
