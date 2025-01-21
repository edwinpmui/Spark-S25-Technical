import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './css/Nav.css';

const Nav = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/');
        window.location.reload();
    };

    return (
        <nav className="nav">
            <ul className="nav-left">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-chore"><button className="add-chore-button">Add Chore</button></Link></li>
            </ul>
            <ul className="nav-right">
                {!currentUser && <li><Link to="/login">Login</Link></li>}
                {currentUser && <li><button onClick={handleLogout} className="logout-button">Logout</button></li>}
            </ul>
        </nav>
    );
};

export default Nav;