import { useState, useRef, lazy, Suspense } from 'react'
import './App.css'
import './index.css'
import Header from './components/Header'
import ProjectsSection from './components/ProjectsSection'
import NavBar from './components/NavBar'
import StudiesSection from './components/StudiesSection'
import AboutMeSection from './components/AboutMeSection'
import ExperienceSection from './components/ExperienceSection'
import Footer from './components/Footer'
const ContactSection = lazy(()=> import('./components/ContactSection'))
const LoadingFallback = () => <div style={{height: '50vh', textAlign: 'center'}}>Cargando...</div>;
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
        <Suspense fallback={<LoadingFallback />}>
          <ContactSection ref={contactRef}/>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
