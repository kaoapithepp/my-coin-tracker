import React, { useState, useEffect } from 'react';

import Coin from './components/Coin';
import './App.css';
import thumbnail from './data/thumbnail';

const SHIB_FETCH_URL = 'https://api.coingecko.com/api/v3/coins/shiba-inu?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false';
const ETH_FETCH_URL = 'https://api.coingecko.com/api/v3/coins/ethereum?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false';
const BNB_FETCH_URL = 'https://api.coingecko.com/api/v3/coins/binancecoin?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false';

function App() {

  const [ethName, setEthName] = useState('');
  const [ethPrice, setEthPrice] = useState(0);

  const [bnbName, setBnbName] = useState('');
  const [bnbPrice, setBnbPrice] = useState(0);

  const [shibName, setShibName] = useState('');
  const [shibPrice, setShibPrice] = useState(0);

  useEffect(() => {
    setInterval(() => {
      fetch(ETH_FETCH_URL)
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        setEthPrice(resJson.market_data.current_price.thb);
        // return console.log('Price changed');
      })
      .catch(err => console.log(err.message));
    }, 1000);
  },[ethPrice]);

  useEffect(() => {
    fetch(ETH_FETCH_URL)
    .then(res => {
      return res.json();
    })
    .then(resJson => {
      setEthName(resJson.name);
    })
    .catch(err => console.log(err.message));
  })

  useEffect(() => {
    setInterval(() => {
      fetch(BNB_FETCH_URL)
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        setBnbPrice(resJson.market_data.current_price.thb);
        // return console.log('Price changed');
      })
      .catch(err => console.log(err.message));
    }, 1000);
  },[bnbPrice]);

  useEffect(() => {
    fetch(BNB_FETCH_URL)
    .then(res => {
      return res.json();
    })
    .then(resJson => {
      setBnbName(resJson.name);
    })
    .catch(err => console.log(err.message));
  })

  useEffect(() => {
    setInterval(() => {
      fetch(SHIB_FETCH_URL)
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        setShibPrice(resJson.market_data.current_price.thb);
        // return console.log('Price changed');
      })
      .catch(err => console.log(err.message));
    }, 1000);
  },[shibPrice]);

  useEffect(() => {
    fetch(SHIB_FETCH_URL)
    .then(res => {
      return res.json();
    })
    .then(resJson => {
      setShibName(resJson.name);
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
          name={ethName}
          price={ethPrice}
          thumbnail={thumbnail[0]}
        />
        <Coin 
          name={bnbName}
          price={bnbPrice}
          thumbnail={thumbnail[1]}
        />
        <Coin 
          name={shibName}
          price={shibPrice}
          thumbnail={thumbnail[2]}
        />
      </div>
    </div>
  );
}

export default App;
