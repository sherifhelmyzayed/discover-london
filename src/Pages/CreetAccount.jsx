import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const responseFacebook = (response) => {
  console.log("fece"  , response);
}
const responseGoogle = (response) => {
    console.log( "goagle" , response);
  }
   
 
const CreetAccount =()=>{
return (
    <Box     sx={{background :"#0c2442" ,
                  minHeight : "100vh" ,
                   display : "flex",
                   justifyContent : "space-evenly",
                   alignItems : "center",
                   flexDirection: 'column',
               
             }}>

<Typography sx={{fontSize :{sx : '2rem' , md : "3.5rem" , xl:"5rem"  }  , color : "white",fontWeight :900 , textAlign : 'center' , }}
                             variant="h1" component="h4" gutterBottom>
                                Sign Up
                            
                        </Typography>


        <Box sx={{background :"white",
                    height : "50vh" ,
                    borderRadius : "10px",
                    padding : "5px",
                    width : {
                        xs: "70%",
                        md : "40%",
                        lg : "25%",
                    },
                    display : "flex",
                    flexDirection: 'column',
                    justifyContent : "space-evenly",
                    alignItems : "center"
    
    }} >
    <Button  variant="outlined" size="large" sx={{width : "60%" , color : "#4285F4" }}  > 
        <FacebookLogin
        appId="912324912768227"
        // autoLoad={true}
        fields="name,email,picture "
        textButton = "Facebook "
        cssClass="removeStyle"
        callback={responseFacebook}
        render={renderProps => (
            <Button onClick={renderProps.onClick} style={{background : "red" }} >Thistton</Button>
        )}
        />
    </Button>
    <Button variant="outlined" size="large" sx={{width : "60%"   }}  >
     <GoogleLogin
    clientId="884201566578-31o0ms6in9p59t3ps0qlcvirpikuacf2.apps.googleusercontent.com"
    render={renderProps => (
      <button className='removeStyle' onClick={renderProps.onClick} >Google</button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  </Button >
   <Box  sx={{  width : "100%" , padding : "0 30px"}}> 
  <Divider >
    <Chip label="or" />
  </Divider>
  </Box>
 
    <Button  variant="contained" sx={{textTransform: 'capitalize' , width : "60%"}} ><Link to="/sign-up" style={{color : 'white' ,  textDecoration :"none" , fontSize :"1.1rem"}}  > 
    creat account </Link> </Button>

    </Box>
    </Box>
)
}
export default CreetAccount