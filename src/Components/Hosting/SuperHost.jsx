import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import bc from '../../assets/gruop.jpg'
import { Link } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


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

const contentStyle = {height :  "80vh",
                    backgroundColor : "rgba(0, 0, 0, 0.444)",
                    display : "flex", 
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    borderRadius : '20px',
}
const LayoutStyle = { flexGrow: 1   ,
                      height :{xs : "100vh"  }, 
                       alignItems: 'center',
                     justifyContent: 'center',
                     display : "flex",  } 
                      


const SuperHost = ()=>{
   return ( <Box sx={LayoutStyle}>
                <Grid container sx= {{ width : "90%", }} >
                    <Grid item xs={12} sx={{ backgroundImage :`url(${bc})`,  borderRadius : "20px"}} >
                        <Box sx ={contentStyle} >

                       <Typography sx={{fontSize :{sx : '1.1rem' , md : "1.5rem" , xl:"2.7rem"  }  , color : "white",fontWeight :900 , textAlign : 'center'}}
                             variant="h1" component="h1" gutterBottom>
                                Questions about hosting?
                             <br />      Ask a Superhost.
                        </Typography>
                        <Button sx={botton} color="white" variant="oulLine"> <Link to="/creat-account" style={{ color : "white",  textDecoration :"none" }} > 
                   try Hosting
               </Link> </Button>
                     
                                
                         </Box>
                    </Grid>
                </Grid>
            </Box>
   )
}

export default SuperHost