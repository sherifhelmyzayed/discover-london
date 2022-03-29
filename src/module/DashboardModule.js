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

import { ThemeContext } from '../App';


import { Grid } from '@mui/material';
import CreateListing from '../Components/Dashboard/CreateListing';
let uid = localStorage.getItem('id')


export const DashboardContext = createContext();


const DashboardModule = () => {

    const [stepperOpen, setStepperOpen] = useState(false)

    const setStepperOpenHandler = (ev)=>{
        setStepperOpen(ev)
    }

    const { mainTheme } = useContext(ThemeContext);
    const [userRate , setUserRate] = useState({});
    const [id , setId] = useState([]);

    // add hosting state here
    useEffect(() => {
        // axios.get("http://localhost:4000/user", { headers: { Authorization: tok } }).then((res) => {
        //     console.log(res.data)
        //     setUser(res.data)
        //     setId(res.data._id)
        // });
        
        axios.get(`http://localhost:4000/user/host/rate/${uid}`).then((res) => {
            setUserRate(res.data[0])
            console.log(res.data[0])
        });
        return () => {
        };
    }, []);


    const contextValue = useMemo(
        () => ({
            // import data in memo here
            
        }),
        []
    );

    return (
        <Suspense fallback={<h1>LOOOOOOOOOOAAADINGGGG</h1>}>
            <DashboardContext.Provider value={userRate}>
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
                            <Route index element={<Home />} />h
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