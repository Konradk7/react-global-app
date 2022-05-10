import React from 'react';
// import { faSunBright } from "@fortawesome/free-solid-svg-icons";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function WeatherResult({city, time, temp}) {


    return (
        <div>
            {}<h3>{city}</h3>
            <h3>{time}</h3>
            {/*<FontAwesomeIcon icon="fa-solid fa-sun-bright" />*/}
            {!temp ? null : <h3>{temp}&#176;C</h3>}
        </div>
    );
}

export default WeatherResult;