import ContactForm from "../../../components/Forms/ContactForm/ContactForm"

import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <>
    <h2 className={styles.contactTitle} >Contact</h2>
    <ContactForm/>
    </>
  )
}

export default Contact