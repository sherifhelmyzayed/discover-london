import {useState, forwardRef} from 'react';
import {Dialog, Slide, ToggleButton} from '@mui/material';
import MoreFilterContent from './MoreFilterContent';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MoreFiltersButton(props) {
  const {moreFilters, setMoreFilters} = props

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ToggleButton onClick={handleClickOpen}  sx={{
        border: '1px #C8C8C8 solid',
        borderRadius: 5,
        height: 35
      }}>
        Filters <KeyboardArrowDownIcon sx={{
          transform: open ? 'rotate(180deg)' : '',
          transition: 'all ease 0.5s'
        }} />
      </ToggleButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <MoreFilterContent moreFilters={moreFilters} setMoreFilters={setMoreFilters} />
      </Dialog>
    </>
  );
}
