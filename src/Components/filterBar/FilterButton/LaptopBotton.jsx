import * as React from 'react';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import SectionStrucure from '../groups/SectionStructure';
import Togglebutton from './Togglebutton';

export default function LaptopBotton(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuStyle = { width : '450px' , height : '500px',
                     padding : '30px' , 
}

  return (
    <Box>

      <div onClick={handleClick}>
          < Togglebutton  name={props.name}/>
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
         <SectionStrucure  name={props.name} />
       
      </Menu>
    </Box>
  );
}
