import { Avatar, Box, Typography } from '@mui/material'
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import BathroomOutlinedIcon from '@mui/icons-material/BathroomOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import Divider from '@mui/material/Divider';


const ProductPricingCard = (props) => {
    const { amenities, hostImage, host, price, accomadates, bathrooms
        , bedrooms, reviews, neighbourhood, city, title, amenitiesString } = props

    const featuresArr = amenitiesString.split(',')


    return (
        <>
            <Box sx={{
                boxShadow: 2, width: '100%', transition: '0.3s', borderRadius: 5, padding: 2
            }}>
                <Typography sx={{ fontFamily: 'syne', fontSize: '1.4rem', fontWeight: 600, marginBottom: 2, color: 'primary.main' }}>{title}</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: "40%" }}>
                        <Typography variant="subtitle6">{city}&nbsp;</Typography>
                        <Typography variant="subtitle6">{neighbourhood}</Typography>
                    </Box>
                    <Typography variant="subtitle6" mb={2} >{reviews > 1 ? `${reviews} Reviews` : `${reviews} Review`}</Typography>



                </Box>

                <Divider />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mt={2}>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }} mb={2} >
                            <Box sx={{ display: 'flex' }}>
                                <BedroomChildOutlinedIcon sx={{ color: 'primary.main' }} />
                                <Typography ml={1} mr={2} sx={{ fontSize: '0.8rem', fontFamily: 'lato', color: '#0c2442' }}>
                                    {bedrooms > 1 ? `${bedrooms} Bedrooms` : `${bedrooms} Bedroom`}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <BathroomOutlinedIcon sx={{ color: 'primary.main' }} />
                                <Typography ml={1} mr={2} sx={{ fontSize: '0.8rem', fontFamily: 'lato', color: '#0c2442' }}>
                                    {bathrooms > 1 ? `${bathrooms} Bathrooms` : `${bathrooms} Bathroom`}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <PersonPinOutlinedIcon sx={{ color: 'primary.main' }} />
                                <Typography ml={1} mr={2} sx={{ fontSize: '0.8rem', fontFamily: 'lato', color: '#0c2442' }}>
                                    {accomadates > 1 ? `${accomadates} Guests Included` : `${accomadates} Guest Included`}

                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: '3rem', fontFamily: 'syne', color: '#0c2442' }}>
                            {price}
                        </Typography>
                        <Typography sx={{ fontSize: '0.8rem', fontFamily: 'Montserrat', color: '#0c2442', fontWeight: 500 }}>
                            $/Night
                        </Typography>
                    </Box>
                </Box>
                <Divider />
                <Box sx={{ width: '100%' }} mb={3}>
                    <Typography sx={{ fontFamily: 'syne', fontSize: '1.4rem', fontWeight: 600, marginBottom: 2, color: 'primary.main' }}>FEATURES & AMENIITES</Typography>
                    <ul className="features-list">
                        {amenities.length === 0 ? featuresArr.map((item, i) => <li key={i}>{item}</li>) : amenities.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mt={2} mb={2}>
                    <Box display="flex"
                        alignItems="center"
                        justifyContent="center">
                        <Typography variant="subtitle6">
                            Hosted By {host}
                        </Typography>
                    </Box>
                    <Avatar src={`${hostImage}`} alt={`${host}`} />

                </Box>


            </Box>


        </>
    )
}

export default ProductPricingCard