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
    // const { id } = useParams();

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



    const URL = "http://localhost:4000/list/624429d4722286d23a286158"

    useEffect(() => {
        axios.get(URL).then(response => {
            console.log(response.status)
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
            // setHostImage(response.data.host_thumbnail_url)
            setAmenities(response.data.amenities)
            // setPropertyPic(response.data.xl_picture_url)
            setDescription(response.data.description)

        }).catch(error => {
            console.log(error)
        })
    }, [])



    return (
        <>
            <HeaderSherif />

            {/* <PrimarySearchAppBar /> */}
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
                            boxShadow: 2, width: '100%', transition: '0.3s', borderRadius: 5, padding: 2
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

                            <Typography sx={{ fontFamily: 'syne', fontSize: '1.4rem', fontWeight: 600, marginBottom: 2, marginTop: 2, color: 'primary.main' }}>Similar properties nearby</Typography>
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