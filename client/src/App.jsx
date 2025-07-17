import React from "react";
import { useState } from "react";
import Auth from "./pages/auth/Auth";
import LandingPage from "./pages/landing/LandingPage";
import Dashboard from "./pages/home/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
      </Routes>

      <Routes>
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
      </Routes>

      <Routes>
        <Route
          path="/home"
          element={user ? <Dashboard /> : <Navigate to="../auth" />}
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
