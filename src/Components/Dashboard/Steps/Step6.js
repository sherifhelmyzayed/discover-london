import {useState} from 'react';
import { styled } from '@mui/material/styles';
import {Button, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
  display: 'none',
});
const Step6 = (props) => {

    const { setCreateProperty } = props
    const [error2, setError2] = useState(false)



    const summaryhoodHandler = (e) => {
        if (e.target.value.length < 6) {
            setError2(true)
        } else {
            console.log("true")
            setError2(false)
            setCreateProperty((current) => ({ ...current, 'description': e.target.value }));
        }
    }



    return (
        <>
            <Typography variant='h5' component="h5" marginTop={5}>
                Tell us anything the guest needs to know before reservation:
            </Typography>

            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span">
                    Upload
                </Button>
            </label>
            <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                </IconButton>
            </label>
        </>
    )
}

export default Step6