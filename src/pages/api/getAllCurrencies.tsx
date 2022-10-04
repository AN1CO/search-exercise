import { AxiosError, AxiosResponse } from 'axios';
const axios = require('axios').default;

export interface CurrencyPairItemProps {
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

export const fetchAllCurrencies = async () => {
	try {
		const res = await axios.get('https://api.exchange.coinbase.com/products');
		return res.data;
	} catch (err: any) {
		throw err.response.data;
	}
};
