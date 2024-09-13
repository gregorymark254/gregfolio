import Nav from './pages/Nav'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Archievements from './pages/Archievements'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

import ScrolltoTop from './ScrollToTop'

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <Services/>
      <Projects/>
      <Skills/> 
      <Archievements/>
      <Contact/>
      <Footer/>
      <ScrolltoTop/>
    </div>
  );
}

export default App;
