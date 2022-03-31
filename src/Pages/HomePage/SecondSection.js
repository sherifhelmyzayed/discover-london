import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import sectionTwoBg from '../../images/sectionTwoBg.png'
import TabletMockUp from '../../images/TabletMockUp.png'



const SecondSection = () => {
    return (
        <>
            <Box sx={{
                background: 'rgb(10, 27, 47)', width: '100vw',
                height: '100vh',
                display: "flex",
                flexDirection: 'column'
            }}>
                <Box sx={{
                    background: `url(${sectionTwoBg})`, height: '100%', opacity: 1, backgroundRepeat: 'no-repeat', width: '100%',
                    backgroundSize: 'cover'
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <Box sx={{
                            display: 'flex', flexDirection: 'column'
                        }} mt={26} ml={5}>
                            <Typography sx={{
                                fontFamily: 'syne',
                                fontSize: '2.7rem',
                                fontWeight: '600',
                                color: 'white',
                                letterSpacing: -4, opacity: 1, width: "100%"
                            }}>
                                Walking<br></br>
                                through the city<br></br>
                                comfortably from your own device
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'lato',
                                fontSize: '1.4em',
                                fontWeight: '100',
                                width: '100%',
                                color: 'white',
                                
                            }}>
                                Where Dreams Come Home
                            </Typography>
                        </Box>
                        <Box sx={{
                            background: `url(${TabletMockUp
                                })`, width: '48%', height: '43.75rem', borderRadius: 5, backgroundPosition: 'center',
                            backgroundSize: 'contain', backgroundRepeat: 'no-repeat'
                        }}>

                        </Box>
                    </Box>
              
                    
                </Box>
            
            </Box>


        </>
    )
}

export default SecondSection

