import React from 'react';
import '../components/Coin.css';

const Coin = ({name, price}) => {
    return (
        <div className="coin-container">
            <div className="coin-display">
                <img src="./images/Shiba_Inu_coin_logo.png"/>
                <h2>{name}</h2>
                <p className="curr-price">Current Price</p>
                <p>{price} THB</p>
            </div>
        </div>
    );     
}

export default Coin;