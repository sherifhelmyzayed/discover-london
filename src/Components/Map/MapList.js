import { useNavigate } from 'react-router';
import { Card, Box, CardContent, Typography, Grid, Divider } from '@material-ui/core'
import StarIcon from '@mui/icons-material/Star';
import CircularProgress from '@mui/material/CircularProgress';


const MapList = (props) => {
    const {
        data,
        hoverCardHandler,
        hoverCardHandlerRemove
    } = props

    let navigate = useNavigate();

    const clickHandler = (e) => {
        navigate(`../propertyV2/${e}`)
    }
    return (
        <>
            {(data) ? (data.map((listing, key) => (
                <>
                    <Box sx={{ cursor: "pointer" }} onClick={() => { clickHandler(listing.fields.id) }} onMouseLeave={()=>{hoverCardHandlerRemove()}} onMouseEnter={() => { hoverCardHandler(listing.fields.id) }}>
                        <Card sx={{ display: 'flex', width: '100%', margin: 50 }} >
                            <Grid container spacing={3} >
                                <Grid item md={5}>
                                    <Box sx={{
                                        height: 160,
                                        margin: "30px 10px",
                                        backgroundImage: `url(${listing.fields.medium_url})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        borderRadius: 10, cursor: "pointer"
                                    }} />
                                </Grid>
                                <Grid item md={7} marginLeft={5} sx={{ height: 160 }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 180 }}>
                                            <Box>
                                                <Typography component="div" variant="caption">
                                                    {listing.fields.neighbourhood_cleansed}
                                                </Typography>
                                                <Typography variant="h6" color="text.secondary" component="div">
                                                    {listing.fields.name}
                                                </Typography>
                                                <Typography component="div" variant="caption">
                                                    {listing.fields.accommodates} guests - {listing.fields.bedrooms} bedroom - {listing.fields.beds} bed - {listing.fields.bathrooms} bathrooms
                                                </Typography>
                                                <Typography component="div" variant="caption">
                                                    {
                                                        (listing.fields.amenities.length > 100) ? (
                                                            listing.fields.amenities.substring(0, 100).concat(" ...etc")
                                                        ) : listing.fields.amenities
                                                    }
                                                </Typography>

                                            </Box>
                                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                                <Box display="flex" justifyContent="center" alignItems="center">
                                                    <StarIcon color="primary" fontSize="medium" sx={{ marginRight: 1, marginTop: 0, color: "red" }} />
                                                    <Typography variant="subtitle2" marginLeft={3}>{
                                                        (listing.fields.review_scores_rating > 0) ? (
                                                            listing.fields.review_scores_rating / 20
                                                        ) : 0
                                                    } ({listing.fields.number_of_reviews} reviews)</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="subtitle1" display="inline">${listing.fields.price}</Typography>
                                                    <Typography variant="caption" display="inline"> / night</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>
                    </Box>
                    <Divider />
                </>
            ))

            ) : <CircularProgress sx={{ marginLeft: "50%", marginTop: "50%" }} />}
        </>
    )
}

export default MapList