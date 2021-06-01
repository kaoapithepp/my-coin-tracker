import React from 'react';
import '../components/Coin.css';

const Coin = ({name, price, thumbnail, worthy}) => {

    const amount = price*worthy;

    return (
        <div className="coin-container">
            <div className="coin-display">
                <img src={thumbnail} alt="cryptocurrency logo" />
                <h2>{name}</h2>
                <p className="curr-price">Current Price</p>
                <p>{price} THB</p>
                <p className="curr-price">Your Value</p>
                <p>{amount.toFixed(2)} THB</p>
            </div>
        </div>
    );     
}

export default Coin;