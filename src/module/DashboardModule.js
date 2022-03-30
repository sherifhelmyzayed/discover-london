import React, { createContext, useMemo, useEffect, useContext, Suspense, useState } from 'react'
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';


// Dashboard component routes are here
import Reservations from '../Components/Dashboard/Reservations';
import Performance from '../Components/Dashboard/Performance';
import Inbox from '../Components/Dashboard/Inbox';
import Listings from '../Components/Dashboard/Listings';
import Home from '../Components/Dashboard/Home';
import LeftSidebar from '../Components/Dashboard/LeftSidebar';
import Header from '../Components/Dashboard/Header';
import { useNavigate  } from "react-router-dom";
import { ThemeContext } from '../App';


import { Grid } from '@mui/material';
import CreateListing from '../Components/Dashboard/CreateListing';
let uid = localStorage.getItem('id')
let auth = localStorage.getItem('auth')


export const DashboardContext = createContext();


const DashboardModule = () => {

    let history = useNavigate ();
    if(!auth){
       history('/')
       }



    const [stepperOpen, setStepperOpen] = useState(false)

    const setStepperOpenHandler = (ev)=>{
        setStepperOpen(ev)
    }

    const { mainTheme } = useContext(ThemeContext);
    const [userRate , setUserRate] = useState({});
    const [userDaily, setUserDaily] = useState({});
    const [reserv, setReserv] = useState({});
    const [id , setId] = useState([]);
    

    // add hosting state here
    useEffect(() => {
        // axios.get("http://localhost:4000/user", { headers: { Authorization: tok } }).then((res) => {
        //     console.log(res.data)
        //     setUser(res.data)
        //     setId(res.data._id)
        // });
        axios.get(`http://localhost:4000/user/host/rate/${uid}`).then((res) => {
            setUserRate(res.data)
        });

        axios.get(`http://localhost:4000/user/host/data/${uid}`).then((res) => {
            setUserDaily(res.data)
        });

        axios.get(`http://localhost:4000/user/booking/${uid}`).then((res) => {
            setReserv(res.data)
            console.log(reserv)
        });

        
        // Get >> aprove reservation request 
        // Post >> decline ""  ""   "" 
        // Id bta3 elbooking
        // http://localhost:4000/user/booking/:id 

    }, []);


    const contextValue = useMemo(
        () => ({
            longSummary: userRate,
            dailySummary: userDaily
        }),
        [userRate, userDaily]
    );
   
   
    return (
        <Suspense fallback={<h1>LOOOOOOOOOOAAADINGGGG</h1>}>
            <DashboardContext.Provider value={contextValue}>
                <Header clickHandler={setStepperOpenHandler}/>
                <CreateListing stateDialog={stepperOpen} clickHandler={setStepperOpenHandler}/>
                <Grid
                    container
                    direction="row"
                    justify="start"
                    alignItems="start"
                >
                    <LeftSidebar />
                    <Grid item md={9}>
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path="home" element={<Home />} />
                            <Route path="performance" element={<Performance />} />
                            <Route path="inbox" element={<Inbox theme={mainTheme} />} />
                            <Route path="reservations" element={<Reservations />} />
                            <Route path="listings" element={<Listings />} />
                        </Routes>
                    </Grid>
                </Grid>
            </DashboardContext.Provider>
        </Suspense>
    )
}

export default DashboardModule