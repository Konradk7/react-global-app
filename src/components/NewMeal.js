import React, {useState} from 'react';
import Meal from "./Meal";

function NewMeal({onNewMeal}) {
    const [title, setTitle] = useState([]);
    const [value, setValue] = useState('')

    const handleAddTitle = e => {
            setTitle(prevState => [...prevState, value]);
    }
    const handleAddItem = e => {
        setValue(e.target.value)
    }

    return (
        <div>
            <input type="text" value={value} onChange={handleAddItem} />
            <button onClick={handleAddTitle}>Add Title</button>
            {title.map((title, idx) => {
                return <ul key={idx}>{title}<Meal /></ul>
            })}
        </div>
    );
}

export default NewMeal;