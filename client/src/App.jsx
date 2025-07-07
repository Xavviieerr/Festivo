import { useState } from "react";
import Auth from "./pages/auth/Auth";
import LandingPage from "./pages/landing/LandingPage";
import Dashboard from "./pages/home/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = true; //will be gotten from global store using redux
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>

      <Routes>
        <Route path="/home" element={<Dashboard />} />
      </Routes>
      {/* <LandingPage /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
