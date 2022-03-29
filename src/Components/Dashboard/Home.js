import React, { useState, useEffect,useContext } from 'react'
import { Box, Card, Typography } from '@mui/material'
import PerformanceGraph from './PerformanceGraph'
import ButtonSmall from '../Buttons/ButtonSmall'

import KeyIcon from '@mui/icons-material/Key';
import KeyOffIcon from '@mui/icons-material/KeyOff';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import StarIcon from '@mui/icons-material/Star';
import { DashboardContext } from '../../module/DashboardModule';
// import {longSummary, dailySummary} from '../../shared/Data';

const Home = () => {
  // daily stat buttons states
  const {longSummary, dailySummary} = useContext(DashboardContext)
  const [active, setActive] = useState(0)
  const [stat, setStat] = useState({ checkin: 0, checkout: 0, trips: 0, pendingReviews: 0 })

  // performance buttons states
  const [perActive, setPerActive] = useState(2)
  const [perStat, setPerStat] = useState(null)


  // daily stat buttons handler
  const subButtonHandler = (e) => {
    setActive(parseFloat(e.target.getAttribute('id')))
  }
 
  
  useEffect(() => {
    if (dailySummary[0]) {

      const data = (active === 0)
      ? dailySummary[0].today
      : (active === 1)
      ? dailySummary[0].tomorrow
      : (active === 2)
      ? dailySummary[0].week
      : '';
      
      setStat(data)
    }
  }, [active]);



  // performance buttons handler
  const perButtonHandler = (e) => {
    setPerActive(parseFloat(e.target.getAttribute('id')))
  }

  useEffect(() => {
    if (longSummary[0]) {
      const dataPer = (perActive === 0)
        ? longSummary[0].week
        : (perActive === 1)
          ? longSummary[0].month
          : (perActive === 2)
            ? longSummary[0].year
            : '';
  
      setPerStat(dataPer)
    }

  }, [perActive, longSummary]);


  return (
    
    <Box maxWidth={800} marginX="auto" marginTop={5}>
      <Box container justifyContent="space-between" alignItems="center" display='flex' direction="row" wrap="no-wrap"
      >
        <Typography variant="h5" component="h2" display="inline">What is happening today</Typography>
        <Box>
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
            <Typography variant='h1' display="inline" marginLeft={2} marginTop={0} component="h6">{stat.checkin}</Typography>
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
            <Typography variant='h1' display="inline" marginLeft={2} marginTop={0} component="h6">{stat.checkout}</Typography>
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
            <Typography variant='h1' display="inline" marginLeft={2} marginTop={0} component="h6">{stat.trips}</Typography>
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
            <Typography variant='h1' display="inline" marginLeft={2} marginTop={0} component="h6">{stat.pendingReviews}</Typography>
          </Box>
          <Box margin={2}>
            <Typography variant="subtitle2" component="p" textAlign="center">Pending Reviews</Typography>
          </Box>
        </Card >
      </Box>

      <Box container justifyContent="space-between" alignItems="center" display='flex' direction="row" wrap="no-wrap"
      >
        <Typography variant="h5" component="h2" display="inline">Performance</Typography>
        <Box>
          <ButtonSmall text="Last 7 days" active={perActive === 0} clickHandler={perButtonHandler} id={0}></ButtonSmall>
          <ButtonSmall text="Last 30 Days" active={perActive === 1} clickHandler={perButtonHandler} id={1}></ButtonSmall>
          <ButtonSmall text="Last Year" active={perActive === 2} clickHandler={perButtonHandler} id={2}></ButtonSmall>
        </Box>
      </Box>
        <PerformanceGraph charData={perStat} stat={perActive} />
    </Box>
  )
}

export default Home