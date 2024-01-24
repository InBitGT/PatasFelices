import styles from './HeaderCategory.module.css'

const HeaderCategory = ({imageHeaderCategory, altImageHeader, title, titleSpan}) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.imgHeader} style={{ backgroundImage: `url(${imageHeaderCategory})` }}></div>
      <h1 className={styles.containerTitle}>{title}<span className={styles.containerTitleSpan}>{titleSpan}</span></h1>
    </div>
  )
}

export default HeaderCategory;
