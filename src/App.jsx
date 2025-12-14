import { useState, useRef } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectsSection from './components/ProjectsSection'
import AboutMeSection from './components/AboutMeSection'
import ExperienceSection from './components/ExperienceSection'
import StudiesSection from './components/StudiesSection'
import ContactSection from './components/ContactSection'
import NavBar from './components/NavBar'


function App() {
  const headerRef = useRef(null)
  const proyectsRef = useRef(null)
  const studiesRef = useRef(null)
  const contactRef = useRef(null)
  //useRef creates a reference to a DOM element

  return (
    <div className='main-container'>
      <Header ref={headerRef}/>
      <NavBar 
        headerRef= {headerRef}
        studiesRef= {studiesRef}
        proyectsRef= {proyectsRef}
        contactRef = {contactRef}
      />
      <main>
        <ProjectsSection ref={proyectsRef}/>
        <StudiesSection ref={studiesRef}/>
        <ExperienceSection />
        <AboutMeSection />
        <ContactSection ref={contactRef}/>
      </main>
      <Footer />
    </div>
  )
}

export default App
