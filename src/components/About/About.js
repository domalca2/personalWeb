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
import laraLogo from '../../images/laravel.png';
import reactNatLogo from '../../images/reactNative.png';
import devopsLogo from '../../images/devops_cert.png';
import terraLogo from '../../images/Terraform.png';
// import my_resume from '../../../public/cv/'

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
                <a href="https://github.com/domalca2" target="_blank" rel="noopener noreferrer">
                  <img src={logoGit} alt="GitHub logo" className={styles["icon"]} />
                </a>
                <a href="https://www.linkedin.com/in/domingo-alonso-14a529342" target="_blank" rel="noopener noreferrer">
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
            From the very moment I discovered the world of web development, I knew this was my calling.
            What attracts me most about this profession is the ability to transform ideas into reality,
            create useful tools, and solve problems through technology.
          </p>
          

            <p>
              I chose this path because I am fascinated by how web development combines creativity and logic,
              allowing me to design innovative solutions that make a tangible impact. Every line of code I write is
              an engaging challenge that drives me to keep learning and growing as a professional.
            </p>

            <p>
              My passion for this field goes beyond the final results. I enjoy every part of the process, from
              planning to implementation, because I see each step as an opportunity to improve and push my own limits.
            </p>

            <p>
              Web development is not just a job for me; it’s a form of expression, a space where my curiosity and
              constant desire to learn find their perfect match.
            </p>
                      
            <div className={styles['resume']}>
              <a href={`${process.env.PUBLIC_URL}/cv/my_resume.pdf`} target="_blank" rel="noopener noreferrer" className={styles["btn-cv"]}>
              View Resume
            </a>
            </div>

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
              <li><img src={laraLogo} alt="LARAVEL" />Laravel</li>
              <li><img src={reactLogo} alt="REACTJS" />react.js</li>
              <li><img src={reactNatLogo} alt="REACT-NATIVE" />react-native</li>
              <li><img src={devopsLogo} alt="GDEVOPSCERT" />Google DevOps cert.</li>
              <li><img src={terraLogo} alt="TERRAFORM" />Terraform</li>
            </ul>
          </div>
        </div>
    </div>
    
  );
};

export default About;