import { selectUnstyledClasses } from '@mui/material/node_modules/@mui/base';
import React,{useState} from 'react'
import {GoogleMap , withScriptjs ,withGoogleMap , Marker, InfoWindow  } from 'react-google-maps'
import  cairo from '../data/test.js'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MediaCard from '../Components/card'

const Map = () => {
  const [slected , setSelected ] = useState(null);
  
  function gmap(){
    return <GoogleMap defaultZoom={15} defaultCenter={{lat:30.044420 , lng:31.235712}}>
      {cairo.map(park=>{
        return<Marker key={park.id} position={{lat:park.lat , lng: park.lng}}
         onClick={()=>{
           setSelected(park);
         }}/>
      })}

      
       {slected && (
            <InfoWindow position={{lat :slected.lat , lng : slected.lng }}
             onCloseClick={()=>{
               setSelected(null);
             }}>
              
               <div>
                 <h2>{slected.name}</h2>
                 <p> {slected.description}</p>
               </div>
              
            </InfoWindow>
       )}
      </GoogleMap>
  }
  const WrapMap = withScriptjs(withGoogleMap(gmap))

  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={5}>
          <MediaCard></MediaCard>
        </Grid>
        <Grid item xs={7}>
        <div style={{width:"80vw" , height:"100vh" }}>
    <WrapMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAKMk2tlTruAetdKAEHtsFCl36CQTdSbmw`}
             loadingElement={<div style={{ height: `100%` }} />}
             containerElement={<div style={{ height: `100vh` }} />}
             mapElement={<div style={{ height: `100%` }} />}/>
    </div>
        </Grid>
        
      </Grid>
    </Box>
    
   
    </>
  )
}

export default Map