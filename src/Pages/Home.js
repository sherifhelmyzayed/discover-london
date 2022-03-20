import React from 'react'
import FirstSection from './HomePage/firstSection'
import SecondSection from './HomePage/SecondSection'
import Header from '../Components/Home/Header/Header'
import Laptop from '../Components/Home/Laptop/Laptop'
import Tablet from '../Components/Home/Tablet/Tablet'
import FilterBar from './FilterBar'

const Home = () => {
  return (
    <>
      <FirstSection />
      <SecondSection />
       <FilterBar />
        <Header />
        <Laptop />
        <Tablet />
    </>
  )
}

export default Home