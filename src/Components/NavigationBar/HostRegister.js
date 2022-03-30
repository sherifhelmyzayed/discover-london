import React from 'react'
import { Tooltip, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'


const HostRegister = () => {
    return (
        <>
            <Tooltip title="Register now">
                <Box sx={{
                    display:'flex',
                    alignItems:'center'
                }}>

                    <Typography sx={{
                        fontSize: 18,
                        fontWeight: 400,
                        color: 'white',
                        cursor: 'pointer'
                    }}>
                     <Link to="/hosting" style={{ color : "white",  textDecoration :"none" }} > 
                        Become a host
                      </Link>
                    </Typography>
                </Box>

            </Tooltip>
        </>
    )
}

export default HostRegister