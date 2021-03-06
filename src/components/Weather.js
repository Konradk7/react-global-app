import React, { useEffect, useState } from 'react';
import WeatherForm from "./WeatherForm";
import WeatherResult from "./WeatherResult";
import { APIKey } from "../api/WeatherApi";


function Weather(props) {
    const [value, setValue] = useState('')
    const [time, setTime] = useState('');
    const [city, setCity] = useState('');
    const [temp, setTemp] = useState('');
    const [sun, setSun] = useState('');
    const [showInputs, setShowInputs] = useState(false);
    const [err, setErr] = useState(false);

    function handleShowInputs(e) {
        e.preventDefault();
        setShowInputs(!showInputs);
        setValue('');
        setErr(false);
    }

    const handleInputChange = (e) => {
        setValue(e.target.value);

    }
    const handleRemoveItem = (e) => {
        e.preventDefault()
        setCity("")
        setTemp(false)
        setShowInputs(false)
    }

    const handleCitySubmit = (e) => {
        e.preventDefault();
        const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${APIKey}&units=metric`;

        if (value.length !== 0) return (
            fetch(APIUrl)
                .then(response => {
                    if (response.ok) {
                        return response
                    }
                    throw Error("Nie udało się")
                })
                .then(response => response.json())
                .then(data => {

                    setTemp(data.main.temp)
                    setCity(value[0].toLocaleUpperCase() + value.slice(1))
                    setSun(data.sys.sunset)
                    setErr(false);

                })
                .catch(err => {
                    console.log(err);
                    setErr(true)


                }))

    }


    useEffect(() => {

        const intervalId = setInterval(() => {

            if (city.length === 0) return
            const actualTime = new Date().toLocaleTimeString();
            setTime(actualTime)
            return () => {
                clearInterval(intervalId);
            };


        }, 1000)
    }, [city])


    return (
        <div className='weather-app'>
            {err ? <h3 className="weather-app__error-message">I don't know this city!</h3>
                : <WeatherResult city={city} time={time} temp={temp} sun={sun} err={err} remove={handleRemoveItem}/>
            }
            {!temp && <WeatherForm value={value} change={handleInputChange} submit={handleCitySubmit}
                                   inputs={handleShowInputs} inputsValue={showInputs}/>}
        </div>


    )
}

export default Weather;