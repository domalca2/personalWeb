import React from 'react';
import styles from './projectCard.module.css';
import gitHub from '../../images/github.png';

const ProjectCard = ({ title, image, techIcons, githubLink}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.projectImage} />
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
