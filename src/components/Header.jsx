import React, { forwardRef } from "react";
import styles from '../css/Header.module.css'
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
            <div className={styles['header__content']}>
                <div className={styles.logo__style}><img src={logo} alt="Logo del Portfolio" className={styles.logo__img}></img></div>
                <h1 className={styles.header__title}>MAURO LOZANO</h1>
            </div>
        </header>
    );
})
export default Header;