import { useState } from 'react'
import { Typography, List, ListItem, ListItemText, IconButton, InputAdornment, Box, TextField } from '@mui/material'



const options = [
    'House',
    'Apartment',
    'Villa',
    'Loft'
];



const Step0 = (props) => {

    const { createProperty, setCreateProperty } = props
    const [error1, setError1] = useState(false)
    const [error2, setError2] = useState(false)

    const cityHandler = (e) => {
        if (e.target.value.length < 2) {
            setError1(true)
        } else {
            console.log("true")
            setError1(false)
            setCreateProperty((current) => ({ ...current, 'city': e.target.value }));
        }
    }

    const summaryhoodHandler = (e) => {
        if (e.target.value.length < 6) {
            setError2(true)
        } else {
            setError2(false)
            setCreateProperty((current) => ({ ...current, 'summary': e.target.value }));
        }
    }

    const priceHandler = (e) => {
            setCreateProperty((current) => ({ ...current, 'price': e.target.value }));
    }


    return (
        <>


            <Typography variant='h5' component="h5" marginTop={5}>
                Tell us more about your property:
            </Typography>
            <Box>
                <TextField
                    error={error1}
                    id="standard-basic"
                    label="City"
                    variant="standard"
                    helperText={error1 ? "Minumum of 2 characters" : ''}
                    onChange={cityHandler}
                    required={true}
                    defaultValue={createProperty.city}

                    margin="normal"
                    size="medium"
                    InputProps={{ style: { fontSize: 16, fontWeight: 400 } }}
                    InputLabelProps={{ style: { fontSize: 14, fontWeight: 400 } }}
                />
            </Box>
            <Box>
                <TextField
                    error={error2}
                    id="standard-basic"
                    label="Summary"
                    variant="standard"
                    helperText={error2 ? "Minumum of 6 characters" : ''}
                    onChange={summaryhoodHandler}
                    required={true}
                    margin="normal"
                    defaultValue={createProperty.summary}

                    size="medium"
                    InputProps={{ style: { fontSize: 16, fontWeight: 400 } }}
                    InputLabelProps={{ style: { fontSize: 14, fontWeight: 400 } }}
                />
            </Box>
            <Box>
                <TextField
                    id="standard-basic"
                    label="Price Per night"
                    variant="standard"
                    onChange={priceHandler}
                    required={true}
                    margin="normal"
                    size="medium"
                    defaultValue={createProperty.price}

                    type='number'
                    InputProps={{ style: { fontSize: 16, fontWeight: 400, startAdornment: <InputAdornment position="start">kgsss</InputAdornment>, } }}
                    InputLabelProps={{ style: { fontSize: 14, fontWeight: 400 } }}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                            >
                                ss
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </Box>

        </>

    )
}

export default Step0