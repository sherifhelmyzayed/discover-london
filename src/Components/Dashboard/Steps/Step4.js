import { useState } from 'react';
import { Box, Typography, Divider, Grid, Checkbox, FormControlLabel, FormGroup, Button } from '@mui/material';

const filterStyle = {

    maxHeight: "60vh", padding: "20px 10px",
    overflowY: 'hidden', overflowX: 'hidden',
 }
 const amenitiesMore = [
    'Iron', 'Parking', 'Washer', 'Internet', 'Air conditioning', 'TV'
 ]


const Step4 = (props) => {
    const { createProperty, setCreateProperty } = props

    const [arr, setArr] = useState(['Apartment'])

    const handleCheckBox = (e) => {
        let arra = [...createProperty.amenities]
        if (arra.includes(e)) {
            console.log(arra)
            let newArr = arra.filter((el)=>(el!==e))
            console.log(newArr)
            setCreateProperty((current) => ({ ...current, "amenities": newArr }));     
        }
        else {
            // setCreateProperty.amenities([...arr, e])
            setCreateProperty((current) => ({ ...current, "amenities": [...arra, e] }));              

        }
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
                                                    createProperty.amenities.includes(item)
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