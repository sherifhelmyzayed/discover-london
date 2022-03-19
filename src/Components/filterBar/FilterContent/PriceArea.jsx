import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default function PriceArea() {

    const [name, setName] = React.useState('Cat in the Hat');
    const handleChange = (event) => {
      setName(event.target.value);
    };

  return (
    <Card sx={{ maxWidth: '100%' , alignText : 'center', margin :'0px 0'}}>
   
      <CardContent>
        <Typography sx={{ maxWidth: { xs :'100%', md : '350px' }}}   variant="h5" component="div">
          Price renge
        </Typography>
        <Divider  />
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
      <CardActions sx={{ justifyContent:'space-around'}} >
      <Button size="small" variant="outlined" startIcon={<DeleteIcon />}>
        clear
      </Button>
      <Button size="small" variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      </CardActions>
    </Card>
  
  )}
