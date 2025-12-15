import React from "react";
import styles from '../css/AboutMeSection.module.css'
import profile from '../assets/profile.webp'

function AboutMeSection(){
    return (
        <section className={styles.aboutme__section}>
            <h2 className={styles.section__title}>SOBRE MÍ</h2>
            <div className={styles['aboutme__content']}>
                <div className={styles['aboutme__info--container']}>
                    <p>Soy <strong>Mauro Lozano</strong>, un estudiante de Desarrollo de Software. Mi primer contacto con la programacion fue de pequeño. Entusiasmado por el desarrollo de videojuegos, pasaba horas enganchado frente a la pantalla intentando depurar mi codigo, pero curiosamente no estaba sufriendo, se sentía como un <strong>desafío</strong>.</p><br></br>
                    <p>A lo largo de mi formación académica, he desarrollado varios proyectos en equipo. Esta experiencia me ha brindado la habilidad de trabajar cómodamente en entornos colaborativos y transmitir mis ideas adecuadamente.</p>
                </div>
                <div className={styles['aboutme__profile--container']}>
                    <img src={profile} alt="Foto de Perfil" className={styles['aboutme__profile--img']}/>
                </div>
            </div>
        </section>
    )
}

export default AboutMeSection