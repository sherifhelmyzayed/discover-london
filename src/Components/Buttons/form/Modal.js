import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoginForm from './LoginForm';
import SignUp from './SignUp';

export default function Modal() {
    const [isOpen , setIsOpen]= useState(false);
    const [isOpenSignUp , setIsOpenSignUp]= useState(false);
    return (<>
      <div>
        <button onClick={()=> setIsOpen(true)}>click me</button>
        <button onClick={()=> setIsOpenSignUp(true)}>hi me</button>
      <LoginForm open={isOpen} onClose={()=> setIsOpen(false)}> </LoginForm>
      <SignUp open={isOpenSignUp} onClose={()=> setIsOpenSignUp(false)}> </SignUp>
      </div>
      </>
      )
}
