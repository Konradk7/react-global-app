import React from 'react';
import Weather from "./Weather";
import arrow from "../images/arrow.png";

function MyApps(props) {
    return (
        <div className="apps-container">
            <div className="apps-container__btn"><img src={arrow} alt="<<"/></div>
            <div className="apps-container__slider">
            <Weather/>
            </div>
            <div className="apps-container__btn"><img src={arrow} alt=">>"/></div>

        </div>
    );
}

export default MyApps;