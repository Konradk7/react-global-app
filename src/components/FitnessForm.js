import React from 'react';
import pizzaDelivery from "../images/pizza-delivery.png";

// import pizza-delivery from 'src/images/pizza-delivery.png'

function FitnessForm(props) {
    return (
        <div className="fitness-form">
            <div className="fitness-form__container">
                <h2 className="fitness-form__container__title">
                    Add Your Fitness-Widget to Home for make Your live more easier!
                </h2>
                <p className="fitness-form__container__body">Lets plan your meals! Meal Planner & Grocery List for make
                    your week easier is perfect to track your meal .Contains a box space for every day of the week and a
                    page for each grocery list.</p>
                <img src={pizzaDelivery} alt="Auto" className="fitness-form__container__footer"/>
            </div>
        </div>
    );
}

export default FitnessForm;