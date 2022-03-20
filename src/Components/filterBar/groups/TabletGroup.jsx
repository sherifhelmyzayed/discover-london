import PriceLaptop from "../FilterButton/Pricelaptop"
import FilterLabButtonjsx from "../FilterButton/FilterLabButton.jsx"
import Box from '@mui/material/Box';

const TabletGroup =()=>{
    return <Box sx={{display : "flex" , justifyContent :"space-between", width : '100% ',
               }}>
                   
                <PriceLaptop />
                <PriceLaptop />
                <FilterLabButtonjsx />
           </Box>
  }
  
  export default TabletGroup