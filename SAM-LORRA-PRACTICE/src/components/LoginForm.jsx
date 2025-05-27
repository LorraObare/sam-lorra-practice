import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import one from '../assets/one.jpg'; // Make sure this path is correct
import './LoginForm.css';

export default function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Simulated login
      localStorage.setItem('token', 'demo-token');
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid login credentials');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-image-section">
        <img src={one} alt="Welcome" className="login-image" />
      </div>

      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
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
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
          <p className="register-link">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
