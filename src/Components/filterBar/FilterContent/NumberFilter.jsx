import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Typography from '@mui/material/Typography';


export default function NumberFilter() {
  return (
    <Box>
      <Grid container spacing={3}  
            direction="row"
            justifyContent="space-between"
            alignItems="center">
        <Grid item xs={6} >
        <Typography  sx={{margin : '10px' , fontSize : "1.3rem" }} variant="subtitle1" component="h5" gutterBottom>
                   bed
            </Typography>
        </Grid>
        <Grid item alignItems="center"  justifyContent="center" xs={6} sx={{display : "flex" , justfiyContent : "flex-end" }}>
            <IconButton  sx={{border : '1px solid'}} size="small"  variant="outlined">
                <RemoveIcon />
            </IconButton>
            <Typography  sx={{margin : '10px 20px'}} variant="h5" component="h5" gutterBottom>
                    1
            </Typography>
            <IconButton  sx={{border : '1px solid'}} size="small"  variant="outlined">
                <AddIcon />
            </IconButton>
           
        </Grid>
    
      </Grid>
    </Box>
  );
}

