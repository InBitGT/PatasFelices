import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import styles from './Gallery.module.css';

const waveSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="500" viewBox="909 909 899 880" fill="none">
    <clipPath id="myClip2">
    
    <path d="M20.3269 27.0327C56.9692 -1.65482 93.7914 20.2862 142.532 20.5284C190.212 20.7653 219.867 0.737936 267.54 0.0147834C312.252 -0.663435 334.418 22.2281 379.095 20.5284C432.047 18.5139 464.028 -5.57803 502.421 27.0327C545.186 63.357 504.152 106.952 502.421 159.621C500.903 205.808 527.077 229.001 525.966 275.197C524.744 325.965 501.722 359.011 502.421 409.786C503.163 463.622 546.612 499.723 502.421 536.37C467.327 565.474 429.803 536.37 381.898 536.37C333.993 536.37 315.403 555.679 267.54 553.882C210.981 551.759 178.798 535.206 122.352 531.367C79.8223 528.475 52.9202 560.926 20.3269 536.37C-29.5409 498.8 27.8568 446.003 29.2961 387.772C30.6135 334.469 8.07916 318.351 3.50975 265.191C-0.0331343 223.973 32.839 179.824 29.2961 138.607C24.7267 85.4467 -24.5804 62.191 20.3269 27.0327Z" fill="#D9D9D9"/>
    <path d="M20.3269 27.0327C56.9692 -1.65482 93.7914 20.2862 142.532 20.5284C190.212 20.7653 219.867 0.737936 267.54 0.0147834C312.252 -0.663435 334.418 22.2281 379.095 20.5284C432.047 18.5139 464.028 -5.57803 502.421 27.0327C545.186 63.357 504.152 106.952 502.421 159.621C500.903 205.808 527.077 229.001 525.966 275.197C524.744 325.965 501.722 359.011 502.421 409.786C503.163 463.622 546.612 499.723 502.421 536.37C467.327 565.474 429.803 536.37 381.898 536.37C333.993 536.37 315.403 555.679 267.54 553.882C210.981 551.759 178.798 535.206 122.352 531.367C79.8223 528.475 52.9202 560.926 20.3269 536.37C-29.5409 498.8 27.8568 446.003 29.2961 387.772C30.6135 334.469 8.07916 318.351 3.50975 265.191C-0.0331343 223.973 32.839 179.824 29.2961 138.607C24.7267 85.4467 -24.5804 62.191 20.3269 27.0327Z" fill="url(#pattern0)"/>

    
        </clipPath>
    </svg>
    );



import image1 from '../../assets/dog-image.jpg';
import image2 from '../../assets/HomeCare.png';
import image3 from '../../assets/Nursery.png';


const images = [image1, image2, image3];

const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2, 
  };
  
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={styles.customArrow}
        style={{ ...arrowStyle, right: '10px' }} 
        onClick={onClick}
      >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <mask id="mask0_202_92" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect width="24" height="24" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_202_92)">
        <path d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2L18.025 12L8.025 22Z" fill="white"/>
      </g>
    </svg>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={styles.customArrow}
        style={{ ...arrowStyle, left: '10px' }} 
        onClick={onClick}
      >
           <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <mask id="mask0_202_89" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect width="24" height="24" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_202_89)">
        <path d="M10 22L0 12L10 2L11.775 3.775L3.55 12L11.775 20.225L10 22Z" fill="white"/>
      </g>
    </svg>
      </div>
    );
  }
  

const ImageGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };



  return (

    <div className={styles.galleryContainer}>
          {waveSVG }  
      <Slider {...settings}  style={{maxWidth: '100%'}} >
      {images.map((img, idx) => (
          <div key={idx} width="640" height="640">
          <img src={img} alt={`Slide ${idx}`} width="600" height="600"  />
        </div>
      ))}
    </Slider>
    </div >
  );
};

export default ImageGallery;
