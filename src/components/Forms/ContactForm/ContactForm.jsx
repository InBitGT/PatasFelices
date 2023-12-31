import { set, useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [submitStatus, setSubmitStatus] = useState('');


    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleClearClick = () => {
        setSubmitStatus('');
        reset();
    }
        
    const handleSubmitForm = (data) => {
        localStorage.setItem('contactData', JSON.stringify(data));
        setSubmitStatus('success');
        setTimeout(() => {
            console.log(data);
            setSubmitStatus('success'); 
            reset();
            setSubmitStatus('');
          }, 3000);
    }
    
    
    return (
        <>
            {submitStatus === 'success' && <div className={styles.successMessage}>Datos Enviados Correctamente!</div>}
            {submitStatus === 'error' && <div className={styles.errorMessage}>Ha ocurrido un error al enviar los datos.</div>}
            <form onSubmit={handleSubmit(handleSubmitForm)} className={styles.formContainer}>
                 <label className={styles.formLabel} >
                <div className={styles.titleInputForm}>
                Full Name:
                </div>
                <input className={styles.inputForm} placeholder='Enter Full Name' {...register('name', { required: true, minLength: 1, maxLength: 120 })} required  />
            </label>
            <br />
            <label className={styles.formLabel}>
                <div className={styles.titleInputForm}>
                Email Address:
                </div>
                <input className={styles.inputForm} placeholder='Enter Email Address' {...register('email', { required: true, min: 1, max: 120 })} required />
            </label>
            <br />
            <label className={styles.formLabel} >
                <div className={styles.titleInputForm}>
                Phone:
                </div>
                <input className={styles.inputForm}  placeholder='Enter Phone Number' {...register('phone', { required: true })} type='number' required />
            </label>
            <br />
            <label className={styles.formLabel}>
                <div className={styles.titleInputForm}>
                Comment:
                </div>
                <textarea className={styles.textAreaForm} {...register('message', { required: true })} required />
            </label>
            <div >
                {/* <button type="button" onClick={handleClearClick}>Clear</button> */}
                <button type="submit" className={styles.buttonForm}>
                    Send
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <mask id="mask0_202_45" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_202_45)">
                        <path d="M3 20V4L22 12L3 20ZM5 17L16.85 12L5 7V10.5L11 12L5 13.5V17Z" fill="white"/>
                    </g>
                    </svg>
                </button>

            </div>
            </form>
            
        </>
    )
    };

export default ContactForm