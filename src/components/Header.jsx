import React, { forwardRef } from "react";
import styles from '../css/Header.module.css'
import gitHubIcon from '../assets/social/github-img(40x40).webp'
import linkedinIcon from '../assets/social/ln-img(40x40).webp'
import Tooltip from './Tooltips'
import logo from '../assets/icons/logo.webp'

const Header = forwardRef((props, ref) => {
    //forwardRef is a React function that allows passing a ref through a component to one of its children
    //React by default ignores the ref prop, so forwardRef is used to explicitly forward it
    //props are properties(data) that are passed from parent component to child component
    //ref is a react mechanism to access DOM elements directly
    const animatiedItems = ()=>(
        <>
            <div className={styles['header-animation__dot']}></div>
            <div className={styles['header-animation__line']}></div>
            <div className={styles['header-animation__dot']}></div>
            <div className={styles['header-animation__line']}></div>
            <div className={styles['header-animation__dot']}></div>
            <div className={styles['header-animation__line']}></div>
            <div className={styles['header-animation__dot']}></div>
            <div className={styles['header-animation__line']}></div>
        </>
    )
    return(
        <header className={styles.header} ref={ref}>
            <div className={styles['header-animation__container']}>
                <div className={styles['header-animation__right']}>
                    <div className={styles['header-animation__part-1']}>
                        {animatiedItems()}
                    </div>
                    <div className={styles['header-animation__part-2']}>
                        {animatiedItems()}
                    </div>
                </div>
                <div className={styles['header-animation__left']}>
                    <div className={styles['header-animation__part-1']}>
                        {animatiedItems()}
                    </div>
                    <div className={styles['header-animation__part-2']}>
                        {animatiedItems()}
                    </div>
                </div>
            </div>
            <div className={styles.header__content}>
                <div className={styles.logo__style}><img src={logo} alt="Logo" className={styles.logo__img} fetchPriority="high" width={'300'} height={'300'}></img></div>
                <div className={styles.header__data}>
                    <h1 className={styles.header__title}>MAURO LOZANO</h1>
                    <h2 className={styles.header__subtitle}>Desarrollador de Software</h2>
                    <div className={styles.header__social}>
                        <Tooltip text='GitHub'>
                            <a href="https://github.com/MauroLozano" className={styles['header__social--link']} target="_blank" rel="noopener noreferrer"><img src={gitHubIcon} alt="GitHub" className={styles['header__social--img']} /></a>
                        </Tooltip>
                        <Tooltip text='LinkedIn'>
                            <a href="https://www.linkedin.com/in/mauro-lozano-meana-621347355/?trk=opento_sprofile_topcard" className={styles['header__social--link']} target="_blank"><img src={linkedinIcon} alt="LinkedIn" className={styles['header__social--img']} /></a>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </header>
    );
})
export default Header;