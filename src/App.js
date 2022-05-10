import React from 'react';
import './sass/App.scss';
import Header from "./components/Header";
import Home from "./components/Home";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function App(props) {
    return (
        <Router>
            <Header />
           <div className="main">
               <div className="main-container">
                   <Routes>
                       <Route path='/' element={<Home/>} />
                       {/*<Route path='/my-apps' element={<MyApps/>} />*/}
                       {/*<Route path='/contact' element={<Contact/>} />*/}
                       {/*<Route path='/login' element={<Login/>} />*/}
                   </Routes>
               </div>
           </div>
        </Router>
    );
}



export default App;
