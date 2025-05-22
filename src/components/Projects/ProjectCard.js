import React from 'react';
import styles from './projectCard.module.css';
import gitHub from '../../images/github.png';
import playIcon from '../../images/play.png';

const ProjectCard = ({ title, image, techIcons, githubLink, videoLink}) => {

  const imageElement = (
    <div className={styles.imageWrapper}>
      <img src={image} alt={title} className={styles.projectImage} />
      {videoLink && (
        <img src={playIcon} alt="play" className={styles.playIcon} />
      )}
    </div>
  );

  return (
    <div className={styles.card}>
      
      {videoLink ? (
        <a className={styles.projectImage} href={videoLink} target="_blank" rel="noopener noreferrer">
          {imageElement}
        </a>
      ) : (
        imageElement
      )}


      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        
        <p className={styles.techHeader}>Tech Stacks: </p>
        <div className={styles.techIcons}>
          {techIcons.map((icon, index) => (
            <img key={index} src={icon} alt='tech' className={styles.icon} />
          ))}
        </div>

        <div className={styles.gitHubIcon}>
          <a href={githubLink} target='_blank' rel='noopener noreferrer'>
            <img src={gitHub} alt='gitHub'className={styles.gitHubImage} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
