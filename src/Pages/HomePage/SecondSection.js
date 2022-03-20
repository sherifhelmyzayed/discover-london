import React from 'react'
import { Box, Typography } from '@mui/material'
import secTwoBg from '../../images/secTwoBg.jpg'

const SecondSection = () => {
    return (
        <>
            <Box sx={{
                background: `url(${secTwoBg})`,
                height: '100vh',
                width: '100%',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }} id="section-two">
                <Box sx={{
                    width: "60%", paddingTop: 8
                }}>


                    <Typography sx={{
                        fontFamily: 'syne',
                        fontSize: '3rem',
                        fontWeight: '600',
                        color: 'white',
                        letterSpacing: -4,
                    }}>
                        Walking<br></br>
                        through the city<br></br>
                        comfortably from your own device
                    </Typography>
                </Box>
                <Box sx={{ marginTop: 8 }}>
                    <Typography sx={{
                        fontFamily: 'lato',
                        fontSize: '1.5rem',
                        fontWeight: '300',
                        width: '63%',
                        color: 'white',
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi id rhoncus erat. Aenean eget interdum nulla.
                        Quisque quis feugiat nibh. Nulla turpis purus, malesuada in sodales eu, cursus et urna
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default SecondSection

