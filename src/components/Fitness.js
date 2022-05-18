import React, {useEffect, useState} from 'react';
import NewMeal from "./NewMeal";
import Meal from './Meal';

function Fitness(props) {
    const [day, setDay] = useState([]);


    const handleAddDay = () => {
        setDay(prevState => [...prevState, `Day: ${day.length + 1}`])
    }
    const handleRemoveDay = week => {
        setDay(prevState => prevState.filter(day => day !== week));
    };

    return (
        <div className="fitness-app">
            <div className="fitness-app-container">
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <button
                        onClick={handleAddDay}
                        className="fitness-app-container__btn fitness-app__btn"
                    >
                        Add Day!
                    </button>
                    <p className="fitness-app-container__title">Let's create a plan!</p>
                </div>
                {day.map((day, idx) => {
                    return <ul
                        key={idx}
                        className="fitness-app-container__head"
                    >
                        <li className="fitness-app-container__head-element">
                            {day}
                        </li>
                        <button onClick={handleRemoveDay}>Remove Day</button>
                        <NewMeal/>
                    </ul>
                })}
            </div>
        </div>
    );
}

export default Fitness;