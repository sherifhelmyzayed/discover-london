import SecondSection from './HomePage/SecondSection'
import FirstSectionUpdated from './HomePage/FirstSectionUpdated'
import ThirdSection from './HomePage/ThirdSection'
import Modal from '../Components/Buttons/form/Modal'
import FourthSection from './HomePage/FourthSection'


const Home = () => {
  return (
    <>
      
      <FirstSectionUpdated />
      <Modal/>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </>
  )
}

export default Home