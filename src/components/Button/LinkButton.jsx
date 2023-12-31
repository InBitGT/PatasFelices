import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css'; 

const LinkButton = ({ text, to, buttonStyle }) => {
  return (
    <Link className={styles.linkButton} to={to}>
      <button className={styles.button} style={buttonStyle}>
        {text}
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 32" fill="none">
          <mask id="mask0_155_51" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="32">
            <rect width="36" height="32" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_155_51)">
            <path d="M21 24L18.9 22.0667L24.225 17.3333H6V14.6667H24.225L18.9 9.93333L21 8L30 16L21 24Z" fill="white"/>
          </g>
        </svg>
      </button>
    </Link>
  );
};

export default LinkButton;
