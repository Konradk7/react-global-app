import React from 'react';

function WeatherForm({value, change, submit}) {
    return (

        <form onSubmit={submit} >

            <input
                type="text"
                value={value}
                onChange={change}
                placeholder="Write city"
            />
            <input type="submit"/>
        </form>
    );
}

export default WeatherForm;