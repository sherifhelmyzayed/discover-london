import SecondSection from './HomePage/SecondSection'
import FirstSectionUpdated from './HomePage/FirstSectionUpdated'
import ThirdSection from './HomePage/ThirdSection'
import Modal from '../Components/Buttons/form/Modal'

const Home = () => {
  return (
    <>
      
      <FirstSectionUpdated />
      <Modal/>
      <SecondSection />
      <ThirdSection />
    </>
  )
}

export default Home