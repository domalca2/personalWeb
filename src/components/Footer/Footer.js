import React, {useContext} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './footer.module.css';
import linkindLogo from '../../images/linkedin.png';
import githubLogo from '../../images/github.png';

const Footer = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <footer className={styles['footer']}>
        <hr />
      <div className={styles["footer-content"]}>
        <div className={`${styles["footer-left"]} ${theme === 'dark' ? 
          styles.dark : ''
        }`}>
          <p>Domingo Alonso</p>
        </div>
        <div className={styles["footer-right"]}>
        
          <a href="https://github.com/domalca2" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/domingo-alonso-14a529342" target="_blank" rel="noopener noreferrer">
            <img src={linkindLogo} alt="LinkedIn" />
          </a>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;