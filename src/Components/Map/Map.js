import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import Map, { Marker, NavigationControl, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Paper, Box, Typography, Card } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CircularProgress from '@mui/material/CircularProgress';




const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2hlcmlmaGVsbXkiLCJhIjoiY2wxNGExY3pmMDBoMjNqcm1jZWs0ZGl5MSJ9.vAYVEPYBzu3e69V3fM-cIw';


const MapBox = (props) => {
    const [coordinates, setCoordinates] = useState([0, 1])
    const [popupOpen, setPopupOpen] = useState(false)
    const [popupContent, setPopupContent] = useState(null)
    const inputEl = useRef(null);
    const {
        data,
        setData,
        boundaries,
        setBoundaries,
        trigger,
        setTrigger,
        hovered,
        initialView,
        setCameraZoom
    } = props

    const handle = () => {
        setTrigger(!trigger)
        setPopupOpen(false)
        setData(null)
    }
    let navigate = useNavigate();

    const clickHandler = (e) => {
        navigate(`../propertyV2/${e}`)
    }

    useEffect(() => {
        if (inputEl.current) {
            setBoundaries({ ...boundaries, 'southWest': inputEl.current.getBounds()._sw, 'northEast': inputEl.current.getBounds()._ne })
            // const zoom = 161759-(123814 * Math.pow(Math.E, (0.0182408*inputEl.current.getZoom()))
            setCameraZoom({
                point: [inputEl.current.getCenter().lat, inputEl.current.getCenter().lng],
            })

        };
    }, [trigger])
    // 51.50118837862644, -0.09768202553641459, 500

    return (
        <>
            {initialView ? (
                <Map
                    // initialViewState={{
                    //     latitude: initialView[0],
                    //     longitude: initialView[1],
                    //     zoom: 10
                    // }}
                    bounds={
                        [{ lat: 51.50118837862644, lng: -0.09768202553641459 }, { lat: 51.23203941746053, lng: -0.2299947300747931 }]
                    }
                    style={{ width: '100%', height: 'calc(100vh - 140px)' }}
                    mapStyle="mapbox://styles/mapbox/dark-v10"
                    mapboxAccessToken={MAPBOX_TOKEN}
                    onDragEnd={handle}
                    onZoomEnd={handle}
                    ref={inputEl}
                >
                    <NavigationControl className="navigation-control"
                        showCompass={true} />
                    {(popupOpen)
                        ? (
                            <Popup
                                longitude={coordinates[0]}
                                latitude={coordinates[1]}
                                closeButton={false}
                                closeOnClick={false}
                                onClose={() => setPopupOpen(false)}
                                anchor="bottom-left"
                                offset={[20, -20]}
                            >
                                {
                                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', margin: 0 }}>
                                        <Box onClick={() => { clickHandler(popupContent.id) }} sx={{
                                            height: 120,
                                            width: '100%',
                                            margin: 0,
                                            backgroundImage: `url(${popupContent.image})`,
                                            borderRadius: 1,
                                            cursor: 'pointer'
                                        }} />
                                        <Box>
                                            <Box display="flex" justifyContent="start" alignItems="center" padding={1}>
                                                <StarIcon color="primary" fontSize="small" sx={{ marginRight: 1, marginTop: 0, color: "red" }} />
                                                <Typography variant="caption" marginLeft={3}>{
                                                    (popupContent.feedback > 0) ? (
                                                        popupContent.feedback / 20
                                                    ) : 0
                                                } ({(popupContent.number_of_reviews) ? (
                                                    popupContent.number_of_reviews
                                                ) : 0})
                                                </Typography>
                                            </Box>
                                            <Box paddingX={1}>
                                                <Typography component="div" variant="caption">
                                                    {popupContent.title}
                                                </Typography>
                                                <Typography component="div" variant="caption">
                                                    $ {popupContent.price} / night
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                }
                            </Popup>
                        ) : ''
                    }
                    {
                        (data ? (
                            data.map((item, i) => (
                                <Marker key={i} longitude={item.geometry.coordinates[0]} latitude={item.geometry.coordinates[1]}>
                                    <Box onClick={() => {
                                        setPopupOpen(true)
                                        setCoordinates([item.geometry.coordinates[0], item.geometry.coordinates[1]])
                                        setPopupContent({
                                            image: item.fields.medium_url,
                                            price: item.fields.price,
                                            feedback: item.fields.review_scores_rating,
                                            title: item.fields.name,
                                            number_of_reviews: item.fields.number_of_reviews,
                                            id: item.fields.id
                                        })
                                    }} sx={{
                                        padding: 1,
                                        cursor: 'pointer',
                                        fontSize: 16,
                                        // fontSize: 16,
                                        borderRadius: 50,
                                        width: '40px',
                                        height: '34px',
                                        textAlign: 'center',
                                        backgroundColor: (hovered === item.fields.id) ? 'primary.main' : 'white',
                                        color: (hovered === item.fields.id) ? 'ofwhite' : 'primary.main',
                                        '&:hover': {
                                            backgroundColor: 'primary.main',
                                            color: 'white',
                                            zIndex: '100000000'
                                        }
                                    }}
                                    >
                                        <Typography variant="caption" component="p">
                                            ${item.fields.price}
                                        </Typography>
                                    </Box>
                                </Marker>
                            ))
                        ) : '')
                    }
                </Map>
            ) : <CircularProgress sx={{ marginLeft: "50%", marginTop: "50%" }} />
            }
        </>
    );
}

export default MapBox