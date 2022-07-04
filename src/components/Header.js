import React, {useState} from 'react';
import {
    Link
} from "react-router-dom";
import Menu from "../images/icons8-menu.svg";

function Header(props) {
    const [showNav, setShowNav] = useState(false);

    const handleShowNav = () => {
        setShowNav(!showNav)
    }

    return (
        <div className="header">
            <div className="header-container">
                <a href="/" className="header-container__logo">
                    Coders
                    <span className="header-container__logo-element">KK</span>
                </a>
                <nav className={`header-container__nav ${showNav ? "hide" : ""}`}>
                    <Link to="/">Home</Link>
                    <Link to="/my-apps">My Apps</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/signIn">Sign In</Link>
                </nav>
                <button onClick={handleShowNav} style={{height: "100%", width: "100px", background: "gray"}}><img src={Menu} alt="menu"/></button>

            </div>
        </div>
    );
}

export default Header;
