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
	const [coin, setCoin] = useState('bitclave');
	const [coinList, setCoinList] = useState([]);

	function activateUser(data) {
		dispatch({
			type: 'setLoggedInUser',
			data: data,
		});
	}

	function newDate(date) {
		return new Date(date).toLocaleDateString('es-ES', {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
		});
	}
	const userInfo = { googleId, name, email, photo };
	function getCurrencies() {
		//currency list
		fetch(
			'https://api.coingecko.com/api/v3/simple/supported_vs_currencies'
		)
			.then((res) => res.json())
			.then((res) => {
				setCurrencies(res);
			});
	}
	function getCoinList() {
		//coin list
		fetch('https://api.coingecko.com/api/v3/coins/list')
			.then((res) => res.json())
			.then((res) => {
				setCoinList(res);
			});
	}

	function getCoinPricing() {
		const today = +new Date();
		//coin Pricing
		fetch(
			`https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=${currency}&from=1613774400&to=${today}`
		)
			.then((res) => res.json())
			.then((res) => {
				setBitcoinData(
					res.prices.sort().map((el) => {
						return [newDate(el[0]), el[1]];
					})
				);
				console.log(
					res.prices.sort().map((el) => {
						return [newDate(el[0]), el[1]];
					})
				);
				//console.log(res.prices);
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
							Lorem ipsum dolor sit amet,
							consectetur adipiscing elit.
							Proin orci augue, pretium at
							hendrerit.
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
