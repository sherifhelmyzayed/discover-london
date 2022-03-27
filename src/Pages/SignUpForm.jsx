import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useFormik } from 'formik';
import InputText from '../Components/form/InputText'
import * as yup from 'yup';
import PassInput from '../Components/form/PassInput';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import axios from 'axios'

export default function SignUpForm() {

const nameVaild = yup.string()
                .matches(/^[a-zA-Z]+$/ , 'it must be Characters')
                .min(2, 'Too Short!')
                .max(15, 'Too Long!')
                .required('Required');

const passVaild =  yup.string()
    .required('Required')
    .min(8, 'Too Short!')
 ;

const passdConfirVaild =  yup.string()
              .required('Required')
              .oneOf([yup.ref('password')], 'Passwords does not match');

const SignupSchema = yup.object().shape({
    firstName: nameVaild,
    lastName: nameVaild,
    city: nameVaild,    
    postalCode : yup.number(),
    address : yup.string()
                .required('Required'),     
    password : passVaild ,
    passwordConfirmation : passdConfirVaild ,
    email: yup.string()
              .email()
              .required('Required'), 

   about :  yup.string()
            .required('Required')
            .min(20, 'must be more than 20 letter!')
});

const formik = useFormik({
        initialValues : {
            firstName : "",
            lastName : "",
            address : "",
            email : "",
            city : "",
            postalCode : "",
            password :"",
            passwordConfirmation : "", 
            about : "",
            photo : null,
        },
        validationSchema : SignupSchema,
        onSubmit: values => {
            axios.post('http://localhost:3000/user',values)
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
      console.log(formik.values)
  }

  return (
      
<Box sx={{ flexGrow: 1  , padding : "50px"}}>  
   <form onSubmit={formik.handleSubmit} >

      <Grid container spacing={2}>
      <Grid item xs={12} >
            <label htmlFor="contained-button-file">
                <Input accept="image/*"
                 id="contained-button-file" 
                 multiple
                 type="file"  
                 onChange={ImageHandele} />
                <Button variant="contained" component="span">
                    Upload  photo
                </Button>
            </label>


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
        </Grid>
        
        <Button type="submit" > submit </Button>
      </ form >
    </Box>
        
  );
}






 

