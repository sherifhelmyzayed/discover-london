import ReservationCard from "../Components/UserProfile/ReservationCard"
import Box from '@mui/material/Box';
import {useEffect ,useState} from "react";
import axios from 'axios';

const UserResravation =()=>{
const [isLoding  , setIsLoding] = useState(true )
const [data , setdata] = useState([1.2]) 

    useEffect(()=>{
        let id = "622098a84f93748a635ffde3"
        axios.get(`http://localhost:4000/booking/my-bookings/${id}`)
        .then(function (response) {
           console.log(response)
           setIsLoding(false)
        })
     
        .catch(function (error) {
            console.log(error)        
        })
    })

const deletHandel=(id)=>{
    console.log(id)
}
    
   let repet = data.map((el)=>{
                return (
                    <ReservationCard id={el.id} fun={deletHandel} />
                )})
    return (<Box sx={{   display : "flex",
                        justifyContent : "space-evenly",
                        flexWrap : "wrap" , 
                        padding : "10px 5%",
                        alignItems : "center",}}>
              { !isLoding ? repet : null  }
            </Box>
    

        
    )
}

export default UserResravation