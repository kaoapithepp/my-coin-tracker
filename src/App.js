import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Coin from './components/Coin';
import './App.css';
import thumbnail from './data/thumbnail';


const SHIB_FETCH_URL = 'https://api.coingecko.com/api/v3/coins/shiba-inu?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false';
const ETH_FETCH_URL = 'https://api.coingecko.com/api/v3/coins/ethereum?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false';
const BNB_FETCH_URL = 'https://api.coingecko.com/api/v3/coins/binancecoin?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false';

const SHIB_VALUE = 950189.05000000;
const ETH_VALUE = 0.00282746;
const BNB_VALUE = 0.00801328;

const INIT_WORTH = 906.4;


function App() {

  const [ethName, setEthName] = useState('');
  const [ethPrice, setEthPrice] = useState(0);

  const [bnbName, setBnbName] = useState('');
  const [bnbPrice, setBnbPrice] = useState(0);

  const [shibName, setShibName] = useState('');
  const [shibPrice, setShibPrice] = useState(0);


  useEffect(() => {
    setInterval(() => {
      axios
        .get(ETH_FETCH_URL)
        .then(resJson => {
          // console.log(resJson);
          setEthPrice(resJson.data.market_data.current_price.thb);
        })
        .catch(err => console.log(err.message));
    }, 1000);
  },[ethPrice]);

  useEffect(() => {
    axios
      .get(ETH_FETCH_URL)
      .then(resJson => {
        // console.log(resJson);
        setEthName(resJson.data.name);
      })
      .catch(err => console.log(err.message));
  })

  useEffect(() => {
    setInterval(() => {
      axios
        .get(BNB_FETCH_URL)
        .then(resJson => {
          setBnbPrice(resJson.data.market_data.current_price.thb);
          // return console.log('Price changed');
        })
        .catch(err => console.log(err.message));
    }, 1000);
  },[bnbPrice]);

  useEffect(() => {
    axios
    .get(BNB_FETCH_URL)
    .then(resJson => {
      setBnbName(resJson.data.name);
    })
    .catch(err => console.log(err.message));
  })

  useEffect(() => {
    setInterval(() => {
      axios
        .get(SHIB_FETCH_URL)
        .then(resJson => {
          setShibPrice(resJson.data.market_data.current_price.thb);
          // return console.log('Price changed');
        })
        .catch(err => console.log(err.message));
    }, 1000);
  },[shibPrice]);

  useEffect(() => {
    axios
      .get(SHIB_FETCH_URL)
      .then(resJson => {
        setShibName(resJson.data.name);
      })
      .catch(err => console.log(err.message));
  })

  const NET_WORTH = ((ethPrice*ETH_VALUE)+(bnbPrice*BNB_VALUE)+(shibPrice*SHIB_VALUE)).toFixed(4);
  const UpdateValue = () => {
    if (NET_WORTH>=INIT_WORTH) {
      return <p className="gain">{(NET_WORTH-INIT_WORTH).toFixed(4)}</p>
    } else {
      return <p className="loss">{(NET_WORTH-INIT_WORTH).toFixed(4)}</p>
    }
  }
    

  return (
    <div className="app">
      <div className="header">
        <h1>mycointracker.app</h1>
        <p>personal cryptocurrency price tracker</p>
      </div>
      <div className="summary">
        <p>Asset Net Worth</p>
        <h2>{NET_WORTH} THB</h2>
        {UpdateValue()}
      </div>
      <div className="content">
        <Coin 
          name={ethName}
          price={ethPrice}
          thumbnail={thumbnail[0]}
          worthy={ETH_VALUE}
        />
        <Coin 
          name={bnbName}
          price={bnbPrice}
          thumbnail={thumbnail[1]}
          worthy={BNB_VALUE}
        />
        <Coin 
          name={shibName}
          price={shibPrice}
          thumbnail={thumbnail[2]}
          worthy={SHIB_VALUE}
        />
      </div>
    </div>
  );
}

export default App;
