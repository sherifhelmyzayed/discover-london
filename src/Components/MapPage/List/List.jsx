import { CircularProgress, FormControl, Grid, InputLabel, MenuItem, Typography, Select } from '@material-ui/core'
import React, { useState } from 'react'
import PropertyDetails from '../PropertyDetails/PropertyDetails'
import useStyles from './style'

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const places = [
    { name: 'Cool Places' },
    { name: 'Best Burger' },
    { name: 'Best Pub' },
    { name: 'Cool Places' },
    { name: 'Best Burger' },
    { name: 'Best Pub' },
    { name: 'Cool Places' },
    { name: 'Best Burger' },
    { name: 'Best Pub' },
  ]

  return (
    <>
      <div className={classes.container}>
        <Typography variant="h4">Resturants,Hotels & Attractions around you</Typography>
        <FormControl className={classes.formControl}>
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Hotels</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel>Rating</InputLabel>
          <Select value={rating} onChange={(e) => setRating(e.target.value)}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>

          </Select>
        </FormControl>
        <Grid container spacing={3} className={classes.list}>
          {places?.map((place, i) => (
            <Grid item key={i} xs={12}>

              <PropertyDetails place={place} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default List