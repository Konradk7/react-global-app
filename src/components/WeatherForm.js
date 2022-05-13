import React, {useState} from 'react';

function WeatherForm({value, change, submit, inputs, inputsValue}) {
    //
    // if(!showInputs) {
    //
    // }
    return (

        <form onSubmit={submit} className="weather-form">
            <div className="weather-form-container">
                <h2 className="weather-form-container__title"> Add Your weather-widget to Home for make Your live more
                    easier!</h2>

                <div className="weather-form-container__text">
                    <ul className="weather-form-container__list">
                        <li className="weather-form-container__list-element">Hour</li>
                        <li className="weather-form-container__list-element">Temperature</li>
                        <li className="weather-form-container__list-element">Sunset</li>
                    </ul>
                    <p className="weather-form-container__text-main">
                    Even more! Your widget will show You every information's by
                    icons! Right now You don't need to open slowly
                    core-app with tons of useless option's. Everything with you just through quick look!
                    </p>
                    <p className="weather-form-container__text-footer"> Just write city which you are interesting for below.</p>

                </div>

                <p className="weather-form-container__footer">Made by KK </p>

            </div>
            <div className="weather-form__input">

            <input
                type="text"
                value={value}
                onChange={change}
                placeholder="Write city"
                className={`weather-form__input-text ${!inputsValue ? "weather-form__input-hide" : ""}`}
            />
            <input
                type="submit"
                className={`weather-form__input-submit ${!inputsValue ? "weather-form__input-hide" : ""}`}
            />

                <button
                    className="weather-form__input-handle-btn"
                    onClick={inputs}>
                    <div>>></div>
                </button>
            </div>
        </form>
    );
}

export default WeatherForm;