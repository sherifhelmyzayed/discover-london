import { Box, Button, Typography } from '@mui/material'
import React from 'react'   


const HomeCard = (props) => {
    return (
        <>
            <Box sx={{
                height: 260,
                width: 250,
                border: '1px solid white', borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',alignItems:'center',
                textAlign:'center', 
            }}>
                <Typography sx={{ color: 'white',fontWeight:700,fontFamily:'syne',fontSize:'2em',marginTop:3}}>{props.title}</Typography>
                <Typography sx={{ color: 'white', fontWeight: 400, fontFamily: 'lato', fontSize: '1em', width: '80%',marginBottom: 3}}>{props.subtitle}</Typography>
                <Button variant="outlined" sx={{ color: 'white', border: '1px solid white', fontWeight: '300', width: 200 }}>{props.cta}</Button>

            </Box>
        </>
    )
}

export default HomeCard