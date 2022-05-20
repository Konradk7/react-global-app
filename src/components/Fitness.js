import React, { useState } from 'react';
import NewMeal from "./NewMeal";


function Fitness(props) {
    const [day, setDay] = useState([]);
    const [dayNumber, setDayNumber] = useState(1);

    const handleAddDay = () => {
        setDayNumber(prevState => prevState + 1)
        setDay(prevState => [...prevState, `Day: ${dayNumber}`])
    }
    const handleRemoveDay = (idx) => {
        setDay(prevState => prevState.filter(el => el !== day[idx]))
    }

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
                    return (
                        <ul key={day} className="fitness-app-container__head">

                            <div style={{display: 'flex'}}>
                                <li className="fitness-app-container__head-element">{day}</li>
                                <button onClick={() => handleRemoveDay(idx)} className="fitness-app__btn__remove">X
                                </button>
                            </div>

                                <NewMeal />

                        </ul>
                    )
                })}
            </div>
        </div>
    );
}

export default Fitness;