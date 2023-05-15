import { Component, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Card1 from "./components/card1";
import MainC from "./components/MainC";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForexPage from "./components/ForexPage";
import CryptoPage from "./components/CryptoPage";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ForexPage></ForexPage>}></Route>
          <Route path="crypto" element={<CryptoPage></CryptoPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
