import { useState, useRef } from 'react'
import Map, { NavigationControl, Marker } from 'react-map-gl';
import { Typography } from '@mui/material';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2hlcmlmaGVsbXkiLCJhIjoiY2wxNGExY3pmMDBoMjNqcm1jZWs0ZGl5MSJ9.vAYVEPYBzu3e69V3fM-cIw';


const Step2 = (props) => {
    const { createProperty, setCreateProperty } = props
    const [coordinates, setCoordinates] = useState(null)
    const inputEl = useRef(null)



    const clickHandler = (e) => {
        setCoordinates([e.lngLat.lat, e.lngLat.lng])
        setCreateProperty((current) => ({ ...current, 'geolocation': [e.lngLat.lat, e.lngLat.lng] }))
        console.log(createProperty.geolocation)
    }
    return (
        <>
            <Typography variant="h5" component="div" marginBottom={5}>
                Choose your propery on Map
            </Typography>
            <Map
                bounds={
                    [{ lat: 51.50118837862644, lng: -0.09768202553641459 }, { lat: 51.23203941746053, lng: -0.2299947300747931 }]
                }
                style={{ width: '100%', height: 'calc(100vh - 140px)' }}
                mapStyle="mapbox://styles/mapbox/dark-v10"
                mapboxAccessToken={MAPBOX_TOKEN}
                ref={inputEl}
                onClick={clickHandler}
            >
                <NavigationControl className="navigation-control"
                    showCompass={true} />
                {(coordinates) ? (
                    <Marker longitude={coordinates[1]} latitude={coordinates[0]}></Marker>
                ) :  (createProperty.geolocation) ? (
                    <Marker longitude={createProperty.geolocation[1]} latitude={createProperty.geolocation[0]}></Marker>
                    )
                    : ''
                }
            </Map>
        </>
    )
}

export default Step2