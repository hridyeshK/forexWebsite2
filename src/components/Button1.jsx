import React from 'react'
import Button from '@mui/material/Button';

export default function Button1(props) {
  

  return (
    
    <Button variant="contained" style={{
        color: props.color, 
        backgroundColor: props.backgroundColor, 
        borderRadius: props.borderRadius,  
        fontWeight: props.fontWeight, 
        fontSize: props.fontSize,
        fontFamily: props.fontFamily
        }}
        >
        {props.label}
    </Button>
    
  )
}
