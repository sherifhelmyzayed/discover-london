import { useState, useEffect } from 'react'
import { Grid, Paper, Divider, TextField, Typography, List, ListItem, ListItemIcon, Avatar, Fab } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

// import {
//     // messages, 
//     // responders,
// } from '../../shared/Data';

let id = localStorage.getItem('id')



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

// const Active = styled('div')(({ theme }) => ({
//     backgroundColor: theme.palette.grey1,
// }));


const useStyles = makeStyles(() => ({
    msgSent: props => ({
        backgroundColor: props.palette.grey1,
        borderRadius: 20,
        marginLeft: '40%',
        padding: "5px 20px 5px 20px",
    }),
    msgReceived: props => ({
        marginRight: '40%',
        padding: "5px 20px 5px 20px",
        borderRadius: 20,
        backgroundColor: props.palette.primary.light,
        color: 'white'
    }),
    table: {
        minWidth: 650,
    },
    chatSection: {
        width: '100%',
        height: '80vh'
    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },
    messageArea: {
        height: '70vh',
        overflowY: 'auto',
    },
}));



const Inbox = (props) => {
    const [input, setInput] = useState('')
    const [chat, setChat] = useState(null)
    // const [message, setMessage] = useState(messages.filter((el) => ((el.from === chat && el.to === 'sherif') || (el.from === 'sherif' && el.to === chat))))
    const [message, setMessage] = useState(null)
    const [messages, setMessages] = useState(null)
    const [newMsg, setNewMsg] = useState([])
    const [msgReceived, setMsgReceived] = useState([])
    const [allMesg, setAllMsg] = useState([])
    const [responders, setResponders] = useState([])
    const [users, setUsers] = useState([])
    const { theme } = props
    const classes = useStyles(theme);


    useEffect(() => {
        axios.get(`http://localhost:4000/messages/sender/${id}`).then((res) => {
            setNewMsg(res.data)
        }).then(
            axios.get(`http://localhost:4000/messages/receiver/${id}`).then((res) => {
                setMsgReceived(res.data)
                setResponders(res.data)
            })
        )
    }, [])

    useEffect(() => {
        const newArr = newMsg.concat(msgReceived)
        setAllMsg(newArr.sort((a, b) => (a.date - b.date)))
    }, [newMsg, msgReceived])


    useEffect(() => {
        setUsers(msgReceived.map(
            a => a.from))
    }, [newMsg, msgReceived])



    // useEffect(() => {

    //     setMessage(messages.filter((el) => ((el.from === chat && el.to === 'sherif') || (el.from === 'sherif' && el.to === chat))))
    //     return () => {
    //     }
    // }, [chat])


    // const submit = (e) => {
    //     let ref = messages
    //     const date = new Date()
    //     const obj = {
    //         from: "sherif",
    //         to: chat,
    //         text: e.target.value,
    //         date: `${date.getHours()} ${date.getMinutes()}`,
    //         read: false
    //     };
    //     ref.push(obj)
    //     let arr = ref.filter((el) => ((el.from === chat && el.to === 'sherif') || (el.from === 'sherif' && el.to === chat)))
    //     setMessage(arr)
    //     e.target.value = ''
    // }

    // const handleSubmit = () => {
    //     let ref = messages
    //     const date = new Date()
    //     const obj = {
    //         from: "sherif",
    //         to: chat,
    //         text: input,
    //         date: `${date.getHours()} ${date.getMinutes()}`,
    //         read: false
    //     };
    //     ref.push(obj)
    //     let arr = ref.filter((el) => ((el.from === chat && el.to === 'sherif') || (el.from === 'sherif' && el.to === chat)))
    //     setMessage(arr)
    //     setInput()
    // }

    const changeHanlder = (e) => {
        setInput(e.target.value)
    }

    const changeChat = (e) => {
        setChat(e)
        const msg = messages.filter((el) => ((el.from === e && el.to === 'sherif') || (el.from === 'sherif' && el.to === e)))
        setMessage(msg)
    }


    return (
        <>
            <div>

                <Grid container component={Paper} className={classes.chatSection}>
                    <Grid item xs={3} className={classes.borderRight500}>
                        <Grid item xs={12} style={{ padding: '10px' }}>
                            <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
                        </Grid>
                        <Divider />
                        <List>
                            {
                                ((users) ?
                                    [...new Set(users)].map((guest, key) => (
                                        (
                                            <ListItem button key={key} onClick={() => changeChat(guest)} sx={{ backgroundColor: (chat === guest) ? 'grey1' : 'white' }}>
                                                <ListItemIcon>
                                                    <Avatar alt="Alice" src="https://material-ui.com/static/images/avatar/3.jpg" />
                                                </ListItemIcon>
                                                <Typography variant="subtitle3" component="h5">{guest}</Typography>
                                            </ListItem>
                                        )
                                    ))
                                    : <CircularProgress />
                                )
                            }
                        </List>
                    </Grid>
                    <Grid item xs={9}>
                        <List className={classes.messageArea}>
                            {
                                (allMesg) ? (allMesg.filter((el) => ((el.from === chat && el.to === id) || (el.from === id && el.to === chat))).map((msg, key) => (
                                    <ListItem key={key}>
                                        <Grid container className={msg.from === id ? classes.msgReceived : classes.msgSent}>
                                            <Grid item xs={12}>
                                                <Typography align={msg.from === id ? 'left' : 'right'} variant="subtitle4" component="h2" marginBottom={2}>{msg.text}</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography align={msg.from === id ? 'left' : 'right'} variant="subtitle5" component="h3">{msg.date}</Typography>

                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                )
                                )) : ''

                            }
                        </List>
                        <Divider />
                        <Grid container style={{ padding: '10px' }}>
                            <Grid item xs={11}>
                                <TextField onKeyPress={(ev) => {
                                    if (ev.key === 'Enter') {
                                        // submit(ev)
                                    }
                                }} size="small" id="outlined-basic-email"
                                    label="Type Something"
                                    onChange={changeHanlder}
                                    fullWidth />
                            </Grid>
                            <Grid xs={1} align="right">
                                <Fab color="primary.light" aria-label="add" size="small" width={1}
                                //  onClick={handleSubmit}
                                ><SendIcon /></Fab>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Inbox