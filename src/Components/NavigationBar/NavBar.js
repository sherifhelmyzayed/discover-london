import React from 'react'

import { Box, Typography } from '@mui/material';
import BasicMenu from './NavMenu'
import ProfileIcon from './ProfileIcon';
import HostRegister from './HostRegister';

const NavBar = () => {
    return (
        <>
            <Box sx={{
                height: 60,
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                position: 'fixed',
                marginTop: 2,
                top: 0
            }}>

                <Box display='flex' alignItems='center'>
                    <Typography sx={{
                        width: 300,
                        marginLeft: 5,
                        fontFamily: 'syne',
                        fontSize: 18,
                        fontWeight: 800,
                        color: 'white'
                    }}>
                        Navigation
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginRight: 5
                }}>

                    <HostRegister />
                    <ProfileIcon />
                    <BasicMenu />
                   
                </Box>

            </Box>
        </>
    )
}

export default NavBar

