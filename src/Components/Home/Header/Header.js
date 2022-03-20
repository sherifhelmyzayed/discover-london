import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { headerLayout } from './headerStyle';
import { contantS } from './headerStyle';
import { container } from './headerStyle';
import { H1 } from './headerStyle' ;
import { H3 } from './headerStyle';
import { p } from './headerStyle';
import { icon } from './headerStyle';
import { sectionOne } from './headerStyle';
import { sectionTwo } from './headerStyle';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ArrowDownIcon from '@mui/icons-material/ArrowDownwardOutlined';

 const Header= ()=>{
     
    return <Box sx={headerLayout} >
     
                  <Container  sx={container} >
                      <Box sx={contantS}>
                         <aside></aside>
                          <Box sx={sectionOne}>
                                <Typography sx={H1} fontWeightBold variant="h1" component="h1" gutterBottom>
                                   innvetation 
                                   <br />
                                   holds the key
                                 </Typography>
                                 <Typography sx={H3} fontWeightBold variant="subtitle1" component="h3" gutterBottom>
                                  Providing uniqu & pricless experience 
                                 </Typography>
                          </Box>
                          <Box sx={sectionTwo}>
                              <Typography sx={p}  variant="p" component="p" gutterBottom>
                                   how we make difference 
                              </Typography>

                              <Avatar sx={icon}>
                                <ArrowDownIcon />
                              </Avatar>

                          </Box>
                      </Box>
                   </Container >         
           </Box>
    
}

export default Header