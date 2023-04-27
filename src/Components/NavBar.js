import * as React from "react";
import NbaLogo from "../Utilities/NbaLogo.png"
import "./UIcss/NavBar.css"
import {useNavigate} from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={NbaLogo} alt="Logo" className="navbar-logo-image" onClick={() => {navigate('/')}}/>
            </div>
        </nav>
    );
};

export default Navbar;