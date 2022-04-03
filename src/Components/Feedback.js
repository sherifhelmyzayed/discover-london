import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import  ReactDOM  from 'react-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
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
    left: '25%',
    display:'inline-block',
    marginBottom: '20px'
    
}
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }


export default function Feedback({open}) {

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const [valuee, setValuee] = React.useState('Controlled');

  const handleChange = (event) => {
    setValuee(event.target.value);
  };    
     let history = useNavigate ();
    const submit = ()=>{
         axios.post('http://localhost:4000/review/',{
            "userId": "62437c78ba23545b6c3c946d",
            "propId": "624494eaac4fa8e379d1ebec",
            "description": `${valuee}`
         }).then((res)=>{
           history('../')
         })
     }

    if(!open) return null
    return ReactDOM.createPortal ( <>
    <div style={Overlay}/>
    <div style={Modal_styles}>
          <Paper style={{marginBottom : '7%' }}>
         <Button variant="text" onClick={()=>{
           history('../')
         }}><CloseIcon/></Button>
         <h3 style={head} >Give feedback</h3>
         
         </Paper>
         
         <h2 style={{marginTop:'0px',marginBottom:'5%'}}>How was your stay</h2>
         <Grid container direction="row"
                justify="center"
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
               >
  
    <Grid item md={6} >
        
    <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
          defaultValue={2}
           size="large" 
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
      
    </Grid>
    <Grid item md={6} >
    <TextField
          id="outlined-multiline-flexible"
          label="feedback"
          multiline
          maxRows={4}
          value={valuee}
          onChange={handleChange}
        />
    </Grid>
  </Grid>
  
  <Button onClick={submit} style={{marginTop:'8%',marginBottom:'5%'}} variant="contained" fullWidth>submit</Button>
  
  
          </div>
          </>,
          document.getElementById('portal')
    )
  
}

