import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import axios from 'axios';


export default function DraggableDialog() {
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState('false');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const setMessageValue = (e) => {
        setMsg(e.target.value)
    }

    const sendMsg = () => {
        const url = 'http://localhost:4000/messages/'
        axios.post(url, {
            from: "622098a84f93748a635ffde2",
            to: "622098a84f93748a635ffde3",
            text: msg
        }).then(response => {
            console.log("Response");
            console.log(response)
        }).catch(error => {
            console.log("Error");
        })
        setOpen(false);

    }

    return (
        <div>

            <Tooltip title="Send a message to the host" onClick={handleClickOpen}>
                <Button variant="contained" disableElevation><ChatBubbleOutlineOutlinedIcon /> </Button>
            </Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle id="draggable-dialog-title">
                    Send a message to the host
                </DialogTitle>
                <DialogContent>
                    <DialogContentText mt={2}>
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="Write your message here" id="fullWidth" onChange={setMessageValue} />
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={sendMsg}>SEND</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}