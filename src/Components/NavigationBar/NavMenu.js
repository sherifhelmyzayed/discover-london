import React from 'react';

import { Box, Button, Menu, MenuItem } from '@mui/material';

export default function BasicMenu() {
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
                <Box sx={{
                    width: 27,
                    height: 22,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    <Box sx={{ background: 'white', width: '100%', height: 2, borderRadius: 10, marginLeft: 'auto', marginRight: 0 }}> </Box>
                    <Box sx={{ background: 'white', width: '75%', height: 2, borderRadius: 10, marginLeft: 'auto', marginRight: 0 }}> </Box>
                    <Box sx={{ background: 'white', width: '50%', height: 2, borderRadius: 10, marginLeft: 'auto', marginRight: 0 }}> </Box>
                </Box>
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
                <MenuItem onClick={handleClose}>About</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
                <MenuItem onClick={handleClose}>FAQ</MenuItem>
            </Menu>
        </Box>
    );
}