
import React, { useReducer, useState, useEffect } from 'react';
import Auth from './Auth';
import { BrowserRouter, Route } from 'react-router-dom';
import reducer from '../utils/reducer';
import CurrencySelector from './CurrencySelector';
import Graph from './Graph/Graph';
import Guide from './Guides/Guide';
import CoinSelector from './CoinSelector';

function App() {

  const initialState = {
    googleId: '',
    name: '',
    email: '',
    photo:''
  }
  const[store,dispatch]=useReducer(reducer,initialState)
  const { googleId, name, email, photo } = store

  const defaultCurrency = "usd"
  const[currency,setCurrency]= useState(defaultCurrency)
  const[bitcoinData,setBitcoinData] = useState({})
  const [currencies, setCurrencies] = useState([])
  const [coin, setCoin] = useState('bitclave')
  const[coinList,setCoinList] = useState([])
  

  function activateUser(data) {
   dispatch({
     type: "setLoggedInUser",
     data:data
   })
  }

  function newDate(date) {
    return new Date(date)
      .toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });
  }
  const userInfo = { googleId, name, email, photo };
  function getCurrencies() {
    //currency list 
    fetch("https://api.coingecko.com/api/v3/simple/supported_vs_currencies").then((res) => res.json()).then((res) => { setCurrencies(res) });
  }
  function getCoinList() {
    //coin list
    fetch("https://api.coingecko.com/api/v3/coins/list").then((res) => res.json()).then((res) => { setCoinList(res);});
   }

  function getCoinPricing() {
    const today = + new Date();
    //coin Pricing
    fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=${currency}&from=1613774400&to=${today}`).then((res) => res.json()).then((res) => {
      setBitcoinData(res.prices.sort().map((el) => { return [newDate(el[0]), el[1] ]; }));
      console.log(res.prices.sort().map((el) => { return [newDate(el[0]), el[1] ]; }));
      //console.log(res.prices);
    });
  }
  
  useEffect(() => {
    getCurrencies();
    getCoinList();
  }, []);

  function currencyChangeHandler(currency){
    setCurrency(currency)
  }
  function coinChangeHandler(coin){
    setCoin(coin)
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/"><Auth user={userInfo} activateUser={activateUser} /></Route>
        <CurrencySelector currencies={currencies} currency={currency} handleCurrencyChange={currencyChangeHandler} />
        <CoinSelector coinList={coinList} coin={coin} handleCoinChange={coinChangeHandler}/>
        <Graph data = {bitcoinData} coin={coin} CoinPricing={getCoinPricing}/>
        <Guide/>
      </BrowserRouter>
    </div>
  );
}

export default App;
