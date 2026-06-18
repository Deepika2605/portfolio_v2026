import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { CoreSkills } from './components/CoreSkills/CoreSkills'
// import { Projects } from './components/Projects/Projects'
import { Experience } from './components/Experience/Experience'
import { TechRadarSection } from './components/TechRadarSection/TechRadarSection'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CoreSkills />
        <Experience />
        {/* <Projects /> */}
        <TechRadarSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
