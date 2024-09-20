import react from 'react';
import './signeUp.css';

function signeUp() {
    return(
        <div class="container">
        <div class="container2">
            <h1 class="head-title">Sign Up</h1>
            <div class="container4">
                <div class="container3">
                    <label for="username">Username:</label>
                    <label for="email">Email:</label>
                    <label for="password">Password:</label>
                </div>
                <div>
                    <form class="container3">
                        <input type="text" id="username" name="username" placeholder="Username"></input>
                        <input type="email" id="email" name="email" placeholder="Email"></input>
                        <input type="password" id="password" name="password" placeholder="Password"></input>
                    </form>
                </div>
            </div>
            <a href="" class='login-button'>signeUp</a>
            <p class="text-font2">already have an account <a href="/" class="login-button">Login</a></p>
        </div>
    </div>
    ); }
export default signeUp;