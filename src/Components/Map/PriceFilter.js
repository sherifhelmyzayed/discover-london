import { useState } from 'react'
import { Menu, Fade, Box, Typography, Button, ToggleButton, Slider } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const PriceFilter = (props) => {
  const {priceFilter, setPriceFilter} = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuStyle = {
    width: '450px',
    height: '500px',
    padding: '30px',
  }

  const minDistance = 50;
  function valuetext(value) {
    return `${value}°C`;
  }

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPriceFilter([Math.min(newValue[0], priceFilter[1] - minDistance), priceFilter[1]]);
    } else {
      setPriceFilter([priceFilter[0], Math.max(newValue[1], priceFilter[0] + minDistance)]);
    }
  };

  return (
    <Box>
      <ToggleButton onClick={handleClick} value="cancellation" aria-label="left aligned" sx={{
        border: '1px #C8C8C8 solid',
        borderRadius: 5,
        height: 35
      }}>
        Price <KeyboardArrowDownIcon sx={{
          transform: open ? 'rotate(180deg)' : '',
          transition: 'all ease 0.5s'
        }} />
      </ToggleButton>
      <Menu sx={menuStyle}
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >

        <Box maxHeight={"70%"} padding="20px 20px 0 20px" >
          <Typography padding="  15px 0 10px" variant="h5" component="div">
            Price Range
          </Typography>

          <Typography padding="  15px 0 10px" variant="subtitle3" component="div">
            Average Price in London is $78
          </Typography>

          <Slider
            getAriaLabel={() => 'Minimum distance'}
            value={priceFilter}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
            min={20}
            max={600}
          />

          <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
            <Typography variant="subtitle1" component="subtitle2">
              min : ${priceFilter[0]}
            </Typography>
            <Typography variant="subtitle1" component="subtitle2">
              max : ${priceFilter[1]}
            </Typography>
          </Box>
          {/* <Box sx={{ justifyContent: 'space-between', display: "flex", padding: "  15px 30px 10px 0" }} >
            <Typography variant="clickable2" component="subtitle2" sx={{ cursor: 'pointer' }} onClick={() => { setPriceFilter([20, 600]) }}>
              clear
            </Typography>
            <Button size="small" variant="contained" color='secondary' sx={{ cursor: 'pointer' }} onClick={() => { setPriceFilter([20, 600]) }} >
              Save
            </Button>
          </Box> */}
        </Box>

      </Menu>
    </Box>
  );
}

export default PriceFilter