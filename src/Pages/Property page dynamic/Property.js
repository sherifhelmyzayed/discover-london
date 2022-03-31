import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import ProductPricingCard from './ProductPricingCard';
import axios from "axios";
import style from './style.css'
import { useParams } from 'react-router-dom'
import SimilarProperties from './SimilarProperties';
import HeaderSherif from '../../Components/HeaderSherif'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ReservationCalender from './ReservationCalender'

const PropertyV2 = () => {
    const { id } = useParams();

    const [title, setTitle] = useState('')
    const [city, setCity] = useState('')
    const [neighbourhood, setNeighbourhood] = useState('')
    const [reviews, setReviews] = useState('')
    const [summary, setSummary] = useState('')
    const [bedrooms, setBedrooms] = useState('')
    const [bathrooms, setBathrooms] = useState('')
    const [accomadates, setAccomadates] = useState('')
    const [price, setPrice] = useState('')
    const [host, setHost] = useState('')
    const [hostImage, setHostImage] = useState('')
    const [amenities, setAmenities] = useState([])
    const [popertyPic, setPropertyPic] = useState('')
    const [description, setDescription] = useState('')
    const [amenitiesString, setAmenitiesStr] = useState('')



    const URL = `http://localhost:4000/list/${id}`
    const URL2 = `https://data.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings%40public&q=&rows=1&facet=id&refine.id=${id}`



    useEffect(() => {
        axios.get(URL).then(response => {


            if (response.data.bedrooms) {
                setTitle(response.data.name)
                setCity(response.data.city)
                setNeighbourhood(response.data.neighbourhood_cleansed)
                setReviews(response.data.number_of_reviews)
                setSummary(response.data.summary)
                setBedrooms(response.data.bedrooms)
                setBathrooms(response.data.bathrooms)
                setAccomadates(response.data.guests_included)
                setPrice(response.data.price)
                setHost(response.data.host_name)
                setHostImage(response.data.host_thumbnail_url)
                setAmenities(response.data.amenities)
                setPropertyPic(response.data.xl_picture_url)
                setDescription(response.data.description)
            } else {
                axios.get(URL2).then(response => {

                    setAmenitiesStr(response.data.records[0].fields.amenities)
                    setTitle(response.data.records[0].fields.name)
                    setCity(response.data.records[0].fields.city)
                    setNeighbourhood(response.data.records[0].fields.neighbourhood_cleansed)
                    setReviews(response.data.records[0].fields.number_of_reviews)
                    setSummary(response.data.records[0].fields.summary)
                    setBedrooms(response.data.records[0].fields.bedrooms)
                    setBathrooms(response.data.records[0].fields.bathrooms)
                    setAccomadates(response.data.records[0].fields.guests_included)
                    setPrice(response.data.records[0].fields.price)
                    setHost(response.data.records[0].fields.host_name)
                    setHostImage(response.data.records[0].fields.host_thumbnail_url)
                    setPropertyPic(response.data.records[0].fields.xl_picture_url)
                    setDescription(response.data.records[0].fields.description)
                }).catch(error => {
                    console.log(error)
                })
            }


        }).catch(error => {
            console.log(error)
        })
    }, [])



    return (
        <>
            <HeaderSherif />

            <Container sx={{ marginTop: '3em' }}>



                <Grid container spacing={2} justifyContent="center">

                    <Grid item xs={12} xl={6} lg={6} md={8}>
                        <Box sx={{
                            backgroundImage: `url(${popertyPic})`, height: '27rem',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center', borderRadius: 5, boxShadow: 3
                        }} >
                        </Box>
                    </Grid>
                    <Grid item xs={12} xl={10} lg={10} md={10}>
                        <ProductPricingCard title={title}
                            city={city}
                            neighbourhood={neighbourhood}
                            reviews={reviews}
                            amenities={amenities}
                            amenitiesString={amenitiesString}
                            bedrooms={bedrooms}
                            bathrooms={bathrooms}
                            summary={summary}
                            host={host}
                            hostImage={hostImage}
                            accomadates={accomadates}
                            price={price}
                        />
                    </Grid>
                    <Grid item xs={12} xl={10} lg={10} md={10}>
                        <Box sx={{
                            boxShadow: 2, width: '100%', transition: '0.3s', borderRadius: 5, padding: 2,display:'flex',flexDirection:'column',alignItems:'center'
                        }} mt={2}>

                            <ReservationCalender />
                        </Box>
                    </Grid>
                    <Grid item xs={12} xl={10} lg={10} md={10}>
                        <Box sx={{
                            boxShadow: 2, width: '100%', transition: '0.3s', borderRadius: 5, padding: 2
                        }} mt={2}>
                            <Typography mt={2} mb={2} sx={{ fontSize: '1rem', fontFamily: 'lato', color: '#0c2442', }}>
                                {description}
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={12} xl={10} lg={10} md={10} mb={10}>
                        <Box textAlign='center'>

                            <Typography sx={{ fontFamily: 'syne', fontSize: '1.4rem', fontWeight: 600, marginBottom: 2, marginTop: 2, color: 'primary.main' }}>Discover similar properties nearby</Typography>
                        </Box>
                        <SimilarProperties />
                    </Grid>

                </Grid>
            </Container>
            <Box sx={{ width: '100%', height: '7vh', backgroundColor: 'primary.main', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ color: 'white' }}>
                    This is a beta version and doesn't represent the final quality of this product
                </Typography>
            </Box>

        </>
    )
}

export default PropertyV2