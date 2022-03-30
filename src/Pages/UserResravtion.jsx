import ReservationCard from "../Components/UserProfile/ReservationCard"
import Box from '@mui/material/Box';

const UserResravation =()=>{
   let arr = [1,2,3,4,5,6,7,8,9]
   let repet = arr.map((el)=>{
                return (
                    <ReservationCard />
                )})
    return (<Box sx={{   display : "flex",
                        justifyContent : "space-evenly",
                        flexWrap : "wrap" , 
                        padding : "10px 5%",
                        alignItems : "center",}}>
              {  repet  }
            </Box>
    

        
    )
}

export default UserResravation