import React from 'react'
import PriceCard from './PriceCards.js'
import outside from '../../images/outside.jpg'
import bedroom1 from '../../images/bedroom1.jpg'
import living from '../../images/living.jpg'
import salon from '../../images/salon.jpg'
import kitchen from '../../images/kitchen.jpg'
import PropertyData from '../Property/PropertyData';
import { Grid, Box } from '@mui/material'


const ImagesContainer = () => {
    return (
        <>
            <Grid container display='flex' maxWidth={1200} alignItems='center' justifyContent='center' marginLeft="auto" marginRight="auto" backgroundColor="black">

                <Box display="flex" flexDirection="column"
                    marginRight={5}
                    marginBottom={8}
                    marginLeft={3}
                >
                    <h3>
                        Enjoy Notting Hill in a stylish Portobello home.
                    </h3>
                    <p className='reviews'><span className='star'>&#9733;</span> 4.94 - <a href="/" className='reviews-link'>46 Reviews</a> - <a href="/" className='reviews-link'>Barcelona, Catalonia, Spain</a> </p>
                    <div className="main-image">
                        <img src={outside} alt="Building" className='images-large' />
                        <div className='description-container'>
                            <h4>Entire rental unit hosted by Daniel</h4>
                            <ul className='description-list'>
                                <li>10 guests</li>
                                <li>5 bedrooms</li>
                                <li>5 beds</li>
                                <li>4 baths</li>
                            </ul>

                            <div className='features-container'>
                                <h5>FEATURES & AMENITIES</h5>

                                <ul className='featurs-list'>
                                    <li>Air conditioning</li>
                                    <li>Fully equipped kitchen with breakfast bar</li>
                                    <li>Formal dining area with seating for 10</li>
                                    <li>Dishwasher</li>
                                    <li>Wi-Fi</li>
                                    <li>Satellite television</li>
                                    <li>Smart TV</li>
                                    <li>Sound system</li>
                                    <li>Washer/Dryer</li>
                                    <li>Iron/Ironing board</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className='small-images'>
                        <img src={bedroom1} alt="Building" className='image-small img1' />
                        <img src={living} alt="Building" className='image-small img2' />
                        <img src={salon} alt="Building" className='image-small img3' />
                        <img src={kitchen} alt="Building" className='image-small img4' />
                    </div>

                </Box>
                <PriceCard />

                <div className='second-section-container'>

                    <PropertyData />
                </div>
            </Grid>
        </>
    )
}




export default ImagesContainer