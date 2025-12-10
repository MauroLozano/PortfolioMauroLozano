    import React, { forwardRef , useState , useRef } from "react";
    import styles from '../css/ContactSection.module.css'
    import Tooltip from "./Tooltips";
    function copyMail(){
        navigator.clipboard.writeText('mauroloz2006@gmail.com')
    }
    const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/m;
    const nameRegex = /^[a-zA-Z]{3,}$/;
    const ContactSection = forwardRef((props, ref)=>{
        //Logic to handle the form data
        const [formData, setFormData] = useState({
            name: '',
            lastname: '',
            email: '',
            subject: '',
            message: ''
        })
        const [errors, setErrors] = useState({
            name: '',
            lastname: '',
            email: '',
            subject: '',
            message: ''
        })
        const handleChange = (e)=>{
            setFormData({
                ...formData,
                [e.target.name]: e.target.value 
            })
            let errorMessage = validateData(e.target.name, e.target.value)
            if (errorMessage != ''){
                setErrors(prevErrors => {
                    const newErrors ={
                        ...prevErrors,
                        [e.target.name]: errorMessage
                    }
                    return newErrors
                })
            }else{
                setErrors(prevErrors=>{
                    const newErrors = {
                        ...prevErrors,
                        [e.target.name]: ''
                    }
                    return newErrors
                })
            }
        }

        const validateData = (name, value)=>{
            if(name == 'name'){
                if(!nameRegex.test(value) || value == '') return 'El nombre no puede poseer numeros y debe ser de minimo 3 caracteres.'
            }
            if(name == 'lastname'){
                if(!nameRegex.test(value) || value == '') return 'El apellido no puede poseer numeros y debe ser de minimo 3 caracteres.'
            }
            if (name == 'email'){
                if(!emailRegex.test(value) || value == '') return'El email esta escrito incorrectamente.'
            }
            if (name == 'subject'){
                if(value == '') return'El asunto es obligatorio.'
            }
            if (name == 'message'){
                if(value == '') return'El mensaje es obligatorio.'
            }
            return ''
        }
        const handleSubmit = (e)=>{
            e.preventDefault()
            console.log(errors)
        }
        //Logic to copy the email
        const [isCopied, setIsCopied] = useState(false)
        let copiedText = 'Copiar'
        copiedText =  isCopied ? '¡Copiado!' : 'Copiar'
        const timerRef = useRef(null)
        function handleCopy(){
            if(timerRef.current){
                clearTimeout(timerRef.current);
            }
            copyMail()
            setIsCopied(true)
        }
        function handleMouseEnterMail(){
            if(timerRef.current){
                clearTimeout(timerRef.current)
                timerRef.current = null
            }
        }
        function handleMouseLeaveMail(){
            if(isCopied){
                const timer = setTimeout(() => {
                    setIsCopied(false)
                }, 2000);
                timerRef.current = timer
            }
        }

        return(
            <section className={styles['contact']} ref={ref}>
                <h2>CONTACTO</h2>
                <Tooltip text={copiedText}>
                    <p onClick={()=>{handleCopy()}} onMouseEnter={()=>{handleMouseEnterMail()}} onMouseLeave={()=>{handleMouseLeaveMail()}} className={styles['p__copy--mail']}>mauroloz2006@gmail.com</p>
                </Tooltip>
                <form action="" className={styles['contact__form']}>
                    <fieldset className={styles['contact__fieldset']}>
                        <legend className={styles['contact__legend']}>Infromacion Personal</legend>
                        <label className={styles.contact__label} htmlFor="name__input">Ingrese su nombre.</label>
                        <input type="text" name="name" className={`${styles["contact__input"]} ${errors.name ? styles['contact__input--error']: ""}`} placeholder="Nombre" id="name__input" autoComplete="on" onChange={handleChange}/>
                        <label className={styles.contact__label} htmlFor="lastname__input">Ingrese su apellido.</label>
                        <input type="text" name="lastname" className={`${styles["contact__input"]} ${errors.lastname ? styles['contact__input--error']: ""}`} placeholder="Apellido" id="lastname__input" autoComplete="on" onChange={handleChange}/>
                        <label className={styles.contact__label} htmlFor="email__input">Ingrese su Email.</label>
                        <input type="email" name="email" className={`${styles["contact__input"]} ${errors.email ? styles['contact__input--error']: ""}`} placeholder="Email" id="email__input" autoComplete="on" onChange={handleChange}/>
                    </fieldset>
                    <fieldset className={styles['contact__fieldset']}>
                        <legend className={styles['contact__legend']}>Consulta</legend>
                        <label className={styles.contact__label} htmlFor="subject__input">Asunto.</label>
                        <input type="text" name="subject" className={`${styles["contact__input"]} ${errors.subject ? styles['contact__input--error']: ""}`} placeholder="Escriba la materia que trata" id="subject__input" onChange={handleChange}/>
                        <label className={styles.contact__label} htmlFor="message__input">Escriba su mensaje.</label>
                        <textarea name="message" className={`${styles["contact__textarea"]} ${errors.message ? styles['contact__input--error']: ""}`} placeholder="¡Consultá lo que desees!" rows="10" cols="50" maxLength="2000" id="message__input" onChange={handleChange}></textarea>
                    </fieldset>
                    <button type="submit" name="submit" className={styles['form__submit']} onClick={handleSubmit}>ENVIAR</button>
                </form>
            </section>
        )
    })
    export default ContactSection