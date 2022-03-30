import { Box, Typography, Divider, Grid, Checkbox, IconButton, FormControlLabel, FormGroup, Button } from '@mui/material';
import SwichFilter from '../filterBar/FilterContent/SwichFilter'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const MoreFilterContent = (props) => {
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

   const { moreFilters, setMoreFilters } = props

   const handleCheckBox = (e, item) => {
      setMoreFilters((current) => ({ ...current, [item]: { ...moreFilters[item], [e]: !moreFilters[item][e] } }))
   }


   const decrement = (e) => {
      setMoreFilters((current) => ({ ...current, [e]: moreFilters[e] - 1 }))
   }

   const increment = (e) => {
      setMoreFilters((current) => ({ ...current, [e]: (moreFilters[e] < 5) ? moreFilters[e] + 1 : 5 }))
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
                     {moreFilters.beds !== 0 ? (
                        <IconButton sx={{ border: '1px solid', width: '20px', height: '20px' }} size="small" variant="outlined" onClick={() => { decrement('beds') }}>
                           <RemoveIcon sx={{ width: '15px' }} />
                        </IconButton>
                     ) : ''}
                     <Typography sx={{ margin: '0 8px 0 8px !important', padding: 0 }} variant="subtitle3" component="h5" gutterBottom>
                        {moreFilters.beds}
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
                     {moreFilters.bedrooms !== 0 ? (
                        <IconButton sx={{ border: '1px solid', width: '20px', height: '20px' }} size="small" variant="outlined" onClick={() => { decrement('bedrooms') }}>
                           <RemoveIcon sx={{ width: '15px' }} />
                        </IconButton>
                     ) : ''}
                     <Typography sx={{ margin: '0 8px 0 8px !important', padding: 0 }} variant="subtitle3" component="h5" gutterBottom>
                        {moreFilters.bedrooms}
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
                     {moreFilters.bathrooms !== 0 ? (
                        <IconButton sx={{ border: '1px solid', width: '20px', height: '20px' }} size="small" variant="outlined" onClick={() => { decrement('bathrooms') }}>
                           <RemoveIcon sx={{ width: '15px' }} />
                        </IconButton>
                     ) : ''}
                     <Typography sx={{ margin: '0 8px 0 8px !important', padding: 0 }} variant="subtitle3" component="h5" gutterBottom>
                        {moreFilters.bathrooms}
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
                                    <FormControlLabel control={<Checkbox onClick={() => { handleCheckBox(item, 'property') }} checked={moreFilters.property[item]} />} label={item} />
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
                                    <FormControlLabel control={<Checkbox onClick={() => { handleCheckBox(el, 'language') }} checked={moreFilters.language[el]} />} label={el} />
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