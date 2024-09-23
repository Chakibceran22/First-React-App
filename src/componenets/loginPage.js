
import './loginPage.css';
import React from 'react';
import {useNavigate} from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/signeup');
    };

  return (
    <div class="container">
        <div class="container2">
        <h1 class="login-sep">Login</h1>
            <form class="login-form">
                <div class="username-container">
                    <label class="text-font" for="username">Username: </label>
                    <input class="form-input" type="text" name="username" id="username" placeholder="Enter your Username" ></input>
                </div>
            <div class="username-container">
                <label class="password-font" for="password">Password:  </label>
                <input class="form-input" type="password" name="password" id="password" placeholder="Enter your Password"></input>

            </div>
            <div class="lower-section">
                <button class="submit-button submit-button-left" onClick={handleSubmit}>SigneUp</button>
                <button class="submit-button submit-button-right" type="submit">Login</button>
            </div>
            </form>
        </div>
    </div>
  );
}
// https://www.youtube.com/watch?v=dQw4w9WgXcQ
export default Login;
