import React from "react";
import { useState, useEffect } from 'react';
import Topbar2 from "./Topbar2";
import Dropdown2 from "./Dropdown2";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../App.css";

const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#000000",
      },
    },
  });
  
  const lightTheme = createTheme({
    palette: {
      background: {
        default: "#e4f0e2",
      },
    },
  });

  


export default function CryptoPage() {
  const [prices, setPrices] = useState(null);
  const [crypto1, setCrypto1] = useState("BTC");

  const handleCrypto1Change = (value) => {
    setCrypto1(value);
  };


  const supportedCryptos = [
    "BTC",
    "ETH",
    "DOGE",
    "XRP",
    "LTC",
    "BCH",
    "BNB",
    "EOS",
    "XLM",
    "LINK",
    "DOT",
    "ADA",
  ];
  
  
  

  useEffect(() => {
    const supportedCryptosString = supportedCryptos.join(",");
    fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${supportedCryptosString}&tsyms=USD`)
      .then(response => response.json())
      .then(data => {
        setPrices(data);
      })
      .catch(error => {
        console.error('Error fetching prices:', error);
      });
  }, []);

  let answer=[];
  
  if (!prices) {
    answer = supportedCryptos.map(x => ([x, "loading"]));
  } else {
    answer = supportedCryptos.map(x => ([x, prices[x] ? prices[x].USD : undefined]));
  }
  
  

  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Topbar2 label1="Crypto Website" label2="Login"></Topbar2>
        {/* {answer.map(([crypto, price]) => (<div key={crypto}><p>{crypto}: {price?price:"loading"}</p></div>))} */}
        <Dropdown2
        label="Cryptocurrency"
        arr={supportedCryptos}
        fun1={handleCrypto1Change}
      ></Dropdown2>
      </ThemeProvider>
  );
}
