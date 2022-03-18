import React, { useState } from 'react'
import { Box, Card, Typography } from '@mui/material'
import PerformanceGraph from './PerformanceGraph'
import ButtonSmall from '../Buttons/ButtonSmall'

import KeyIcon from '@mui/icons-material/Key';
import KeyOffIcon from '@mui/icons-material/KeyOff';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import StarIcon from '@mui/icons-material/Star';


const Home = () => {
  const [active, setActive] = useState(0)
  const subButtonHandler = (e) => {
    setActive(parseFloat(e.target.getAttribute('id')))
  }
  return (
    <Box maxWidth={800} marginX="auto" marginTop={5}>
      <Box container justifyContent="center" alignItems="center"
        direction="row"
      >
        <Typography variant="h5" component="h2" display="inline">What is happening today</Typography>
        <Box display="inline" marginX="auto">
          <ButtonSmall display="inline" text="Today" active={active === 0} clickHandler={subButtonHandler} id={0}></ButtonSmall>
          <ButtonSmall text="Tomorrow" active={active === 1} clickHandler={subButtonHandler} id={1}></ButtonSmall>
          <ButtonSmall text="Next 7 Days" active={active === 2} clickHandler={subButtonHandler} id={2}></ButtonSmall>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          paddingY: 5
        }}
      >
        <Card variant="outlined" elevation={2} sx={{
          marginX: 2,
          width: '120px'
        }}>
          <Box margin={2} sx={{
            display: 'flex',
            justifyContent: "center",
            alignItems: "center"
          }}>
            <KeyIcon display="inline" marginTop={3} />
            <Typography variant='h1' display="inline" marginLeft={2} marginTop={0} component="h6">0</Typography>
          </Box>
          <Box margin={2}>
            <Typography variant="subtitle2" component="p" textAlign="center">Check-ins</Typography>
          </Box>
        </Card >

        <Card variant="outlined" sx={{
          marginX: 2,

          width: '120px'
        }}>
          <Box margin={2} sx={{
            display: 'flex',
            justifyContent: "center",
            alignItems: "center"
          }}>
            <KeyOffIcon display="inline" marginTop={3} />
            <Typography variant='h1' display="inline" marginLeft={2} marginTop={0} component="h6">0</Typography>
          </Box>
          <Box margin={2}>
            <Typography variant="subtitle2" component="p" textAlign="center">Check-ins</Typography>
          </Box>
        </Card >

        <Card variant="outlined" sx={{
          marginX: 2,
          width: '120px'
        }}>
          <Box margin={2} sx={{
            display: 'flex',
            justifyContent: "center",
            alignItems: "center"
          }}>
            <BusinessCenterIcon display="inline" marginTop={3} />
            <Typography variant='h1' display="inline" marginLeft={2} marginTop={0} component="h6">4</Typography>
          </Box>
          <Box margin={2}>
            <Typography variant="subtitle2" component="p" textAlign="center">Trips in Progress</Typography>
          </Box>
        </Card >

        <Card variant="outlined" sx={{
          marginX: 2,
          width: '120px'
        }}>
          <Box margin={2} sx={{
            display: 'flex',
            justifyContent: "center",
            alignItems: "center"
          }}>
            <StarIcon display="inline" marginTop={3} />
            <Typography variant='h1' display="inline" marginLeft={2} marginTop={0} component="h6">3</Typography>
          </Box>
          <Box margin={2}>
            <Typography variant="subtitle2" component="p" textAlign="center">Pending Reviews</Typography>
          </Box>
        </Card >
      </Box>

      <Box>
        <Typography variant="h5" component="h2" display="inline">Performance</Typography>
      </Box>
      <PerformanceGraph />
    </Box>
  )
}

export default Home