import { Login } from '@mui/icons-material'
import React from 'react'
<<<<<<< HEAD
// import FirstSection from './HomePage/firstSection'
import SecondSection from './HomePage/SecondSection'
import FirstSectionUpdated from './HomePage/FirstSectionUpdated'
import ThirdSection from './HomePage/ThirdSection'

const Home = () => {
  return (
    <>
      <FirstSectionUpdated />
      <SecondSection />
      <ThirdSection />
=======
import Header from '../Components/Home/Header/Header'
import Laptop from '../Components/Home/Laptop/Laptop'
import Tablet from '../Components/Home/Tablet/Tablet'
import  Modal  from '../Components/form/Modal'
import FAQ from '../Components/FAQ'

const Home = () => {
  return (
    <> 
        <FAQ/>
        <Modal/>
        <Header />
        <Laptop />
        <Tablet />
>>>>>>> 311c4be1a7922906961440e2f3d8c6fe0ce1b5f4
    </>
  )
}

export default Home