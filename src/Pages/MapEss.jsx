import React, { useEffect, useState } from 'react'
import { CssBaseline, Grid } from '@mui/material';
import List from '../Components/MapPage/List/List';
import MapHeader from '../Components/MapPage/MapHeader/MapHeader';
// import PropertyDetails from '../Components/MapPage/PropertyDetails/PropertyDetails';
import MapV2 from '../Components/MapPage/MapEss/MapV2';
import { getPlacesData } from '../api'

const MapEss = () => {
  // eslint-disable-next-line no-unused-vars
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState(null);



  useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data)
      setPlaces(data)
    })
  }, [coordinates,bounds])
  return (
    <>
      <CssBaseline />
      <MapHeader />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <MapV2 setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} />
        </Grid>
      </Grid>
    </>
  )
}

export default MapEss