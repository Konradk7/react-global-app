import React from 'react';
import arrow from "../images/arrow.png";

function CryptoSearch({search, change, submit}) {
    return (
        <div className="crypto-search">
            <form
                onSubmit={submit}
                className="crypto-search__form"
            >
                <div className="crypto-search__form-container"
                    >
                    <h2 className="crypto-search__form-container__title"> Add Your Crypto-Widget to Home for make Your live more
                        easier!</h2>

                    <div className="crypto-search__form-container__text">
                        <ul className="crypto-search__form-container__text-list">
                            <li className="crypto-search__form-container__text-list-element">Crypto</li>
                            <li className="crypto-search__form-container__text-list-element">Price</li>
                            <li className="crypto-search__form-container__text-list-element">Icons</li>
                        </ul>
                        <p className="crypto-search__form-container__text-main">
                            Even more! Your widget will show You every information's by
                            icons! Right now You don't need to open slowly
                            core-app with tons of useless option's. Everything with you just through quick look!
                        </p>
                        <p className="crypto-search__form-container__text-footer"> Just write crypto-full-name which you are interesting for below.</p>

                    </div>

                    <p className="crypto-search__form-container__footer">Made by KK </p>

                </div>
                <input
                    type="text"
                    placeholder="Search crypto..."
                    value={search}
                    onChange={change}
                    className="crypto-search__form-input"
                />
                <input
                    type="submit"
                    className="crypto-search__form-input"
                />
                <button className="crypto-search__form-toggle">
                    <img
                        src={arrow}
                        alt="drop-buttons"
                        className="crypto-search__form-toggle__arrow"
                    />
                </button>
            </form>
        </div>
    );
}

export default CryptoSearch;