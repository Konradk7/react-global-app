import React from 'react';
// import { faSunBright } from "@fortawesome/free-solid-svg-icons";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import day from '../images/day.png';
import night from '../images/night.png';
import hot from '../images/hot.png';
import cold from '../images/cold.png';
import trash from "../images/trash.png";

function WeatherResult({city, time, temp, sun, remove}) {
    if (city.length === 0) return null

    const sunsetTime = new Date(sun * 1000).toLocaleTimeString()

    return (
        <div>
            {temp ?
                <div className="weather-container">

                    <h3 className="weather-container__head">{city}
                        <p className="weather-container__head-remove" ><span className="weather-container__head-remove-btn" onClick={remove}>X</span></p>
                    </h3>

                    <h3 className="weather-container__body">
                        {time}
                        {time < sunsetTime
                            ? <p className="weather-border"><img className="weather-container__body-spin" src={day} alt="Day"/></p>
                            : <p className="weather-border"><img className="weather-container__body-fog" src={night} alt="Night"/></p>
                        }
                    </h3>
                    {!temp
                        ? null
                        : <h3 className="weather-container__body">
                            {temp}&#176;C
                            {temp >= 20
                                ? <p className="weather-border"><img src={hot} alt="Hot"/></p>
                                : <p className="weather-border"><img src={cold} alt="Cold"/></p>
                            }
                        </h3>}

                </div>
                : <div className="weather-container__loading"></div>}

        </div>
    );
}

export default WeatherResult;