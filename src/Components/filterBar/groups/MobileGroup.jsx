import MobleButton from "../FilterButton/MobleButton"
import Box from '@mui/material/Box';

const MobileGroup =()=>{
 
    const sections = ['Price'  , 'typePlace' , 'filter'  ]


  return <Box sx={{display : "flex" , justifyContent :"space-between", width : '100% ',
  }}>
      { sections.map((item)=>{
            return (
                <MobleButton name={item}/>

            )
         } )
      }
               
               
         </Box>
}

export default MobileGroup