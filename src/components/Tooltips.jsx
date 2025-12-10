import React, { useState } from "react";
import styles from '../css/Tooltips.module.css'
import ContactSection from "./ContactSection";

function Tooltip({text, children}){
    const [visible, setIsVisible] = useState(false)
    const showTooltip = ()=> setIsVisible(true)
    const hideTooltip = ()=> setIsVisible(false)
    const visibilityClass = visible? styles['tooltip--visible'] : styles['tooltip--hidden']
    return(
        <div className={styles['tooltip__container']} onMouseEnter={showTooltip} onMouseLeave={hideTooltip} onFocus={showTooltip} onBlur={hideTooltip}>
            {children}
            <div className={`${styles['tooltip']} ${visibilityClass}`} >{text}</div>
        </div>
    )
}
export default Tooltip;