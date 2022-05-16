import React, {useEffect, useState} from 'react';
import CryptoSearch from "./CryptoSearch";
import CryptoResult from "./CryptoResult";

function Crypto(props) {
    const [coin, setCoin] = useState('');
    const [search, setSearch] = useState('');
    const [coinIcon, setCoinIcon] = useState('');
    const [symbolCoin, setSymbolCoin] = useState('');
    const [price, setPrice] = useState('');
    const [err, setErr] = useState(false);

    const handleInputSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleCryptoSubmit = (e) => {
        e.preventDefault()
        const COINURL = `https://api.coingecko.com/api/v3/coins/${search}/history?date=15-5-2022&localization=false`;

        fetch(COINURL)
            .then(response => {
                if (response.ok) {
                    return response
                }
                throw Error("Nie udało się")
            })
            .then(response => response.json())
            .then(r => {
                setCoin(r.name)
                setCoinIcon(r.image.small)
                setSymbolCoin(r.symbol)
                setPrice(r.market_data.current_price.usd)
                setErr(false);
            })
            .catch(err => {
                console.log(err);
                setErr(true);
            })
    }
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         if (coin.length === 0) return;
    //         setPrice(price)
    //     }, 1000)
    //     return clearInterval(intervalId);
    // },[price])
    //
    return (
        <div className="crypto-app">
            <CryptoResult name={coin} icon={coinIcon} symbol={symbolCoin} price={price} err={err}/>
            <CryptoSearch search={search} change={handleInputSearch} submit={handleCryptoSubmit}/>
        </div>
    );
}

export default Crypto;