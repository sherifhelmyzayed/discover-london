import React, { createContext, useMemo, useEffect } from 'react'
import axios from "axios";
import { Routes, Route } from "react-router-dom";

// main Dashboard component
import Dashboard from '../Pages/Dashboard';

// Dashboard component routes are here
import Reservations from '../Components/Dashboard/Reservations';
import Performance from '../Components/Dashboard/Performance';
import Inbox from '../Components/Dashboard/Inbox';
import Listings from '../Components/Dashboard/Listings';
import Home from '../Components/Dashboard/Home';
import LeftSidebar from '../Components/Dashboard/LeftSidebar';
import Header from '../Components/Dashboard/Header';


import { Grid } from '@mui/material';


export const DashboardContext = createContext();


const DashboardModule = () => {
    // add hosting state here
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            // return res.data in state
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
        <DashboardContext.Provider value={contextValue}>
            <Header />
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
                        <Route path="inbox" element={<Inbox />} />
                        <Route path="reservations" element={<Reservations />} />
                        <Route path="listings" element={<Listings />} />
                    </Routes>
                </Grid>
            </Grid>
        </DashboardContext.Provider>
    )
}

export default DashboardModule