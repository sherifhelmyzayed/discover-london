import { useState, useEffect } from 'react'
import { Grid } from '@mui/material';
import List from '../Components/MapPage/List/List';
import Map from '../Components/Map/Map';
import NavBar from '../Components/NavigationBar/NavBar';
import MapList from '../Components/Map/MapList';
import axios from "axios";
import Filter from '../Components/Map/Filter';


const Discover = () => {
    const [trigger, setTrigger] = useState(false)
    const [data, setData] = useState(null)
    const [boundaries, setBoundaries] = useState(null)
    const [hovered, setHovered] = useState(null)
    const [initialView, setinitialView] = useState(null)


    let URL = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=20&refine.country=United+Kingdom'

    const hoverCardHandler = (e) => {
        setHovered(e)
    }

    const hoverCardHandlerRemove = () => {
        setHovered(null)
    }

    useEffect(() => {
        axios.get(URL).then(response => {
            setData(response.data.records)
            setinitialView([response.data.records[0].fields.geolocation[0], response.data.records[0].fields.geolocation[1]])
            console.log(data)
        }).catch(error => {
            console.log(error)
        })
    }, [trigger])

    return (
        <>
            <NavBar />
            <Filter/>
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
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default Discover
