import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Tooltip ,Box  } from '@mui/material';


const ProfileIcon = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center'
        }}>
        <Tooltip title="Profile">
            <AccountBoxIcon sx={{
                color: 'white',
                fontSize: 35,
                cursor: 'pointer',
                marginLeft:2,

            }} />
        </Tooltip>
        </Box>
    )
}

export default ProfileIcon