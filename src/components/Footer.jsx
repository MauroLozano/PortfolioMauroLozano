import React from "react";
import styles from '../css/Footer.module.css'
import gitHubIcon from '../assets/social/github-img(40x40).webp'
import linkedinIcon from '../assets/social/ln-img(40x40).webp'
function Footer(){
    return(
        <footer className={styles.footer}>
        <p className={styles.footer__p}>© 2024 Mauro Lozano. Todos los derechos reservados.</p>
        <div className={styles.footer__contact}>
            <a href={"https://github.com/MauroLozano"} target="_blank" rel="noopener noreferrer"><img src={gitHubIcon} className={styles['footer__contact--img']} alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/mauro-lozano-meana-621347355/?trk=opento_sprofile_topcard" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} className={styles['footer__contact--img']} alt="LinkedIn" /></a>
        </div>
        </footer>
    )
}
export default Footer;