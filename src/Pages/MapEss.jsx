import React, { useEffect, useState } from 'react'
import { CssBaseline, Grid } from '@mui/material';
import List from '../Components/MapPage/List/List';
import MapHeader from '../Components/MapPage/MapHeader/MapHeader';
// import PropertyDetails from '../Components/MapPage/PropertyDetails/PropertyDetails';
import MapV2 from '../Components/MapPage/MapEss/MapV2';
import { getPlacesData } from '../api'

const MapEss = () => {

  return (
    <>
      <CssBaseline />
      <MapHeader />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
         
        </Grid>
      </Grid>
    </>
  )
}

export default MapEss