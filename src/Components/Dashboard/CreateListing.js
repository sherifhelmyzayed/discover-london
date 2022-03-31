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
import { Box, Grid, Stepper, Step, StepLabel, MobileStepper, Slider } from '@mui/material'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Step0 from './Steps/Step0';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';
import Step6 from './Steps/Step6';
import { StarBorderPurple500 } from '@mui/icons-material';
import axios from 'axios';
let id = localStorage.getItem('id')

console.log(localStorage)


// transitional slide
// const Transition = forwardRef(function Transition(props, ref) {
//   return <Slide direction="left" ref={ref} {...props} />;
// });

const TransitionFade = forwardRef(function Transition(props, ref) {
  return <Fade in={true} ref={ref} {...props} />;
});

const CreateListing = (props) => {

  const [step, setStep] = useState(0)
  const [userData, setUserData] = useState(null)
  const [createProperty, setCreateProperty] = useState({
    guests_included: 0,
    bedrooms: 0,
    bathrooms: 0,
    amenities: [],
    geolocation: '',
    name: "",
    neighbourhood_cleansed: '',
    summary: '',
    description: ''
  })

  const nextStep = () => {
    setStep(step + 1)
  }
  const prevStep = () => {
    setStep(step + -1)
  }
  const { stateDialog, clickHandler } = props

  useEffect(() => {
    console.log(id)
    axios.get(`http://localhost:4000/user/host-data/622098a84f93748a635ffde2`).then((res) => {
      // console.log(res.data)
      console.log(res.data)
    })

    console.log(id)
    axios.get(`http://localhost:4000/user/${id}`).then((res) => {
      setUserData(res.data)
    })


  }, [])

  const saveHandler = () => {
    axios.post(`http://localhost:4000/list/new/${id}`, {
      amenities: createProperty.amenities,
      bathrooms: createProperty.bathrooms,
      bedrooms: createProperty.bedrooms,
      city: createProperty.city,
      description: createProperty.description,
      geo_location: createProperty.geolocation,
      guests_included: createProperty.guests_included,
      name: createProperty.name,
      neighbourhood_cleansed: createProperty.neighbourhood_cleansed,
      price: createProperty.price,
      summary: createProperty.summary,
      number_of_reviews: 0,
      xl_picture_url: "",
      host_thumbnail_url: userData.photo,
      host_name: userData.firstName,
      cancellation_policy: "strict"
    }).then((response) => {
      console.log(response)
    })
    clickHandler(false)
  }

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
            <Button autoFocus color="inherit"
              onClick={saveHandler}
            >
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Box sx={{ width: '100%' }}>
            <MobileStepper
              variant="progress"
              steps={7}
              position="static"
              activeStep={step}
              sx={{ maxWidth: '100%', justifyContent: 'center' }}
              nextButton={
                <Button size="small" onClick={nextStep} disabled={2 === 5}>
                  Next
                  <KeyboardArrowRight />
                </Button>
              }
              backButton={
                <Button size="small" onClick={prevStep} disabled={2 === 0}>
                  <KeyboardArrowLeft />
                  Back
                </Button>
              }
            />
          </Box>
          <Box sx={{ height: 'calc(100vh - 120px)', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 'auto', marginBottom: 'auto' }}>

            {(step === 0) ?
              (<Step0 createProperty={createProperty} setCreateProperty={setCreateProperty} />)
              :
              (step === 1)
                ? (
                  <Step1 createProperty={createProperty} setCreateProperty={setCreateProperty} />
                )
                : (step === 2)
                  ? (<Step2 createProperty={createProperty} setCreateProperty={setCreateProperty} />)
                  : (step === 3)
                    ? (<Step3 createProperty={createProperty} setCreateProperty={setCreateProperty} />)
                    : (step === 4)
                      ? (<Step4 createProperty={createProperty} setCreateProperty={setCreateProperty} />)
                      : (step === 5)
                        ? (<Step5 createProperty={createProperty} setCreateProperty={setCreateProperty} />)
                        : (step === 6)
                          ? (<Step6 createProperty={createProperty} setCreateProperty={setCreateProperty} />)
                          : ''
            }
          </Box>
        </Grid>

      </Dialog>
    </div >
  )
}

export default CreateListing







