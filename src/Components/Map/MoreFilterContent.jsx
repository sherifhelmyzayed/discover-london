import { useState } from 'react';
import { Box, Typography, Divider, Grid, Checkbox, IconButton, FormControlLabel, FormGroup, Button } from '@mui/material';
import SwichFilter from '../filterBar/FilterContent/SwichFilter'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const MoreFilterContent = () => {
   const filterStyle = {
      maxHeight: "60vh", padding: "20px 10px",
      overflowY: 'scroll', overflowX: 'hidden',
   }
   const amenitiesMore = [{
      title: "Host language",
      item: ['English', 'French', 'German', 'Italian']
   }, {
      title: "Property Type",
      item: ['House', 'Apartment', 'Loft', 'Villa']
   }]

   const [filter, setFilters] = useState({
      beds: 1,
      bedrooms: 1,
      bathrooms: 1,
      property: {
         House: true,
         Apartment: false,
         Loft: false,
         Villa: false
      },
      language: {
         English: true,
         French: false,
         German: false,
         Italian: false
      }
   })


   const handleCheckBox = (e, item) => {
      setFilters((current) => ({ ...current, [item]: { ...filter[item], [e]: !filter[item][e] } }))
   }


   const decrement = (e) => {
      setFilters((current) => ({ ...current, [e]: filter[e] - 1 }))
   }

   const increment = (e) => {
      setFilters((current) => ({ ...current, [e]: (filter[e] < 5) ? filter[e] + 1 : 5 }))
   }

   return (
      <Box sx={filterStyle}>
         <Box  >
            <Typography variant="h5" component="div" marginBottom={5}>
               More Filters
            </Typography>
            <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
            <Box>
               <Grid container spacing={3}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center">
                  <Grid item xs={6} >
                     <Typography sx={{ margin: '10px', fontSize: "1.3rem" }} variant="subtitle1" component="h5" gutterBottom>
                        Beds
                     </Typography>
                  </Grid>
                  <Grid item display="flex" alignItems="center" justifyContent="end" xs={6}>
                     {filter.beds !== 0 ? (
                        <IconButton sx={{ border: '1px solid', width: '20px', height: '20px' }} size="small" variant="outlined" onClick={() => { decrement('beds') }}>
                           <RemoveIcon sx={{ width: '15px' }} />
                        </IconButton>
                     ) : ''}
                     <Typography sx={{ margin: '0 8px 0 8px !important', padding: 0 }} variant="subtitle3" component="h5" gutterBottom>
                        {filter.beds}
                     </Typography>
                     <IconButton sx={{ border: '1px solid', width: '20px', height: '20px' }} size="small" variant="outlined" onClick={() => { increment('beds') }}>
                        <AddIcon sx={{ width: '15px' }} />
                     </IconButton>
                  </Grid>

               </Grid>
            </Box>
            <Box>
               <Grid container spacing={3}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center">
                  <Grid item xs={6} >
                     <Typography sx={{ margin: '10px', fontSize: "1.3rem" }} variant="subtitle1" component="h5" gutterBottom>
                        Bedrooms
                     </Typography>
                  </Grid>
                  <Grid item display="flex" alignItems="center" justifyContent="end" xs={6}>
                     {filter.bedrooms !== 0 ? (
                        <IconButton sx={{ border: '1px solid', width: '20px', height: '20px' }} size="small" variant="outlined" onClick={() => { decrement('bedrooms') }}>
                           <RemoveIcon sx={{ width: '15px' }} />
                        </IconButton>
                     ) : ''}
                     <Typography sx={{ margin: '0 8px 0 8px !important', padding: 0 }} variant="subtitle3" component="h5" gutterBottom>
                        {filter.bedrooms}
                     </Typography>
                     <IconButton sx={{ border: '1px solid', width: '20px', height: '20px' }} size="small" variant="outlined" onClick={() => { increment('bedrooms') }}>
                        <AddIcon sx={{ width: '15px' }} />
                     </IconButton>
                  </Grid>

               </Grid>
            </Box>
            <Box>
               <Grid container spacing={3}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center">
                  <Grid item xs={6} >
                     <Typography sx={{ margin: '10px', fontSize: "1.3rem" }} variant="subtitle1" component="h5" gutterBottom>
                        Bathrooms
                     </Typography>
                  </Grid>
                  <Grid item display="flex" alignItems="center" justifyContent="end" xs={6}>
                     {filter.bathrooms !== 0 ? (
                        <IconButton sx={{ border: '1px solid', width: '20px', height: '20px' }} size="small" variant="outlined" onClick={() => { decrement('bathrooms') }}>
                           <RemoveIcon sx={{ width: '15px' }} />
                        </IconButton>
                     ) : ''}
                     <Typography sx={{ margin: '0 8px 0 8px !important', padding: 0 }} variant="subtitle3" component="h5" gutterBottom>
                        {filter.bathrooms}
                     </Typography>
                     <IconButton sx={{ border: '1px solid', width: '20px', height: '20px' }} size="small" variant="outlined" onClick={() => { increment('bathrooms') }}>
                        <AddIcon sx={{ width: '15px' }} />
                     </IconButton>
                  </Grid>

               </Grid>
            </Box>

            <Divider />
         </Box>
         <Box >
            <Divider />
            <SwichFilter />
            <Divider />
         </Box>
         <Box >
            <Box sx={{ margin: '15px 0' }}>
               <Typography variant="h5" component="div">
                  Property Type
               </Typography>
               <Box sx={{ width: '100%', padding: '15px 15px 0 15px ' }}>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                     {
                        amenitiesMore[1].item.map((item) => {
                           return (
                              <Grid item xs={12} md={6}>
                                 <FormGroup>
                                    <FormControlLabel control={<Checkbox onClick={() => { handleCheckBox(item, 'property') }} checked={filter.property[item]} />} label={item} />
                                 </FormGroup>
                              </Grid>
                           )
                        })
                     }
                  </Grid>
               </Box>
               <Divider />
            </Box>
         </Box>
         <Box >
            <Box sx={{ margin: '15px 0' }}>
               <Typography variant="h5" component="div">
                  Host Language
               </Typography>
               <Box sx={{ width: '100%', padding: '15px 15px 0 15px ' }}>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                     {
                        amenitiesMore[0].item.map((el) => {
                           return (
                              <Grid item xs={12} md={6}>
                                 <FormGroup>
                                    <FormControlLabel control={<Checkbox onClick={() => { handleCheckBox(el, 'language') }} checked={filter.language[el]} />} label={el} />
                                 </FormGroup>
                              </Grid>
                           )
                        })
                     }
                  </Grid>
               </Box>
               <Divider />
            </Box>
         </Box>
         <Box sx={{ justifyContent: 'space-between', display: "flex", padding: "  15px 30px 10px 0" }} >
            <Typography variant="clickable2" component="subtitle2" sx={{ cursor: 'pointer' }}>
               clear
            </Typography>
            <Button size="small" variant="contained" color='secondary' sx={{ cursor: 'pointer' }} >
               Save
            </Button>
         </Box>
      </Box>
   )
}

export default MoreFilterContent