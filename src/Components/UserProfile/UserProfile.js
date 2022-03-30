import React ,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import StarIcon from '@mui/icons-material/Star';
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios'
import HeaderSherif from '../../Components/HeaderSherif'
export default function UserProfile() {
  let tok = localStorage.getItem('token')

    const [user , setUser] = useState([]);
    const [auth , setAuth] = useState(false);
    
    useEffect(()=>{
      axios.get("http://localhost:4000/user", { headers: { Authorization: tok } })
     .then(response => {
     // If request is good...
     setUser(response.data)
     localStorage.setItem('id', response.data._id)
     if(response.data.role == 'host'){
       setAuth(true)
       localStorage.setItem('auth', true)
     }
     console.log(response.data)
     
     
  })
  
    },[])
   
      
    

  return (
    <>
    <HeaderSherif/>
    
 <Box sx={{ flexGrow: 1 , width : '50vw', margin:'0 auto', marginTop:'8%' }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
        <Card sx={{ maxWidth: 310 , height:500 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: red[500],
              height: "100px",
              width: "100px",
              position: "relative",
              left: "88%",
             
            }}
            aria-label="recipe"
          >
            R
          </Avatar>
          
        }
      />

<hr/>
      <CardContent>
        <Typography  >
          <h2>{user.firstName} Confirmed</h2>
          <br/>
          <CheckIcon fontSizeSmall /> <span style={{fontWeight:'bolder',fontSize:'17px',position:'relative', bottom:'5px' }}>  phone number</span>
        </Typography>
      </CardContent>
  
    </Card>
        </Grid>
        <Grid item xs={7}style={{lineHeight: 1.8}} >
          
        <h1>Hi , i am {user.firstName} </h1>
        <p>Joined in 2022</p>
        <a href=''>edit profile</a>
     <h2 style={{marginTop:'7%',marginBottom:'5%'}}><StarIcon/> 0 reviews</h2>
     <hr style={{marginBottom:'3%'}}/>
     <a href='' > reviews by you</a >
     <hr style={{marginTop:'5%'}}/>

        </Grid>
      </Grid>
    </Box>
    </>
  )
}
