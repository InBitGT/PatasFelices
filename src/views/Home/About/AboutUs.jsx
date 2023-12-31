
import styles from './AboutUs.module.css';    
import ContainerPath from '../../../components/Container/ContainerPath';
import ImageGallery from '../../../components/Gallery/Gallery';


// Funciones para los botones de navegación personalizados definidos fuera de AboutUs
const AboutUs = ({ title, contentTitle, contentInfo, buttonText }) => {




  return (
    <>
      <ContainerPath
        contentStyle={{ /* Estilos para ContainerPath si son necesarios */ }}
        content={
          <div>
          <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <h2 className={styles.aboutUsTitle}>{title}</h2>
          </div>
          <div className={styles.aboutUs}>
              <div className={styles.aboutUsImage}>
                <ImageGallery />
              </div>
              <div className={styles.aboutUsText}>
                <h3>{contentTitle}</h3>
                <p>{contentInfo}</p>  
                <button>{buttonText}</button>
              </div>
          </div>
          </div>
         
        }
      />
    </>
  );
};

export default AboutUs;