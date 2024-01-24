import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import HeaderCategory from "../../components/Header/HeaderCategory/HeaderCategory"
import Product from "../../components/Product/Product"
import NurceryImage from "../../assets/nurcery-header.jpg"
import Combo1 from "../../assets/Combo1.png"
import Combo2 from "../../assets/Combo2.png"

const Nurcery = () => {
  const styleColor1 = {
    backgroundColor: '#F2A25C'
  }
  const styleColor2 = {
    backgroundColor: '#2CBFA4'
  }

  return (
    <>
    <Navbar />
    <HeaderCategory 
    titleSpan="Nurcery"
    imageHeaderCategory={NurceryImage} 
    altImageHeader="Home Care"
    />
    <Product color={styleColor1} 
    imgProduct={Combo1} 
    title={"Hotel Patitas"}
    description=
    {
    <>
    Contrary to popular belief, Lorem Ipsum is not simply 
      random text. It has roots in a piece of classical Latin 
      literature from 45 BC, making it over 2000 years old. <br />
      <br />
      Integer ultrices orci at massa auctor tristique.
      <br /> <br />
      Donec eget odio porttitor justo eleifend ultricies.
      <br /> <br />
      Cras molestie orci nec suscipit vehicula.
    </>
      }
    />
    <Product color={styleColor2} 
    imgProduct={Combo2}
    title={"Saltos y felicidad"}
    description=
    {
    <>
    Contrary to popular belief, Lorem Ipsum is not simply 
      random text. It has roots in a piece of classical Latin 
      literature from 45 BC, making it over 2000 years old. <br />
      <br />
      Integer ultrices orci at massa auctor tristique.
      <br /> <br />
      Donec eget odio porttitor justo eleifend ultricies.
      <br /> <br />
      Cras molestie orci nec suscipit vehicula.
    </>
    }
    />
    <Footer />
    </>
  )
}

export default Nurcery