import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import FormHelperText from '@mui/material/FormHelperText';


export default function PassInput(props) {
      const [showPassword, setShowPassword] = React.useState(false);
  
    
      const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      return ( <FormControl  variant="outlined" fullWidth  size="small">
      <InputLabel htmlFor="outlined-adornment-password">{props.feild}</InputLabel>
      <OutlinedInput
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
         
        error={props.vaild}
        label={props.feild } 
        name={props.name} 
        onChange={props.change}
        onBlur = {props.blur}
        value={props.val}
       
      />
      <FormHelperText error >{props.text }</FormHelperText>
      </FormControl>

      )}
