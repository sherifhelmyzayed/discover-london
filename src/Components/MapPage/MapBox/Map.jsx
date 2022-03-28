import React, { useState, useEffect, useRef } from 'react';
import Map, { Marker, NavigationControl, GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from "axios";


const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2hlcmlmaGVsbXkiLCJhIjoiY2wxNGExY3pmMDBoMjNqcm1jZWs0ZGl5MSJ9.vAYVEPYBzu3e69V3fM-cIw';


export default function MapBox() {
    const URL = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&refine.country=United+Kingdom'
    // const [trigger, setTrigger] = useState(false)
    // // const inputEl = useRef(null);

    // // const handle = (e) => {
    // //     setTrigger(!trigger)
    // // }

    // // useEffect(() => {
    // //     if (inputEl.current) {
    // //         let sw = inputEl.current.getBounds()._sw
    // //         let ne = inputEl.current.getBounds()._ne

    // //     }
    // // }, [trigger])

    const [markers, setMarkers] = useState([])
    useEffect(() => {
        axios.get(URL).then(response => {

            setMarkers([
                ...markers, response.data.records.map((record) => record.geometry.coordinates)
            ])
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <>
            <Map
                initialViewState={{
                    latitude: 57.8,
                    longitude: -162.4,
                    zoom: 0
                }}
                style={{ width: '70vw', height: '100vh' }}
                mapStyle="mapbox://styles/mapbox/dark-v10"
                mapboxAccessToken={MAPBOX_TOKEN}
            // onIdle={handle}
            // ref={inputEl}
            >
                <NavigationControl className="navigation-control"
                    showCompass={true} />
                {
                    (markers[0] ? (
                        markers[0].map((item, i) => (
                            <Marker key={i} longitude={item[0]} latitude={item[1]}>
                            </Marker>
                        ))
                    ) : '')
                }
            </Map>
        </>
    );
}

