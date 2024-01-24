import styles from './Product.module.css'
import { Button } from '@mui/material'
import { ShoppingCartRounded } from '@mui/icons-material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import InfoIcon from '@mui/icons-material/Info';

const theme = createTheme({
    palette: {
        primary: {  
        main: '#000'
        }

    },
});

const Product = ({color, imgProduct, title, description}) => {
  return (
    <div className={styles.container}>
        <div className={styles.containerProduct} style={color}>
            <div>
                <img src={imgProduct} alt="Imagen Combo" className={styles.imgProduct} />
            </div>
            <div className={styles.containerProductInfo}>
                <div>
                <h2 className={styles.productTitle}>{title}</h2>
                <p className={styles.productDescription}>{description}</p>
                </div>
                <div className={styles.productButtons}>
                <ThemeProvider theme={theme}>
               <Button  variant="text"  size="large" style={{ paddingRight: '0'}} startIcon={<ShoppingCartRounded color="main" style={{ fontSize: '7rem' }}  />}>
                </Button>     
                <Button  variant="text" size="large" startIcon={<InfoIcon color="main" style={{ fontSize: '7rem'}} />}>
                </Button>
                </ThemeProvider>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Product