import React, { useEffect, useState, useRef } from "react";
import Topbar from "./Topbar";
import Dropdown1 from "./Dropdown1";
import Button1 from "./Button1";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import { Box } from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';
import "../App.css";

export default function MainC(props) {
  const [cur1, setCur1] = useState("USD");
  const [cur2, setCur2] = useState("INR");
  const [answer, setAnswer] = useState(1);

  const handleCur1Change = (value) => {
    setCur1(value);
  };

  const handleCur2Change = (value) => {
    setCur2(value);
  };

  useEffect(() => {
    if (cur1 == cur2) setAnswer(1);
    else
      fetch(
        `https://api.frankfurter.app/latest?amount=1&from=${cur1}&to=${cur2}`
      )
        .then((resp) => resp.json())
        .then((data) => {
          setAnswer(data.rates[cur2]);
        })
        .catch((error) => {
          console.log(error);
        });
  }, [cur1, cur2]);

  const currencyList = [
    "USD",
    "GBP",
    "EUR",
    "AUD",
    "BGN",
    "BRL",
    "CAD",
    "CHF",
    "CNY",
    "CZK",
    "DKK",
    "HKD",
    "HUF",
    "IDR",
    "ILS",
    "INR",
    "ISK",
    "JPY",
    "KRW",
    "MXN",
    "MYR",
    "NOK",
    "NZD",
    "PHP",
    "PLN",
    "RON",
    "SEK",
    "SGD",
    "THB",
    "TRY",
    "ZAR",
  ];

  return (
    <div>
      <Topbar label1="Forex Website" label2="Login"></Topbar>
      <br />
      <Dropdown1
        label="Currency 1"
        arr={currencyList}
        fun1={handleCur1Change}
      ></Dropdown1>
      <Dropdown1
        label="Currency 2"
        arr={currencyList}
        fun1={handleCur2Change}
      ></Dropdown1>
      <br />
      <div
        style={{
          fontSize: "30px",
          position: "absolute",
          right: "47%",
        }}
      >
        {answer}
      </div>
      <br />
      <br />

      

      <Button
      component={Link} 
      to="/crypto"
        style={{
          color: "#ffffff",
          backgroundColor: "#FF0000",
          borderRadius: "30px",
          fontWeight: "normal",
          fontSize: "35px",
        }}
        variant="contained"
        className="my-button-red"
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CurrencyBitcoinIcon sx={{ fontSize: "40px", color: "#FFFF00" }} />
          <Box sx={{ ml: 1 }}>GET CRYPTO RATES</Box>
        </Box>
      </Button>

        <br />
        <br />

      <Button
      component={Link} 
      to="/crypto"
        style={{
          color: "#ffffff",
          backgroundColor: "#323232",
          borderRadius: "30px",
          fontWeight: "normal",
          fontSize: "35px",
          ":hover": {
            backgroundColor: "#AF5",
            color: "white"
          }
        }}
        variant="contained"
        className="my-button-white"
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CurrencyBitcoinIcon sx={{ fontSize: "40px", color: "#FFFF00" }} />
          <Box sx={{ ml: 1 }}>GET CRYPTO RATES</Box>
        </Box>
      </Button>
    </div>
  );
}

/*
It seems that the CurrencyBitcoinIcon component is not responsive to the sx prop that you've 
added to increase its font size. One possible solution is to wrap the icon component 
inside a Box component from Material UI and use the sx prop to increase 
the Box size, like this:
*/
