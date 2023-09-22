import React, { useState } from 'react';
// import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css'
// import ManePages from './components/MainPage'




function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const navigate = useNavigate();

    const handleValidation = () => {
        if (!username && !password) {
            setLoginError("username and password is required");
            return false;
        }
        if (!username) {
            setLoginError("Username is required");
            return false;
        } else if (/[!@#$%^&*()_+{}[\]:;<>,.?~\\]/.test(username)) {
            setLoginError("special characters are not allowed");
            return false;
        }
        if (!password) {
            setLoginError("password is required");
            return false;
        } else if (password.length < 6) {
            setLoginError("Password must have a minimum of 6 characters");
            return false;
        } if (!username && !password) {
            setLoginError("username and password is required");
            return false;
        }
        return true;
    }




const handleLogin = (event) => {
event.preventDefault();
if (!handleValidation()) {
    return;
    }
const data = { username, password };
axios.post('https://backnode-becd.onrender.com/api/login', data)
.then(response => {
console.log(response.data.username);
console.log(response.data.password);
console.log(response.data.s);
// setUsers(response.data)
if (response.data.username) {
sessionStorage.setItem('usesDetailes',JSON.stringify(response.data));
props.onLogin();
navigate('/mainpage');

}

})
.catch(error => {

console.log('Error fetching users:', error);
});



};

return (
<div className="login-container">
<h2 className='login-heading'>Login</h2>
<form className="login-form" onSubmit={handleLogin}>
<input
type="text"
className="login-input"
placeholder="Username"
value={username}
onChange={(e) => setUsername(e.target.value)}
/>
<input
type="password"
className="login-input"
placeholder="Password"
value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="login-button"> {/* Use type="submit" for the button */}
                Login
                </button>
                <p className='login-p'>
                    Don't have an account?{' '}<span
                        className='login-span' onClick={()=>{props.togglesignup()}} style={{ cursor: 'pointer' }}>sign up</span>
                </p>
            </form>
            <div className="login-error-message">{loginError}</div>
        </div>
    );
}

export default Login;