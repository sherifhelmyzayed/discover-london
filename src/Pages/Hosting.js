import React from 'react'

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import host from '../assets/host.mp4'
import Capture from '../assets/Capture.PNG'
import second from '../assets/second.PNG'
import Card from '../Components/host/CardHost'

import Carousel from 'react-elastic-carousel'
import '../Components/host/carousal.css'


const Item = {
    color:'white',
    backgroundColor:'black',
    height:'100vh'
}
const vid = {
   width:'50vw',
   height:'100vh'
    
}
const center = {
    textAlign:"center",
    marginTop: '35%',
    fontSize: '30px',
    width: '49vw'
}
const divv = {
  color: 'white',
  position: 'relative',
  textAlign: 'center',
  top: '35%',
  fontSize: '36px'
}


export default function Hosting() {
  return (
    <><Box sx={{ width: 'auto', height: '100vh',marginBottom:'7%' }}>
        <Grid container >
        <Grid item style={Item} >
          <div style= {center}>
              <h2>Hosting</h2>
                  <h2>Making Airbnb,</h2> 
                  <h2>Airbnb</h2>
                  <Button variant="contained" sx={{marginTop:'8%',padding:'15px' , borderRadius:'8%'}}>Try Hosting</Button>
          </div>
        </Grid>
        <Grid item style={vid}  >
            
        <video style={{width:"100%" , height:'100%' , objectFit:'cover' , }} id="background-video" autoPlay loop muted>
                <source src={host} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
       
        </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: '80vw', height: '100vh',margin:'0 auto' , marginBottom:'2%'}}>
        <div style={{textAlign:'center' , padding:'10px' , fontSize:'28px' , marginBottom:'3%'}}>
        <h1>You can Host </h1>
        <h1>anything,anywhere</h1>
        </div>
          <div className='carousal'>
          <Carousel itemsToShow={3} style={{}}>
            <Card>hi</Card>
            <Card>bye</Card>
            <Card>wow</Card>
            <Card>wow</Card>
            <Card>wow</Card>
          </Carousel>
          </div>
              
          </Box>
          
          <Box sx={{ width: '100vw', height: '100vh', marginLeft:'6%' ,backgroundImage: `url(${Capture})`,backgroundRepeat: "no-repeat" }}>
          <div style={divv}>
                 <h2>Questions about Hosting ?</h2>
                  <h2>Ask a super Host</h2> 
                  <Button variant="contained" sx={{marginTop:'8%',padding:'15px' , borderRadius:'7%'}}>Try Hosting</Button>

                  </div>
              
          </Box>
       
          <Box sx={{ width: '90vw', height: '80vh',margin:'0 auto',backgroundColor: 'whitesmoke'  }}>
          
          <Grid container >
        <Grid item  mx={{width:'50%'}}>
          <div style={{position:'relative' , top:'20%',left:'8%' , fontSize:"35px"}}>
        <h1> <span style={{color:'red'}}>air </span>cover</h1>
                  <p>Top-to-bottom protection.<br/> 
                  Free for Hosts. Only on discover London.</p> 
                  <Button variant="contained" sx={{marginTop:'8%',padding:'15px' , borderRadius:'7%'}}>Try Hosting</Button>
                  </div>
        </Grid>
        <Grid item  mx={{width:'50%'}}  >
       <img style={{width:'100%'}} src={second}></img>
        </Grid>
        </Grid>
              
          </Box>
          <Box sx={{ width: 'auto', height: '100vh' }}>
        <Grid container >
        <Grid item style={vid}  >
            
            <video style={{width:"100%" , height:'100%' , objectFit:'cover' , }} id="background-video" autoPlay loop muted>
                    <source src={host} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
           
            </Grid>
        <Grid item style={Item} >
          <div style= {center}>
              <h2>Hosting</h2>
                  <h2>Making Airbnb,</h2> 
                  <h2>Airbnb</h2>
                  <Button variant="contained" sx={{marginTop:'8%',padding:'15px' , borderRadius:'7%'}}>Try Hosting</Button>
          </div>
        </Grid>
       
        </Grid>
      </Box>
          </>
  )
}
