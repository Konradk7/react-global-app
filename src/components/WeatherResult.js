import React from 'react';
import day from '../images/day.png';
import night from '../images/night.png';
import hot from '../images/hot.png';
import cold from '../images/cold.png';


function WeatherResult({city, time, temp, sun, remove}) {
    if (city.length === 0) return null

    const sunsetTime = new Date(sun * 1000).toLocaleTimeString()

    return (
        <div className="weather-result">
            {temp ?
                <div className="weather-container">

                    <div className="weather-container__head">
                        <h3 className="weather-container__head-title">{city}</h3>

                        <span className="weather-container__head-remove-btn" onClick={remove}>X</span>
                    </div>
                    <h3 className="weather-container__body">
                        {time}
                        {time < sunsetTime
                            ? <p className="weather-border"><img className="weather-container__body-spin" src={day}
                                                                 alt="Day"/></p>
                            : <p className="weather-border"><img className="weather-container__body-fog" src={night}
                                                                 alt="Night"/></p>
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