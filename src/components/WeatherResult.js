import React from 'react';
// import { faSunBright } from "@fortawesome/free-solid-svg-icons";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import day from '../images/day.png';
import night from '../images/night.png';
import hot from '../images/hot.png';
import cold from '../images/cold.png';

function WeatherResult({city, time, temp, sun, err}) {
    if (city.length === 0) return null

    const sunriseTime = new Date(sun * 1000).toLocaleTimeString()

    return (
<div>
    {temp ?
        <div className="weather-container">
            <h3 className="weather-container__head">{city}</h3>
            <h3 className="weather-container__body">
                {time}
                {time < sunriseTime
                    ? <img src={day} alt="Day"/>
                    : <img src={night} alt="Night"/>
                }
            </h3>
            {!temp
                ? null
                : <h3 className="weather-container__body">
                    {temp}&#176;C
                    {temp >= 20
                        ? <img src={hot} alt="Hot"/>
                        : <img src={cold} alt="Cold"/>
                    }
                </h3>}

        </div>
        : <p className="weather-container__loading">Pobieram informacje...</p>}
    </div>
    );
}

export default WeatherResult;