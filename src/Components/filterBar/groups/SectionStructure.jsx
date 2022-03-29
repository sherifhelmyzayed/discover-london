import { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import Slider from '@mui/material/Slider';

const SectionStrucure = () => {
    const [value1, setValue1] = useState([20, 600]);
    const minDistance = 50;
    function valuetext(value) {
        return `${value}°C`;
    }

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };

    return (
        <Box maxHeight={"70%"} padding="20px 20px 0 20px" >
            <Typography padding="  15px 0 10px" variant="h5" component="div">
                Price Range
            </Typography>

            <Typography padding="  15px 0 10px" variant="subtitle3" component="div">
                Average Price in London is $78
            </Typography>

            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={value1}
                onChange={handleChange1}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
                min={20}
                max={600}
            />

            <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                <Typography variant="subtitle1" component="subtitle2">
                    min : ${value1[0]}
                </Typography>
                <Typography variant="subtitle1" component="subtitle2">
                    max : ${value1[1]}
                </Typography>
            </Box>
            <Box sx={{ justifyContent: 'space-between', display: "flex", padding: "  15px 30px 10px 0" }} >
                <Typography variant="clickable2" component="subtitle2" sx={{ cursor: 'pointer' }} onClick={() => { setValue1([20, 600]) }}>
                    clear
                </Typography>
                <Button size="small" variant="contained" color='secondary' sx={{ cursor: 'pointer' }} onClick={() => { setValue1([20, 600]) }} >
                    Save
                </Button>
            </Box>
        </Box>
    )
}
export default SectionStrucure