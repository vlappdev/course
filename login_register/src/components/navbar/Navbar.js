import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <a href="#" className="navbar-brand">Login React</a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;