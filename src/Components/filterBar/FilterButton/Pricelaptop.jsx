import * as React from 'react';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import PriceArea from '../FilterContent/PriceArea';
import Togglebutton from './Togglebutton';

export default function PriceLaptop() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuStyle = { width : '450px' , height : '500px',
                     padding : '30px'
}

  return (
    <div>

      <div onClick={handleClick}>
          < Togglebutton  name="Price"/>
       </div>
      <Menu sx = {menuStyle}
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <PriceArea />
      </Menu>
    </div>
  );
}
