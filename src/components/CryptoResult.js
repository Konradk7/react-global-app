import React from 'react';

function CryptoResult({name, icon, symbol, price, err, remove}) {
    if (name.length === 0) return null
    return (

        <div className='crypto-result' onClick={remove}>

            <div className='crypto-result__container'>
                <h1 className='crypto-result__container__title'>{name} | {symbol}</h1>
                <img src={icon} alt="icon"/>

            </div>
            <h2 className='crypto-result__container__body'>Price: {price.toFixed(3)} USD</h2>

        </div>
    );
}

export default CryptoResult;