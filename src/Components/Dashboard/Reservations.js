import { useState,useEffect } from 'react'
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Typography, Grid, Button } from '@mui/material';
import axios from 'axios'
import Feedback from '../Feedback';

let uid = localStorage.getItem('id')


const Image = styled('img')({
  borderRadius: 4,
  width: '100px'
})


const ImageGuest = styled('img')({
  borderRadius: 40,
  width: '50px'
})







function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}


// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly


const headCells = [
  {
    id: 'confirmation',
    numeric: false,
    disablePadding: true,
    label: 'Confirm Code',
    width: '6%'
  },
  {
    id: 'checkIn',
    numeric: false,
    disablePadding: true,
    label: 'Check in',
    width: '6%'

  },
  {
    id: 'checkOut',
    numeric: false,
    disablePadding: true,
    label: 'Check out',
    width: '6%'

  },
  {
    id: 'listing',
    numeric: false,
    disablePadding: true,
    label: 'Listing',
    width: '24%'

  },
  {
    id: 'guest',
    numeric: false,
    disablePadding: true,
    label: 'Guest',
    width: '24%'

  },
  {
    id: 'actionNeeded',
    numeric: false,
    disablePadding: true,
    label: 'Action needed',
    width: '8%'

  }
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'center'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            width={headCell.width}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <Typography variant="subtitle2" component="p" textAlign="center">{headCell.label}</Typography>
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

// EnhancedTableHead.propTypes = {
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle5"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%', fontWeight: 400}}
          variant="h1"
          id="tableTitle"
          component="div"
        >
          Reservations
        </Typography>
      )}

      {numSelected > 0 ? '' : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const Reservations = () => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [reserv , setReserv] = useState([])
  const [guest , setGuest] = useState({})
  const [list , setList] = useState({})
  const [isOpen , setIsOpen]= useState(false);

  useEffect(()=>{
    axios.get(`http://localhost:4000/booking/host/${uid}`).then((res)=>{
    // console.log(res.data)
    setReserv(res.data)
    }).then(()=>{
      axios.get(`http://localhost:4000/user/62437c78ba23545b6c3c946d`).then((res)=>{
        // console.log(res)
       
        setGuest(res.data)
      })
    }).then(()=>{
      axios.get(`http://localhost:4000/list/624494eaac4fa8e379d1ebec`).then((res)=>{
        // console.log(res)
        setList(res.data)
      })
    })
    },[list])
    let tes = 2467891;
    const x = 
      reserv.map((e)=>{return ( 
        {
          id : e._id,
          confirmation : tes++,
          checkin: e.checkIn,
          checkout: e.checkOut,
          aprroved: e.aprroved,
          listing:{
                id : list._id,
                summary : list.summary,
                description : list.description,
                image: "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_960_720.jpg"
          },
          guest: {
                id: guest._id,
                photo: "https://material-ui.com/static/images/avatar/3.jpg",
                firstName: guest.firstName,
                lastName: guest.lastName,
                city: guest.city
              },
              
          
        })
      })
    
   
   
  
    
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = x.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - x.length) : 0;

  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size='medium'
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={x.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {x
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((x, index) => {

                  return (
                    <TableRow
                      hover
                      key={x.confirmation}

                    >
                      <TableCell >
                        <Typography variant="subtitle5" component="p" textAlign="center">{x.confirmation}</Typography>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        padding={0}
                      >
                        <Typography variant="subtitle5" component="p" textAlign="center">{x.checkin}</Typography>
                      </TableCell>
                      <TableCell
                        component="th"
                        align="right"
                        padding={0}
                      >
                        <Typography variant="subtitle5" component="p" textAlign="center">{x.checkout}</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Grid container>
                          <Grid item md={7} display="flex" justifyContent="center" alignItems="center" paddingRight={'1px'}>
                            <Box>
                              <Typography variant="subtitle4" component="p" textAlign="left">{x.listing.title}</Typography>
                              <Typography variant="subtitle5" component="p" textAlign="left">{x.listing.description}</Typography>
                              <Typography variant="clickable" component="p" textAlign="left" color={"primary.light"}>View listing</Typography>
                            </Box>
                          </Grid>
                          <Grid item md={5}>
                            <Image src={x.listing.image} alt={x.listing.title}
                            />
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell align="right">
                        <Grid container fullWidth>
                          <Grid item md={9} display="flex" justifyContent="center" alignItems="center" paddingX={'1px'}>
                            <Box>
                              <Typography variant="subtitle4" component="p" textAlign="left">{x.guest.firstName} {x.guest.lastName}</Typography>
                              <Typography variant="subtitle5" component="p" textAlign="left">{x.guest.city}</Typography>
                              <Typography variant="clickable" component="p" textAlign="left" color={"primary.light"}>View Profile</Typography>
                            </Box>
                          </Grid>
                          <Grid item md={3} display="flex" justifyContent="center" alignItems="center">
                            <ImageGuest src={x.guest.photo} alt={x.listing.title}
                            />
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell align="right">{x.approved ==='true'? (
                     <Grid display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
                       <Button size="small" variant="contained" color="secondary" marginX='auto'>Accept</Button>
                       <Button>Decline</Button>
                     </Grid>
                  
                      ) : (
                        <Button onClick={()=>{
                          setIsOpen(true)
                        }} size="small" color="secondary" variant="contained" >Give feedback</Button>
                      )}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[3,6, 9]}
          component="div"
          count={x.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
    <Feedback open={isOpen} onClose={()=> setIsOpen(false)}> </Feedback>

    </>
  );
}

export default Reservations;