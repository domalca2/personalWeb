import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './projects.module.css';
import hangman from '../../images/hangman.png';
import delivery from '../../images/deli_combi.png';
import flashy from '../../images/flashy.png';
import library from '../../images/libraryMng.png';
import whishlist from '../../images/wishlist.png';
import zenenti from '../../images/zenenti3.png';
import php from '../../images/php.png';
import soap from '../../images/soap.png';
import js from '../../images/javascript.png';
import mvc from '../../images/mvc.png';
import jquery from '../../images/jquery.png';
import css from '../../images/css3.png';
import bootstrap from '../../images/bootstrap.png';



// Array de proyectos
const projects = [
  {
    title: 'Hangman app-Play',
    image: hangman, // Asegúrate de tener esta imagen en la carpeta src/images
    techIcons: [php,soap,js,mvc,jquery,css,bootstrap  ],
    githubLink: 'https://github.com/tuusuario/hangman-app',
  },
  {
    title: 'Delivery app',
    image: delivery,
    techIcons: [],
    githubLink: 'https://github.com/tuusuario/delivery-app',
  },
  {
    title: 'Flashy app',
    image: flashy,
    techIcons: [],
    githubLink: 'https://github.com/tuusuario/menu-choose-app',
  },
  {
    title: 'Library manager app',
    image: library,
    techIcons: [],
    githubLink: 'https://github.com/tuusuario/library-manager-app',
  },
  {
    title: 'Whish list app',
    image: whishlist,
    techIcons: [],
    githIcons: 'https://github.com/tuusuario/whish-list-app',
  },
  {
    title: 'Meditation app',
    image: zenenti,
    techIcons: [],
    githubLink: 'https://github.com/tuusuario/meditation-app',
  }
];

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.heading}>My Projects</h1>
      <div className={styles.cardsContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            techIcons={project.techIcons}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
