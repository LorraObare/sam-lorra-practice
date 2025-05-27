import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import one from '../assets/one.jpg'; // Make sure this is the correct path
import './RegisterForm.css';

export default function RegisterForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Simulated registration
      localStorage.setItem('token', 'demo-token');
      navigate('/dashboard');
    } catch (err) {
      setError('Registration failed. Try again.');
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-image-section">
        <img src={one} alt="Welcome" className="register-image" />
      </div>

      <div className="register-container">
        <form className="register-form" onSubmit={handleRegister}>
          <h2>Register</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
          {error && <p className="error">{error}</p>}
          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
