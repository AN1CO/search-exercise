import Header from '../components/header';
import {
	fetchAllCurrencies,
	CurrencyPairItemProps,
} from './api/getAllCurrencies';
import { useState, useEffect } from 'react';

const Homepage = () => {
	const [allCurrenciesData, setallCurrenciesData] = useState<
		CurrencyPairItemProps[]
	>([]);
	const [filteredDataSearchResults, setFilteredDataSearchResults] = useState<
		CurrencyPairItemProps[]
	>([]);
	const [searchInput, setSearchInput] = useState('');

	const searchItems = (searchValue: string) => {
		setSearchInput(searchValue);
		const filteredCurrenciesData = allCurrenciesData.filter((item) => {
			return Object.values(item)
				.join('')
				.toLowerCase()
				.includes(searchInput.toLowerCase());
		});
		setFilteredDataSearchResults(filteredCurrenciesData);
	};

	useEffect(() => {
		fetchAllCurrencies().then((res) => {
			res.map((item: any) => {
				if (item.status === 'online') {
					setallCurrenciesData((prev) => [...prev, item]);
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
					placeholder='Search'
					onChange={(e) => {
						searchItems(e.target.value);
					}}
				/>
			</div>
			<ul>
				{allCurrenciesData.length > 0 ? (
					allCurrenciesData.map((item, index) => (
						<li key={index}>{item.display_name}</li>
					))
				) : (
					<p>Getting crypto...</p>
				)}
			</ul>
		</div>
	);
};

export default Homepage;
