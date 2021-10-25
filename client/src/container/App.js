
import React, { useReducer, useState, useEffect } from 'react';
import Auth from './Auth';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import reducer from '../utils/reducer';
import CurrencySelector from './CurrencySelector';
import Graph from './Graph/Graph';
import Guide from './Guides/Guide';
import CoinSelector from './CoinSelector';
import NavBar from './Navbar/Navbar';
import SideBar from './Sidebar/Sidebar';
// import styled from './StyledComponents'; 
import MainLogo from './MainLogo/MainLogo';




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





const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  };
}

  
  return (
    <div className="App">
      
      <BrowserRouter>
      <SideBar />
      <NavBar />
      <Auth user={userInfo} activateUser={activateUser} />
      <div id="home" class="mid">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <MainLogo />
        <h1>omnisCoin</h1>
          <div class="btn">
              <a class="simple" href="#stocks">Get started with Crypto Stocks</a>
              <a class="border" href="#blog">Learn more about Crypto</a>
          </div>
      </div>
        <Route path="/"></Route>

        <div id="about" class="info">
          <div class="about">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
            <h2 data-aos="fade-up">Welcome to omnisCoin</h2>
            <h5 data-aos="fade-up">About</h5>
            <p data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci augue, pretium at nisi sit amet, accumsan posuere est. 
            Nulla et malesuada tellus. Phasellus nec commodo sapien. Nulla ligula purus, egestas eget aliquet ac, condimentum at urna. 
            Ut sed arcu ut sapien imperdiet rhoncus. Aliquam rutrum rhoncus hendrerit. 
            </p>
            <br></br>

          </div>
        </div>
        <div id="stocks" class="stocks">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>Crypto Stocks</h2>
          <div class="selector">
            <CurrencySelector currencies={currencies} currency={currency} handleCurrencyChange={currencyChangeHandler} />
            <CoinSelector coinList={coinList} coin={coin} handleCoinChange={coinChangeHandler}/>
        </div>
        <Graph data = {bitcoinData} coin={coin} CoinPricing={getCoinPricing}/>

        </div>

      </BrowserRouter>
      <div id="guides" class="guides">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Guide/>
        <p class="paragraph" data-aos="fade-up">Start investing!</p>
        <h2  class="h2" data-aos="fade-up">Guides</h2>
        <div class="blogMenu">
          <div class="blog1" data-aos="fade-up">
            <div class="image">
              <img src=""></img>
            </div>
            <div class="blogDetails">
              <div class="name">
                <div class="nameDetails">
                  <h4>What is crypto?</h4>
                  <p>Article by - <span></span></p>

  {/* <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="#" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="#" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>

    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="#" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

    </div>
  </div>
</div> */}
                </div>
                <div class="pro">
                  <p>Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing</p>
                  
                  <a href="#" class="btn btn-primary">Read more</a>
                </div>
              </div>
             </div>
           </div>
         </div>
       </div>
       <br></br>
       <br></br>
       <br></br>

       <div id="divedeeper" class="divedeeper">
       <div class="card-columns">
       <br></br>
       <br></br>
       <br></br>
       <br></br>
         <h1>Dive Deeper</h1>
  <div class="card">
    <img class="card-img-top" src="#" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title that wraps to a new line</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div class="card p-3">
    <blockquote class="blockquote mb-0 card-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <img class="card-img-top" src="#" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card bg-primary text-white text-center p-3">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
      <footer class="blockquote-footer">
        <small>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has a regular title and short paragraphy of text below it.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img" src="#"></img>
  </div>
  <div class="card p-3 text-right">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

       </div>
     </div>
  
  );
}

export default App;
