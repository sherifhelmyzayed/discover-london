import { useState } from 'react'
import { Box, Grid, Paper } from '@mui/material'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles';

import Header from '../Components/Dashboard/DashboardElements';

const Dashboard = () => {

    // new style by make style
    const useStyles = makeStyles({
        text: {
            color: 'red',
            fontSize: 40,
            backgroundColor: 'white',
            marginLeft: 50,
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: 'black',
                color: 'white'
            },
        },
        header: {
        },
        navbar: {
        }
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
                <Grid container xs={12} md={3} bgcolor={"primary.main"} direction="column" paddingLeft={5} paddingTop={5}
                    justifyContent="start"
                    alignItems="start"
                    height="100vh"
                    // above is the first styling method
                >
                    {/* custome css using sx prop */}
                    <Box sx={{
                        margin: {
                            md: '50px',
                            sm: '20px'
                        },
                        color: {
                            xs: "red",
                            md: "yellow"
                        },
                        // custom css
                    }}>
                        <Typography>button 1</Typography>
                    </Box>
                    <Box>
                        {/* third methof for styling */}
                        <Typography className={classes.text}>button 2</Typography>
                        <div className={classes.text}></div>
                    </Box>
                    <Box>
                        <Typography>button 3</Typography>
                    </Box>
                    <Box>
                        <Typography>button 4</Typography>
                    </Box>
                    <Box>
                        <Typography>button 5</Typography>
                    </Box>
                    <Paper>
                        <Typography>button 5</Typography>
                    </Paper>
                    <Paper>
                        <Typography>button 5</Typography>
                    </Paper>
                </Grid>

                <Grid container md={9}>
                    <div className="">
                    </div>
                    <Box >
                        <Typography variant="h1" component="h5">
                            Helicopter
                        </Typography>
                    </Box>
                    <Grid item={true} xs={8}>
                        <Typography>XS=8</Typography>
                    </Grid>
                    <Grid item={true} xs={4}>
                        <Typography>XS=8</Typography>
                    </Grid>
                    <Grid item={true} xs={4}>
                        <Typography>XS=8</Typography>
                    </Grid>
                    <Grid item={true} xs={8}>
                        <Typography>XS=8</Typography>
                    </Grid>
                    <Box />
                    <Box />
                    <Header propTest={true}> test header</Header>
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard