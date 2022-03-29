import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';


export default function CheckFilter(props) {
  const item = props.arr
  return (
    <Box sx={{ width: '100%', paddingTop: '15px' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
          item.map((el) => {
            return (<Grid item xs={12} md={6}>
              <Grid container>
                <Grid item xs={10} >
                  <Typography sx={{ margin: '0 20px ' }}
                    variant="subtitle1"
                    component="p" gutterBottom>
                    {el}
                  </Typography>
                </Grid>
                <Grid item xs={2} >
                  <Checkbox />
                </Grid>
              </Grid>
            </Grid>
            )
          })
        }

      </Grid>
    </Box>
  );
}



