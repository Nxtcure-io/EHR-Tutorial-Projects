import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Patient Portal</div>
            <ul className="navbar-links">
                <li><Link to="/patient-home">Home</Link></li>
                <li><Link to="/vitals">Vitals</Link></li>
                <li><Link to="/labs">Lab</Link></li>
                <li><Link to="/medications">Medication</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
