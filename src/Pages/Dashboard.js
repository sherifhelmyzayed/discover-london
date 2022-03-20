import { useState } from 'react'
import { Box, Grid, Paper } from '@mui/material'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import PerformanceGraph from '../Components/Dashboard/PerformanceGraph';

const Dashboard = () => {

    // new style by make style
    const useStyles = makeStyles({
        text: {
            // Custom CSS here
        },
    });



    // use state hook
    const [isOpen, setIsOpen] = useState();


    // useStyle Hook
    const classes = useStyles();

    return (
        <>

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12} md={3} bgcolor={"light"} paddingX={3} paddingTop={3}
                    justifyContent="start"
                    alignItems="start"
                    height="100vh"
                // above is the first styling method
                >
                    <Typography variant="h6" component="h5">
                        Good afternoon,
                    </Typography>
                    <Typography variant="h5" component="h5">
                        Sherif
                    </Typography>

                    <Grid container marginBottom={3} marginTop={3}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle1" component="h5">
                                Earnings in August
                            </Typography>
                        </Grid>
                        <Grid item xs={6} textAlign="end">
                            <Typography variant="subtitle1" component="h5">
                                $600
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="subtitle1" component="h5">
                                Overall rating
                            </Typography>
                        </Grid>
                        <Grid item xs={6} textAlign="end">
                            <Typography variant="subtitle1" component="h5">
                                4.6
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="subtitle1" component="h5">
                                30-day bookings
                            </Typography>
                        </Grid>
                        <Grid item xs={6} textAlign="end">
                            <Typography variant="subtitle1" component="h5">
                                6
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="subtitle1" component="h5">
                                30-day views
                            </Typography>
                        </Grid>
                        <Grid item xs={6} textAlign="end">
                            <Typography variant="subtitle1" component="h5">
                                300
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* Booking requests START */}
                    <Box>
                        <Typography variant="h5" component="h3" display="inline">
                            Booking requests
                        </Typography >
                        <Box marginLeft={3} display="inline">
                            <ArrowForwardIosIcon fontSize={'1px'} />
                        </Box>
                        <Typography variant="subtitle2" component="p">
                            97% response rate
                        </Typography>
                        <Box marginTop={3}>
                            <Paper
                                sx={{
                                    paddingTop: 1,
                                    paddingBottom: 2,
                                    bgcolor: 'transparent',
                                    borderTop: 'none',
                                    borderRight: 'none',
                                    borderLeft: 'none'
                                }}
                                variant='outlined' paddingY={5}>
                                <Typography variant="OVERLINE" component="p">
                                    Inquiry from NAME
                                </Typography>
                                <Typography variant="subtitle2" component="p">
                                    1 guest - Duration: 38 nights - Date: Sep23 to Oct 31 - Property Name
                                </Typography>
                                <Typography variant="clickable" component="p" color={"primary.light"}>
                                    Respond
                                </Typography>
                            </Paper>
                        </Box>
                        <Box marginTop={3}>
                            <Paper
                                sx={{
                                    paddingTop: 1,
                                    paddingBottom: 2,
                                    bgcolor: 'transparent',
                                    borderTop: 'none',
                                    borderRight: 'none',
                                    borderLeft: 'none'
                                }}
                                variant='outlined' paddingY={5}>
                                <Typography variant="OVERLINE" component="p">
                                    Inquiry from NAME
                                </Typography>
                                <Typography variant="subtitle2" component="p">
                                    1 guest - Duration: 38 nights - Date: Sep23 to Oct 31 - Property Name
                                </Typography>
                                <Typography variant="clickable" component="p" color={"primary.light"}>
                                    Respond
                                </Typography>
                            </Paper>
                        </Box>
                        <Box marginTop={3}>
                            <Paper
                                sx={{
                                    paddingTop: 1,
                                    paddingBottom: 2,
                                    bgcolor: 'transparent',
                                    borderTop: 'none',
                                    borderRight: 'none',
                                    borderLeft: 'none'
                                }}
                                variant='outlined' paddingY={5}>
                                <Typography variant="OVERLINE" component="p">
                                    Inquiry from NAME
                                </Typography>
                                <Typography variant="subtitle2" component="p">
                                    1 guest - Duration: 38 nights - Date: Sep23 to Oct 31 - Property Name
                                </Typography>
                                <Typography variant="clickable" component="p" color={"primary.light"}>
                                    Respond
                                </Typography>
                            </Paper>
                        </Box>
                    </Box>
                    {/* Booking requests END */}


                    {/* To do Start */}
                    <Box marginTop={5}>
                        <Typography variant="h5" component="h3" display="inline">
                            To-dos
                        </Typography >
                        <Box marginTop={3}>
                            <Typography variant="subtitle2" component="p">
                                You're all caught up!
                            </Typography>
                        </Box>
                    </Box>
                    {/* To do END */}

                    {/* Notifications Start */}
                    <Box marginTop={5}>
                        <Typography variant="h5" component="h3" display="inline">
                            Notifications
                        </Typography >
                        <Box marginTop={3}>
                            <Paper
                                sx={{
                                    paddingTop: 1,
                                    paddingBottom: 2,
                                    bgcolor: 'transparent',
                                    borderTop: 'none',
                                    borderRight: 'none',
                                    borderLeft: 'none'
                                }}
                                variant='outlined' paddingY={5}>

                                <Typography variant="subtitle2" component="p">
                                    Read the review that Sherif Helmy wrote by leaving one of your own. When yours is done, they'll be both be public
                                </Typography>
                                <Typography variant="subtitle2" component="p">
                                    a day ago
                                </Typography>
                            </Paper>
                        </Box>
                    </Box>
                    {/* Notifications END */}


                </Grid>

                <Grid item md={9}>
                    <PerformanceGraph />
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard