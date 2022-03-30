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
        {/* <button >login</button> */}
        <Button  onClick={()=> setIsOpen(true)}color="white" variant="oulLine" fullWidth>
                   login
                
        </Button>
      <LoginForm open={isOpen} onClose={()=> setIsOpen(false)}> </LoginForm>
      
      </div>
      </>
      )
}
