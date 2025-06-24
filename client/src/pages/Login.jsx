import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import logo from '../assets/nestlogo.png';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error
    const response = await fetch('http://localhost:8000/api/login/', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      navigate('/');
    } else {
      const data = await response.json();
      setError(data.error || 'Invalid credentials');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin} className="auth-card">
        <img src={logo} alt="Logo" className="h-20 mb-9" />
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {error && <div className="auth-error">{error}</div>} {/* Error message */}

        <label className="auth-label">Email</label>
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

        <button type="submit" className="auth-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
