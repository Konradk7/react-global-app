import React from 'react';
import SignIn from "./SignIn";
import Register from "./Register";
import Weather from "./Weather";

function Main(props) {
    return (
        <div className="main">
            <div className="main-container">
            {/*<SignIn />*/}
            {/*    <Register />*/}
                <Weather />
            </div>
        </div>
    );
}

export default Main;