
import Navbar from "../Navbar/Navbar"
import ImagenHeader from "../../assets/Imagen Inicio.png"
import LinkButton from '../Button/LinkButton'   

import styles from './Header.module.css'

const Header = ({ scrollToAboutUs }) => {
    const CustomButtonStyle = {
        backgroundColor: '#F2A25C',

    };

  return (
    <>
    <Navbar scrollToAboutUs={scrollToAboutUs} />
    <div className={styles.container}>
    <div>
    <h1 className={styles.containerInfo}>Tu <span className={styles.containerInfoSpan}>perro feliz</span>, tu tranquilidad.</h1>
    <h2 className={styles.containerInfo2}>Cuidamos de tu perro como si fuera <br />
        nuestro.  Servicios a domicilio y guardería</h2>
    <LinkButton text="Get Started" to="/signup" buttonStyle={CustomButtonStyle}/>
     </div> 
    <>
        <img src={ImagenHeader} alt="" />
    </>
    </div>
    </>
  )
}

export default Header