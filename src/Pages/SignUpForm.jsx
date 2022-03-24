import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function SignUpForm() {

    const formik = useFormik({
        initialValues : {
            firstName : "r"
        }
    })
  
// const [data , setData] = useState({
//         firstName : "",
//         lastName : "mohamed",
//         test : 'test'
    
// })

// let allow = false 


// const handleChange = (prop) => (event) => {
//     setData({ ...data, [prop]: event.target.value });
//   };


// console.log(data)


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} >
        <TextField fullWidth 
                helperText="Incorrect entry."
                error={false}
                label="name" 
                size="small"
                name="name" 
                onChange={formik.handleChange}
                value={formik.values.firstName}

    /> 

        </Grid>
        <Grid item xs={6}>
         
        </Grid>
        <Grid item xs={12} >     
          
        </Grid>
        <Grid item xs={6} >
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6} >
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={12} >
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={12} >
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6} >
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={12} >
          <Item>xs=6 md=4</Item>
        </Grid>
      </Grid>
    </Box>
        
  );
}



