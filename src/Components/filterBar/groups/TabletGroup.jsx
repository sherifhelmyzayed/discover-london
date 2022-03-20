import PriceLaptop from "../FilterButton/LaptopBotton"
import FilterLabButtonjsx from "../FilterButton/FilterLabButton.jsx"
import Box from '@mui/material/Box';

const TabletGroup =()=>{
    return <Box sx={{display : "flex" , justifyContent :"space-between", width : '100% ',
               }}>
                   
                <PriceLaptop name = 'Price' />
                <PriceLaptop name = 'typePlace'/>
                <FilterLabButtonjsx />
           </Box>
  }
  
  export default TabletGroup