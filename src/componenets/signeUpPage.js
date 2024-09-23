import React, { useState } from 'react';
import './signeUp.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleNavigate = (e) =>{
    e.preventDefault();
    navigate('/');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch("https://react-app-backend-production-50be.up.railway.app/api/signeup", {
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
        <button type="submit" form="signupForm" className="login-button" onClick={handleSubmit}>SigneUp</button>
        <p className="text-font2">
          Already have an account? <button className='login-button' onClick={handleNavigate}>Login</button>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
