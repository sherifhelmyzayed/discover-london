import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Tooltip ,Box  } from '@mui/material';
import { useNavigate  } from "react-router-dom";
import LogInModal from '../Buttons/form/LogInModal';
import { Link } from 'react-router-dom'


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
            <Button color="white" variant="oulLine" fullWidth>
                <Link to="/Log-In" style={{ color : "black",  textDecoration :"none" }} > 
                   Log In
                </Link>
            </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          
            <Button color="white" variant="oulLine" fullWidth>
                <Link to="/sign-up" style={{ color : "black",  textDecoration :"none" }} > 
                   sign up 
                </Link>
            </Button>
          </MenuItem>
      </Menu>
      
        </Box>
    )
}

export default ProfileIcon