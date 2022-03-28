import { useState } from 'react'
import { Box, ToggleButton, Grid } from '@mui/material'
import FilterLabButtonjsx from './MoreFiltersButton'
import PriceFilter from './PriceFilter'
import MoreFiltersButton from './MoreFiltersButton'


const Filter = () => {
    const [filter, setFilter] = useState([])

    const handleClick = (e) => {
        setFilter((current) => ({ ...current, [e]: (filter[e] ? !filter[e] : true) }))
    }
    return (
        <Grid container>
            <Grid item md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <PriceFilter/>
                    <ToggleButton onClick={() => handleClick('cancellation')} value="cancellation" aria-label="left aligned" sx={{
                        border: filter.cancellation ? '1px black solid' : '1px #C8C8C8 solid',
                        borderRadius: 5,
                        height: 35
                    }}>
                        Free cancellation
                    </ToggleButton>
                    <ToggleButton onClick={() => handleClick('wifi')} value="wifi" aria-label="centered" sx={{
                        border: filter.wifi ? '1px black solid' : '1px #C8C8C8 solid',
                        borderRadius: 5,
                        height: 35
                    }}>
                        Wifi
                    </ToggleButton>
                    <ToggleButton onClick={() => handleClick('kitchen')} value="kitchen" aria-label="centered" sx={{
                        border: filter.kitchen ? '1px black solid' : '1px #C8C8C8 solid',
                        borderRadius: 5,
                        height: 35
                    }}>
                        Kitchen
                    </ToggleButton>
                    <ToggleButton onClick={() => handleClick('ac')} value="ac" aria-label="centered" sx={{
                        border: filter.ac ? '1px black solid' : '1px #C8C8C8 solid',
                        borderRadius: 5,
                        height: 35
                    }}>
                        Air conditioning
                    </ToggleButton>
                    <ToggleButton onClick={() => handleClick('washer')} value="washer" aria-label="justified" sx={{
                        border: filter.washer ? '1px black solid' : '1px #C8C8C8 solid',
                        borderRadius: 5,
                        height: 35
                    }}>
                        Washer
                    </ToggleButton>
                    <ToggleButton onClick={() => handleClick('iron')} value="iron" aria-label="justified" sx={{
                        border: filter.iron ? '1px black solid' : '1px #C8C8C8 solid',
                        borderRadius: 5,
                        height: 35
                    }}>
                        Iron
                    </ToggleButton>
                    <ToggleButton onClick={() => handleClick('parking')} value="parking" aria-label="justified" sx={{
                        border: filter.parking ? '1px black solid' : '1px #C8C8C8 solid',
                        borderRadius: 5,
                        height: 35
                    }}>
                        Free Parking
                    </ToggleButton>
                    <ToggleButton value="space" aria-label="justified" sx={{
                        border: filter.space ? '1px black solid' : '1px #C8C8C8 solid',
                        borderRadius: 5,
                        height: 35
                    }}>
                        Dedicated space
                    </ToggleButton>
                    <MoreFiltersButton/>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Filter