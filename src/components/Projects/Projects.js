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
import apiRest from '../../images/apiRest.png';
import oauth2 from '../../images/oauth2.png';
import gTask from '../../images/gTask.png';
import bingMap from '../../images/bingMap.png';
import mysql from '../../images/mysql.png';
import bladeOne from '../../images/bladeOne.png';
import composer from '../../images/composer.png';
import laravel from '../../images/laravel.png';
import eloquent from '../../images/eloquent.png';
import vue from '../../images/vue.png';
import tailwind from '../../images/tailwind.png';
import react from '../../images/reactjs.png';
import parcel from '../../images/parcel.png';
import eslint from '../../images/eslint.png';
import husky from '../../images/husky.png';
import prettier from '../../images/prettier.png';
import bem from '../../images/bem.png';
import reactNative from '../../images/reactNative.png';
import figma from '../../images/figma.png';
import expo from '../../images/expo.png';
import android from '../../images/androidStudio.png';
import prisma from '../../images/prisma.png';
import sqlServer from '../../images/sqlServer.png';
import azure from '../../images/azure.png';













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
    techIcons: [php, apiRest,oauth2,gTask,mysql,mvc,bingMap ],
    githubLink: 'https://github.com/tuusuario/delivery-app',
  },
  {
    title: 'Flashy app',
    image: flashy,
    techIcons: [php,bladeOne,bootstrap,js,jquery,composer,mvc ],
    githubLink: 'https://github.com/tuusuario/menu-choose-app',
  },
  {
    title: 'Library manager app',
    image: library,
    techIcons: [php,laravel,eloquent,vue,tailwind,apiRest],
    githubLink: 'https://github.com/tuusuario/library-manager-app',
  },
  {
    title: 'Whish list app',
    image: whishlist,
    techIcons: [react,parcel,eslint,husky,prettier,bem],
    githIcons: 'https://github.com/tuusuario/whish-list-app',
  },
  {
    title: 'Meditation app',
    image: zenenti,
    techIcons: [reactNative,figma,expo,android,prisma,sqlServer,azure],
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
