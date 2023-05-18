import { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';

function Card1() {

  const [usdRate, setUsdRate] = useState(null);
  const [eurRate, setEurRate] = useState(null);
  const [gbpRate, setGbpRate] = useState(null);

  useEffect(() => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((response) => response.json())
      .then((data) => {
        setUsdRate(data.bpi.USD.rate);
        setEurRate(data.bpi.EUR.rate);
        setGbpRate(data.bpi.GBP.rate);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Currency Rates</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5">USD: {usdRate}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5">EUR: {eurRate}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5">GBP: {gbpRate}</Typography>
      </Grid>
    </Grid>
  );
}

export default Card1;