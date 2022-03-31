import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LoginForm from './LoginForm';
import SignUp from './SignUp';
import {Link} from "react-router-dom";

export default function Modal() {
    const [isOpen , setIsOpen]= useState(false);
    const [isOpenSignUp , setIsOpenSignUp]= useState(false);
    return (<>
      <div>
<<<<<<< HEAD:src/Components/Buttons/form/Modal.js
        {/* <button onClick={()=> setIsOpen(true)}>login</button> */}
        
      <LoginForm open={true} > </LoginForm>
=======
        {/* <button >login</button> */}
        <Button  onClick={()=> setIsOpen(true)}color="white" variant="oulLine" fullWidth>
                   login
                
        </Button>
      <LoginForm open={isOpen} onClose={()=> setIsOpen(false)}> </LoginForm>
>>>>>>> 6489158031d707d8b127dbf87851a6478a580bc5:src/Components/Buttons/form/LogInModal.js
      
      </div>
      </>
      )
}
