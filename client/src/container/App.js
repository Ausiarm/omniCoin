import React, {
	useReducer,
	useState,
	useEffect,
} from 'react';
import {
	BrowserRouter,
} from 'react-router-dom';
import reducer from '../utils/reducer';
import CurrencySelector from './CurrencySelector';
import Graph from './Graph/Graph';
import Guide from './Guides/Guide';
import CoinSelector from './CoinSelector';
import DiveDeeper from './Dive-deeper/Dive-deeper';
import NavBar from './Navbar/Navbar';
import SideBar from './Sidebar/Sidebar';
import MainLogo from './MainLogo/MainLogo';
import './App.css';
import Footer from '../Footer/Footer';

function App() {
	const initialState = {
		googleId: '',
		name: '',
		email: '',
		photo: '',
	};
	const [store, dispatch] = useReducer(
		reducer,
		initialState
	);
	const { googleId, name, email, photo } = store;

	const defaultCurrency = 'usd';
	const [currency, setCurrency] =
		useState(defaultCurrency);
	const [bitcoinData, setBitcoinData] = useState({});
	const [currencies, setCurrencies] = useState([]);
	const [coin, setCoin] = useState('bitcoin');
	const [coinList, setCoinList] = useState([]);

	function activateUser(data) {
		dispatch({
			type: 'setLoggedInUser',
			data: data,
		});
	}

	function newDate(date) {
		return new Date(date).toLocaleString('fr-CA', {
			year:'numeric',
      month: 'numeric',
			day: 'numeric',
		});
	}
	const userInfo = { googleId, name, email, photo };

	//Fetching currency list
	function getCurrencies() {
		fetch('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
			.then((res) => res.json())
			.then((res) => {
				setCurrencies(res);
			});
	}

		//Fetching coin list
	function getCoinList() {
		fetch('https://api.coingecko.com/api/v3/coins/list')
			.then((res) => res.json())
			.then((res) => {
				setCoinList(res);
			});
	}

  //Fetching 30 days coin Pricing
	function getCoinPricing() {
		const today = +new Date();
		fetch(
			`https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=${currency}&from=1632774400&to=${today}`
		)
			.then((res) => res.json())
			.then((res) => {
        setBitcoinData(
					res.prices.sort().map((el) => {
						return [newDate(el[0]), el[1]];
					})
				);
			});
	}

	useEffect(() => {
		getCurrencies();
		getCoinList();
	}, []);

	function currencyChangeHandler(currency) {
		setCurrency(currency);
	}
	function coinChangeHandler(coin) {
		setCoin(coin);
	}

	return (
		<div>
			<BrowserRouter>
				<SideBar />
				<NavBar user={userInfo}
					activateUser={activateUser}/>
				
				<div id='home' className='mid'>
					<MainLogo className="mt-5"/>
					<h1 className='omnisCoin'>omniCoin</h1>
					<div className='btn'>
						<a
							className='btn btn-primary'
							href='#stocks'
						>
							Get started with Crypto Stocks
						</a>
						<a
							className='btn btn-primary'
							href='#blog'
						>
							Learn more about Crypto
						</a>
					</div>
				</div>
				<div id='about' className='info mb-5'>
					<div className='about'>
						<h2 data-aos='fade-up'>
							About
						</h2>
						<p data-aos='fade-up'>
							If you're here then you've probably hit the point where cryptocurrency and the talk surrounding it has pushed you to the point where you simply can't ignore it anymore. Don't worry, we've all been there and know how frustrating it can be to feel completely out of the loop in relation to a technology that it seems everyone and their mother won't stop talking about.
						</p>
            <p>
              The solution to this global gossip? omniCoin. We set out with a basic idea in mind: create a repository of knowledge for beginners and novices in the crypto space. Want to learn what a "cold wallet" is? We got your back. Want to have a better understanding of how cryptocurrencies prices fluctuate in a given period of time? Not only do we have your back, we also got you a nice little graph that makes understanding these things much easier. 
            </p>
            <p>
              Our name, omniCoin, literally translates to everyone's coin and that's how we want to operate moving forward. No one should be left behind as tech advances and we will do our best to make sure the Australian people remain in the know about this rapidly evolving industry. 
            </p>
					</div>
				</div>
				<div id='stocks' className='stocks mb-5'>
					<h2>Crypto Stocks</h2>
					<div className='my-5' >
						<CurrencySelector 
							currencies={currencies}
							currency={currency}
							handleCurrencyChange={
								currencyChangeHandler
							}
						/>
						<CoinSelector
							coinList={coinList}
							coin={coin}
							handleCoinChange={
								coinChangeHandler
							}
						/>
					</div>
					<Graph
						data={bitcoinData}
						coin={coin}
						CoinPricing={getCoinPricing}
					/>
				</div>
			</BrowserRouter>
			<div id='guides' className='guides mb-5'>
				<Guide className='mb-5' />
      </div>
      	<DiveDeeper />
        <Footer/>
		</div>
	);
}

export default App;
