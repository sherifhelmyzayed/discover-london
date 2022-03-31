import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import  ReactDOM  from 'react-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import axios from "axios";
import { useNavigate  } from "react-router-dom";
const Modal_styles = {
    position : 'fixed',
    top : '50%',
    left: '50%',
    transform : 'translate(-50%,-50%) ',
    backgroundColor:'#fff',
    width : '29vw',
    padding : '20px',
    height : 'auto',
    borderRadius: '2%',
    zIndex : 1000
}
const Overlay = {
    position : 'fixed',
    top : 0,
    left: 0,
    right: 0,
    bottom : 0,
    backgroundColor:'rgba(0,0,0,.5)',
    zIndex:1000
}


export default function Feedback({open}) {
let history = useNavigate ();
  

    if(!open) return null
    return ReactDOM.createPortal ( <>
    <div style={Overlay}/>
    <div style={Modal_styles}>
          <Paper style={{marginBottom : '7%' }}>
         <Button variant="text" onClick={()=>{
           history('../')
         }}><CloseIcon/></Button>
         <h3 >log in</h3>
         
         </Paper>
         
         <h2 style={{marginTop:'0px',marginBottom:'5%'}}>Welcome to Discover</h2>
         <Grid container direction="column"
                justify="center"
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
               >
  
    <Grid item md={2} >
    <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
            fullWidth
           
          />
          <br/>
          <br/>
    </Grid>
    <Grid item md={2} >
    <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            fullWidth 
           
            
          />
    </Grid>
  </Grid>
  
  <Button style={{marginTop:'8%',marginBottom:'5%'}} variant="contained" fullWidth>submit</Button>
  
  
          </div>
          </>,
          document.getElementById('portal')
    )
  
}

