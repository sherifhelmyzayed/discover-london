import React from 'react'
// import PriceCard from './PriceCards.js'
// import outside from '../../images/outside.jpg'
// import bedroom1 from '../../images/bedroom1.jpg'
// import living from '../../images/living.jpg'
// import salon from '../../images/salon.jpg'
// import kitchen from '../../images/kitchen.jpg'
// import PropertyData from '../Property/PropertyData';
import { Grid, Box, Typography } from '@mui/material'


const ImagesContainer = () => {
    return (
        <>
            <Grid container display='flex' maxWidth={1200} alignItems='center' 
            justifyContent='center'
             marginLeft="auto"
              marginRight="auto" 
              backgroundColor="grey">
                  <Grid item md={6} sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: "center",
                      flexDirection: "column"
                  }}>
                    <Typography variant='h5' component="h5">Sherif</Typography>
                    <Typography variant='subtitle1' component="h5">Sherif</Typography>
                    <Typography variant='h5' component="h5">Sherif</Typography>
                    <Typography variant='h5' component="h5">Sherif</Typography>
                    <Typography variant='h5' component="h5">Sherif</Typography>
                  </Grid>
                <Grid item md={6}>
                    essam
                </Grid>
            </Grid>
        </>
    )
}




export default ImagesContainer