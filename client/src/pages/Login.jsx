import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './css/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, loginWithGoogle } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/');
        } catch {
            setError('Failed to log in');
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle();
            navigate('/');
        } catch {
            setError('Failed to log in with Google');
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Login</button>
            </form>
            <button onClick={handleGoogleLogin} className="google-login-button">Login with Google</button>
        </div>
    );
};

export default Login;