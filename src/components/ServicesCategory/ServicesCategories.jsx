import styles from './ServicesCategories.module.css'

const ServiceCategories=({imageService, altImage, titleService, descriptionService, buttonText}) => {
  return (
    <>
        <img src={imageService} alt={altImage} width={'200rem'} height={'200rem'}/>
        <h2 className={styles.serviceTitle}>{titleService}</h2>
        <p className={styles.serviceInfo}>{descriptionService}</p>
        <button className={styles.serviceButton}>{buttonText}</button>
    </>
  )
}

export default ServiceCategories   