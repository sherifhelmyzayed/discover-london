// import { selectUnstyledClasses } from '@mui/material/node_modules/@mui/base';
import React,{useState} from 'react'
import {GoogleMap , withScriptjs ,withGoogleMap , Marker, InfoWindow  } from 'react-google-maps'
import  cairo from '../data/test.js'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MediaCard from '../Components/card'

const Map = () => {
  const [slected , setSelected ] = useState(null);
  let mapRef = React.createRef()
  function log(){
    let lat1= mapRef.current.getBounds().getNorthEast().lat();
    let lng1= mapRef.current.getBounds().getNorthEast().lng();
    let lat2= mapRef.current.getBounds().getSouthWest().lat();
    let lng2= mapRef.current.getBounds().getNorthEast().lng();
    
     
    console.log("lat : " + mapRef.current.getBounds().getNorthEast().lat())
    console.log( "lng : " + mapRef.current.getBounds().getNorthEast().lng())
    console.log( "lat : " + mapRef.current.getBounds().getSouthWest().lat())
    console.log( "lng : " + mapRef.current.getBounds().getSouthWest().lng())
    
        
  }
   
  function gmap(){
    return <GoogleMap ref={mapRef}  defaultZoom={15} defaultCenter={{lat:30.044420 , lng:31.235712}} onIdle={log} >
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
        <div style={{width:"80vw" , height:"100vh" ,position:"fixed" }}>
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