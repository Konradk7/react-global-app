import React from 'react';
import SignIn from "./SignIn";
import Register from "./Register";
import Weather from "./Weather";
import WeatherResult from "./WeatherResult";


function Home(props) {
    return (

            <>

                    {/*<SignIn />*/}
                    {/*    <Register />*/}

                    <Weather
                    />
            </>

    );
}

export default Home;