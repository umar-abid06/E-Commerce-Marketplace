import Cookies from "js-cookie";
import { Route, Navigate, Routes } from "react-router-dom";
import React, { Component } from "react";

const ProtectedRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  const token = Cookies.get("Token");
  if (token) {
    return <Route {...rest} element={<Component />} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
