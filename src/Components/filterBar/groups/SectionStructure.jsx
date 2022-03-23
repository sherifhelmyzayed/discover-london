import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FilterContant from '../FilterContent/FilterContent';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import PriceArea from '../FilterContent/PriceArea';
import ProprtyList from '../FilterContent/ProprtyList'

const SectionStrucure =(props) =>{
    // arr =[price , home]
    let elm = null ;

     if ( props.name === "filter" ){
         elm = <FilterContant fun />
     }
    else  if ( props.name === "Price" ){
        elm =  <PriceArea />
    }
    else  if ( props.name === "typePlace" ){
        elm =  <ProprtyList />
    }
  
    return(
              <Box  maxHeight={"70%"}  padding="0 0 0 20px" >
                    <Typography padding="  15px 0 10px"   variant="h5" component="div">
                       {props.name} 
                    </Typography>
                    
                      {elm}
                
                    <Box  sx={{ justifyContent:'space-between' , display: "flex" , padding : "  15px 30px 10px 0" }} >
                    <Button size="small" variant="outlined" startIcon={<DeleteIcon />}>
                        clear
                    </Button>
                    <Button size="small" variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>

                    </Box>
                  
              </Box>
           


)}
export default SectionStrucure