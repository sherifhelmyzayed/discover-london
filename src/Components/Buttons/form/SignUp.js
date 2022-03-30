import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import  ReactDOM  from 'react-dom';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';

const Modal_styles = {
    position : 'fixed',
    top : '50%',
    left: '50%',
    transform : 'translate(-50%,-50%) ',
    backgroundColor:'#fff',
    width : '29vw',
    padding : '20px',
    height : '70vh',
    borderRadius: '2%',
    zIndex : 1000
}
const Overlay = {
    position : 'fixed',
    top : 0,
    left: 0,
    right: 0,
    bottom : 0,
    backgroundColor:'rgba(0,0,0,.5)',
    zIndex:1000
}
const head = {
    color:"black" ,
    position: 'relative',
    left: '28%',
    display:'inline-block',
    marginBottom: '20px'
    
}
const twoText = {
  width: '49%',
  marginRight: '3px',
  marginTop: "2.5%"
}
const text = {
  marginTop: "2.5%",
  marginBottom : "2.5%"
}


    
    export default function SignUp({open,onClose}) {
        if(!open) return null
      return ReactDOM.createPortal ( <>
      <div style={Overlay}/>
      <div style={Modal_styles}>
            <Paper style={{marginBottom : '7%' }}>
           <Button variant="text" onClick={onClose}><CloseIcon/></Button>
           <h3 style={head}> sign up</h3>
           
           </Paper>
           
           <h2 style={{marginTop:'0px',marginBottom:'1%'}}>Welcome to Airbnb</h2>
           <Grid container direction="column"
                  justify="center"
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                 >
    
      <Grid item md={2} >
      <TextField
              required
              id="outlined-required"
              label="first name"
              defaultValue=""
              style={twoText}
            
            />
            <TextField
              required
              id="outlined-required"
              label="Last name"
              defaultValue=""
              style={twoText}
              
            />
           
      </Grid>
      <Grid item md={2} >
      <TextField
              id="outlined-password-input"
              label="Email"
              type="text"
              autoComplete="current-password"
              fullWidth 
              style={text}
              
            />
      </Grid>
      <Grid item md={2} >
      <TextField
              id="outlined-password-input"
              label="Adress"
              type="text"
              autoComplete="current-password"
              fullWidth 
              style={text}
              
              
            />
      </Grid>
      <Grid item md={2} >
      <TextField
              id="outlined-password-input"
              label="city"
              type="text"
              autoComplete="current-password"
              style={twoText}
              
              
              
            />
            <TextField
              id="outlined-password-input"
              label="postal code"
              type="text"
              autoComplete="current-password"
              style={twoText}
              
              
              
            />

      </Grid>
      <Grid item md={2} >
      <TextField
              id="outlined-password-input"
              label="password"
              type="password"
              autoComplete="current-password"
              fullWidth 
              style={text}
              
              
            />
      </Grid>
    </Grid>
    
    <Button style={{marginTop:'8%',marginBottom:'5%'}} variant="contained" fullWidth>Contained</Button>
    
    <Divider style={{fontSize:'10px', marginBottom:'2%'}}>OR</Divider>
    
    <Button style={{marginBottom:'10px'}} variant="outlined" fullWidth  >
    <Grid  container  justify="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item md={1} >
      <FacebookIcon/>
      </Grid>
      <Grid item  md={10}>
       <h4>Continue With Facebook</h4>
      </Grid>
     </Grid>
     </Button>
     
            </div>
            </>,
            document.getElementById('portal')
      )
    
}
