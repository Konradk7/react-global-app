import React from 'react';

function Header(props) {
    return (
        <div className="header">
            <div className="header-container">
                <a href="/" className="header-container__logo">
                    Coders<span className="header-container__logo-element">KK</span>
                </a>

                <nav className="header-container__nav">
                    <a href="/">Home</a>
                    <a href="/myApps">My Apps</a>
                    <a href="/contact">Contact</a>
                    <a href="/signIn">Zaloguj</a>
                </nav>

            </div>
        </div>
    );
}

export default Header;