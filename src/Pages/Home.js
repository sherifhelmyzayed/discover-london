
import React from 'react'
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
    </>
  )
}

export default Home