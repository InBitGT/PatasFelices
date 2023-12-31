import ContainerPath from "../Container/ContainerPath"

import styles from "./Footer.module.css"

import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

const AddContentStyle = {
  height: '250px',
  backgroundColor: '#F2D4C2',
  display: 'flex',
  justifyContent: 'space-between',
  };

const Footer = () => {


  return (
    <ContainerPath
      contentStyle={AddContentStyle}
      content2Style={AddContentStyle}
      
      content={
          <div className={styles.footerLogo}>
            <Link to='/'>
          <img src={Logo} alt="Logo" width={'280rem'} height={'220rem'} />
          </Link>
          </div>
        }
        content2={
          <div className={styles.footerSocialMedia}> 
          <Link to="http://facebook.com"> 
          <svg xmlns="http://www.w3.org/2000/svg" width="86" height="85" viewBox="0 0 86 85" fill="none">
            <path d="M2 2H83.7022V83.2816H2V2Z" fill="white" fill-opacity="0.01"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99764 79.8949C7.01308 79.8949 5.40426 78.2855 5.40426 76.3004V8.9813C5.40426 6.99606 7.01308 5.38672 8.99764 5.38672H76.7046C78.6891 5.38672 80.298 6.99606 80.298 8.9813V76.3004C80.298 78.2855 78.6891 79.8949 76.7046 79.8949C74.309 79.8949 51.74 79.8949 8.99764 79.8949Z" stroke="#2CBFA4" stroke-width="9.42876" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M67.8069 32.2891H60.3956H59.5199C57.222 32.2891 55.3592 34.1424 55.3592 36.4284V44.7096H67.8069L65.9837 57.1234H55.3592V79.8948H41.6707V57.1234H30.3689V44.7096H41.5246L41.6707 32.9265L41.6298 28.7033C41.5723 22.7397 46.3851 17.859 52.3793 17.8018C52.414 17.8014 52.4487 17.8013 52.4836 17.8013H67.8069V32.2891Z" fill="#2CBFA4"/>
          </svg>
          </Link>
          <Link to="http://instagram.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" fill="none">
            <path d="M41.0098 0.512451C29.9046 0.512451 28.5206 0.565799 24.1745 0.748705C19.8106 0.962096 16.8587 1.63529 14.2541 2.64128C11.5678 3.68791 9.27987 5.07749 7.02001 7.33842C4.74483 9.58665 3.33529 11.8628 2.29857 14.5353C1.28738 17.1265 0.610694 20.0631 0.396199 24.4046C0.199578 28.7309 0.158722 30.1052 0.158722 41.1533C0.158722 52.2013 0.212346 53.5782 0.396199 57.9019C0.610694 62.2307 1.28738 65.1801 2.29857 67.7712C3.35061 70.4437 4.74739 72.7199 7.02001 74.9681C9.27987 77.2316 11.5678 78.6339 14.2541 79.6652C16.8587 80.6585 19.8233 81.3444 24.1745 81.5578C28.5232 81.7534 29.9046 81.7941 41.0098 81.7941C52.1151 81.7941 53.4991 81.7407 57.8452 81.5578C62.1963 81.3444 65.161 80.656 67.7656 79.6652C70.4519 78.6186 72.7398 77.229 74.9997 74.9681C77.2748 72.7199 78.6844 70.4564 79.7211 67.7712C80.7195 65.1801 81.409 62.2307 81.6235 57.9019C81.8201 53.5757 81.861 52.2013 81.861 41.1533C81.861 30.1052 81.8073 28.7283 81.6235 24.4046C81.409 20.0758 80.717 17.1112 79.7211 14.5353C78.6691 11.8628 77.2723 9.58665 74.9997 7.33842C72.7398 5.07495 70.4646 3.67267 67.7656 2.64128C65.161 1.63529 62.1963 0.962096 57.8452 0.748705C53.4965 0.553097 52.1151 0.512451 41.0098 0.512451ZM41.0098 7.82871C51.9159 7.82871 53.2182 7.88206 57.5285 8.06497C61.5043 8.25041 63.6697 8.91091 65.1073 9.46979C67.025 10.209 68.3656 11.0829 69.816 12.5106C71.2383 13.9256 72.1167 15.2745 72.8598 17.1823C73.4216 18.6126 74.0855 20.7668 74.2719 24.7222C74.4558 29.0103 74.5094 30.3084 74.5094 41.1558C74.5094 52.0032 74.4558 53.3013 74.2566 57.5894C74.0421 61.5448 73.3782 63.699 72.819 65.1293C72.0452 67.0371 71.1822 68.3708 69.7573 69.8137C68.3197 71.2287 66.951 72.1026 65.0486 72.8418C63.6289 73.4007 61.4328 74.0612 57.4417 74.2466C53.1084 74.4295 51.8316 74.4829 40.8975 74.4829C29.9633 74.4829 28.6891 74.4295 24.3507 74.2314C20.3749 74.018 18.1814 73.3575 16.7438 72.8012C14.8031 72.0314 13.4727 71.1728 12.0479 69.7553C10.6103 68.325 9.6961 66.9634 8.99133 65.0708C8.41934 63.6584 7.76564 61.4737 7.5537 57.5031C7.40815 53.2429 7.3392 51.9219 7.3392 41.0948C7.3392 30.2729 7.40815 28.9493 7.5537 24.6358C7.76564 20.6652 8.41934 18.4856 8.99133 17.068C9.6961 15.1348 10.6128 13.8138 12.0479 12.3836C13.4702 10.9686 14.8031 10.0541 16.7438 9.33769C18.1814 8.78135 20.3213 8.12085 24.3124 7.92271C28.6457 7.76774 29.9225 7.71185 40.8413 7.71185L41.0098 7.82871ZM41.0098 20.2943C29.4143 20.2943 20.0378 29.6352 20.0378 41.1583C20.0378 52.6942 29.4271 62.0224 41.0098 62.0224C52.6053 62.0224 61.9818 52.6814 61.9818 41.1583C61.9818 29.6225 52.5926 20.2943 41.0098 20.2943ZM41.0098 54.7061C33.4821 54.7061 27.3919 48.6473 27.3919 41.1583C27.3919 33.6693 33.4821 27.6106 41.0098 27.6106C48.5376 27.6106 54.6277 33.6693 54.6277 41.1583C54.6277 48.6473 48.5376 54.7061 41.0098 54.7061ZM67.7298 19.4611C67.7298 22.1615 65.521 24.3411 62.8194 24.3411C60.105 24.3411 57.9141 22.1589 57.9141 19.4611C57.9141 16.7759 60.1203 14.5912 62.8194 14.5912C65.5185 14.5912 67.7298 16.7759 67.7298 19.4611Z" fill="#2CBFA4"/>
          </svg>
          </Link>
          <Link to="http://whatsapp.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" fill="none">
            <path d="M59.8587 49.4288C58.8349 48.9132 53.8485 46.4925 52.9166 46.1471C51.9847 45.8169 51.3081 45.6441 50.6289 46.6627C49.9651 47.6559 48.0093 49.9292 47.4119 50.5922C46.8144 51.2551 46.2272 51.3059 45.2187 50.8563C44.1949 50.3407 40.9242 49.2815 37.0408 45.8169C34.0076 43.132 31.988 39.8249 31.388 38.8063C30.7906 37.8005 31.3217 37.2315 31.8272 36.7286C32.2919 36.2663 32.851 35.5652 33.3693 34.9556C33.8621 34.346 34.0204 33.937 34.3804 33.2766C34.7123 32.5629 34.5412 32.0066 34.2885 31.5037C34.0357 31.0007 32.0008 26.0146 31.1506 24.0283C30.3387 22.0572 29.4885 22.3087 28.8629 22.3087C28.2783 22.2554 27.5991 22.2554 26.9225 22.2554C26.2459 22.2554 25.1404 22.5068 24.2085 23.472C23.2765 24.4906 20.6442 26.924 20.6442 31.8466C20.6442 36.7819 24.2876 41.5572 24.7931 42.2709C25.3114 42.9314 31.96 53.0916 42.16 57.4579C44.5932 58.4765 46.4825 59.0861 47.9583 59.589C50.3915 60.3561 52.6128 60.2494 54.3668 59.998C56.3072 59.6805 60.377 57.5494 61.2298 55.1693C62.0953 52.7741 62.0953 50.7903 61.8425 50.3407C61.5898 49.8784 60.926 49.6269 59.9021 49.1773L59.8587 49.4288ZM41.3608 74.3797H41.3072C35.2689 74.3797 29.2995 72.7515 24.0859 69.7086L22.8629 68.9821L10.097 72.2893L13.5284 59.9319L12.7038 58.6619C9.33865 53.3303 7.54376 47.1783 7.54376 40.8561C7.54376 22.4154 22.7174 7.37319 41.3864 7.37319C50.4298 7.37319 58.914 10.8785 65.297 17.2286C71.68 23.5254 75.2034 31.966 75.2034 40.9095C75.1779 59.3375 60.017 74.3797 41.3736 74.3797H41.3608ZM70.1506 12.4C62.3838 4.93729 52.1711 0.718262 41.3072 0.718262C18.9004 0.718262 0.655238 18.7907 0.642472 41.0009C0.642472 48.0927 2.50375 55.0118 6.06801 61.1359L0.297791 81.9999L21.8672 76.4042C27.811 79.5919 34.5004 81.2988 41.3098 81.3115H41.3225C63.7421 81.3115 81.9873 63.2391 82 41.0136C82 30.259 77.7847 20.1369 70.0996 12.5295L70.1506 12.4Z" fill="#2CBFA4"/>
          </svg>
          </Link>
          </div>
        }
    />
  )
}

export default Footer