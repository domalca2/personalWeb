import React from 'react';
import DynamicText from './DynamicText';
import perfil_img from '../../images/ene_24_mod3.jpg';
import styles from './about.module.css';
import logoGit from '../../images/github.png';
import logoLindedin from '../../images/linkedin.png';
import htmlLogo from '../../images/html5.png';
import cssLogo from '../../images/css3.png';
import bootLogo from '../../images/bootstrap.png';
import mySqlLogo from '../../images/mysql.png';
import javaLogo from '../../images/java.png';
import jsLogo from '../../images/javascript.png';
import phpLogo from '../../images/php.png';
import reactLogo from '../../images/reactjs.png';
import reactNatLogo from '../../images/reactNative.png';
import devopsLogo from '../../images/devops_cert.png';

const About = () => {
  return (
    <div className={styles["about-container"]}>
      {/* Contenedor para la imagen */}
      <div className={styles['header']}>
        <div className={styles["profile-picture"]}>
          <img src={perfil_img} alt="Perfil de Domingo Alonso" />
        </div>
        
        {/* Contenedor para el texto dinámico y el texto fijo */}
        <div className={styles["about-text"]}>
          <DynamicText words={["Hi! I'm Domingo Alonso"]} />
          <div className={styles["lead-with-icons"]}>
              <span className={styles["lead-text"]}>Full stack web developer</span>
              <div className={styles["icons-container"]}>
                <a href="https://github.com/tuPerfil" target="_blank" rel="noopener noreferrer">
                  <img src={logoGit} alt="GitHub logo" className={styles["icon"]} />
                </a>
                <a href="https://linkedin.com/in/tuPerfil" target="_blank" rel="noopener noreferrer">
                  <img src={logoLindedin} alt="LinkedIn logo" className={styles["icon"]} />
                </a>
              </div>
          </div>
        </div>
      </div>

      <div className={styles['medium']}>
        <div className={styles["about-section"]}>
          <h2>ABOUT ME</h2>
          <p>
          I build web apps and web pages to hone my Web Development skills. 
    Since earning my Bachelor's degree, I've delved deeper into this field and haven't looked back. 
    The more I learn, the more I realize the vastness of web development and how much more there is to discover.
          </p>
        </div>
      </div>

      
        <div className={styles['lower']}>
          <div className={styles["what-can-i-do"]}>
            <h2 className={styles["title"]}>WHAT CAN I DO?</h2>
            <ul className={styles["skills-list"]}>
              <li><img src= {htmlLogo} alt="HTML" />html5</li>
              <li><img src={cssLogo} alt="CSS" />css3</li>
              <li><img src={bootLogo} alt="BOOTSTRAP" />bootstrap</li>
              <li><img src={mySqlLogo} alt="mySQL" />mySQL</li>
              <li><img src={javaLogo} alt="JAVA" />Java</li>
              <li><img src={jsLogo} alt="JAVASCRIPT" />JavaScript</li>
              <li><img src={phpLogo} alt="PHP" />PHP</li>
              <li><img src={reactLogo} alt="REACTJS" />react.js</li>
              <li><img src={reactNatLogo} alt="REACT-NATIVE" />react-native</li>
              <li><img src={devopsLogo} alt="GDEVOPSCERT" />google devops cert</li>
            </ul>
          </div>
        </div>
    </div>
    
  );
};

export default About;