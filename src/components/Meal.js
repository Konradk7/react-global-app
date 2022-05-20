import React, {useState} from 'react';

function Meal() {
    const [ingredients, setIngredients] = useState([]);
    const [value, setValue] = useState('');

    const handleAddIngredients = e => {
        e.preventDefault();
        if(!value || ingredients.includes(value)) return
        setIngredients(prevState => [...prevState, value]);
        setValue('');
    }
    const handleAddValue = e => {
        setValue(e.target.value);
    }
    const handleRemoveValue = idx => {
        setIngredients(prevState => prevState.filter(el => el !== ingredients[idx]))
    }

    return (
        <div className="fitness-body__container">
            <input
                type="text"
                value={value}
                onChange={handleAddValue}
                className="fitness-body__container__input"
                placeholder="Add Ingredients!"
            />
            <button
                onClick={handleAddIngredients}
                className="fitness-body__container__btn">
                Add
            </button>
            {ingredients.map((el, idx) => {
                return <li
                    className="fitness-body__container__text"
                    key={idx}
                    onClick={() => handleRemoveValue(idx)}
                >
                    {el[0].toLocaleUpperCase() + el.slice(1)}

                </li>
            })}
        </div>
    );
}

export default Meal;