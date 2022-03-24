import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const botton = {
    width : {
        xs :'50%',
        sm: "35%",
        md : "40%",
        lg : '45%',
        xl : "35%",
       },

    color : 'white',
    border : '3px  white solid',
    borderRadius: "10px",

    
}

const contentStyle = {height :  "80vh",
                     width : "90%",
                    borderRadius : '20px',
                    backgroundColor : "green",
                    overflow : "hiden"
}

const dataStyle = {  
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
                     backgroundColor : "red",
                     display : "flex",  } 
                      

const textStyle = {fontSize :{sx : '1rem' , md : "1.2rem" , xl:"1.5rem"  }  ,
                    width :"100%",
                    color : "white",
                    textAlign : {xs : "center", md :'left', }}
 
const Protection = ()=>{
   return ( <Box sx={LayoutStyle}>
                <Grid container  sx ={contentStyle} >
                    <Grid item xs={12} md={6}   sx={dataStyle}  >
                        <Typography sx={{fontSize :{sx : '1.3rem' , md : "1.8rem" , xl:"3rem"  }  , color : "white",fontWeight :900 ,
                         textAlign : {xs : "center", md :'left', }}}
                                variant="h1" component="h4" gutterBottom>
                                    aircover  
                            </Typography>
                            <Typography sx={textStyle} variant="subtitle1" component="p" gutterBottom>
                                Top-to-bottom protection. <br />
                                Free for Hosts. Only on Airbnb.
                            </Typography>
                            <Button sx={botton} color="white" variant="oulLine">Explore aircover</Button>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        kkkk
                    </Grid>
                </Grid>
            </Box>
   )
}

export default Protection