import React from 'react'
import { Tooltip, Typography, Box } from '@mui/material'


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
                    }}>Become a host</Typography>
                </Box>

            </Tooltip>
        </>
    )
}

export default HostRegister