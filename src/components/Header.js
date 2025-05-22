import { FaLightbulb } from 'react-icons/fa';
import React, {useContext, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {ThemeContext} from '../contexts/ThemeContext';

function Header() {
  const {toggleTheme} = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const toggleModalHead = () => {
    setShowModal(!showModal);
  };

  const isActive = (path) => location.pathname === path;
  return (
    <header className="d-flex justify-content-between align-items-center fixed-top">
      <div className="btn-container">
        <button className="btn-left" onClick={toggleTheme}>
            <FaLightbulb size={28} color="yellow" />
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
                <li><Link 
                      to="/" 
                      onClick={toggleModalHead}
                      className={isActive('/') ? 'active' : ''}
                    >
                    About
                    </Link>
                </li>
                <li><Link 
                      to="/projects" 
                      onClick={toggleModalHead}
                      className={isActive('/projects') ? 'active' : ''}
                    >
                    Projects
                    </Link>
                </li>
                <li><Link 
                      to="/contact" 
                      onClick={toggleModalHead}
                      className={isActive('/contact') ? 'active' : ''}
                    >
                    Contact
                    </Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} 
            to="/">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive('/projects') ? 'active' : ''}`} 
            to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
