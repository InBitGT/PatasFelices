import styles from './Login.module.css'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
import {set, useForm} from 'react-hook-form'
import {useState} from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';




const Login = () => {
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
  
      <div className={styles.containerLogin}>
        <div className={styles.logo}>
        <Link to="/">
          <img src={Logo} alt="Logo" width={200} height={150}/>
        </Link>
        </div>
        <div className={styles.containerLoginRegister}>
          <div className={styles.login}>    
            <form onSubmit={handleSubmit(handleSubmitForm)} >
              <div className={styles.formContainer}>
              <label className={styles.formLabel} >
                <div className={styles.titleInputForm}>
                  User:
                </div>
                <input className={styles.inputForm} placeholder='Enter User' {...register('email', { required: true, min: 1, max: 120 })} required />
              </label>
              <br />
              <label className={styles.formLabel}>
                <div className={styles.titleInputForm}>
                  Password:
                </div>
                <input className={styles.inputForm} placeholder='Enter Password' {...register('password', { required: true, min: 1, max: 120 })} required />
              </label>
              <br />
              </div>
                <div className={styles.buttonForm}>
              <Button variant="contained" type="submit"  style={{ paddingRight: '0', width: '0', background: '#56BFAC'}} startIcon={<SendOutlinedIcon color="main" style={{ fontSize: '2rem', padding: '0', margin: '0' }}  />}>
              </Button>
              </div>
            </form>
  
          </div>
        </div>
      </div>
  
    )
}

export default Login