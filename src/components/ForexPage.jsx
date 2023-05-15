import { Component, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Card1 from "./card1";
import MainC from "./MainC";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
        default: "#ffffff",
      },
    },
  });

function ForexPage() {
  

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <MainC></MainC>
      </ThemeProvider>
    </>
  );
}

export default ForexPage;
