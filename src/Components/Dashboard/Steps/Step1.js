import { Box, Typography, Divider, Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const Step1 = (props) => {

    const { createProperty, setCreateProperty } = props

    const filterStyle = {
        maxHeight: "60vh", padding: "20px 10px",
        overflowY: 'hidden', overflowX: 'hidden',
    }


    const decrement = (e) => {
        console.log(e + createProperty)
        setCreateProperty((current) => ({ ...current, [e]: createProperty[e] - 1 }))
    }

    const increment = (e) => {
        setCreateProperty((current) => ({ ...current, [e]: (createProperty[e] < 5) ? createProperty[e] + 1 : 5 }))
    }


    return (
        <>

            <Box sx={filterStyle}>
                <Box>
                    <Typography variant="h5" component="div" marginBottom={5}>
                        check that you habe enough beds to accommodate all your guests comfortably
                    </Typography>
                    <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
                    <Box>
                        <Grid container spacing={3}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center">
                            <Grid item xs={6} >
                                <Typography sx={{ margin: '10px', fontSize: "1.3rem" }} variant="subtitle1" component="h5" gutterBottom>
                                    Beds
                                </Typography>
                            </Grid>
                            <Grid item display="flex" alignItems="center" justifyContent="end" xs={6}>
                                {createProperty.guests_included !== 0 ? (
                                    <IconButton sx={{ border: '1px solid', width: '20px', height: '20px' }} size="small" variant="outlined" onClick={() => { decrement('guests_included') }}>
                                        <RemoveIcon sx={{ width: '15px' }} />
                                    </IconButton>
                                ) : ''}
                                <Typography sx={{ margin: '0 8px 0 8px !important', padding: 0 }} variant="subtitle3" component="h5" gutterBottom>
                                    {createProperty.guests_included}
                                </Typography>
                                <IconButton sx={{ border: '1px solid', width: '20px', height: '20px' }} size="small" variant="outlined" onClick={() => { increment('guests_included') }}>
                                    <AddIcon sx={{ width: '15px' }} />
                                </IconButton>
                            </Grid>

                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={3}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center">
                            <Grid item xs={6} >
                                <Typography sx={{ margin: '10px', fontSize: "1.3rem" }} variant="subtitle1" component="h5" gutterBottom>
                                    Bedrooms
                                </Typography>
                            </Grid>
                            <Grid item display="flex" alignItems="center" justifyContent="end" xs={6}>
                                {createProperty.bedrooms !== 0 ? (
                                    <IconButton sx={{ border: '1px solid', width: '20px', height: '20px' }} size="small" variant="outlined" onClick={() => { decrement('bedrooms') }}>
                                        <RemoveIcon sx={{ width: '15px' }} />
                                    </IconButton>
                                ) : ''}
                                <Typography sx={{ margin: '0 8px 0 8px !important', padding: 0 }} variant="subtitle3" component="h5" gutterBottom>
                                    {createProperty.bedrooms}
                                </Typography>
                                <IconButton sx={{ border: '1px solid', width: '20px', height: '20px' }} size="small" variant="outlined" onClick={() => { increment('bedrooms') }}>
                                    <AddIcon sx={{ width: '15px' }} />
                                </IconButton>
                            </Grid>

                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={3}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center">
                            <Grid item xs={6} >
                                <Typography sx={{ margin: '10px', fontSize: "1.3rem" }} variant="subtitle1" component="h5" gutterBottom>
                                    Bathrooms
                                </Typography>
                            </Grid>
                            <Grid item display="flex" alignItems="center" justifyContent="end" xs={6}>
                                {createProperty.bathrooms !== 0 ? (
                                    <IconButton sx={{ border: '1px solid', width: '20px', height: '20px' }} size="small" variant="outlined" onClick={() => { decrement('bathrooms') }}>
                                        <RemoveIcon sx={{ width: '15px' }} />
                                    </IconButton>
                                ) : ''}
                                <Typography sx={{ margin: '0 8px 0 8px !important', padding: 0 }} variant="subtitle3" component="h5" gutterBottom>
                                    {createProperty.bathrooms}
                                </Typography>
                                <IconButton sx={{ border: '1px solid', width: '20px', height: '20px' }} size="small" variant="outlined" onClick={() => { increment('bathrooms') }}>
                                    <AddIcon sx={{ width: '15px' }} />
                                </IconButton>
                            </Grid>

                        </Grid>
                    </Box>
                    <Divider />
                </Box>
            </Box>

        </>

    )
}

export default Step1