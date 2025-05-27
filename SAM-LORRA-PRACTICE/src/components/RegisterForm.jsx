// RegisterForm.jsx
import axios from 'axios';
import React, { useState } from 'react';

export default function RegisterForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/register', form);
      setMessage('Registered successfully! You can now log in.');
    } catch (err) {
      setMessage('Error registering user.');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="text" name="name" onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
      <button type="submit">Register</button>
      <p>{message}</p>
    </form>
  );
}
