    import React, { forwardRef, useState } from "react";
    import { projectData } from "../data/projectData.js";
    import styles from "../css/ProjectArticle.module.css"
    const ProjectArticle = forwardRef((props, ref)=>{
        return (
            <section className={styles.projects} ref={ref}>
                <h2 className={styles.section__title}>PROYECTOS</h2>
                {projectData.map((project)=>{
                    const linkNames = Object.keys(project.links)
                    return(
                        <article key={project.id} className={styles.project}>
                            <a href={project.links['Demo']} target="_blank" rel="noopener noreferrer" className={styles['project__img-link']}><img src={project.projectImg} alt="Imagen del Proyecto" className={styles.project__img} fetchPriority={project.id == 1? 'high' : 'auto'} width={'210'} height={'200'}/></a>
                            <h3>{project.title}</h3>
                            <p className={styles['project__text']}>{project.description}</p>
                            <div className={styles['project__tech']}>
                                {project.techIcons.map((icon)=>{
                                    return(
                                        <img key={icon} src={icon} alt="Imagen de Tecnología usada" className={styles['project__tech-img']} loading="lazy" decoding="async" width={'40'} height={'40'}/>
                                    )
                                })}
                            </div>
                            <div className={styles.project__buttons}>
                                {
                                    linkNames.map((name) => (
                                        <a key={name} href={project.links[name]}target="_blank" rel="noopener noreferrer" className={styles.project__link}>{name}</a>
                                    ))
                                }
                            </div>
                        </article>
                    )
                })}
            </section>
        )
    })
    export default ProjectArticle