import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


export default function Topbar(props) {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{backgroundColor: "black"}}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton style={{color:"#FFFF00"}}>
          <CurrencyRupeeIcon></CurrencyRupeeIcon>
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


