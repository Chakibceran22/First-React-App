import React, { useState } from 'react';
import './signeUp.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://react-app-backend-production-e480.up.railway.app/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const result = await response.json();
      console.log('Response from server:', result);
      alert('user created successfully');
    } catch (error) {
      console.error('Error:', error);
      alert("failed to create user due to network failure or website is down");
    }
  };

  return (
    <div className="container">
      <div className="container2">
        <h1 className="head-title">Sign Up</h1>
        <div className="container4">
          <div className="container3">
            <label htmlFor="username">Username:</label>
            <label htmlFor="email">Email:</label>
            <label htmlFor="password">Password:</label>
          </div>
          <div>
            <form id="signupForm" className="container3" onSubmit={handleSubmit}>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </form>
          </div>
        </div>
        <a
          href="#"
          className="login-button"
          onClick={(e) => {
            e.preventDefault(); // Prevent the default link behavior
            handleSubmit(e); // Call the handleSubmit directly
          }}
        >
          Sign Up
        </a>
        <p className="text-font2">
          Already have an account? <a href="/" className="login-button">Login</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
