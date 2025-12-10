import React, { useState , useRef , useEffect} from "react";
import styles from '../css/NavBar.module.css'
import gitHubIcon from '../assets/social/github-img(40x40).webp'
import linkedinIcon from '../assets/social/ln-img(40x40).webp'
import logo from "../assets/icons/logo.webp";
import Tooltip from './Tooltips'
function NavBar({headerRef, proyectsRef, studiesRef, contactRef}){
    const [isEnabled, setIsEnabled] = useState(false)
    //usteState saves if navBar is enabled or disabled
    useEffect(()=>{
        //useEffect is used to run code with side effects that interacts with the DOM APIs (such as IntersectionObserver).
        //Since IternsectionObserver interacts with the DOM, each time it does it would render the component again causing an infinite loop.
        //It executes when React finishes rendering the DOM, grating IntersectionObserver to create when the element is mounted.
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry => {
                if(!entry.isIntersecting){
                    setIsEnabled(true)
                }
                else{
                    setIsEnabled(false)
                }
            });
        })  
        //Cleanup function to disconnect the observer when the component unmounts. Otherwise it would continue to observe even when the component is no longer in the DOM.
        observer.observe(headerRef.current);
        return () => {
            observer.disconnect();
        };
    },[headerRef]);
    const handleScroll = (ref) =>{
        if(ref && ref.current){
            ref.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }
    const navBarClass = isEnabled ? styles['nav-bar--enabled'] : styles['nav-bar--disabled']
    return(
        <nav className={navBarClass}>
            <ul className={styles['nav-container']}>
                <a href="https://maurolportfolio.netlify.app/" className={styles['nav__logo--link']} target="_blank"><img src={logo} alt="" className={styles['nav__logo--img']} /></a>
                <li className={styles['nav-bar__item']}><button type="button" onClick={()=>{handleScroll(headerRef)}}>Inicio</button></li>
                <li className={styles['nav-bar__item']}><button type="button" onClick={()=>{handleScroll(proyectsRef)}}>Proyectos</button></li>
                <li className={styles['nav-bar__item']}><button type="button" onClick={()=>{handleScroll(studiesRef)}}>Estudios</button></li>
                <li className={styles['nav-bar__item']}><button type="button" onClick={()=>{handleScroll(contactRef)}}>Contacto</button></li>
                {/* For the onClick prop: When React renders the DOM sees handleScroll(contactRef) and assigns to onClick the return value, which would be undefined.
                To avoid this, the prop onClick needs a function to call later, the anonymous function*/}
                <li className={`${styles['nav-bar__item']} ${styles['nav-bar__item--social']}`}>
                    <Tooltip text='GitHub'>
                        <a href="https://github.com/MauroLozano" className={styles['nav-bar__item--social__link']} target="_blank" rel="noopener noreferrer"><img src={gitHubIcon} alt="GitHub" className={styles['nav__logo--img']} /></a>
                    </Tooltip>
                    <Tooltip text='LinkedIn'>
                        <a href="https://www.linkedin.com/in/mauro-lozano-meana-621347355/?trk=opento_sprofile_topcard" className={styles['nav-bar__item--social__link']} target="_blank"><img src={linkedinIcon} alt="LinkedIn" className={styles['nav__logo--img']} /></a>
                    </Tooltip>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;