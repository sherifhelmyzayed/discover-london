import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import bg from '../../assets/sofa.png'
import { Link } from 'react-router-dom'


const botton = {
    border : '2px   solid',
    borderRadius: "10px",
    fontWeight : 600,
    textTransform: 'capitalize',
    
}

const contentStyle = {height :  "80vh",
                     width : "90%",
                    borderRadius : '20px',
                    backgroundColor : "#F7F7F7",
                    overflow : "hiden",
                    

}

const dataStyle = {  
    height : { xs: '50%' , md : '100%'},
    display : "flex", 
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems:{xs : "center", md :'flex-start', } ,
    padding  : "10px 0 10px 5%"

}

const LayoutStyle = { flexGrow: 1   ,
                      height :{xs : "100vh"  }, 
                       alignItems: 'center',
                     justifyContent: 'center',
                     display : "flex",  } 
                      

const textStyle = {fontSize :{sx : '1.2rem' , md : "1.5rem" , xl:"2rem"  }  ,
                    width :"100%",
                    textAlign : {xs : "center", md :'left', }}

const imgAreaStyle = { 
                       backgroundImage : `url(${bg})`,
                       backgroundSize :  { xs: 'contain' , md : 'cover' , lg : 'contain'},
                       backgroundRepeat:' no-repeat',
                       backgroundPosition : "bottom ", 
                       height : { xs: '50%' , md : '100%'}

                       
}
 
const Protection = ()=>{
   return ( <Box sx={LayoutStyle}>
                <Grid container  sx ={contentStyle} >
                    <Grid item xs={12} md={6}   sx={dataStyle}  >
                        <Typography sx={{fontSize :{xs : '4rem' , md : "5rem" , xl:"7rem"  }  , fontWeight :900 ,
                         textAlign : {xs : "center", md :'left', }}}
                                variant="h1" component="h4" gutterBottom>
                                    descover London   
                            </Typography>
                            <Typography sx={textStyle} variant="subtitle1" component="p" gutterBottom>
                                Top-to-bottom protection. <br />
                                Free for Hosts. Only on descover London.
                            </Typography>
                            <Button sx={botton} color="white" variant="oulLine">
                            <Link to="/creat-account" style={{ color : "#0c2442",  textDecoration :"none" }} > 
                            Explore descover London
                            </Link> 
                                 </Button>
                    </Grid>

                    <Grid item xs={12} md={6} sx={imgAreaStyle} >
                        
                    </Grid>
                </Grid>
            </Box>
   )
}

export default Protection