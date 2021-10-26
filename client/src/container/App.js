import React, {
	useReducer,
	useState,
	useEffect,
} from 'react';
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
import About from './About/about';
import {Heading} from './StyledComponents';
import Head from './Head/Head';

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
			<SideBar />
			<NavBar user={userInfo}	activateUser={activateUser}/>
			<MainLogo className="mt-5"/>
			<Head/>
			<About/>
			<Heading>Crypto Stocks</Heading>
			<CurrencySelector
				currencies={currencies}
				currency={currency}
				handleCurrencyChange={currencyChangeHandler}
			/>
			<CoinSelector
				coinList={coinList}
				coin={coin}
				handleCoinChange={coinChangeHandler}
			/>
			<Graph
				data={bitcoinData}
				coin={coin}
				CoinPricing={getCoinPricing}
			/>
			{/* <div id='guides' className='guides mb-5'> */}
				<Guide className='mb-5' />
      {/* </div> */}
      	<DiveDeeper />
        <Footer/>
		</div>
	);
}

export default App;
