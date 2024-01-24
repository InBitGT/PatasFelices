import styles from './Signup.module.css'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
import {set, useForm} from 'react-hook-form'
import {useState} from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';




const Signup = () => {

  const [submitStatus, setSubmitStatus] = useState('')
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const handleClearClick = () => {
    setSubmitStatus('')
    reset()
  }

  const handleSubmitForm = (data) => {
    localStorage.setItem('contactData', JSON.stringify(data))
    setSubmitStatus('success')
    setTimeout(() => {
      console.log(data)
      setSubmitStatus('success')
      reset()
      setSubmitStatus('')
    }, 3000)
  }

  

  return (

    <div className={styles.containerSignup}>
      <div className={styles.logo}>
      <Link to="/">
        <img src={Logo} alt="Logo" width={200} height={150}/>
      </Link>
      </div>
      <div className={styles.containerSignupRegister}>
        <div className={styles.signup}>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit(handleSubmitForm)} >
            <div className={styles.formContainer}>
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
                Password:
              </div>
              <input className={styles.inputForm}  placeholder='Enter Password' {...register('password', { required: true })} type='password' required />
            </label>
            <br />
            <label className={styles.formLabel}>
              <div className={styles.titleInputForm}>
                Confirm Password:
              </div>
              <input className={styles.inputForm}  placeholder='Confirm Password' {...register('confirmPassword', { required: true })} type='password' required />
            </label>
            </div>
            <div className={styles.buttonForm}>
              <p>Already have an account? <Link to="/login">Login</Link></p>
              <Button variant="contained" type="submit"  style={{ paddingRight: '0', width: '0', background: '#56BFAC'}} startIcon={<SendOutlinedIcon color="main" style={{ fontSize: '2rem', padding: '0', margin: '0' }}  />}>
              </Button>
            </div>
            <div >
            </div>
          </form>

        </div>
      </div>
    </div>

  )
}

export default Signup