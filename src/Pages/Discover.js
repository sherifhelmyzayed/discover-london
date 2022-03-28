import { useState, useEffect } from 'react'
import { Grid } from '@mui/material';
import List from '../Components/MapPage/List/List';
import Map from '../Components/Map/Map';
import NavBar from '../Components/NavigationBar/NavBar';
import MapList from '../Components/Map/MapList';
import axios from "axios";
import Filter from '../Components/Map/Filter';

import listings from '../shared/airbnb-listings (1).json'


const Discover = () => {
    const [trigger, setTrigger] = useState(false)
    const [data, setData] = useState(null)
    const [boundaries, setBoundaries] = useState(null)
    const [hovered, setHovered] = useState(null)
    const [initialView, setinitialView] = useState(false)
    const [cameraZoom, setCameraZoom] = useState(null)

    // const equation = ()=>{
    //     161759-123814e^0.0182408x
    // }




    // let URL = (cameraZoom) 
    // ? `https://data.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings%40public&q=&rows=20&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features&facet=number_of_reviews&exclude.number_of_reviews=0&geofilter.distance=${cameraZoom.point[0]}%2C+${cameraZoom.point[1]}%2C+${cameraZoom.zoom}`
    // : 'https://data.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings%40public&q=&rows=20&sort=number_of_reviews&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features&geofilter.distance=51.50118837862644%2C+-0.09768202553641459%2C+10185'

    // let URL = 'https://data.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings%40public&q=&rows=20&sort=number_of_reviews&facet=host_response_time&facet=host_response_rate&facet=host_verifications&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features&geofilter.distance=51.50118837862644%2C+-0.09768202553641459%2C+10185'


    const hoverCardHandler = (e) => {
        setHovered(e)
    }

    const hoverCardHandlerRemove = () => {
        setHovered(null)
    }

    useEffect(() => {
        // axios.get(URL).then(response => {
        //     setData(response.data.records)
        //     setinitialView([response.data.records[0].fields.geolocation[0], response.data.records[0].fields.geolocation[1]])
        //     console.log(data)
        // }).catch(error => {
        //     console.log(error)
        // })
        
        const lat1 = (boundaries) ? boundaries.northEast.lat : 51.489119889002126
        const lat2 = (boundaries) ? boundaries.southWest.lat : 51.261667988171695
        const log1 = (boundaries) ? boundaries.northEast.lng : -0.01115745233397547
        const log2 = (boundaries) ? boundaries.southWest.lng : -0.32688691447197016
        
        console.log(boundaries.northEast)

        let importedData = listings
            .filter(item => item.fields.geolocation[0] > lat2 && item.fields.geolocation[0] < lat1 && item.fields.geolocation[1] > log2 && item.fields.geolocation[1] < log1)
        let newImportedData = importedData
            .sort((a, b) => (b.fields.number_of_reviews - a.fields.number_of_reviews))
            .slice(0, 20)

        console.log(importedData)
        console.log(newImportedData)
        setData(newImportedData)
        setinitialView(true)
        console.log(data)



    }, [trigger])

    return (
        <>
            <NavBar />
            <Filter />
            <Grid container spacing={3} style={{ width: '100vw' }}>
                <Grid item xs={12} md={6} sx={{ height: '100vh', overflow: 'auto' }}>
                    <MapList data={data} hoverCardHandler={hoverCardHandler} hoverCardHandlerRemove={hoverCardHandlerRemove} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Map
                        data={data}
                        setData={setData}
                        boundaries={boundaries}
                        setBoundaries={setBoundaries}
                        trigger={trigger}
                        setTrigger={setTrigger}
                        URL={URL}
                        hovered={hovered}
                        initialView={initialView}
                        setinitialView={setinitialView}
                        cameraZoom={cameraZoom}
                        setCameraZoom={setCameraZoom}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default Discover
