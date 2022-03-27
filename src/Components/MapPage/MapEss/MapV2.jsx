import React from 'react'
import GoogleMapReact from 'google-map-react'
// import { Paper, Typography, useMediaQuery } from '@material-ui/core'
// import Rating from '@material-ui/lab'
import useStyles from './style'
// import { LocationOnOutlined } from '@mui/icons-material'

const MapV2 = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();
  // const isMobile = useMediaQuery('min-width:600px');

  return (
    <>
      <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBwKCNp04N1XSBNiisfrtBPNThKg89k1AQ' }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={''}
          onChange={(e) => {
            console.log(e.data);
            
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})

          }}
          onChildClick={() => { console.log("anything") }}
        >


        </GoogleMapReact>
      </div>
    </>
  )
}

export default MapV2