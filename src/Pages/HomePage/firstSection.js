import React from 'react'
import Avatar from '@mui/material/Avatar';
import ArrowDownIcon from '@mui/icons-material/ArrowDownwardOutlined';
import NavBar from '../../Components/NavigationBar/NavBar';
import { Box, Typography } from '@mui/material';



const FirstSection = () => {
    return (
        <>
            <Box sx={{
                background: 'linear-gradient(to top, rgb(10, 27, 47), rgb(0, 0, 0))',
                height: '100vh',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                display: "flex",
                flexDirection: 'column'
            }}>
                <NavBar />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: "100%",
                    textAlign: 'center',
                }} ml={20}>
                    <Box>

                        <Typography sx={{
                            fontWeight: '800',
                            fontFamily: 'syne',
                            textShadow: "-1px 11px 25px rgba(9,9,9,0.9)",
                            textTransform: 'capitalize',
                            color: 'white',
                            marginTop: 56,

                            fontSize: {
                                xs: "2rem",
                                sm: "2.5rem",
                                md: "3.3rem",
                                lg: "4rem",
                                xl: "4rem",
                            }
                        }} variant="h1" component="h1">
                            Innovations
                            <br />
                            holds the key
                        </Typography>
                        <Typography sx={{
                            fontFamily: 'syne',
                            fontWeight: 400,
                            color: 'white',
                            textShadow: "1px 11px 25px rgba(9,9,9,0.9)",

                            fontSize: {
                                xs: ".9rem",
                                sm: "1.1rem",
                                md: "1.2rem",
                                lg: "1rem",
                                xl: "3.2rem",

                            }
                        }} component="h3" gutterBottom>
                            Providing unique & pricless experience
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: 15,
                    }}>

                        <Typography sx={{
                            color: 'white',
                            fontFamily: 'lato',
                            fontWeight: 300,
                            fontSize: "1.4rem",
                            marginBottom: 2,

                        }} variant="p" component="p">
                            How we make difference
                        </Typography>
                        <Avatar sx={{
                            background: 'rgba(255, 255, 255, 0.2);',
                            cursor: "pointer",
                            width: {
                                xs: 45,
                                sm: 40,
                                md: 50,
                                lg: 60,
                                xl: 70,
                            },
                            height: {
                                xs: 45,
                                sm: 40,
                                md: 50,
                                lg: 70,
                                xl: 70,
                            }
                        }} >
                            <ArrowDownIcon />
                        </Avatar>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default FirstSection