import React, { useState, useEffect, useRef } from 'react';
import Map, { Marker, NavigationControl, GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from "axios";


const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2hlcmlmaGVsbXkiLCJhIjoiY2wxNGExY3pmMDBoMjNqcm1jZWs0ZGl5MSJ9.vAYVEPYBzu3e69V3fM-cIw';


export default function MapBox() {
    const [trigger, setTrigger] = useState(false)
    const inputEl = useRef(null);

    const handle = (e) => {
        setTrigger(!trigger)
    }

    useEffect(() => {
        console.log(inputEl)
        if (inputEl.current != null) {
            let sw = inputEl.current.getBounds()._sw
            let ne = inputEl.current.getBounds()._ne
            console.log(ne)
            console.log(sw)
        }
    }, [trigger])

    const [geolocation, setGeolocation] = useState({
        longitude: null, latitude: null
    })
    const URL = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&refine.country=United+Kingdom'

    useEffect(() => {
        axios.get(URL).then(response => {
            const location = ({
                longitude: response.data.records[2].fields.geolocation[0],
                latitude: response.data.records[2].fields.geolocation[1]
            })
            setGeolocation(location)
        }).catch(error => {
            console.log(error)
        })
    })

    return (
        <>
            <Map
                initialViewState={{
                    latitude: 37.8,
                    longitude: -122.4,
                    zoom: 14
                }}
                style={{ width: '70vw', height: '100vh' }}
                mapStyle="mapbox://styles/mapbox/dark-v10"
                mapboxAccessToken={MAPBOX_TOKEN}
                onIdle={handle}
                ref={inputEl}
            >
                <NavigationControl className="navigation-control"
                    showCompass={true} />
                <Marker longitude={-122.4} latitude={37.8} color="blue" />
            </Map>
        </>
    );
}