import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
