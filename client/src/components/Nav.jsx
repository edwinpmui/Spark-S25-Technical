import React from 'react';
import { Link } from 'react-router-dom';
import './css/Nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/add-chore"><button className="add-chore-button">Add Chore</button></Link></li>
            </ul>
        </nav>
    );
};

export default Nav;