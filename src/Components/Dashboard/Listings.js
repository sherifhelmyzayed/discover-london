import React, {useState , useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';
import { Card, Box, CardContent, Typography, Grid, Divider } from '@material-ui/core'
import StarIcon from '@mui/icons-material/Star';
import CircularProgress from '@mui/material/CircularProgress';
import { typography } from '@mui/system';
import { Button } from '@mui/material';


const Listings = () => {
  const [list,setList]= useState([])
  useEffect(()=>{

    axios.get(`http://localhost:4000/list/host/62437c78ba23545b6c3c946d`).then((res) => {
      console.log(res.data)
      setList(res.data)

  })
  },[])



  console.log(list)
  


  
  return (
    <>
            {(list) ? (list.map((listing, key) => (
                <>
                
                    <Box sx={{ cursor: "pointer" }} >
                        <Card sx={{ display: 'flex', width: '100%', margin: 50 }} >
                            <Grid container spacing={3} >
                                <Grid item md={3}>
                                    <Box sx={{
                                        height: 160,
                                        margin: "30px 10px",
                                        backgroundImage: `url("https://wpcdn.alaan.tv/akhbar/2018/11/21/14/15/51358019000000_original.jpg")`,
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
                                                    {listing.neighbourhood_cleansed}
                                                </Typography>
                                                <Typography variant="h6" color="text.secondary" component="div">
                                                    {listing.name}
                                                </Typography>
                                                <Typography component="div" variant="caption">
                                                    {listing.accommodates} guests - {listing.bedrooms} bedroom - {listing.beds} bed - {listing.bathrooms} bathrooms
                                                </Typography>
                                                <Typography component="div" variant="caption">
                                                    {
                                                        (listing.amenities.length > 100) ? (
                                                            listing.amenities.substring(0, 100).concat(" ...etc")
                                                        ) : listing.amenities
                                                    }
                                                </Typography>

                                            </Box>
                                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                                <Box display="flex" justifyContent="center" alignItems="center">
                                                    <StarIcon color="primary" fontSize="medium" sx={{ marginRight: 1, marginTop: 0, color: "red" }} />
                                                    <Typography variant="subtitle2" marginLeft={3}>{
                                                        (listing.review_scores_rating > 0) ? (
                                                            listing.review_scores_rating / 20
                                                        ) : 0
                                                    } ({listing.number_of_reviews} reviews)</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="subtitle1" display="inline">${listing.price}</Typography>
                                                    <Typography variant="caption" display="inline"> / night</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Grid>
                                <Grid item md={2}>
                                <Button  size="small" variant="contained" color="primary" sx={{
                                 marginRight: 2,
                                 marginTop:10,
                                 padding : 1
                                }}>Edit</Button> <br/>
                                <Button  size="small" variant="contained" color="error" sx={{
                                 marginRight: 2,
                                 marginTop:5,
                                 padding : 1


                                }}>delet</Button>
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

export default Listings