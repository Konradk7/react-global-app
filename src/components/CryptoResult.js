import React from 'react';

function CryptoResult({name, icon, symbol, price, err}) {
    if (name.length === 0) return null
    return (
        <div className='crypto-result-container'>
            <h1>{name} | {symbol}</h1>
            <img src={icon} alt="icon" />
            <h2>Price: {price.toFixed(0)} USD</h2>
        </div>
    );
}

export default CryptoResult;