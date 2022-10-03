import { ResponseType } from 'axios';
import { ApiError } from 'next/dist/server/api-utils';
import ResponseCache from 'next/dist/server/response-cache';
import Header from '../components/header';
const axios = require('axios').default;

interface CurrencyPairItem {
	id: string;
	base_currency: string;
	quote_currency: string;
	quote_increment: string;
	base_increment: string;
	display_name: string;
	min_market_funds: string;
	margin_enabled: boolean;
	post_only: boolean;
	limit_only: boolean;
	cancel_only: boolean;
	status: 'online' | 'delisted';
	status_message: string;
	auction_mode: boolean;
}

axios
	.get('https://api.exchange.coinbase.com/products')
	.then((response: any) => {
		// handle success
		const onlineCurrencies: CurrencyPairItem[] = [];
		response.data.map((currency: CurrencyPairItem) => {
			if (currency.status === 'online') {
				onlineCurrencies.push(currency);
			}
			return onlineCurrencies;
		});
	})
	.catch((error: Promise<ApiError>) => {
		// handle error
		console.log(error);
		return error;
	});

const Homepage = () => {
	return (
		<div>
			<Header />
			<div className='flex justify-center'>Content</div>
		</div>
	);
};

export default Homepage;
