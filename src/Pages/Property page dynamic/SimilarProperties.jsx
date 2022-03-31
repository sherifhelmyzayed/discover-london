import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';



const SimilarProperties = () => {

  const navigate = useNavigate();

  const discover = () => {
    navigate("/discover")
  }



  const [randomCardData, SetRandomData] = useState({
    cityCard: '',
    priceCard: 12,
    pictureCard: ''
  })

  const [randomCardData2, SetRandomData2] = useState({
    cityCard: '',
    priceCard: 12,
    pictureCard: ''
  })

  const [randomCardData3, SetRandomData3] = useState({
    cityCard: '',
    priceCard: 12,
    pictureCard: ''
  })

  useEffect(() => {

    const ids = [13760586, 13465532, 13531067, 277011, 4335074]
    const randomNum = Math.floor(Math.random() * ids.length)

    const URL = `https://data.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings%40public&q=&rows=1&facet=id&refine.id=${ids[randomNum]}`
    axios.get(URL).then(response => {
      SetRandomData(prevState => ({
        ...prevState,
        priceCard: response.data.records[0].fields.price,
        pictureCard: response.data.records[0].fields.xl_picture_url, 

      }))

    }).catch(error => {
      console.log(error)
    })
  }, [])

  useEffect(() => {
    const ids = [ 6017649, 13531067, 2461357]

    const randomNum = Math.floor(Math.random() * ids.length)

    const URL = `https://data.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings%40public&q=&rows=1&facet=id&refine.id=${ids[randomNum]}`
    axios.get(URL).then(response => {
      SetRandomData2(prevState => ({
        ...prevState,
        priceCard: response.data.records[0].fields.price,
        pictureCard: response.data.records[0].fields.xl_picture_url
      }))

    }).catch(error => {
      console.log(error)
    })
  }, [])
  useEffect(() => {
    const ids = [9192415, 743788, 13153299, 7890890, 10546343]

    const randomNum = Math.floor(Math.random() * ids.length)

    const URL = `https://data.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings%40public&q=&rows=1&facet=id&refine.id=${ids[randomNum]}`
    axios.get(URL).then(response => {
      SetRandomData3(prevState => ({
        ...prevState,
        priceCard: response.data.records[0].fields.price,
        pictureCard: response.data.records[0].fields.xl_picture_url
      }))

    }).catch(error => {
      console.log(error)
    })
  }, [])





  return (
    <>

      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
        <Box sx={{
          boxShadow: 2, width: '30%', transition: '0.3s', borderRadius: 5, padding: 2, height: '21em', display: 'flex', flexDirection: 'column'
        }}>


          <Box sx={{
            backgroundImage: `url(${randomCardData.pictureCard})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', borderRadius: 2,
            height: '10rem'
          }} mt={3}>
          </Box>

          <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ fontSize: '2.5rem', fontFamily: 'syne', color: '#0c2442' }}>
              {randomCardData.priceCard}

            </Typography>
            <Typography sx={{ fontSize: '0.7rem', fontFamily: 'Montserrat', color: '#0c2442', fontWeight: 500 }}>
              $/Night
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center' }} >

            <Button variant="contained" disableElevation sx=
              {{ width: '60%' }} onClick={discover}>Discover</Button>

          </Box>
        </Box>
        <Box sx={{
          boxShadow: 2, width: '30%', transition: '0.3s', borderRadius: 5, padding: 2, height: '21em', display: 'flex', flexDirection: 'column'
        }}>


          <Box sx={{
            backgroundImage: `url(${randomCardData2.pictureCard})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', borderRadius: 2,
            height: '10rem'
          }} mt={3}>
          </Box>

          <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }} >
            <Typography sx={{ fontSize: '2.5rem', fontFamily: 'syne', color: '#0c2442' }}>
              {randomCardData2.priceCard}

            </Typography>
            <Typography sx={{ fontSize: '0.7rem', fontFamily: 'Montserrat', color: '#0c2442', fontWeight: 500 }}>
              $/Night
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center' }}>

            <Button variant="contained" disableElevation sx=
              {{ width: '60%' }} onClick={discover}>Discover</Button>

          </Box>

        </Box>
        <Box sx={{
          boxShadow: 2, width: '30%', transition: '0.3s', borderRadius: 5, padding: 2, height: '21em', display: 'flex', flexDirection: 'column'
        }}>


          <Box sx={{
            backgroundImage: `url(${randomCardData3.pictureCard})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', borderRadius: 2,
            height: '10rem'
          }} mt={3}>
          </Box>

          <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ fontSize: '2.5rem', fontFamily: 'syne', color: '#0c2442' }}>
              {randomCardData3.priceCard}

            </Typography>
            <Typography sx={{ fontSize: '0.7rem', fontFamily: 'Montserrat', color: '#0c2442', fontWeight: 500 }}>
              $/Night
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center' }}>

            <Button variant="contained" disableElevation sx=
              {{ width: '60%' }} onClick={discover}>Discover</Button>

          </Box>

        </Box>

      </Box>



    </>

  )
}

export default SimilarProperties