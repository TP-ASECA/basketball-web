import * as React from "react";
import NbaLogo from "../Utilities/NbaLogo.png"
import "./UIcss/NavBar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/results" className="navbar-logo">
                <img src={NbaLogo} alt="Logo" className="navbar-logo-image"/>
            </a>
        </nav>
    );
};

export default Navbar;