import React from 'react';
import SignIn from "./SignIn";
import Register from "./Register";
import Weather from "./Weather";
import WeatherResult from "./WeatherResult";
import Crypto from "./Crypto";
import Fitness from "./Fitness";


function Home(props) {
    return (

            <>
                <div className="main-page" >
                    <Fitness />
                    <Crypto />
                    {/*<SignIn />*/}
                    {/*    <Register />*/}
                    <Weather />
                    {/*/>*/}
                </div>
            </>

    );
}

export default Home;