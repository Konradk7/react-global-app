import React from 'react';
import Weather from "./Weather";
import Crypto from "./Crypto";
import Fitness from "./Fitness";


function Home() {
    return (

        <>
            <h2></h2>

            <div className="main-page">
                <Fitness/>
                <Crypto/>
                <Weather/>
            </div>

        </>

    );
}

export default Home;