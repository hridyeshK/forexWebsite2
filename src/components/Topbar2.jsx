
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { Link } from 'react-router-dom';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function Topbar(props) {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{backgroundColor: "red"}}>
        <Toolbar >
        <Link to="/">
          <IconButton
            size="large"
            edge="start"
            color="white"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon></ArrowBackIcon>
          </IconButton >
          </Link>
          <IconButton style={{color:"#FFFF00"}}>
          <CurrencyBitcoinIcon style={{color:"#FFFF00", fontSize: "50px"}}></CurrencyBitcoinIcon>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontSize: "25px"}}>
            {props.label1}
          </Typography>
          <Button color="inherit">{props.label2}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


