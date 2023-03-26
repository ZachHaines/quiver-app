import HeroFrame from '../components/visitorPage/HeroFrame';
import AboutUnit from '../components/visitorPage/AboutUnit';
import FamilyPrograms from '../components/visitorPage/FamilyPrograms';
import AboutQuiver from '../components/visitorPage/AboutQuiver';
import GeneralResources from '../components/visitorPage/GeneralResources';
import ContactLink from '../components/visitorPage/ContactLink';
import NavBar from '../components/NavBar';


const Visitor = () => {
  
  return (
    <>
      <NavBar />
      <HeroFrame />
      <AboutUnit />
      <FamilyPrograms />
      <AboutQuiver />
      <GeneralResources />
      <ContactLink />
    </>
  )
};

export default Visitor;