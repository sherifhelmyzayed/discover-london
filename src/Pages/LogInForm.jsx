import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useFormik } from 'formik';
import InputText from '../Components/SignUpform/InputText'
import PassInput from '../Components/SignUpform/PassInput'
import {} from '../module/vaildSchima'
import * as React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';

export default function SignUpForm() { 

 
  
const [loading, setLoading] = React.useState(false);
const [error, setError] = React.useState(false);
// const [massege, setMassege] = React.useState("test");

const navigate = useNavigate()

const formik = useFormik({
        initialValues : {

            password :"",
            username :"",
          },
          validationSchema : yup.object().shape({
 
            username : yup.string()
                       .required('Required'),  
  
            password :  yup.string()
            .required('Required')
            .min(8, 'Too Short!')
         ,
          
        }),
          onSubmit: values => {
            setLoading(true)
            console.log("test")

            axios.post('http://localhost:4000/user/sign-up',values)
                            .then((response)=>{
                                setLoading(false)
                                console.log(response.data.token)
                                if(response.data.token !== undefined){
                                    navigate('/user-profile')
                                localStorage.setItem('token', response.data.token)
                                
                             } })

              .catch(function (error) {
                console.log("s")
                setLoading(false)
                  setError(true)
            
              });
  

}
})


 
 
 

  return (
      
<Box sx={{ flexGrow: 1 , padding : "5px  " , background :"#0c2442" ,
                  minHeight : "100vh" ,
                   display : "flex",
                   justifyContent : "space-evenly",
                   alignItems : "center",
                   flexDirection: 'column',}}>  
   <form onSubmit={formik.handleSubmit} width="100%"  >

      <Grid container spacing={4}   sx={{background :"white",
                    borderRadius : "10px",
                    maxHeight : "90vh" ,
                    margin : "auto",
                    display : "flex",
                    justifyContent : "space-evenly",
                    alignItems : "center",
                    padding : "0px 25px 10px 5px",
                    width : {
                        xs: "95%",
                        md : "90%",
                        lg : "70%",
                    }}}
                     >
   

  


        <Grid item xs={12} >
            <InputText   text={formik.touched.username ? formik.errors.username : null}
                         blur = {formik.handleBlur }
                        vaild={formik.touched.username && formik.errors.username}                     
                        feild =  "User Name"
                        name="username" 
                        change={formik.handleChange}
                        val={formik.values.username}
                        mult = {true}
            /> 
        </Grid>

        <Grid item xs={12} >
                 <PassInput  text={formik.touched.password ? formik.errors.password : null}
                    blur = {formik.handleBlur }
                   vaild={formik.touched.password && formik.errors.password}               
                 feild = "password" 
                    name="password" 
                    change={formik.handleChange}
                    val={formik.values.password}
                    mult = {true}
                    /> 
        </Grid>

          <Grid xs={12} sx={{textAlign : "center" , fontSize : ".8rem", color : "red"
                            
        }}>


       
         <Grid item xs={12}  >
      

      <Box sx={{ position: 'relative' , margin :" 20px 0px 20px 30px"}  }>
        <Button fullWidth  type="submit" 
          variant="contained"
          disabled={loading}
        //   onClick={handleButtonClick}
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


