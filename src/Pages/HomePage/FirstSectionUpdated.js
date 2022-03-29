import React from 'react'
import house from '../../assets/house.jpg'
import NavBar from '../../Components/NavigationBar/NavBar';
import { Box, Typography, Button, Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const FirstSectionUpdated = () => {
  return (
    <>


      <Box sx={{
        background: 'linear-gradient(to top, rgb(10, 27, 47), rgb(0, 0, 0))',
        height: '100vh',
        display: "flex",
        flexDirection: 'column'
      }}>
        <NavBar />
        <Grid container spacing={2} ml={5} mt={15}  justifyContent="center">
          <Grid item xs={12}>
            <Box sx={{
              backgroundImage: `url(${house
                })`, height: '25em', width: '50%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center', borderRadius: 5, boxShadow: 3
            }} >
            </Box>
          </Grid>
          <Grid item xs={12} >

            <Typography sx={{
              fontWeight: '800',
              fontSize: '1.8em',
              fontFamily: 'syne',
              textShadow: "-1px 11px 25px rgba(9,9,9,0.9)",
              color: 'white',

            }}>
              For an advanced world<br></br> for you and me Innovation holds the key
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
              <Typography sx={{
                fontWeight: 200,
                color: 'white',
                fontSize: '1.2rem',
                width: '410px'
              }}>
                Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.
              </Typography>
              <Box sx={{ marginTop: 4 }}>

                <Button variant="outlined" sx={{ color: 'white', border: '1px solid white', fontWeight: '300', width: '8.125rem' }}>DISCOVER &nbsp;<ArrowForwardIosIcon sx={{ fontSize: 15 }} /></Button>

              </Box>
            </Box>
            </Grid>

          </Grid>
      </Box>





    </>
  )
}

export default FirstSectionUpdated