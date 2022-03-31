import { useState } from 'react'
import { Typography, Box, TextField } from '@mui/material'

const Step5 = (props) => {

    const {createProperty, setCreateProperty } = props
    const [error2, setError2] = useState(false)



    const summaryhoodHandler = (e) => {
        if (e.target.value.length < 6) {
            setError2(true)
        } else {
            console.log("true")
            setError2(false)
            setCreateProperty((current) => ({ ...current, 'description': e.target.value }));
        }
    }



    return (
        <>
            <Typography variant='h5' component="h5" marginTop={5}>
                Tell us anything the guest needs to know before reservation:
            </Typography>

            <Box sx={{width: "500px"}}>
                <TextField
                    error={error2}
                    id="standard-basic"
                    label="Description"
                    variant="standard"
                    helperText={error2 ? "Minumum of 6 characters" : ''}
                    onChange={summaryhoodHandler}
                    required={true}
                    margin="normal"
                    size="medium"
                    fullWidth={true}
                    defaultValue={createProperty.description}

                    InputProps={{height: '5000px', style: { fontSize: 16, fontWeight: 400 } }}
                    InputLabelProps={{ style: { fontSize: 14, fontWeight: 400 } }}
                    minRows={4}
                    rows={3}
                    maxRows={6}
                />
            </Box>
        </>
    )
}

export default Step5