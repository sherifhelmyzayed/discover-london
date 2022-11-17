import { useState } from 'react';
import {AppBar, Box, Toolbar, Typography, IconButton, Menu, Container, Avatar, Button, Tooltip, MenuItem} from '@mui/material';
import MenuIcon  from '@mui/icons-material/Menu';


const pages = ['home', 'discover'];

const settings = [(localStorage.token) ? 'Profile' : '', (localStorage.token) ? 'Logout' : 'Login', (localStorage.token) ? 'Dashboard' : ''];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [active, setActive] = useState(1);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const changeRoute = (event) => {
        event.stopPropagation();
        setActive(event.target.getAttribute('id'))
        handleCloseNavMenu()
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
                        discover LONDON
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
                        DISCOVER LONDON
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page, key) => (
                            <Button
                                key={page}
                                size="small"
                                onClick={changeRoute}
                                id={key}
                                val={page}
                                margintop={0} paddingtop={0}
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
                        <Button size="small" variant="contained" color="primary" sx={{
                            marginRight: 2
                        }}>BECOME A HOST</Button>
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
                        >
                            {settings.map((setting,i) => (
                                <MenuItem key={i} >
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