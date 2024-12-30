import { FaLightbulb } from 'react-icons/fa';
import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {ThemeContext} from '../contexts/ThemeContext';

function Header() {
  const {toggleTheme} = useContext(ThemeContext);
  console.log('toggleTheme:', toggleTheme);
  const [showModal, setShowModal] = useState(false);

  const toggleModalHead = () => {
    setShowModal(!showModal);
  };
  return (
    <header className="d-flex justify-content-between align-items-center fixed-top">
      <div className="btn-container">
        <button className="btn-left" onClick={toggleTheme}>
            <FaLightbulb size={24} color="yellow" />
        </button>
      </div>
      <nav className="navbar">
        <div className="hamburger-menu" onClick={toggleModalHead}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal-container-head">
            <div className="modal-head">
            <button className="close-btn-head" onClick={toggleModalHead}>X</button>
              <ul className="modal-nav-head">
                <li><Link to="/" onClick={toggleModalHead}>About</Link></li>
                <li><Link to="/projects" onClick={toggleModalHead}>Projects</Link></li>
                <li><Link to="/contact" onClick={toggleModalHead}>Contact</Link></li>
              </ul>
            </div>
          </div>
        )}

        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
