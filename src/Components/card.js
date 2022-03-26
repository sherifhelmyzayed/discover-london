import React, { useState, useEffect } from 'react'
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import lap from '../assets/bgLap.jpg'
import cairo from '../data/test.js'
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';




export default function MediaCard() {


  return (<>
    {cairo.map((el) => {
      return (<>
        <Paper sx={{ marginTop: "15px" }}>
          <Box sx={{ width: '100%', columnGap: 3 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
              <Grid item xs={6}>
                <CardMedia
                  component="img"
                  height="250"
                  padding="20px"
                  image={lap}
                  alt="green iguana"
                />
              </Grid>
              <Grid item xs={6}>
                <h3>{el.name}</h3>
                <br></br>
                <p>{el.description}</p>
                <br></br>

                <Button variant="contained" sx={{ margin: "10px" }} >Share</Button>
                <Button variant="contained" >Learn More</Button>


              </Grid>
            </Grid>
          </Box>
        </Paper>
      </>)
    })}

  </>)
}

