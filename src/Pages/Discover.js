import { useState, useEffect } from 'react'
import { Grid } from '@mui/material';
import Map from '../Components/Map/Map';
import MapList from '../Components/Map/MapList';
import Filter from '../Components/Map/Filter';
import HeaderSherif from '../Components/HeaderSherif';
import listings from '../shared/airbnb-listings (1).json'




const Discover = () => {
    const [trigger, setTrigger] = useState(false)
    const [data, setData] = useState(null)
    const [boundaries, setBoundaries] = useState(null)
    const [hovered, setHovered] = useState(null)
    const [initialView, setinitialView] = useState(false)
    const [cameraZoom, setCameraZoom] = useState(null)

    

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
            House: true,
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
        (importedData
            .sort((a, b) => (b.fields.number_of_reviews - a.fields.number_of_reviews))
            .slice(0, 20)
        )
    )

    const filterPrice = (importedData) => (
        importedData.filter(item => item.fields.price > priceFilter[0] && item.fields.price < priceFilter[1])
    )

    // "property_type": "Apartment"
    const filterAmenity = (importedData) => (
        importedData.filter(item =>
            item.fields.cancellation_policy.includes(filterAmenities.cancellation ? "strict" : "")
            && item.fields.amenities.includes(filterAmenities.iron ? "Iron" : "")
            && item.fields.amenities.includes(filterAmenities.parking ? "parking" : "")
            && item.fields.amenities.includes(filterAmenities.washer ? "Washer" : "")
            && item.fields.amenities.includes(filterAmenities.wifi ? "Internet" : "")
            && item.fields.amenities.includes(filterAmenities.ac ? "Air conditioning" : "")
            && item.fields.amenities.includes(filterAmenities.tv ? "TV" : "")
        )
    )

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

    const hoverCardHandler = (e) => {
        setHovered(e)
    }

    const hoverCardHandlerRemove = () => {
        setHovered(null)
    }



    useEffect(() => {
        const lat1 = (boundaries) ? boundaries.northEast.lat : 51.489119889002126
        const lat2 = (boundaries) ? boundaries.southWest.lat : 51.261667988171695
        const log1 = (boundaries) ? boundaries.northEast.lng : -0.01115745233397547
        const log2 = (boundaries) ? boundaries.southWest.lng : -0.32688691447197016

        let importedData = listings
            .filter(item => item.fields.geolocation[0] > lat2 && item.fields.geolocation[0] < lat1 && item.fields.geolocation[1] > log2 && item.fields.geolocation[1] < log1)
        setData(sortAndSlice(filterPrice(filterAmenity(filterMore(importedData)))))
        setinitialView(true)
    }, [trigger, priceFilter, filterAmenities, moreFilters])

    return (
        <>
            <HeaderSherif />
            <Filter
                filterAmenities={filterAmenities}
                setFilterAmenities={setFilterAmenities}
                priceFilter={priceFilter}
                setPriceFilter={setPriceFilter}
                moreFilters={moreFilters}
                setMoreFilters={setMoreFilters}
            />
            <Grid container spacing={1} sx={{ paddingLeft: 1 }} >
                <Grid item xs={12} md={6} sx={{ height: 'calc(100vh - 140px)', overflow: 'auto' }}>
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
