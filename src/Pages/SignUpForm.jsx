import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useFormik } from 'formik';
import InputText from '../Components/SignUpform/InputText'
import validationSchema from '../module/vaildSchima'
import PassInput from '../Components/SignUpform/InputText';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";


export default function SignUpForm() {
 
  
const [loading, setLoading] = React.useState(false);
const [error, setError] = React.useState(false);
// const [massege, setMassege] = React.useState("test");

const navigate = useNavigate()

const formik = useFormik({
        initialValues : {
            firstName : "",
            lastName : "",
            address : "",
            email : "",
            city : "",
            postalCode : "",
            password :"",
            username :"",
            passwordConfirmation : "", 
            about : "",
            photo : {},
          },
          validationSchema : validationSchema,
          onSubmit: values => {
            setLoading(true)

            axios.post('http://localhost:4000/user/sign-up-login',values)
              .then(function (response) {
                setLoading(false)
                localStorage.setItem('token',response.data.token);
                localStorage.setItem('id',response.data.id);
                       navigate("/edit-profile")
              })

              .catch(function (error) {
                setLoading(false)
                setError(error.massage)
                  
            
              });
  

}
})


 
 
 
 const Input = styled('input')({
   display: 'none',
  });
  
  const ImageHandele = (event)=>{
      formik.values.photo = event.target.files[0];
      console.log(formik.values.photo.name)
  }

  return (
      
<Box sx={{ flexGrow: 1 , padding : "5px  " , background :"#0c2442" ,
                  minHeight : "100vh" ,
                   display : "flex",
                   justifyContent : "space-evenly",
                   alignItems : "center",
                   flexDirection: 'column',}}>  
   <form onSubmit={formik.handleSubmit} >

      <Grid container spacing={2}   sx={{background :"white",
                    borderRadius : "10px",
                    mainHeight : "90vh" ,
                    margin : "auto",
                    padding : "0px 25px 10px 5px",
                    width : {
                        xs: "95%",
                        md : "80%",
                        lg : "50%",
                    }}}
                     >
      <Grid item xs={3} >
            <label htmlFor="contained-button-file">
                <Input accept="image/*"
                 id="contained-button-file" 
                 multiple
                 type="file"  
                 onChange={ImageHandele} />
                <Button variant="contained"  fullWidth component="span">
                    Upload  photo
                </Button>
            </label>

      </Grid>
   
      <Grid item xs={9} >
             <InputText text={formik.touched.username ? formik.errors.username : null}
                        vaild={formik.touched.username && formik.errors.username}
                        feild = 'User Name'
                        name="username" 
                        change={formik.handleChange}
                        blur = {formik.handleBlur }
                        val={formik.values.username}
                        type ='text'
            /> 
          

        </Grid>
        <Grid item xs={6} >
             <InputText text={formik.touched.firstName ? formik.errors.firstName : null}
                        vaild={formik.touched.firstName && formik.errors.firstName}
                        feild = "Frist name" 
                        name="firstName" 
                        change={formik.handleChange}
                        blur = {formik.handleBlur }
                        val={formik.values.firstName}
                        type ='text'
            /> 
          

        </Grid>

        <Grid item xs={6}>
                <InputText  text={formik.touched.lastName ? formik.errors.lastName : null}
                        blur = {formik.handleBlur }
                        vaild={formik.touched.lastName && formik.errors.lastName}
                        feild = "Last name" 
                        name="lastName" 
                        change={formik.handleChange}
                        val={formik.values.lastName}
                        
                    /> 
         
        </Grid>

        <Grid item xs={12} >     
                <InputText  text={formik.touched.email ? formik.errors.email : null}
                        blur = {formik.handleBlur }
                        vaild={formik.touched.email && formik.errors.email}
                        feild = "E-mail" 
                        name="email" 
                        change={formik.handleChange}
                        val={formik.values.email}
                        mult = {true}
                        type ='email'
                                      
               /> 
        </Grid>

        <Grid item xs={6} >
                 <InputText   text={formik.touched.city ? formik.errors.city : null}
                          blur = {formik.handleBlur }
                          vaild={formik.touched.city && formik.errors.city}
                        feild = "City" 
                        name="city" 
                        change={formik.handleChange}
                        val={formik.values.city}
                     /> 

        </Grid>

        <Grid item xs={6} >
                <InputText  text={formik.touched.postalCode ? formik.errors.postalCode : null}
                                blur = {formik.handleBlur }
                                vaild={formik.touched.firstName && formik.errors.firstName}                              
                                feild = "Postal Code" 
                                name="postalCode" 
                                change={formik.handleChange}
                                val={formik.values.postalCode}
                                type ='number'
                    /> 
        </Grid> 

        <Grid item xs={12} >
            <InputText   text={formik.touched.address ? formik.errors.address : null}
                         blur = {formik.handleBlur }
                      vaild={formik.touched.address && formik.errors.address}                     
                         feild = "Address" 
                        name="address" 
                        change={formik.handleChange}
                        val={formik.values.address}
                        mult = {true}
            /> 
        </Grid>

        <Grid item xs={6}>
          <PassInput   text={formik.touched.password ? formik.errors.password : null}
                        blur = {formik.handleBlur }
                       vaild={formik.touched.password && formik.errors.password}                                             
                         feild = "password" 
                        name="password" 
                        change={formik.handleChange}
                        val={formik.values.password}   />
         </Grid>

        <Grid item xs={6} >
                <PassInput  
                              text={formik.touched.passwordConfirmation ? formik.errors.passwordConfirmation : null}
                                blur = {formik.handleBlur }
                               vaild={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}                          
                               feild = "Re-password" 
                                name="passwordConfirmation" 
                                change={formik.handleChange}
                                val={formik.values.passwordConfirmation}   />
        </Grid>

        <Grid item xs={12} >
                 <InputText  text={formik.touched.about ? formik.errors.about : null}
                    blur = {formik.handleBlur }
                   vaild={formik.touched.about && formik.errors.about}               
                 feild = "about" 
                    name="about" 
                    change={formik.handleChange}
                    val={formik.values.about}
                    mult = {true}
                    /> 
        </Grid>
       
        <Grid item xs={6} justifyContent="space-between" >
             <Button  variant="outlined" sx={{textTransform: 'capitalize' , width : "100%"}} >
                <Link to="/creat-account" style={{ color : "#0c2442",  textDecoration :"none" }} > 
                   Back
               </Link> 
            </Button>
        </Grid>

         <Grid item xs={6} >
      

      <Box sx={{ position: 'relative' }}>
        <Button fullWidth  type="submit" 
          variant="contained"
          disabled={loading}
          // onClick={handleButtonClick}
        >
          submit
        </Button>
        {loading && (
          <CircularProgress
          size={24}
            sx={{
              color: "red",
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
            />
            )}
      </Box>
    
          </Grid>
          <Grid xs={12} sx={{textAlign : "center" , fontSize : ".8rem", color : "red"
                            
        }}>
            {error ? "error" : null }
                        

        </Grid>
        </Grid>
      </ form >
      
    </Box>
        
  );
}






 

