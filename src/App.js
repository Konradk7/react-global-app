import React from 'react';
import './sass/App.scss';
import Header from "./components/Header";
import Home from "./components/Home";
import MyApps from "./components/MyApps";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function App(props) {
    return (
        <Router>
            <Header/>
            <div className="main">

                <div className="main-background">
                    <div className="main-background__circle"></div>
                    <div className="main-background__circle"></div>
                    <div className="main-background__circle"></div>
                    <div className="main-background__circle"></div>
                    <div className="main-background__circle"></div>
                    <div className="main-background__circle"></div>
                    <div className="main-background__circle"></div>
                </div>
                <div className="main-background-2">
                    <div className="main-background-2__circle"></div>
                    <div className="main-background-2__circle"></div>
                    <div className="main-background-2__circle"></div>
                    <div className="main-background-2__circle"></div>
                    <div className="main-background-2__circle"></div>
                    <div className="main-background-2__circle"></div>
                    <div className="main-background-2__circle"/>
                </div>
                <div className="main-container">
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/my-apps' element={<MyApps/>}/>
                        <Route path='/contact' element={<Contact/>} />
                        <Route path='/signIn' element={<SignIn />} />
                    </Routes>
                </div>

            </div>
        </Router>
    );
}


export default App;
