import React, {useState} from 'react';

function Meal(props) {
    const [ingredients, setIngredients] = useState([]);
    const [value, setValue] = useState('');

    const handleAddIngredients = e => {
        e.preventDefault();
        setIngredients(prevState => [...prevState, value]);
    }
    const handleAddValue = e => {
        setValue(e.target.value);
    }
    return (
        <div>
            <input type="text" value={value} onChange={handleAddValue}/>
            <button onClick={handleAddIngredients}>Add Ingredients!</button>
            <ul>
                {ingredients.map((el, idx) => {
                    return <li key={idx}>{el}</li>
                })}
            </ul>
        </div>
    );
}

export default Meal;