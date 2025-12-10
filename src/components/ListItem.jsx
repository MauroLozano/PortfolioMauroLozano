import React, { useState, useRef , useEffect } from "react";
import styles from '../css/ListItem.module.css'
function ListItem({id, title, content}){
    const [isOpen, setIsOpen] = useState(false)

    //This calculates the height of the content to assign the maxHeight to the element. It is used to make the maxHeigth transition smooth independently of the content size.
    const contentRef = useRef(null)
    
    useEffect(()=>{
        const contentElement = contentRef.current 
        const contentHeight = contentElement.scrollHeight + 'px'
        isOpen ? contentElement.style.maxHeight = contentHeight : contentElement.style.maxHeight = 0
    },[isOpen])
    const toggleOpen = ()=>{
        setIsOpen(!isOpen)
    }
    const contentClass = isOpen ? `${styles.item__content} ${styles['item__content--enabled']}` : `${styles.item__content} ${styles['item__content--disabled']}`;
    const dotClass = isOpen ? styles['item__dot-enabled']: styles['item__dot-disabled'];
    return(
        <li key={id} onClick={toggleOpen} className={styles.list__item}>
            <div className={styles.item__header}>
                <div className={styles['item__dot-container']}><div className={`${dotClass} ${styles.item__dot}`}></div></div>
                <div className={styles.item__title}>{title}</div>
            </div>
            <div className={contentClass} ref={contentRef}>
                <p>{content}</p>
            </div>
        </li>
    )
}
export default ListItem;