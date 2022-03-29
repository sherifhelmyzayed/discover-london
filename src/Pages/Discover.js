import { useState, useEffect } from 'react'
import { Grid } from '@mui/material';
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


    // filter states
    const [filterAmenities, setFilterAmenities] = useState({
        ac: false,
        cancellation: false,
        iron: false,
        kitchen: false,
        parking: false,
        washer: false,
        wifi: false,
        tv: false
    })
    const [priceFilter, setPriceFilter] = useState([20, 600]);
    const [moreFilters, setMoreFilters] = useState({
        beds: 0,
        bedrooms: 0,
        bathrooms: 0,
        property: {
            House: false,
            Apartment: false,
            Loft: false,
            Villa: false
        },
        language: {
            English: true,
            French: false,
            German: false,
            Italian: false
        }
    })


    // filter functions
    const sortAndSlice = (importedData) => (
        importedData
            .sort((a, b) => (b.fields.number_of_reviews - a.fields.number_of_reviews))
            .slice(0, 20)
    )

    const filterPrice = (importedData) => (
        importedData.filter(item => item.fields.price > priceFilter[0] && item.fields.price < priceFilter[1])
    )

    // "property_type": "Apartment"
    const filterAmenity = (importedData) => (
        importedData.filter(item =>
            item.fields.cancellation_policy.includes(filterAmenities.cancellation ? "strict" :"") 
            && item.fields.amenities.includes(filterAmenities.iron ? "Iron" : "")
            && item.fields.amenities.includes(filterAmenities.parking ? "kitchen" : "")
            && item.fields.amenities.includes(filterAmenities.washer ? "parking" : "")
            && item.fields.amenities.includes(filterAmenities.wifi ? "Washer" : "")
            && item.fields.amenities.includes(filterAmenities.ac ? "Air conditioning" : "")
            && item.fields.amenities.includes(filterAmenities.tv ? "TV" : "")
        )
    )
    // const filterAmenity = (importedData) => (
    //     importedData.filter(item =>
    //         (filterAmenities.cancellation)
    //             ? item.fields.cancellation_policy !== "strict"
    //             : item
    //                 && (filterAmenities.iron)
    //                 ? item.fields.amenities.includes("Iron")
    //                 : item
    //                     && (filterAmenities.kitchen)
    //                     ? item.fields.amenities.includes("kitchen")
    //                     : item
    //                         && (filterAmenities.parking)
    //                         ? item.fields.amenities.includes("parking")
    //                         : item
    //                             && (filterAmenities.washer)
    //                             ? item.fields.amenities.includes("Washer")
    //                             : item
    //                                 && (filterAmenities.wifi)
    //                                 ? item.fields.amenities.includes("wifi")
    //                                 : item
    //                                     && (filterAmenities.ac)
    //                                     ? item.fields.amenities.includes("Air conditioning")
    //                                     : item
    //                                         && (filterAmenities.tv)
    //                                         ? item.fields.amenities.includes("TV")
    //                                         : item
    //     )
    // )

    const filterMore = (importedData) => {
        let data1 = importedData.filter(item =>
            item.fields.beds >= moreFilters.beds
            &&
            item.fields.bedrooms >= moreFilters.bedrooms
            &&
            item.fields.bathrooms >= moreFilters.bathrooms
            &&
             (
                (moreFilters.property.House)
                    ? item.fields.property_type === "House"
                    : ''
                        || (moreFilters.property.Apartment)
                        ? item.fields.property_type === "Apartment"
                        : ''
                            || (moreFilters.property.Loft)
                            ? item.fields.property_type === "Loft"
                            : ''
                                || (moreFilters.property.Villa)
                                ? item.fields.property_type === "Villa"
                                : ''
            )
        )
        return (data1)
    }



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

        let importedData = listings
            .filter(item => item.fields.geolocation[0] > lat2 && item.fields.geolocation[0] < lat1 && item.fields.geolocation[1] > log2 && item.fields.geolocation[1] < log1)

        setData(sortAndSlice(filterPrice(filterAmenity(filterMore(importedData)))))
        console.log(data)
        setinitialView(true)
    }, [trigger, priceFilter, filterAmenities, moreFilters])

    return (
        <>
            {/* <NavBar /> */}
            <Filter
                filterAmenities={filterAmenities}
                setFilterAmenities={setFilterAmenities}
                priceFilter={priceFilter}
                setPriceFilter={setPriceFilter}
                moreFilters={moreFilters}
                setMoreFilters={setMoreFilters}
            />
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
