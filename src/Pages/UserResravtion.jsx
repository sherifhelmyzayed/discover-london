import ReservationCard from "../Components/UserProfile/ReservationCard"
import Box from '@mui/material/Box';
import {useEffect} from "react";
import axios from 'axios';

const UserResravation =()=>{

    useEffect(()=>{
        let id = "6243fd43fed535dd39e88a69"
        axios.get(`http://localhost:4000/booking/my-bookings/${id}`)
        .then(function (response) {
           
        })
        
        .catch(function (error) {
            console.log("s")
            
        })
    })

const deletHandel=()=>{

}
    
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