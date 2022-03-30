import Grid from '@mui/material/Grid';
import FaildEdit from '../Components/SignUpform/FaildEdit' 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { useEffect } from 'react';
import axios from 'axios';


const Input = styled('input')({
  display: 'none',
});



const UserProfile = ()=>{

  useEffect(()=>{
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDM3ZmM3ZjJhMGZkMDRjNDkxNmQ1NiIsImlhdCI6MTY0ODY1NDA3NX0.VgpArvbvt5k-gTyUCMO6Gw5326c3p2h3XeJkSBNrycs"
  
    axios.get(`http://localhost:4000/booking/my-bookings/${token}`)
    .then(function (response) {
        console.log(response );
    })
    
    .catch(function (error) {
        console.log(error)
        
    })
})
 
 
  let data =  {
        firstName: "your name",
        lastName: "father name",
        address: "world",
        email: "email@gmail.com",
         city: "cario",
         postalCode: "0000",
         password: "********",
         about: "your describtion",
         photo: {},
         id: "000"
        }

     


  return (<Box  sx={{minHeight : "100vh" ,  display : "flex" ,   justifyContent: 'center', alignItems: 'center',}}>
    <Grid container spacing={2} xs={12}  sx={{
    borderRadius : "10px",
    margin : "auto",
    width : {
        xs: "95%",
    }}}
     >
    <Grid  xs={12} md={5} lg={3} sx={{display : "flex" ,  flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
}} >

         <Box sx= {{background : "pink" ,borderRadius:"50%" , width : {xs :"200px" , md : "250px", lg : '300px'}, height : {xs :"200px" , md : "250px", lg : '300px'} , margin : "20px"
        }}>
          
         </Box>
        
         <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>

      
    </Grid>
   <Grid xs={12} md={7} lg={9} >    

       <FaildEdit  faild ="userName"   name="User Name"   data={data.username} />
       <FaildEdit  faild ="fristName"  name="Frist Name"  data={data.firstName} />
       <FaildEdit  faild ="lastName"   name="Last Name"   data={data.lastName} />
       <FaildEdit  faild ="address"    name="Address"     data={data.address} />
       <FaildEdit  faild ="postalCode" name="Postal Code" data={data.postalCode} />
       <FaildEdit  faild ="city"       name="City"        data={data.city} />
       <FaildEdit  faild ="about"      name="About"       data={data.about} />
       <FaildEdit  faild ="email"      name="E-mail"      data={data.email} />
       <FaildEdit  faild ="password"   name="Password"    data='********' />
          
     </Grid>  
    </Grid>
    </Box>
  )
}

export default UserProfile
