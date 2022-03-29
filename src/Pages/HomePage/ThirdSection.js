import React from 'react'
import { Box, Typography } from '@mui/material'
import HomeCard from '../../Components/Home/HomeCard'
const ThirdSection = () => {
    return (
        <>
            <Box sx={{
                background: `rgb(10, 27, 47)`,
                height: '100vh',
                width: '100%',textAlign:'center'
            }}>
                <Typography sx={{
                    fontWeight: '700',
                    fontSize: '2.8rem',
                    fontFamily: 'syne',
                    textShadow: "-1px 11px 25px rgba(9,9,9,0.9)",
                    color: 'white',marginBottom:10
                    }}>In one place you can</Typography>
                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>

                    <HomeCard title="Buy" subtitle="Simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's" cta="Buy a home"/>
                    <HomeCard title="Sell" subtitle="Simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's " cta="See your options"/>
                    <HomeCard title="Rent" subtitle="Simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's" cta="Find rentals"/>

                </Box>
                <Box sx={{width:'100%',height:'10h'}}>

                </Box>
            </Box>
        </>
    )
}

export default ThirdSection