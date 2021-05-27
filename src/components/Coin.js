import React from 'react';
import '../components/Coin.css';

const Coin = ({name}) => {
    return (
        <div className="coin-container">
            <div className="coin-display">
                <p>{name}</p>
                <p></p>
            </div>
        </div>
    );
        
        
}

export default Coin;