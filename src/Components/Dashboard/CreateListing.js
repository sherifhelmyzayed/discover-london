import { useState, useEffect, forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
// import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import { Box, Grid, Stepper, Step, StepLabel, MobileStepper } from '@mui/material'

// transitional slide
// const Transition = forwardRef(function Transition(props, ref) {
//   return <Slide direction="left" ref={ref} {...props} />;
// });

const TransitionFade = forwardRef(function Transition(props, ref) {
  return <Fade in={true} ref={ref} {...props} />;
});

const CreateListing = (props) => {

  const { stateDialog, clickHandler } = props

  return (
    <div>
      <Dialog
        fullScreen
        open={stateDialog}
        onClose={() => { clickHandler(false) }}
        TransitionComponent={TransitionFade}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => { clickHandler(false) }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Add a new listing
            </Typography>
            <Button autoFocus color="inherit" onClick={() => { clickHandler(false) }}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Box sx={{ width: '100%', height: '100%' }}>
            <MobileStepper variant="progress" activeStep={1} >
             
                <Step >
                  <StepLabel>test</StepLabel>
                </Step>
                <Step >
                  <StepLabel>test</StepLabel>
                </Step>
       
            </MobileStepper>
          </Box>
        </Grid>

      </Dialog>
    </div>
  )
}

export default CreateListing







