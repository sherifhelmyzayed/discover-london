import SecondSection from './HomePage/SecondSection'
import ThirdSection from './HomePage/ThirdSection'
import LogInModal from '../Components/Buttons/form/LogInModal'
import FourthSection from './HomePage/FourthSection'
import HomeHeader from './HomePage/HomeHeader'


const Home = () => {
  console.log(localStorage)
  return (
    <>
      
      <HomeHeader />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </>
  )
}

export default Home