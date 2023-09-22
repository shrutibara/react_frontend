import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './signup.css';



const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        const data = {
            username,
            email,
            password,
        };



        axios
            .post('http://https://backnode-becd.onrender.com:4000/users/register', data)
            .then((response) => {
                console.log('Response status:', response.status);
                if (response.status === 200) {
                props.onLogin()
                navigate('/home');
                } else {
                    console.log('failed to post');
                }
            });

    };

    // Update the button disabled state based on validation


    return (
        <div className='signup-container'>
            <h2 className='signup-heading'>Sign Up</h2>
            <form className="signup-form" onSubmit={handleSignup}>
                <input
                    className='signup-input'
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    className='signup-input'
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className='signup-input'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="signup-button" type="submit" >
                    Sign Up
                </button>
                <p className='signup-p'>
                    Already have an account?{' '}
                    <span className="signup-span" onClick={()=>{props.togglesignup()}} style={{ cursor: 'pointer' }}>
                        Log In
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Signup;