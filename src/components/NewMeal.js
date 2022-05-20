import React, {useState} from 'react';
import Meal from "./Meal";
import plus from "../images/plus.png";

function NewMeal() {
    const [title, setTitle] = useState([]);
    const [value, setValue] = useState('')

    const handleAddTitle = e => {
        if(!value || title.includes(value)) return
        setTitle(prevState => [...prevState, value]);
        setValue('');

    }
    const handleAddItem = e => {
        setValue(e.target.value)
    }
    const handleRemoveTitle = idx => {
        setTitle(prevState => prevState.filter(el => el !== title[idx]));
    };


    return (

        <div className="fitness-title__container">
            <input
                type="text"
                value={value}
                onChange={handleAddItem}
                placeholder="Add meals..."
                className="fitness-title__container__input"/>
            <button
                onClick={handleAddTitle}
                className="fitness-title__container__button">
                <img src={plus} alt="Add"/>
            </button>
            {title.map((title, idx) => {
                return <ul key={idx} className="fitness-title__container__list">
                    {title[0].toLocaleUpperCase() + title.slice(1)}
                    <button onClick={() => handleRemoveTitle(idx)} className="fitness-title__container__list-remove">x
                    </button>
                    <Meal/>
                </ul>
            })}
        </div>
    );
}

export default NewMeal;