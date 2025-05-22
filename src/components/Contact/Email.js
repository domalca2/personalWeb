import React from 'react';
import styles from './email.module.css';

const Modal = ({ isOpen, onClose, email }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.emailOverlay} onClick={onClose}>
      <div className={styles.emailContent} onClick={(e) => e.stopPropagation()}>
        <h2>Email</h2>
        <p>{email}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
