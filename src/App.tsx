import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
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
        <Projects />
        <TechRadarSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
