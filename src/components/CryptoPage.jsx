import React, { useState, useEffect } from 'react';
import Topbar2 from './Topbar2';
import Dropdown2 from './Dropdown2';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
    },
  },
});

const lightTheme = createTheme({
  palette: {
    background: {
      default: '#e4f0e2',
    },
  },
});

export default function CryptoPage() {
  const [prices, setPrices] = useState(null);
  const [crypto1, setCrypto1] = useState('BTC');
  const [currency1, setCurrency1] = useState('USD');
  const [highestPriceYear, setHighestPriceYear] = useState(null);
  const [lowestPriceYear, setLowestPriceYear] = useState(null);
  const [highestPriceMonth, setHighestPriceMonth] = useState(null);
  const [lowestPriceMonth, setLowestPriceMonth] = useState(null);
  const [highestPriceWeek, setHighestPriceWeek] = useState(null);
  const [lowestPriceWeek, setLowestPriceWeek] = useState(null);

  const handleCrypto1Change = (value) => {
    setCrypto1(value);
  };

  const handleCurrency1Change = (value) => {
    setCurrency1(value);
  };

  const supportedCryptos = [
    'BTC',
    'ETH',
    'DOGE',
    'XRP',
    'LTC',
    'BCH',
    'BNB',
    'EOS',
    'XLM',
    'LINK',
    'DOT',
    'ADA',
  ];

  const supportedCurrencies = [
    'USD',
    'GBP',
    'EUR',
    'AUD',
    'BGN',
    'BRL',
    'CAD',
    'CHF',
    'CNY',
    'CZK',
    'DKK',
    'HKD',
    'HUF',
    'IDR',
    'ILS',
    'INR',
    'ISK',
    'JPY',
    'KRW',
    'MXN',
    'MYR',
    'NOK',
    'NZD',
    'PHP',
    'PLN',
    'RON',
    'SEK',
    'SGD',
    'THB',
    'TRY',
    'ZAR',
  ];

  useEffect(() => {
    // Fetch current price data
    fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=${crypto1}&tsyms=${currency1}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPrices(data[currency1]);
      })
      .catch((error) => {
        console.error('Error fetching prices:', error);
      });

    // Fetch historical price data for different time intervals
    const endpoint = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range';
    const currency = 'usd';

    const currentDate = Math.floor(Date.now() / 1000);
    const oneYearAgo = currentDate - 31536000; // 1 year = 31536000 seconds
    const oneMonthAgo = currentDate - 2592000; // 1 month = 2592000 seconds
    const oneWeekAgo = currentDate - 604800; // 1 week = 604800 seconds

    const urls = [
      `${endpoint}?vs_currency=${currency}&from=${oneYearAgo}&to=${currentDate}`,
      `${endpoint}?vs_currency=${currency}&from=${oneMonthAgo}&to=${currentDate}`,
      `${endpoint}?vs_currency=${currency}&from=${oneWeekAgo}&to=${currentDate}`,
    ];

    Promise.all(
      urls.map((url) =>
        fetch(url)
          .then((response) => response.json())
          .then((data) => data.prices)
      )
    )
      .then((responses) => {
        const pricesYear = responses[0];
        const pricesMonth = responses[1];
        const pricesWeek = responses[2];

        setHighestPriceYear(Math.max(...pricesYear.map(([timestamp, price]) => price)));
        setLowestPriceYear(Math.min(...pricesYear.map(([timestamp, price]) => price)));

        setHighestPriceMonth(Math.max(...pricesMonth.map(([timestamp, price]) => price)));
        setLowestPriceMonth(Math.min(...pricesMonth.map(([timestamp, price]) => price)));

        setHighestPriceWeek(Math.max(...pricesWeek.map(([timestamp, price]) => price)));
        setLowestPriceWeek(Math.min(...pricesWeek.map(([timestamp, price]) => price)));
      })
      .catch((error) => {
        console.error('Error fetching historical prices:', error);
      });
  }, [crypto1, currency1]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Topbar2 label1="Crypto Website" label2="Login" />
      <br />
      <Dropdown2 label="Cryptocurrency" arr={supportedCryptos} fun1={handleCrypto1Change} />
      <Dropdown2 label="Currency" arr={supportedCurrencies} fun1={handleCurrency1Change} />
      One {crypto1} is equal to {prices} {currency1}.
      <br />
      {highestPriceYear && <div>Highest BTC price in the last year: {highestPriceYear}</div>}
      {lowestPriceYear && <div>Lowest BTC price in the last year: {lowestPriceYear}</div>}
      {highestPriceMonth && <div>Highest BTC price in the last month: {highestPriceMonth}</div>}
      {lowestPriceMonth && <div>Lowest BTC price in the last month: {lowestPriceMonth}</div>}
      {highestPriceWeek && <div>Highest BTC price in the last week: {highestPriceWeek}</div>}
      {lowestPriceWeek && <div>Lowest BTC price in the last week: {lowestPriceWeek}</div>}
    </ThemeProvider>
  );
}
