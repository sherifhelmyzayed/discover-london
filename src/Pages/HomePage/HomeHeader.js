import React from 'react'
import house from '../../assets/house.jpg'
import { Box, Typography, Button, Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'
import insideShot from '../../images/insideShot.jpg'
import living from '../../images/living.jpg'
import view2 from '../../images/view2.jpg'
import houseShot from '../../images/houseShot.jpg'




const HomeHeader = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/discover')
  }

  
  return (
    <>


      <Box sx={{
        background: 'linear-gradient(to top, rgb(10, 27, 47), rgb(0, 0, 0))',
        height: '100vh',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
          <Grid item xs={12}>
          <Carousel sx={{ width: '50vw', height: '600px' }} IndicatorIcon={false} fullHeightHover={false} >

            <Box sx={{
              backgroundImage: `url(${house
                })`, height: '25em', width: '100%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center', borderRadius: 5, boxShadow: 3
            }} mt={20}>
            </Box>
            <Box sx={{
              backgroundImage: `url(${insideShot
                })`, height: '25em', width: '100%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center', borderRadius: 5, boxShadow: 3
            }} mt={20}>
            </Box>
            <Box sx={{
              backgroundImage: `url(${living
                })`, height: '25em', width: '100%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center', borderRadius: 5, boxShadow: 3
            }} mt={20} >
            </Box>
            <Box sx={{
              backgroundImage: `url(${view2
                })`, height: '25em', width: '100%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center', borderRadius: 5, boxShadow: 3
            }} mt={20}>
            </Box>
            <Box sx={{
              backgroundImage: `url(${houseShot
                })`, height: '25em', width: '100%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center', borderRadius: 5, boxShadow: 3
            }} mt={20}>
            </Box>
          </Carousel>

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

                <Button variant="outlined" sx={{ color: 'white', border: '1px solid white', fontWeight: '300', width: '14.125rem' }} onClick={handleClick}>DISCOVER LONDON &nbsp;<ArrowForwardIosIcon sx={{ fontSize: 15 }} /></Button>

              </Box>
            </Box>
            </Grid>

      </Box>





    </>
  )
}

export default HomeHeader