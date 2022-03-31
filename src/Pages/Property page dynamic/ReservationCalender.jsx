import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DraggableDialog from './messageDialog'

const ReservationCalender = () => {
    const [checkInValue, setCheckInValue] = useState(null);
    const [checkOutValue, setCheckOutValue] = useState(null);
    const url = `http://localhost:4000/booking`
    const [reservationMsg, setReservationMsg] = useState(false)



    const reserve = () => {
        axios.post(url, {
            property: '622098a84f93748a635ffde1',
            host: '622098a84f93748a635ffde2',
            guest: '622098a84f93748a635ffde3',
            checkIn: checkInValue,
            checkOut: checkOutValue,
        }).then(res => {
            console.log(res)
        }).catch(error => {
            console.log(error, "Error")
        })
        setReservationMsg(true)

    }


    return (
        <>

            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', padding: 0 }} mt={2} mb={5} >


                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="CHECK IN"
                        value={checkInValue}
                        onChange={(newValue) => {
                            setCheckInValue(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField {...params} helperText={params?.inputProps?.placeholder} />
                        )}

                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="CHECK OUT"
                        value={checkOutValue}
                        onChange={(newValue) => {
                            setCheckOutValue(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField {...params} helperText={params?.inputProps?.placeholder} />
                        )}

                    />
                </LocalizationProvider>

            </Box>

            <Box sx={{ display: 'flex', widht: '100%', justifyContent: 'center' }}>

                <Button variant="contained" disableElevation sx={{ marginRight: 1 }} onClick={reserve}>
                    Reserve
                </Button>

                <DraggableDialog />

            </Box>

            {reservationMsg && <Typography mt={2}>Reserved Successfuly</Typography>}  



        </>
    )
}

export default ReservationCalender



