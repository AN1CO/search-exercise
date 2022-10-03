import Header from '../components/header';
import {
	getAllCurrencies,
	CurrencyPairItemProps,
} from './api/getAllCurrencies';
import { useState, useEffect } from 'react';

const getPromise = () => {
	return Promise.resolve(getAllCurrencies());
};

const Homepage = () => {
	const [allCurrencies, setallCurrencies] = useState([]);
	useEffect(() => {
		const resolved = getAllCurrencies();
		console.log(resolved);

		return () => {};
	}, []);

	return (
		<div>
			<Header />
			<div className='flex justify-center'>Content</div>
		</div>
	);
};

export default Homepage;
