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
const head = {
    color:"black" ,
    position: 'relative',
    left: '30%',
    display:'inline-block',
    marginBottom: '20px'
    
}
let tok = localStorage.getItem('token')

    
    export default function LoginForm({open,onClose}) {
const [username , setUsername] = useState('');
const [password , setPassword] = useState('');
const [auth , setAuth] = useState(false);

let history = useNavigate ();

const login = ()=>{
    
  axios.post("http://localhost:4000/user/login",{
    username : username,
    password : password,
  }).then((response)=>{
    console.log(response.data)
    if(response.data.token != undefined){
      
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('id', response.data.user._id)
      localStorage.setItem('name', response.data.user.firstName)
      setTimeout(() => {
        history('/discover')
      }, 3000);
      if(response.data.user.role === 'host'){
        setAuth(true)
        localStorage.setItem('auth', true)
         }
    }
    

  })}

  
  
       

        if(!open) return null
      return ReactDOM.createPortal ( <>
      <div style={Overlay}/>
      <div style={Modal_styles}>
            <Paper style={{marginBottom : '7%' }}>
           <Button variant="text" onClick={()=>{
             history('../')
           }}><CloseIcon/></Button>
           <h3 style={head}>log in</h3>
           
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
              onChange={(e)=>{
                setUsername(e.target.value)
              }}
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
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              
              
            />
      </Grid>
    </Grid>
    
    <Button onClick={login} style={{marginTop:'8%',marginBottom:'5%'}} variant="contained" fullWidth>Login</Button>
    
    
            </div>
            </>,
            document.getElementById('portal')
      )
    
}
