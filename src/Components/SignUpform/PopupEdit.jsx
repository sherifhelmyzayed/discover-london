import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CreateIcon from "@mui/icons-material/Create";
import axios from "axios";

export default function PopupEdit(props) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(props.data);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeHandel = (event) => {
    setData(event.target.value);
  };

  const submitHandel = () => {
    const newData = { [props.feild]: data };
    console.log(newData);

    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    console.log(token);

    axios
      .patch(
        `http://localhost:4000/user`,
        { headers: { authorization: token } },
        newData
      )

      .then(function (response) {
        console.log(response);
      })

      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <CreateIcon />
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>{props.feild}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ width: "90%" }}>
            you can update your data
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            fullWidth
            variant="standard"
            value={data}
            onChange={changeHandel}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitHandel}>submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
