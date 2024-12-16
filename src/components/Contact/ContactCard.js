// src/components/ContactCard.js
import React from 'react';
import styles from './contactCard.module.css';

const ContactCard = ({ icon, title, content }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconTitleWrapper}>
        <div className={styles.icon}>{icon}</div>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default ContactCard;
