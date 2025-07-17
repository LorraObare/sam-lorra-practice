import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import one from '../assets/one.jpg'; // Make sure this is the correct path
import './RegisterForm.css';

export default function RegisterForm() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleRegister = async (e) => {
  e.preventDefault();
  setError(''); // Reset error message

  try {
  console.log("Sending registration to backend...");

  const response = await fetch('http://localhost/auth-backend/register.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: form.name,
        email: form.email,
        password: form.password,
  }),
});

  console.log("Response received", response);

  const data = await response.json();
  if (data.status === 'error') {
  setError(data.message); // "Email already registered."
  return;
}

  if (data.status === 'success') {
  navigate('/dashboard'); // Redirect user directly to dashboard
  } else {
      setError(data.message || 'Registration failed. Try again.');
    }
  } catch (err) {
    console.error('Error:', err);
    setError('Server error. Please try again later.');
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
