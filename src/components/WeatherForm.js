import React from 'react';

function WeatherForm({value, change, submit}) {
    return (

        <form onSubmit={submit} className="weather-form">

            <input
                type="text"
                value={value}
                onChange={change}
                placeholder="Write city"
                className="weather-form__input-text"
            />
            <input
                type="submit"
                className="weather-form__input-submit"/>

        </form>
    );
}

export default WeatherForm;