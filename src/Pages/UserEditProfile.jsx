import Grid from '@mui/material/Grid';
import FaildEdit from '../Components/form/FaildEdit' 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';


const Input = styled('input')({
  display: 'none',
});


const UserProfile = ()=>{
 
 
  let data =  {
        firstName: "sss",
        lastName: "xxxx",
        address: "dddd",
        email: "randa12@d.c",
         city: "dd",
         postalCode: "333",
         password: "12345678",
        passwordConfirmation: "12345678",
         about: "aaaaaaaaaaaaaaaaaaaaaaaaaaasss",
         photo: {},
         id: 1
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

       <FaildEdit  faild ="userName"   data={data.username} />
       <FaildEdit  faild ="fristName"  data={data.firstName} />
       <FaildEdit  faild ="lastName"   data={data.lastName} />
       <FaildEdit  faild ="address"     data={data.address} />
       <FaildEdit  faild ="postalCode"  data={data.postalCode} />
       <FaildEdit  faild ="city"        data={data.city} />
       <FaildEdit  faild ="about"       data={data.about} />
       <FaildEdit  faild ="email"       data={data.email} />
       <FaildEdit  faild ="password"    data='********' />
          
     </Grid>  
    </Grid>
    </Box>
  )
}

export default UserProfile
