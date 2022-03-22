import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { useMediaQuery } from 'react-responsive'
import MobileGroup from "../Components/filterBar/groups/MobileGroup"
import TabletGroup from "../Components/filterBar/groups/TabletGroup"


// bar Handel
function HideOnScroll(props) {
  
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });  
  
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>    
  );
}  

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

// media queiry handel

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

// 

const FilterBar = ()=>{
  

  
  

return  <>

              <CssBaseline />
              <HideOnScroll >
                <AppBar sx={{background : "white" }} >
                  <Toolbar>
                         <Tablet>
                            <TabletGroup />
                         </Tablet>
                         <Mobile>
                             <MobileGroup />
                         </Mobile>
                  </Toolbar>  
                </AppBar>  
              </HideOnScroll>  
              <Toolbar />       
            
           </>              
}

export default FilterBar 



   


