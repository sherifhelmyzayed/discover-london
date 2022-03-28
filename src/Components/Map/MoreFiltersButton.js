import {useState, forwardRef} from 'react';
import {Dialog, Slide, ToggleButton} from '@mui/material';
import MoreFilterContent from './MoreFilterContent';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MoreFiltersButton() {
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
        Filters
      </ToggleButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <MoreFilterContent />
      </Dialog>
    </>
  );
}
