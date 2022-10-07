# crypto-dashboard-template

Template for crypto dashboard projects.


## Installation

Install/use the pinned node version via [nvm](https://github.com/nvm-sh/nvm).
```
nvm install
```

Install project deps.
```
npm install
```

## Usage

Start the application in dev mode.
```
npm run dev
```

The application will be running on http://localhost:3000

## Summary

- Fetch the trading pairs via the [products API](https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getproducts) and render them in a list view. Only products that have a `status` value of `online` should be displayed in the list. Style the list as you see fit and include any metadata from the payload that could be helpful (e.g. `base_currency`, `quote_currency`, etc)
- Above the results, add an input field that filters the results in real-time as a user types - determine what field makes the most sense to search on.
- [Next.js](https://nextjs.org/) is used as the react framework.
- [Tailwindcss](https://tailwindcss.com/) for styling.

## Preview

![Screen Shot 2022-10-07 at 1 52 57 PM](https://user-images.githubusercontent.com/14117410/194619892-6dad34ae-c9ec-4de6-b44e-8b88fe094c97.png)

![Screen Shot 2022-10-07 at 1 53 29 PM](https://user-images.githubusercontent.com/14117410/194619949-8753cb45-9be6-46da-9d08-a39a3757d05a.png)

## TODO:
* create a separate card component with styling
* add tooltips for explaining data points
* style for more responsive design
* style cards more to make prettier and more readable
* handle floats
* filter tags to search for specific parts of the data (search by minimum order price, etc)
* pagination to help with lag while searching
* put text for when theres no search results that match

