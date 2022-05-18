import React from 'react';
import {
    Link
} from "react-router-dom";
function Header(props) {
    return (
        <div className="header">
            <div className="header-container">
                <a href="/" className="header-container__logo">
                    Coders
                    <span className="header-container__logo-element">KK</span>
                </a>

                <nav className="header-container__nav">
                    <Link to="/">Home</Link>
                    <Link to="/my-apps">My Apps</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/signIn">Sign In</Link>
                    {/*<div className="header-container__nav-hamburger">*/}
                    {/*<span></span>*/}
                    {/*<span></span>*/}
                    {/*<span></span>*/}
                    {/*</div>*/}
                </nav>

            </div>
        </div>
    );
}

export default Header;