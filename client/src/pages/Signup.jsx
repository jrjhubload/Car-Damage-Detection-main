import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import logo from '../assets/nestlogo.png';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous error

    try {
      const response = await fetch('http://localhost:8000/api/signup/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        navigate('/login');
      } else {
        const data = await response.json();
        setErrorMessage(data?.error || 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSignup} className="auth-card">
        <img src={logo} alt="Logo" className="h-20 mb-9" />
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        {errorMessage && (
          <div className="auth-error">{errorMessage}</div>
        )}

        <label className="auth-label">Full Name</label>
        <input
          className="auth-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="auth-label mt-4">Email</label>
        <input
          className="auth-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="auth-label mt-4">Password</label>
        <input
          className="auth-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="auth-button">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
