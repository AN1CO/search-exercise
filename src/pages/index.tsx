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

		if (searchInput !== '') {
			const filteredCurrenciesData = allCurrenciesData.filter((item) => {
				return Object.values(item)
					.join('')
					.toLowerCase()
					.includes(searchInput.toLowerCase());
			});
			setFilteredDataSearchResults(filteredCurrenciesData);
		} else {
			setFilteredDataSearchResults(allCurrenciesData);
		}
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
			{/* TODO:
			 * create a separate card component with styling
			 * add tooltips for explaining  info stuff
			 * style for more responsive design
			 * make more styling inside the cards to make it prettier
			 * handle floats
			 * search for specific parts of the data
			 * pagination to help with lag while searching
			 */}
			<div className='mx-auto max-w-2xl'>
				<div className='justify-center p-2 m-2'>
					<Header />
				</div>
				<div className='justify-center p-2 m-2'>
					<input
						className='p-1 border rounded border-gray-800 enabled:hover:border-gray-400 disabled:opacity-75'
						type='text'
						placeholder='Search'
						onChange={(e) => {
							searchItems(e.target.value);
						}}
					/>
				</div>
				<div className='grid grid-cols-4 grid-flow-row gap-2'>
					{allCurrenciesData.length > 0 ? (
						searchInput.length > 1 ? (
							filteredDataSearchResults.map((item, index) => (
								<div
									key={index}
									className='min-h-80 m-4 p-4 rounded-md bg-gray-200'
								>
									<p>{item.base_currency}</p>
									<p>{`(${item.quote_currency})`}</p>
									<p>{`Minimum Order Price: (${item.base_increment})`}</p>
									<p>{`Minimum for Market Order: ${item.min_market_funds}`}</p>
								</div>
							))
						) : (
							allCurrenciesData.map((item, index) => (
								<div
									key={index}
									className='min-h-80 m-4 p-4 rounded-md bg-gray-200'
								>
									<p>{item.base_currency}</p>
									<p>{`(${item.quote_currency})`}</p>
									<p>{`Minimum Order Price: (${item.base_increment})`}</p>
									<p>{`Minimum for Market Order: ${item.min_market_funds}`}</p>
								</div>
							))
						)
					) : (
						<p>Getting crypto...</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Homepage;
