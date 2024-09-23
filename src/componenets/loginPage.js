
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

    // Function to handle login
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://react-app-backend-production-3558.up.railway.app/api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const result = await response.json();
            console.log('Response from server:', result);
            if(result)
            {
                alert('login successfully');
            }
            else
            {
                alert('Invalid username or password');
            }
        } catch (error) {
            console.error('Error:', error);
            alert("failed to login due to network failure or website is down");
        }
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
                <button className="submit-button submit-button-right" type="submit" onClick={handleLogin}>Login</button>
            </div>
            </form>
        </div>
    </div>
  );
}
// https://www.youtube.com/watch?v=dQw4w9WgXcQ
export default Login;
