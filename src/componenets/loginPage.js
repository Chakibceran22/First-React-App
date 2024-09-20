
import './loginPage.css';
import React from 'react';
function Login() {
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
                <a class="submit-button" href="/signeup">SignUp</a>
                <a class="submit-button" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"  >LogIn</a>
            </div>
            </form>
        </div>
    </div>
  );
}

export default Login;
