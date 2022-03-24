import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function FAQ() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const pos = {
      position : 'fixed',
      top: '92%',
      right: '5%',
      height:'60px',
      width : '60px',
      borderRadius:'50%'
  }
  return (
    <><Button style={pos} aria-describedby={id} variant="contained" onClick={handleClick}>
          FAQ
      </Button>
      <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 770, left: 1525 }}
          anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
          }}
      >
              <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
              <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
          </Popover></>
  

  )
}
