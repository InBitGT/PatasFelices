import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import LinkButton from '../Button/LinkButton'

import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <Link className={styles.link} to="/">Home</Link>
    <Link className={styles.link} to="/about">About</Link>
    <Link to="/">
    <img src={logo} alt="Logo Patas Felices" className={styles.logo} width={'200rem'} height={'140rem'}/>
    </Link>
    <Link className={styles.link} to="/nurcery">Nurcery</Link>
    <Link className={styles.link} to="/home-care">Home Care</Link>
    <LinkButton text="Sign Up" to="/signup" />
    </div>
  )
}

export default Navbar