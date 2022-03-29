import React from 'react'
import { Box, Typography } from '@mui/material'
import HomeCard from '../../Components/Home/HomeCard'
const ThirdSection = () => {
    return (
        <>
            <Box sx={{
                background: `rgb(10, 27, 47)`,
                
                width: '100%',textAlign:'center'
            }}>
                <Typography sx={{
                    fontWeight: '700',
                    fontSize: '2.5rem',
                    fontFamily: 'syne',
                    textShadow: "-1px 11px 25px rgba(9,9,9,0.9)",
                    color: 'white',marginBottom:10
                }}>whether you're buying your dream home,selling or renting a property. we will make it easier  for you</Typography>
                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around'}}>
                    <HomeCard title="Buy" subtitle="We're redefining the home buying process" cta="Buy a home"/>
                    <HomeCard title="Rent" subtitle="We can help you easily find a home or apartment for rent that you'll love" cta="Find rentals"/>
                    <HomeCard title="Sell" subtitle="You'll get selling support at every step" cta="See your options"/>
                </Box>
             
              
            </Box>
        </>
    )
}

export default ThirdSection