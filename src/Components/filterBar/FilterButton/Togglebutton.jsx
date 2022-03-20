import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Togglebutton(props) {
  const [selected, setSelected] = React.useState(false);
  const [arrow, setArrow] = React.useState(true);

  const icon =  arrow ? <ArrowRightIcon  /> : <ArrowDropDownIcon /> 

  return (
    
    <ToggleButton color="primary" sx={{borderRadius : '1.5rem', padding : '3px 15px' , border: '2px solid',  textTransform: 'capitalize'  }}
      value="check"
      selected={selected}
      onClick = {props.fun}
      onChange={() => {
        setSelected(!selected);
        setArrow(!arrow);
      }}
    >
      {props.name}
      {icon}
    </ToggleButton>

  );
}
