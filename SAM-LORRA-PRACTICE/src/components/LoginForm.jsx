import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import one from '../assets/one.jpg'; // exact filename & path
import './LoginForm.css';
export default function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async e => {
    e.preventDefault();
    try {
      // Fake API for now
      localStorage.setItem('token', 'demo-token');
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid login credentials');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-image-section">
      <img src={one} alt="Welcome" style={{ width: '100%', height: 'auto' }} />
      </div>

      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}
