import About from '../../Components/About/About'
import Banner from '../../Components/Banner/Banner'
import Contact from '../../Components/Contact/Contact'
import Projects from '../../Components/Projects/Projects'
import TechStack from '../../Components/TechStack/TechStack'

const Home = () => {
  return (
    <div className='home-page container mx-auto px-3'>
      <Banner></Banner>
      <About></About>
      <TechStack></TechStack>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default Home