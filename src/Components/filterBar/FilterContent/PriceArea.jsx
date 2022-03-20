import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';


export default function PriceArea() {

    const [name, setName] = React.useState('Cat in the Hat');
    const handleChange = (event) => {
      setName(event.target.value);
    };

  return (
    <Card sx={{ maxWidth: '100%' , alignText : 'center', margin :'0px 20px 0 0'}}>
   
      <CardContent>
        <Typography variant="h6" color="secondary" sx={{fontSize :'1rem', marginBottom :'5px' }}>
            The average nightly price is $62
        </Typography>

    <Box 
      component="form"
      autoComplete="off"
    >
       <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">min Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={name}
            onChange={handleChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
            type="number"
            size="small"       
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">max Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={name}
            onChange={handleChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
            type="number"
            size="small"       
          />
        </FormControl>
      
    </Box>

         
      </CardContent>
    </Card>
  
  )}
