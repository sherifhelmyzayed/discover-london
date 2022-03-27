import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import StarIcon from '@mui/icons-material/Star';
import CheckIcon from '@mui/icons-material/Check';
export default function UserProfile() {
  return (
    <>
 <Box sx={{ flexGrow: 1 , width : '50vw', margin:'0 auto', marginTop:'8%' }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
        <Card sx={{ maxWidth: 310 , height:500 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: red[500],
              height: "100px",
              width: "100px",
              position: "relative",
              left: "88%",
             
            }}
            aria-label="recipe"
          >
            R
          </Avatar>
          
        }
      />
      <div style={{ marginBottom: '22%',textAlign:'center'}}>
      <a  href=''>Uplode photo</a>
      </div>
      
<hr/>
      <CardContent>
        <Typography  >
          <h2>Ahmed Confirmed</h2>
          <br/>
          <CheckIcon fontSizeSmall /> <span style={{fontWeight:'bolder',fontSize:'17px',position:'relative', bottom:'5px' }}>  phone number</span>
        </Typography>
      </CardContent>
  
    </Card>
        </Grid>
        <Grid item xs={7}style={{lineHeight: 1.8}} >
          
        <h1>Hi , i am Ahmed </h1>
        <p>Joined in 2022</p>
        <a href=''>edit profile</a>
     <h2 style={{marginTop:'7%',marginBottom:'5%'}}><StarIcon/> 0 reviews</h2>
     <hr style={{marginBottom:'3%'}}/>
     <a href='' > reviews by you</a >
     <hr style={{marginTop:'5%'}}/>

        </Grid>
      </Grid>
    </Box>
    </>
  )
}
