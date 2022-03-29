import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import TabletHeld from '../../images/HoldingHandTablet.png'



const FourthSection = () => {
    return (
        <>
            <Box sx={{
                background: `rgb(10, 27, 47)`,
                height: '100vh',
                width: '100%', display: 'flex',flexDirection:'column',justifyContent:"flex-end",alignItems:'center'
            }}>


                <Box textAlign="center" width="80%" padding="2rem">

                <Typography sx={{
                    fontWeight: '700',
                    fontSize: '2.5rem',
                    fontFamily: 'syne',
                    textShadow: "-1px 11px 25px rgba(9,9,9,0.9)",
                    color: 'white'
                }} mt={4} mb={2}>visualised data gives you the ability to choose data points that matter, align them with timelines and trends that will show you insights or push you in the right direction.
                </Typography>
                </Box>

                <Box sx={{
                    background: `url(${TabletHeld
                        })`, width: '80%', height: '55.75rem', borderRadius: 5, backgroundPosition: 'center',
                    backgroundSize: 'contain', backgroundRepeat: 'no-repeat'
                }}>
                </Box>

            </Box>
        </>
    )
}

export default FourthSection