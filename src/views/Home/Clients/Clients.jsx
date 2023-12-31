import ContainerPath from '../../../components/Container/ContainerPath'

import styles from './Clients.module.css'

const Clients=({ title}) => {

    const AddContentStyle = {
        backgroundImage: "url('../../src/assets/BocaPerro.png'), url('/src/assets/DogPaw.png'), url('/src/assets/BocaPerro.png'), url('/src/assets/DogPaw.png'), url('/src/assets/BocaPerro.png'), url('/src/assets/DogPaw.png'), url('/src/assets/BocaPerro.png'), url('/src/assets/DogPaw.png'),url('/src/assets/BocaPerro.png'), url('/src/assets/DogPaw.png'), url('/src/assets/BocaPerro.png'), url('/src/assets/DogPaw.png'), url('/src/assets/BocaPerro.png'), url('/src/assets/DogPaw.png'), url('/src/assets/BocaPerro.png'), url('/src/assets/DogPaw.png')",
        backgroundRepeat: 'no-repeat', /* Esto hará que las imágenes se repitan a través del contenedor */
        backgroundPosition: 'top 10px left 20px, bottom 30px right 40px, bottom 100px right 200px, top 300px left 400px, top 300px left 700px, bottom 300px right 540px, bottom 100px right 780px, top 300px left 660px, top 450px left 980px, bottom 300px right 650px, bottom 500px right 500px, top 100px left 100px, top 300px left 300px, bottom 400px right 400px, bottom 200px right 200px, top 700px left 800px',
        backgroundSize: '10%, 6%', 
        backgroundColor: '#56BFAC',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
};

  return (
    <ContainerPath
     contentStyle={AddContentStyle}
    content={<div className={styles.clientsContent}>
    <h2 className={styles.clientsTitle}>{title}</h2>
    <input className={styles.clientsContainer}>

    </input>
     </div>}
    />
  )
}

export default Clients