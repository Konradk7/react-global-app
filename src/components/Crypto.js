import React, {useEffect, useState} from 'react';
import CryptoSearch from "./CryptoSearch";
import CryptoResult from "./CryptoResult";

function Crypto(props) {
    const [coin, setCoin] = useState('');
    const [search, setSearch] = useState('');
    const [coinIcon, setCoinIcon] = useState('');
    const [symbolCoin, setSymbolCoin] = useState('');
    const [price, setPrice] = useState(false);
    const [err, setErr] = useState(false);
    const [showInputs, setShowInputs] = useState(false);

    function handleShowInputs(e) {
        e.preventDefault();
        setShowInputs(!showInputs);
        setSearch('');
        setErr(false);
    }
    const handleRemoveItem = (e) => {
        e.preventDefault()
        setCoin("")
        setPrice(false)
        setShowInputs(false)
    }
    const handleInputSearch = (e) => {
        setSearch(e.target.value);
    }

    const curDate = () => {
        const date = new Date();
        const dd = date.getDate();
        const mm = date.getMonth() + 1;
        const yy = date.getFullYear();
        return `${dd}-${mm}-${yy}`;
    }

    const handleCryptoSubmit = (e) => {
        e.preventDefault()
        const COINURL = `https://api.coingecko.com/api/v3/coins/${search}/history?date=${curDate()}&localization=false`;

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

            {!coin && <CryptoSearch search={search} change={handleInputSearch} submit={handleCryptoSubmit} inputsValue={showInputs} inputs={handleShowInputs}/>}
            {err
                ? <h3 className="crypto-app__error-message">I don't know this coin!</h3>
                : <CryptoResult name={coin} icon={coinIcon} symbol={symbolCoin} price={price} err={err} remove={handleRemoveItem} />
            }
        </div>
    );
}

export default Crypto;