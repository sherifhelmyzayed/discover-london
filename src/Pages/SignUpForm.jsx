import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useFormik } from 'formik';
import InputText from '../Components/form/InputText'
import validationSchema from '../module/vaildSchima'
import PassInput from '../Components/form/PassInput';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function SignUpForm() {

const formik = useFormik({
        initialValues : {
            firstName : "",
            lastName : "",
            address : "",
            email : "",
            city : "",
            postalCode : "",
            password :"",
            userName :"",
            passwordConfirmation : "", 
            about : "",
            photo : {},
        },
        validationSchema : validationSchema,
        onSubmit: values => {
            axios.post('http://localhost:4000/sign-up',values)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        },
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
             <InputText text={formik.touched.userName ? formik.errors.userName : null}
                        vaild={formik.touched.userName && formik.errors.firstName}
                        feild = 'User Name'
                        name="userName" 
                        change={formik.handleChange}
                        blur = {formik.handleBlur }
                        val={formik.values.userName}
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
                <Button type="submit" variant="contained"
                   sx={{textTransform: 'capitalize' , width : "100%"}}  >
                      Submit
                 </Button>
          </Grid>

        </Grid>
        
      </ form >
      
    </Box>
        
  );
}






 

