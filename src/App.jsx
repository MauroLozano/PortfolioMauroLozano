import { useState, useRef, lazy, Suspense } from 'react'
import './index.css'
import Header from './components/Header'
import ProjectsSection from './components/ProjectsSection'
import NavBar from './components/NavBar'
import ExperienceSection from './components/ExperienceSection'
import Footer from './components/Footer'
const StudiesSection = lazy(()=> import('./components/StudiesSection'))
const AboutMeSection = lazy(()=> import('./components/AboutMeSection'))
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
        <Suspense fallback={<LoadingFallback />}>
          <StudiesSection ref={studiesRef}/>
        </Suspense>
        <ExperienceSection />
        <Suspense fallback={<LoadingFallback />}>
          <AboutMeSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ContactSection ref={contactRef}/>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
