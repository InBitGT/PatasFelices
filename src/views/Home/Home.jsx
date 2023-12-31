import React, { useRef } from 'react';

import Header from "../../components/Header/Header"
import AboutUs from "./About/AboutUs"
import dogImage from "../../assets/dog-image.jpg"
import ContainerPath from "../../components/Container/ContainerPath"
import ServicesCategories from "../../components/ServicesCategory/ServicesCategories"
import Clients from "./Clients/Clients"
import Contact from "./Contact/Contact"
import Footer from "../../components/Footer/Footer"
import ImageGallery from "../../components/Gallery/Gallery"

import styles from "./Home.module.css"

import HomeCareImage from "../../assets/HomeCare.png"
import NurseryImage from "../../assets/Nursery.png"

const Home = () => {
  // Crea la referencia
  const aboutUsRef = useRef(null);

  // Función para desplazarse a AboutUs
  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  return (
    <>
    <Header scrollToAboutUs={scrollToAboutUs} />
    <div ref={aboutUsRef}>
    <AboutUs
        title="About Us"
        contentTitle="Ofrecer servicios de cuidados de 
        perros que sean seguros, 
        divertidos y educativos."
        contentInfo={<>Tu perro es parte de la familia, y nosotros lo sabemos. <br /> 
        Por eso, nos comprometemos a brindarle el mejor <br />
        cuidado posible, tanto a domicilio como en nuestra <br />
        guardería. Nuestro equipo de profesionales está formado <br />
        por personas apasionadas por los perros, que saben <br />
        cómo tratarlos con amor y respeto. Ofrecemos un servicio <br />
        personalizado, adaptado a las necesidades de cada perro.
        </>}
        buttonText="Read More"
        
      />
      </div>
      <div className={styles.servicesContainer}>
        <h2 className={styles.categoriesTitle}>Services</h2>
      <div className={styles.servicesCategoriesContainer}>
          
          <div className={styles.servicesCategories}>
          <ServicesCategories
            imageService={HomeCareImage}
            altImage="Home Care"
            titleService="Home care"
          descriptionService={<>
          Nuestros cuidadores son <br/> 
            profesionales experimentados <br/>
            que aman a los perros.
            </>}
            buttonText="View Shop"
          />
          </div >
          <div className={styles.servicesCategories}>
          <ServicesCategories
            imageService={NurseryImage}
            altImage="Nursery"
            titleService="Nursery"
            descriptionService={<>
            Nuestro centro está diseñado para <br />
            garantizar la seguridad y el bienestar <br />
            de los perros.
            </>}
            buttonText="View Shop"
            />
          </div>
        </div>
      </div>
        <Clients
        title="Clients"
        />
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home