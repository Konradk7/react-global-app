import React, {useState} from 'react';

function Meal(props) {
    const [ingredients, setIngredients] = useState([]);
    const [weight, setWeight] = useState(0);
    const [weightValue, setWeightValue] = useState('');
    const [value, setValue] = useState('');

    const handleAddIngredients = e => {
        e.preventDefault();
        setIngredients(prevState => [...prevState, value]);
        setValue('');
    }
    const handleAddValue = e => {
        setValue(e.target.value);
    }
    // const handleWeightValue = e => {
    //     setWeightValue(e.target.value)
    // }
    // const handleWeight = () => {
    //     setWeight(weightValue);
    // }
    return (
        <div className="fitness-body__container">
            <input type="text" value={value} onChange={handleAddValue} className="fitness-body__container__input" placeholder="Add Ingredients!"/>
            <button onClick={handleAddIngredients} className="fitness-body__container__btn">Add</button>
                {ingredients.map((el, idx) => {
                    return <li
                        key={idx}
                        >
                        {el}
                        {/*<input type="number" value={weightValue} onChange={handleWeightValue}/>*/}
                        {/*<button onClick={handleWeight}>Add weight</button>*/}
                        {/*<button>Add macro's</button>*/}
                        {/*<button>Remove</button>*/}
                    </li>
                })}
        </div>
    );
}

export default Meal;