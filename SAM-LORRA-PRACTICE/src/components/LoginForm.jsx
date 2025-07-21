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
    const response = await fetch('http://localhost/auth-backend/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (response.ok && data.status === 'success') {

      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role); // save role for redirect

      // redirect based on role
      if (data.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/user/home');
      }
    } else {
      setError(data.message || 'Invalid login credentials');
    }
  } catch (err) {
    console.error(err);
    setError('Server error. Try again later.');
  }
};
;

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
