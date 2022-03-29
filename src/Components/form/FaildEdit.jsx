import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import PopupEdit from './PopupEdit';


const FaildEdit =(props)=>{
   return(  <Grid container spacing={1}   sx={{margin :"15px auto " ,  display : "flex"    , alignItems:"center" , justifyContent : "space-around"  , maxWidth : "80%"}} >

        <Grid item xs={ 12} md ={3} >
              <Typography sx={{fontSize :{xs : '1rem' , md : "1.1rem" , xl:"1.2rem"  }  , fontWeight :600 ,
               textAlign :  "left",  margin : "5px" , padding : "0" }}  variant="h1" component="h4" >
               {props.name} :
              </Typography>
                           
        </Grid>
   
        <Grid item xs={8} md={6}>

          <Typography   sx ={{textAlign :  "center", overflow :'hidden',  margin : "5px" , padding : "0"}}  variant="subtitle1" component="p" >
              {props.data}                                                
           </Typography>                                                                  
        </Grid>

        <Grid item xs={4}   md = {3} sx={{display : "flex" , justifyContent: "flex-end" }}>
          
          <PopupEdit feild={props.faild}  data={props.data} />
           
        </Grid>
    
          <Grid item xs={12}  >
          
             <Divider sx={{width : "100%"}}/>           
        </Grid>
       
</Grid>)
}

export default FaildEdit