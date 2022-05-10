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

    const handleInputChange = (e) => {
        setValue(e.target.value);
    }
    const handleCitySubmit = (e) => {
        e.preventDefault();
        setCity(value)
    }
    useEffect(() => {


        // const intervalId = setInterval(() => {
            const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKey}&units=metric`;

            fetch(APIUrl)
                .then(response => {
                    if(response.ok) {
                        return response
                    }
                    throw Error("Nie udało się")
                })
                .then(response => response.json())
                .then(data => {
                    const actualTime = new Date().toLocaleTimeString();
                    setTime(actualTime)
                    setTemp(data.main.temp)
                    setCity(city)
                    setErr(false);
                })
                .catch(err => {
                    console.log(err);
                    setErr(true)

                })
            // return () => {
            //     clearInterval(intervalId);
            // };

        // },1000)
    }, [city])

    return (
        <div>
            <WeatherForm value={value} change={handleInputChange} submit={handleCitySubmit}/>
            <WeatherResult city={city} time={time} temp={temp} />
        </div>
    )
}

export default Weather;