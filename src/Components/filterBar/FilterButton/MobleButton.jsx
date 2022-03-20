import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import PriceArea from "../FilterContent/PriceArea"
import Togglebutton from './Togglebutton';
import FilterContant from '../FilterContent/FilterContent';
const drawerBleeding = 0;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));



function MobleButton(props) {
  let componant = null
  if (props.name === "price"){
      componant =  <PriceArea />
  }
  else if (props.name === 'typePlace'){
       componant = 'tyoe'
  }
  else if (props.name ==='filter' ){
      componant = <FilterContant />
  }
  else {componant = null }
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  return (<>
        <div onClick={toggleDrawer(true)}>
          < Togglebutton  name={props.name} />
       </div>
    <Root>
      
      <CssBaseline />
      
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >

        <StyledBox
          sx={{
            px: 2,        
            height: '100%',
            overflow: 'auto',
          }}
        >
          
           {componant}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
    </>
  );
}


export default MobleButton;
