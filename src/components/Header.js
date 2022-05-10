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