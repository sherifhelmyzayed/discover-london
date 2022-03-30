import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import bg from "../../assets/opendoor.jpg"
import { Link } from 'react-router-dom'


const imgStyle  = {height :{ xs : "50vh" ,
                    md : "100vh",
                    xl : "70vh",},
    backgroundImage: `url(${bg})`,
    backgroundSize : "cover",
    backgroundPosition : "center",   } 
 

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
                    <Grid item xs={12} md={6} bgcolor = "#0c2442"  sx ={contentStyle}>
                       <Typography sx={{fontSize :{sx : '1.1rem' , md : "1.5rem" , xl:"2.7rem"  }  , color : "white",fontWeight :900 , textAlign : 'center'}}
                        variant="h1" component="h1" gutterBottom>
                                Open your door <br />
                                 to hosting
                        </Typography>
                        <Button sx={botton} color="white" variant="oulLine"> <Link to="/creat-account" style={{ color : "white",  textDecoration :"none" }} > 
                   Back
               </Link> </Button>
                     
                    </Grid>
                    <Grid item sx={imgStyle} xs={12} md ={6} 
                      >
                       <Box >
                        
                       </Box>
                    </Grid>
                </Grid>
            </Box>
   )
}

export default TryHostingOne