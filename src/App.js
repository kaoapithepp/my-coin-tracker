import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Coin from './components/Coin';

function App() {
  const [coins, setCoins] = useState([]);

  useEffect (() => {
    axios
    .get(
      'https://api.coingecko.com/api/v3/coins/shiba-inu?market_data=true&community_data=false&developer_data=false&sparkline=false'
    )

    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    })

    .catch(error => console.log(error));

  },[]);

  return (
    <div className="app">
      <div className="header">
        <h1>mycointracker.app</h1>
        <p>the tracker for my personal use.</p>
      </div>
     
      <Coin
        name={coins.name}
      />

    </div>
  );
}

export default App;
