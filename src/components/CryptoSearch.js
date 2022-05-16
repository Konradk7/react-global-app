import React from 'react';
import arrow from "../images/arrow.png";

function CryptoSearch({search, change, submit}) {
    return (
        <div className="crypto-search">
            <form
                onSubmit={submit}
                className="crypto-search__form"
            >
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