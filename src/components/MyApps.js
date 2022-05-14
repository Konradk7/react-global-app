import React, {useState} from 'react';
import Weather from "./Weather";
import arrow from "../images/arrow.png";

function MyApps(props) {
    const [slides, setSlides] = useState([
        {
            app: <Weather/>,
            id: 1,
        },
        {
            app: <Weather/>,
            id: 2,
        },
        {
            app: <Weather/>,
            id: 3,
        }
    ])
    const [prevSlide, setPrevSlide] = useState(1);
    const [nextSlide, setNextSlide] = useState(3);
    const [currentSlide, setCurrentSlide] = useState({id: 2});

    const handlePrevSlide = () => setCurrentSlide({...currentSlide, id: +1});
    const handleNextSlide = () => setCurrentSlide({...currentSlide, id: -1});

    const currentConfig = {
        transform: "scale(1)",
        transition: "2s",

    }
    const asideSlideConfig = {
        opacity: "70%",
        transform: "scale(0.85)",
    }


    return (
        <div className="apps-container">
            <div className="apps-container__btn" onClick={handlePrevSlide}><img src={arrow} alt="<<"/></div>
            <div className="apps-container__slider">
                <ul style={{display: "flex", justifyContent: "space-around"}}>
                    {slides.map((slide) =>
                        <li key={slide.id}
                            style={currentSlide
                                ? currentConfig
                                : asideSlideConfig}>
                            {slide.app}</li>)}</ul>
            </div>
            <div className="apps-container__btn" onClick={handleNextSlide}><img src={arrow} alt=">>"/></div>

        </div>
    );
}

export default MyApps;