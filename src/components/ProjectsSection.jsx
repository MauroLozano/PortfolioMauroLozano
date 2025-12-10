import React, { forwardRef } from "react";
import { projectData } from "../data/projectData.js";
import styles from "../css/ProjectArticle.module.css"
const ProjectArticle = forwardRef((props, ref)=>{

    return (
        <section className={styles.projects} ref={ref}>
            <h2 className={styles.section__title}>PROYECTOS</h2>
            {projectData.map((project)=>{
                return(
                    <article key={project.id} className={styles.project}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles['project__img-link']}><img src={project.projectImg} alt="Imagen del Proyecto" className={styles.project__img} loading="lazy" /></a>
                        <h3>{project.title}</h3>
                        <p className={styles['project__text']}>{project.description}</p>
                        <div className={styles['project__tech']}>
                            {project.techIcons.map((icon)=>{
                                return(
                                    <img key={icon} src={icon} alt="Imagen de Tecnología usada" className={styles['project__tech-img']} loading="lazy" />
                                )
                            })}
                        </div>
                        <div className={styles.project__buttons}>
                            <button type="button" className={styles['project__info-button--open']}>Mas Información</button>
                            <a href={project.link} className={styles.project__link} target="_blank" rel="noopener noreferrer">Abrir</a>    
                        </div>
                    </article>
                )
            })}
        </section>
    )
})

export default ProjectArticle