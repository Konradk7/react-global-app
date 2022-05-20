import React from 'react';

function Register() {

    return (
        <div className="register">
            <div className="register-container">
                <p className="register-container-logo">Make your new account!</p>
                <form className="register-container-form">

                    <input type="text" placeholder="Write your login"/>

                    <input type="email" placeholder="Write your email"/>
                    <input type="password" placeholder="Write your password"/>
                    <input type="password" placeholder="Repeat your password"/>
                    <input type="tel" placeholder="Write your phone number"/>
                    <p className="register-container-form__param"> Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum. </p>
                    <input type="checkbox" className="register-container-form__checkbox"/>
                    <button className='register-container-form__button'>Register!</button>
                </form>

            </div>
        </div>
    );
}

export default Register;