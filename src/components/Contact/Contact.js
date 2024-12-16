// src/pages/Contact.js
import React, {useState} from 'react';
import ContactCard from './ContactCard';
import styles from './contact.module.css';
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import gitHub from '../../images/github.png';
import linkedIn from '../../images/linkedin.png';
import Email from './Email';

// Icons could be replaced with actual SVGs or images
const contactItems = [
  { icon: <IoLocationSharp />, title: 'Address', content: 'Madrid, Spain' },
  { icon: <IoShareSocialSharp/>, title: 'Social Platforms', content: 
    <div>
      <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
            <img src={gitHub} alt="GitHub" style={{ width: '28px', marginRight: '8%' }} />
          </a>
       <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">
       <img src={linkedIn} alt="LinkedIn" style={{ width: '28px' }} />
         </a>
    </div> 
     },
  { icon: <MdOutlineMail/>, title: 'Email', content: 'Click here!' },
  { icon: <FaPhoneFlip />, title: 'Phone', content: '+34 680165595' },
];

const Contact = () => {
  const [isEmailOpen, setIsEmailOpen] = useState(false);

  const openEmail = () => setIsEmailOpen(true);
  const closeEmail = () => setIsEmailOpen(false);


  return (
    <div className={styles.container}>
      <h1 className={styles.header}>CONNECT WITH ME!</h1>
      <div className={styles.cardsContainer}>
        {contactItems.map((item, index) => (
          <ContactCard
            key={index}
            icon={item.icon}
            title={item.title}
            content={item.title === 'Email' ? (
              <span>
                {item.content.split(" ")[0]}{' '}
                <a href="#" onClick={openEmail}>{item.content.split(" ")[1]}</a>
              </span>
            ) : item.content}
          />
        ))}
      </div>
      <Email isOpen={isEmailOpen} onClose={closeEmail} email="domingo.alonso.dev@gmail.com" />
    </div>
  );
};

export default Contact;
