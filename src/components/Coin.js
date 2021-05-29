import React from 'react';
import '../components/Coin.css';

const Coin = ({name, price, thumbnail}) => {
    return (
        <div className="coin-container">
            <div className="coin-display">
                <img src={thumbnail} alt="cryptocurrency logo" />
                <h2>{name}</h2>
                <p className="curr-price">Current Price</p>
                <p>{price} THB</p>
            </div>
        </div>
    );     
}

export default Coin;