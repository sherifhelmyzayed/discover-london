import React from 'react'
import { Box, Typography } from '@mui/material'
import sectionTwoBg from '../../images/sectionTwoBg.png'
import TabletMockUp from '../../images/TabletMockUp.png'




const SecondSection = () => {
    return (
        <>
            <Box sx={{
                background: `rgb(10, 27, 47)`,
                height: '100vh',
                width: '100%',


            }}>
                <Box sx={{
                    background: `url(${sectionTwoBg})`, height: '100vh', opacity: 1, backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }} >
                    <Box sx={{ display: 'flex', justifyContent:'space-between'}}>

                        <Box sx={{
                            display: 'flex', flexDirection: 'column'
                        }}>
                            <Typography sx={{
                                fontFamily: 'syne',
                                fontSize: '3.2rem',
                                fontWeight: '600',
                                color: 'white',
                                letterSpacing: -4, opacity: 1, width: "100%", paddingTop: 25, paddingLeft: 8
                            }}>
                                Walking<br></br>
                                through the city<br></br>
                                comfortably from your own device
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'lato',
                                fontSize: '1.5rem',
                                fontWeight: '300',
                                width: '80%',
                                color: 'white',
                                paddingLeft: 8, marginTop: 4
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Morbi id rhoncus erat. Aenean eget interdum nulla.
                                Quisque quis feugiat nibh. Nulla turpis purus, malesuada in sodales eu, cursus et urna
                            </Typography>
                        </Box>


                        <Box sx={{
                            background: `url(${TabletMockUp
                                })`, width: '100%', height: 700, borderRadius: 5, backgroundPosition: 'center',
                            backgroundSize: 'contain',backgroundRepeat:'no-repeat',marginRight:20  
                        }}>

                        </Box>

                    </Box>


                </Box>
            </Box>

        </>
    )
}

export default SecondSection

