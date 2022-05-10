import React, {useEffect, useState} from 'react';
import WeatherForm from "./WeatherForm";
import WeatherResult from "./WeatherResult";
import {APIKey} from "../api/WeatherApi";


function Weather(props) {
    const [value, setValue] = useState('')
    const [time, setTime] = useState('');
    const [city, setCity] = useState('');
    const [temp, setTemp] = useState('');
    const [err, setErr] = useState(false);
    const [sun, setSun] = useState('');


    const handleInputChange = (e) => {
        setValue(e.target.value);

    }

    const handleCitySubmit = (e) => {
        e.preventDefault();
        setCity(value)


    }


    useEffect(() => {
        const intervalId = setInterval(() => {
            const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKey}&units=metric`;
            if (city.length === 0) return
            fetch(APIUrl)
                .then(response => {
                    if (response.ok) {
                        return response
                    }
                    throw Error("Nie udało się")
                })
                .then(response => response.json())
                .then(data => {
                    const actualTime = new Date().toLocaleTimeString();
                    setTime(actualTime)
                    setTemp(data.main.temp)
                    setCity(value[0].toLocaleUpperCase() + value.slice(1))
                    setSun(data.sys.sunrise)
                    setErr(false);

                })
                .catch(err => {
                    console.log(err);
                    setErr(true)


                })
            return () => {
                clearInterval(intervalId);
            };


        }, 1000)
    }, [city])


    return (
        <div className='weather-app'>

            {/*{!temp ? */}
                <WeatherForm value={value} change={handleInputChange} submit={handleCitySubmit}/>
                {/*// : ''}*/}
            {!err ? <WeatherResult city={city} time={time} temp={temp} sun={sun} err={err}/> : <h3 className="weather-app__error-message">I don't know this city!</h3>}
        </div>
    )
}

export default Weather;