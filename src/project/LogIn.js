import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogIn = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/signin', { username, password });
            alert(response.data.message);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            setIsLoggedIn(true);
            navigate('/home');
        } catch (error) {
            alert('Error: ' + (error.response?.data?.message || 'Login failed'));
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h2>Log In</h2>
                Username
                <input 
                    type="text"
                    //placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                /><br/><br/>
                Password
                <input
                    type="password"
                    //placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /><br/><br/>
                <button type="submit">Log In</button>
            </form>
            <p>
                Don't have an account? <button onClick={() => navigate('/signup')}>Sign Up</button>
            </p>
        </div>
    );
};

export default LogIn;

