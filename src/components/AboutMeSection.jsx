import React from "react";
import styles from '../css/AboutMeSection.module.css'

function AboutMeSection(){
    return (
        <section className={styles.presentation}>
            <h2 className={styles.section__title}>SOBRE MI</h2>
            <p>Estudiante de Tecnicatura de Desarrollo de Software. Busco implementar y expandir mis habilidades y conocimientos de JS, Node, bases de datos y desarrollo web para llevar a cabo aplicaciones y proyectos de todo tipo.</p>
        </section>
    )
}

export default AboutMeSection