import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import bg from '../../assets/frontdoor.jpg'
import { Link } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const imgStyle  = {
     backgroundImage : `url(${bg})`,
     backgroundSize :"cover",
     backgroundPosition :"center",

     height : { xs : "50vh" , md : "100vh"},
     width : "100%"
    }
const botton = {
    width : {
        xs :'50%',
        sm: "35%",
        md : "30%",
        lg : '25%',
        xl : "25%",
       },

    color : 'white',
    border : '3px  white solid',
    borderRadius: "10px",

    
}

const contentStyle = {height :{ xs : "50vh" ,
                                md : "100vh",
                                xl : "70vh",},

                    display : "flex", 
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
}

const TryHostingOne = ()=>{
   return ( <Box sx={{ flexGrow: 1  , background : "red" , height :{xs : "100vh"  , xl : "70vh"} }}>
                <Grid container >
                    <Grid item sx ={contentStyle} xs={12} md ={6} bgcolor = "green">
                            <Box sx={imgStyle}>
                                tesr
                            </Box>
                   </Grid>
                    <Grid item xs={12} md={6} bgcolor = "#0c2442"  sx ={contentStyle}>
                       <Typography sx={{fontSize :{sx : '1.1rem' , md : "1.5rem" , xl:"2.7rem"  }  , color : "white",fontWeight :900 , textAlign : 'center'}}
                        variant="h1" component="h3" gutterBottom>
                                Try hosting on
                           <br />  Airbnb
                        </Typography>
                        <Typography sx={{fontSize :{sx : '8.rem' , md : "1rem" , xl:"1.1rem"  }  , color : "white", textAlign : 'center'}}
                           variant="subtitle1" component="h3" gutterBottom>
                              Join us. We’ll help you every
                                  step of the way.
                        </Typography>
                        <Button sx={botton} color="white" variant="oulLine"> <Link to="/mapbox" style={{ color : "white",  textDecoration :"none" }} > 
                   Back
               </Link> </Button>
                     
                     </Grid>
                 </Grid>
            </Box>
   )
}

export default TryHostingOne