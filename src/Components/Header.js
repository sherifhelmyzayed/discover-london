import React from 'react'

import house from '../../assets/house.jpg'
import NavBar from '../../Components/NavigationBar/NavBar';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Header = () => {
  return (
    <>

      <Box sx={{
        background: 'linear-gradient(to top, rgb(10, 27, 47), rgb(0, 0, 0))',
        height: '100vh',
        display: "flex",
        flexDirection: 'column'
      }}>
        <NavBar />

        <Box sx={{
          background: `url(${house
            })`, width: '40%', height: '65%', borderRadius: 5, backgroundPosition: 'center',
          backgroundSize: 'cover', marginTop: 20, marginLeft: 20,
        }}>
          <Typography sx={{
            fontWeight: '800',
            fontSize: '2.8rem',
            width: '50vw',
            fontFamily: 'syne',
            textShadow: "-1px 11px 25px rgba(9,9,9,0.9)",
            color: 'white',
            marginLeft: 85, marginTop: 10
          }}>
            For an advanced world<br></br> for you and me Innovation holds the key
          </Typography>
          <Typography sx={{
            fontFamily: 'syne',
            fontWeight: 400,
            color: 'white',
            fontSize: '2rem'
          }}>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 98, marginTop: 14 }}>

            <Typography sx={{
              fontWeight: 200,
              color: 'white',
              fontSize: '1.5rem',
              width: '410px'
            }}>
              Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.
            </Typography>
            <Box sx={{  marginTop: 4 }}>

              <Button variant="outlined" sx={{ color: 'white', border: '1px solid white', fontWeight: '300', width: 130 }}>Explore &nbsp;<ArrowForwardIosIcon sx={{fontSize:15}}/></Button>

            </Box>
          </Box>
        </Box>

      </Box>

    </>
  )
}

export default Header