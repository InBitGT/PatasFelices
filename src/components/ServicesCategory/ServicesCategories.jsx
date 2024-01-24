import styles from './ServicesCategories.module.css'
import {Link} from 'react-router-dom'


const ServiceCategories=({imageService, altImage, titleService, descriptionService, buttonText, service}) => {
  return (
    <>      
        <img src={imageService} alt={altImage} width={'200rem'} height={'200rem'}/>
        <h2 className={styles.serviceTitle}>{titleService}</h2>
        <p className={styles.serviceInfo}>{descriptionService}</p>
        <Link to={service}>
        <button className={styles.serviceButton}>{buttonText}</button>
        </Link>
    </>
  )
}

export default ServiceCategories   