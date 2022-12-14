import Nav from './pages/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Footer from './pages/Footer'

import ScrolltoTop from './ScrollToTop'

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
      <ScrolltoTop/>
    </div>
  );
}

export default App;
