import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';





const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {

        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default function NumberFilter() {
  return (
    <Box marginY={2}>
      <Grid container spacing={3}  
            direction="row"
            justifyContent="space-around"
            alignItems="center">
        <Grid item xs={10} >
           <Typography  sx={{margin : '10px'  }} variant="subtitle1" component="h5" gutterBottom>
              instant Book
            </Typography>
            <Typography  sx={{margin : '10px' }} variant="headerItem" component="p" gutterBottom>
              Listings you can book without waiting for Host approval
            </Typography>
        </Grid>
        <Grid item alignItems="center"  justifyContent="centflex-starter" xs={2} sx={{display : "flex" , justfiyContent : "flex-end" }}>
        <FormControlLabel
        control={<IOSSwitch  defaultChecked />}
        label=""
      />
           
        </Grid>
    
      </Grid>
    </Box>
  );
}




