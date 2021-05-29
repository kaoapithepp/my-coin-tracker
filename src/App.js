import React, { useState, useEffect } from 'react';

import Coin from './components/Coin';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setInterval(() => {
      fetch('https://api.coingecko.com/api/v3/coins/shiba-inu?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false')
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        setPrice(resJson.market_data.current_price.thb);
        return console.log('Price changed');
      })
    }, 1000);
  },[price]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/shiba-inu?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false')
    .then(res => {
      return res.json();
    })
    .then(resJson => {
      setName(resJson.name);
    })
    .catch(err => console.log(err.message));
  })
    

  return (
    <div className="app">
      <div className="header">
        <h1>mycointracker.app</h1>
        <p>personal cryptocurrency price tracker</p>
      </div>
      <div className="content">
        <Coin 
          name={name}
          price={price}
        />
      </div>
    </div>
  );
}

export default App;
