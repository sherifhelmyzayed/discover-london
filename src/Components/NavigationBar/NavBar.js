import React from 'react'
import { Box, Typography } from '@mui/material';
import BasicMenu from './NavMenu'
import ProfileIcon from './ProfileIcon';
import HostRegister from './HostRegister';

const NavBar = () => {
    const [navBar, setNavbar] = React.useState(false)
    const changeNavBackground = () => {
        if (window.scrollY >= 200) {
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavBackground)
    return (
        <>
            <Box className={navBar?'navbar active':'navbar'}sx={{
                height: 60,
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                position: 'fixed',
                top: 0
            }}>

                <Box display='flex' alignItems='center'>
                    <Typography sx={{
                        width: 300,
                        marginLeft: 5,
                        fontFamily: 'lato',
                        fontSize: 18,
                        fontWeight: 800,
                        color: 'white'
                    }}>
                        Discover London
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

