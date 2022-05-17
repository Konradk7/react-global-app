import React, {useEffect, useState} from 'react';
import NewMeal from "./NewMeal";
import Meal from './Meal';

function Fitness(props) {
    const [day, setDay] = useState([]);


    const handleAddDay = () => {
        setDay(prevState => [...prevState, `Week: ${day.length + 1}`])
    }

    return (
        <div>
            <button onClick={handleAddDay}>Add Week!</button>

                    {day.map((day, idx) => {
                        return <ul key={idx}><li>{day}</li>
                            <NewMeal />
                        </ul>
                    })}

        </div>
    );
}

export default Fitness;