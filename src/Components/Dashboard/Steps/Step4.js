import { useState } from 'react';
import { Box, Typography, Divider, Grid, Checkbox, FormControlLabel, FormGroup, Button } from '@mui/material';

const filterStyle = {

    maxHeight: "60vh", padding: "20px 10px",
    overflowY: 'hidden', overflowX: 'hidden',
 }
 const amenitiesMore = [
    'House', 'Apartment', 'Loft', 'Villa'
 ]




const Step4 = (props) => {
    const { createProperty, setCreateProperty } = props

    const [arr, setArr] = useState(false)

    const handleCheckBox = (e, item) => {
        // setCreateProperty((current) => ({ ...current, [item]: { ...createProperty[item], [e]: !createProperty[item][e] } }))
        console.log(arr)

        setArr(e)
        console.log(arr)
     }
    
    

    return (
        <Box sx={filterStyle}>
            <Box >
                <Box sx={{ margin: '15px 0' }}>
                    <Typography variant="h5" component="div">
                        Property Type
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                        Select amenities your property have
                    </Typography>
                    <Box sx={{ width: '100%', padding: '15px 15px 0 15px ' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {
                                amenitiesMore.map((item) => {
                                    return (
                                        <Grid item xs={12} md={6}>
                                            <FormGroup>
                                                <FormControlLabel control={<Checkbox onClick={() => { handleCheckBox(item, 'property') }} checked={
                                                    // createProperty.amenities[item]
                                                    false
                                                    } />} label={item} />
                                            </FormGroup>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                    <Divider />
                </Box>
            </Box>
        </Box>
        )
}

export default Step4