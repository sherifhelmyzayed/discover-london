import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import NumberFilter from  './NumberFilter';
import SwichFilter from './SwichFilter'
import { useState } from 'react';
import CheckFilter from './CheckFilter';


 const FilterContant = ()=>{
    const textStyle ={ maxWidth: { xs :'100%', md : '60%' }, 
   }
   const filterStyle = {  maxHeight : "60vh" , padding : "20px 10px" , 
                           overflowY: 'scroll',   overflowX: 'hidden',
   }
   const amenitiesLess =[' Air conditioning ' , 'Kitche', 'Iron' , 'TV'  , 'Wifi' , 'Heating' , ]
   const amenitiesMore =[ { 
      title : "Popular in Cairo Governorate",
      item : [' Air conditioning ' , 'Kitche', 'Iron' , 'TV'  , 'Wifi' , 'Heating' , ]
   } , {
      title : "Essentials",
      item : [ 'Washer' ,'Dedicated workspace','Dryer','Hair dryer']
   },{
   title : "Features",
   item : [ 'Breakfast' , 'Pool', 'Gym' ,'Free parking' , 'EV charger' ,'Smoking allowed',
            'Hot tub' ,'Indoor fireplace']
   } ,{
   title : 'Safety',
   item : ['Carbon monoxide alarm' ,  'Smoke alarm']
   }]

 const [isShow , setIsShow] = useState(false)
 const changeDataHandel = ()=>{
    setIsShow (!isShow)
 }

 const title = <>
                 <Typography sx={textStyle}   variant="h5" component="p">
                  Price renge
                  </Typography>
                  <Divider  />
               </> 

  const showMore = amenitiesMore.map((el)=>{

     return  (   <Box>
                 <Typography sx={textStyle}   variant="h5" component="div">
                     {el.title}
                  </Typography>
                  <Divider  />
                  <CheckFilter arr={el.item} />   
                  <Divider  />
                </Box>
     )})

const ShowLess =   <Box>
                      <CheckFilter arr={amenitiesLess} />   
                      <Divider  />
                  </Box>

     
   return  <section style={filterStyle} >
        <Box  >
           <Typography sx={textStyle}   variant="h5" component="div">
              Price renge
           </Typography>
           <Divider  />
           <NumberFilter />
           <NumberFilter />
           <NumberFilter />
           <Divider  />
       </Box>
       <Box >
           <Typography sx={textStyle}   variant="h5" component="h5">
              Price renge
           </Typography>
           <Divider  />
           <SwichFilter />
           <SwichFilter />
           <Divider  />
       </Box>   
      <Box >
           <Typography sx={textStyle}   variant="h5" component="p">
              Price renge
           </Typography>
           <Divider  />
           <SwichFilter />
           <Divider  />
       </Box> 
       <Box > 
          { !isShow ?  title : null }   
          { isShow ? showMore: ShowLess }       
       </Box>   

       <Button onClick = { changeDataHandel }  size="small">{!isShow ? "Show more": "Show less" }</Button>
       
          </section>
}

export default FilterContant