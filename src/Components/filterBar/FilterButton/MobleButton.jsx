import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Togglebutton from './Togglebutton';
import SectionStrucure from '../groups/SectionStructure';
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
          
          <SectionStrucure  name={props.name} />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
    </>
  );
}


export default MobleButton;
