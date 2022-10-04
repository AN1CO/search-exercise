import Header from '../components/header';
import {
	fetchAllCurrencies,
	CurrencyPairItemProps,
} from './api/getAllCurrencies';
import { useState, useEffect } from 'react';

const Homepage = () => {
	const [allCurrencies, setallCurrencies] = useState<CurrencyPairItemProps[]>(
		[]
	);
	useEffect(() => {
		fetchAllCurrencies().then((res) => {
			res.map((item: any) => {
				if (item.status === 'online') {
					setallCurrencies((prev) => [...prev, item]);
				}
			});
		});
	}, []);

	return (
		<div>
			<Header />
			<div className='flex justify-center'>
				<input
					className='p-1 border rounded border-gray-800 enabled:hover:border-gray-400 disabled:opacity-75'
					type='text'
				/>
			</div>
			{allCurrencies.length > 0 ? (
				allCurrencies.map((item) => (
					<ul>
						<li>{item.display_name}</li>
					</ul>
				))
			) : (
				<p>Getting crypto...</p>
			)}
		</div>
	);
};

export default Homepage;
