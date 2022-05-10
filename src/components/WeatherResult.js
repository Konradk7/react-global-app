import React from 'react';
// import { faSunBright } from "@fortawesome/free-solid-svg-icons";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function WeatherResult({city, time, temp, sun}) {
    if (city.length === 0) return null
    const sunriseTime = new Date(sun * 1000).toLocaleTimeString()


    return (
        <div>
            <h3>{city}</h3>
            <h3>
                {time}
                {time > sunriseTime
                    ? " Dzień"
                    : " Noc"}
            </h3>
            {!temp
                ? null
                : <h3>
                    {temp}&#176;C
                    {temp >= 15
                        ? " Hot"
                        : ' Cold'}
                </h3>}

        </div>
    );
}

export default WeatherResult;