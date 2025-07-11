import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/signup', { username, email, password });
            alert(response.data.message);
            setIsLoggedIn(true);
            navigate('/home');
        } catch (error) {
            alert('Error: ' + (error.response?.data?.message || 'Signup failed'));
        }
    };

    return (
        <div>
            <form onSubmit={handleSignUp}>
                <h2>Sign Up</h2>
                Username
                <input
                    type="text"
                    //placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                Email
                <input
                    type="email"
                    //placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                Password
                <input
                    type="password"
                    //placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account? <button onClick={() => navigate('/')}>Log In</button>
            </p>
        </div>
    );
};

export default SignUp;
