import { useState } from 'react'
import { Typography, List, ListItem, ListItemText, MenuItem, Menu, Box, TextField } from '@mui/material'



const options = [
    'House',
    'Apartment',
    'Villa',
    'Loft'
];



const Step0 = (props) => {

    const { createProperty, setCreateProperty } = props

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [error1, setError1] = useState(false)
    const [error2, setError2] = useState(false)
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setCreateProperty((current) => ({ ...current, 'property_Type': options[1] }));
        console.log(createProperty);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const titleHandler = (e) => {
        if (e.target.value.length < 6) {
            setError1(true)
        } else {
            console.log("true")
            setError1(false)
            setCreateProperty((current) => ({ ...current, 'name': e.target.value }));
        }
    }

    const NeighbourhoodHandler = (e) => {
        if (e.target.value.length < 6) {
            setError2(true)
        } else {
            console.log("true")
            setError2(false)
            setCreateProperty((current) => ({ ...current, 'neighbourhood_cleansed': e.target.value }));
        }
    }


    return (
        <>
            <Box>
                <Typography variant='h5' component="h5">
                    what kind of place are you listing:
                </Typography>
            </Box>
            <Box>
                <List
                    component="nav"
                    aria-label="Device settings"
                    sx={{ bgcolor: 'background.paper' }}
                >
                    <ListItem
                        button
                        id="lock-button"
                        aria-haspopup="listbox"
                        aria-controls="lock-menu"
                        aria-label="when device is locked"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClickListItem}
                    >
                        <ListItemText
                            primaryTypographyProps={{
                                fontSize: 16,
                                fontWeight: 600,
                                textAlign: 'center'
                            }}
                            secondaryTypographyProps={{
                                fontSize: 16,
                                fontWeight: 600,
                                textAlign: 'center',

                            }}
                            primary="Select your Place Kind"
                            secondary={options[selectedIndex]}
                        />
                    </ListItem>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'lock-button',
                        role: 'listbox',
                    }}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            <Typography variant="subtitle1" component="h5">
                                {option}
                            </Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            <Typography variant='h5' component="h5" marginTop={5}>
                Give an appealing title to your listing:
            </Typography>
            <Box>
                <TextField
                    error={error1}
                    id="standard-basic"
                    label="Title"
                    variant="standard"
                    helperText={error1 ? "Minumum of 6 characters" : ''}
                    onChange={titleHandler}
                    required={true}
                    margin="normal"
                    size="medium"
                    defaultValue={createProperty.name}
                    InputProps={{ style: { fontSize: 16, fontWeight: 400 } }}
                    InputLabelProps={{ style: { fontSize: 14, fontWeight: 400 } }}
                />
            </Box>
            <Box>
                <TextField
                    error={error2}
                    id="standard-basic"
                    label="Neighbourhood"
                    variant="standard"
                    helperText={error2 ? "Minumum of 6 characters" : ''}
                    onChange={NeighbourhoodHandler}
                    required={true}
                    margin="normal"
                    size="medium"
                    defaultValue={createProperty.neighbourhood_cleansed}
                    InputProps={{ style: { fontSize: 16, fontWeight: 400 } }}
                    InputLabelProps={{ style: { fontSize: 14, fontWeight: 400 } }}
                />
            </Box>
        </>

    )
}

export default Step0