import React from 'react';

function WeatherForm({value, change, submit}) {
    return (

        <form onSubmit={submit} className="weather-form">
            <div className="weather-form-container">
                <h2 className="weather-form-container__title"> Add Your weather-widget to Home for make Your live more
                    easier!</h2>
                <p className="weather-form-container__text"> Just write city which you are interesting for below and
                    always see everything what will You need!</p>
                <ul className="weather-form-container__list">
                    <li className="weather-form-container__list-element">Hour</li>
                    <li className="weather-form-container__list-element">Temperature</li>
                    <li className="weather-form-container__list-element">Sunset</li>
                </ul>
                <p className="weather-form-container__text">Even more! Your widget will show You every information's by
                    quickly icons! Right now You don't need to open slowly
                    core-app with tons of useless option's. Everything with you just through quick look!
                </p>
                <p className="weather-form-container__footer">Combine it with our another widgets for keeping all useful tools in one place. It's your valuable
                    time!</p>
            </div>
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