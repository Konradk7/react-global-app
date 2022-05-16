import React from 'react';

function CryptoResult({name, icon, symbol, price, err}) {
    if (name.length === 0) return null
    return (
        <div>
            <h2>{name}</h2>
            <img src={icon} alt="icon" />
            <h2>{symbol}</h2>
            <h3>{price}</h3>
        </div>
    );
}

export default CryptoResult;