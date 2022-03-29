import { Grid } from '@mui/material';
import React from 'react';
import MapBox from './Map';
import List from '../List/List';


const Mainpage = () => {
    return (
        <>
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <MapBox />
                </Grid>
            </Grid>
        </>
    )
}

export default Mainpage
