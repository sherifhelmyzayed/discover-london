import { Login } from '@mui/icons-material'
import React from 'react'
import Header from '../Components/Home/Header/Header'
import Laptop from '../Components/Home/Laptop/Laptop'
import Tablet from '../Components/Home/Tablet/Tablet'
import Modal from '../Components/form/Modal'

const Home = () => {
  return (
    <>
       <Modal/>
        <Header />
        <Laptop />
        <Tablet />
    </>
  )
}

export default Home