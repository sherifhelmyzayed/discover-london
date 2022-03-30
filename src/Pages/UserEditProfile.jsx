import Grid from '@mui/material/Grid';
import FaildEdit from '../Components/SignUpform/FaildEdit' 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Input = styled('input')({
  display: 'none',
});



const UserProfile = ()=>{
  
  const [isLoding  , setIsLoding] = useState(true )

 const [data , setdata] = useState(  {
        firstName: "your name",
        lastName: "father name",
        username: "fe",
        address: "world",
        email: "email@gmail.com",
         city: "cario",
         postalCode: "0000",
         password: "********",
         about: "your describtion",
         photo: {},
         id: "000"
        })


  useEffect(()=>{
  const token = localStorage.getItem('token');
  
  axios.get(`http://localhost:4000/user`, { headers: {"authorization" : token }})
  .then(function (response) {
      setdata( response.data )
      setIsLoding( false)
    
      })
      
      .catch(function (error) {
        console.log(error)
        
      })
    },[])
    
    
    

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
    {!isLoding ?
   <Grid xs={12} md={7} lg={9} >    

       <FaildEdit  faild ="username"   name="User Name"   data={data.username} />
       <FaildEdit  faild ="fristName"  name="Frist Name"  data={data.firstName} />
       <FaildEdit  faild ="lastName"   name="Last Name"   data={data.lastName} />
       <FaildEdit  faild ="address"    name="Address"     data={data.address} />
       <FaildEdit  faild ="postalCode" name="Postal Code" data={data.postalCode} />
       <FaildEdit  faild ="city"       name="City"        data={data.city} />
       <FaildEdit  faild ="about"      name="About"       data={data.about} />
       <FaildEdit  faild ="email"      name="E-mail"      data={data.email} />
       <FaildEdit  faild ="password"   name="Password"    data='********' />
     </Grid>  
   : null }
    </Grid>
    </Box>
  )
}

export default UserProfile
