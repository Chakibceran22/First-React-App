
import './loginPage.css';
import React,{ useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/signeup');
    };
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle login
    const handleLogin = (e) => {
        e.preventDefault(); // Prevent form submission from refreshing the page

        fetch('https://react-app-backend-production-50be.up.railway.app/api/login', {
            method: 'POST', // Use POST method
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                setMessage('Login successful!'); // Success message
            } else {
                setMessage('Invalid credentials. Please try again.'); // Error message
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setMessage('An error occurred. Please try again later.');
        });
    };

  return (
    <div className="container">
        <div className="container2">
        <h1 class="login-sep">Login</h1>
            <form className="login-form" onSubmit={handleLogin}>
                <div className="username-container">
                    <label className="text-font" for="username">Username: </label>
                    <input className="form-input" type="text" name="username" id="username" placeholder="Enter your Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </div>
            <div className="username-container">
                <label className="password-font" for="password">Password:  </label>
                <input className="form-input" type="password" name="password" id="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

            </div>
            <div className="lower-section">
                <button className="submit-button submit-button-left" onClick={handleSubmit}>SigneUp</button>
                <button className="submit-button submit-button-right" type="submit" >Login</button>
            </div>
            </form>
        </div>
    </div>
  );
}
// https://www.youtube.com/watch?v=dQw4w9WgXcQ
export default Login;
