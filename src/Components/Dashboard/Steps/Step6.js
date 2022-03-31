import { useState, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import axios from 'axios'

const Input = styled('input')({
    display: 'none',
});
const Step6 = (props) => {

    const { createProperty, setCreateProperty } = props
    const [selectedFile, setSelectedFile] = useState(null)





    const clickHandler = (e) => {
        console.log(e.target.files[0])
        console.log(createProperty)
        setSelectedFile(e.target.files[0])
    }

    const fileUploadHandler = () => {
        axios.patch('http://localhost:4000/puplic/listing-624494eaac4fa8e379d1ebec-1648685750735-3.jpeg')
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
                <Input type="file" onChange={clickHandler} />
                {(selectedFile) ? <Typography variant="subtitle2" component="subtitile2">selected File is {selectedFile.name}</Typography> : ''}
                <IconButton color="primary" aria-label="upload picture" component="span">
                    Upload
                    <PhotoCamera />
                </IconButton>
            </label>
        </>
    )
}

export default Step6