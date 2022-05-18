import React, {useState} from 'react';
import Meal from "./Meal";
import plus from "../images/plus.png";

function NewMeal({onNewMeal}) {
    const [title, setTitle] = useState([]);
    const [value, setValue] = useState('')

    const handleAddTitle = e => {
            setTitle(prevState => [...prevState, value]);
            setValue('');
    }
    const handleAddItem = e => {
        setValue(e.target.value)
    }

    return (
        <div className="fitness-title-container">
            <input type="text" value={value} onChange={handleAddItem} placeholder="Add title..." className="fitness-title-container__input"/>
            <button onClick={handleAddTitle} className="fitness-title-container__button"><img src={plus} alt="Add"/></button>
            {title.map((title, idx) => {
                return <ul key={idx}>{title}<Meal /></ul>
            })}
        </div>
    );
}

export default NewMeal;