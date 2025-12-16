import { useState, useRef, lazy, Suspense } from 'react'
import './App.css'
import './index.css'
import Header from './components/Header'
import ProjectsSection from './components/ProjectsSection'
import NavBar from './components/NavBar'
const Footer = lazy(()=> import('./components/Footer')) 
const ContactSection = lazy(()=> import('./components/ContactSection'))
const AboutMeSection = lazy(()=> import('./components/AboutMeSection'))
const ExperienceSection = lazy(()=> import('./components/ExperienceSection'))
const StudiesSection = lazy(()=> import('./components/StudiesSection'))
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
        <Suspense fallback={<LoadingFallback />}>
          <StudiesSection ref={studiesRef}/>
          <ExperienceSection />
          <AboutMeSection />
          <ContactSection ref={contactRef}/>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
