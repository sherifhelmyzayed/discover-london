import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Tooltip ,Box  } from '@mui/material';
import { useNavigate  } from "react-router-dom";
import Modal from '../Buttons/form/Modal';


const ProfileIcon = () => {
    let nav = useNavigate ();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center'
        }}>
             <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <Tooltip title="Profile">
            <AccountBoxIcon sx={{
                color: 'white',
                fontSize: 35,
                cursor: 'pointer',
                marginLeft:2,

            }} />
        </Tooltip>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
        <MenuItem style={{zIndex:'0'}}>
        <Modal/>
        </MenuItem>
        <MenuItem onClick={handleClose}>sign Up</MenuItem>
      </Menu>
        
        </Box>
    )
}

export default ProfileIcon