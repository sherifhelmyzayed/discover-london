import { useState } from 'react';
import { useNavigate } from 'react-router';
import {AppBar, Box, Toolbar, Typography, IconButton, Menu, Container, Avatar, Button, Tooltip, MenuItem} from '@mui/material';
import LogInModal from '../Buttons/form/LogInModal';
import MenuIcon  from '@mui/icons-material/Menu';

let auth = localStorage.getItem('auth')

const pages = ['home', 'inbox', 'reservations', 'listings'];
var settings = [];
if(!auth){
    settings = ['login', 'signup'];

}else{
    settings = ['Profile', 'Logout'];
}


const Header = (props) => {
    const { clickHandler } = props
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [active, setActive] = useState(0);

    let navigate = useNavigate();


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = (e) => {
        if (e === 'Logout') {
            localStorage.clear()
            navigate(`../discover`)

        }
        if (e === 'Profile') {

            navigate(`../user-profile`)

        }
        setAnchorElUser(null);
    };

    const changeRoute = (event) => {
        event.stopPropagation();
        setActive(event.target.getAttribute('id'))
        handleCloseNavMenu()
        navigate(`/dashboard/${event.target.getAttribute('val')}`)
    };

    return (
        <AppBar position="static" color="light" sx={{
            boxShadow: 'none',
            borderBottom: 'solid 1px',
            borderColor: '#ebebeb',
        }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters sx={{
                    minHeight: '10px'
                }}>
                    <Typography
                        variant="subtitle2"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        DASHBOARD
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} val={page} onClick={changeRoute}>
                                    <Typography textAlign="center" variant="subtitle1">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page, key) => (
                            <Button
                                key={page}
                                size="small"
                                onClick={changeRoute}
                                id={key}
                                val={page}
                                marginTop={0} paddingTop={0}
                                sx={{
                                    color: 'grey',
                                    borderBottom: (key == active) ? '1px solid #808080' : 'none',
                                    padding: 0,
                                    margin: 0,
                                    borderRadius: 0,
                                    borderSpacing: 0,

                                }}
                            >
                                <Typography variant="headerItem" component="h3" color="black" id={key} val={page}>
                                    {page}
                                </Typography>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Button onClick={()=>{clickHandler(true)}} size="small" variant="contained" color="primary" sx={{
                            marginRight: 2
                        }}>Add new listing</Button>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={()=>handleCloseUserMenu(setting)}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;