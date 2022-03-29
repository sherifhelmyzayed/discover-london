import { Box, ToggleButton, Grid } from '@mui/material'
import PriceFilter from './PriceFilter'
import MoreFiltersButton from './MoreFiltersButton'


const Filter = (props) => {

    const {
        filterAmenities,
        setFilterAmenities,
        priceFilter,
        setPriceFilter,
        moreFilters,
        setMoreFilters
    } = props

    const handleClick = (e) => {
        setFilterAmenities((current) => ({ ...current, [e]: (filterAmenities[e] ? !filterAmenities[e] : true) }))
    }
    return (
        <Grid container>
            <Grid item md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center',  margin: "10px 0"  }}>
                    <PriceFilter
                        priceFilter={priceFilter}
                        setPriceFilter={setPriceFilter}
                    />
                    <ToggleButton onClick={() => handleClick('cancellation')} value="cancellation" aria-label="left aligned" sx={{
                        border: filterAmenities.cancellation ? '1px black solid' : '1px #C8C8C8 solid',
                        borderRadius: 5,
                        height: 35
                    }}>
                        Free cancellation
                    </ToggleButton>
                    <ToggleButton onClick={() => handleClick('wifi')} value="wifi" aria-label="centered" sx={{
                        border: filterAmenities.wifi ? '1px black solid' : '1px #C8C8C8 solid',
                        borderRadius: 5,
                        height: 35
                    }}>
                        Wifi
                    </ToggleButton>
                    <ToggleButton onClick={() => handleClick('kitchen')} value="kitchen" aria-label="centered" sx={{
                        border: filterAmenities.kitchen ? '1px black solid' : '1px #C8C8C8 solid',
                        borderRadius: 5,
                        height: 35
                    }}>
                        Kitchen
                    </ToggleButton>
                    <ToggleButton onClick={() => handleClick('ac')} value="ac" aria-label="centered" sx={{
                        border: filterAmenities.ac ? '1px black solid' : '1px #C8C8C8 solid',
                        borderRadius: 5,
                        height: 35
                    }}>
                        Air conditioning
                    </ToggleButton>
                    <ToggleButton onClick={() => handleClick('washer')} value="washer" aria-label="justified" sx={{
                        border: filterAmenities.washer ? '1px black solid' : '1px #C8C8C8 solid',
                        borderRadius: 5,
                        height: 35
                    }}>
                        Washer
                    </ToggleButton>
                    <ToggleButton onClick={() => handleClick('iron')} value="iron" aria-label="justified" sx={{
                        border: filterAmenities.iron ? '1px black solid' : '1px #C8C8C8 solid',
                        borderRadius: 5,
                        height: 35
                    }}>
                        Iron
                    </ToggleButton>
                    <ToggleButton onClick={() => handleClick('parking')} value="parking" aria-label="justified" sx={{
                        border: filterAmenities.parking ? '1px black solid' : '1px #C8C8C8 solid',
                        borderRadius: 5,
                        height: 35
                    }}>
                        Free Parking
                    </ToggleButton>
                    <ToggleButton onClick={() => handleClick('tv')} value="tv" aria-label="justified"  sx={{
                        border: filterAmenities.tv ? '1px black solid' : '1px #C8C8C8 solid',
                        borderRadius: 5,
                        height: 35
                    }}>
                        TV - Cable
                    </ToggleButton>
                    <MoreFiltersButton moreFilters={moreFilters} setMoreFilters={setMoreFilters} />
                </Box>
            </Grid>
        </Grid>
    )
}

export default Filter