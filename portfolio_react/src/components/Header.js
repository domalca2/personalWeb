import { FaLightbulb } from 'react-icons/fa';
import React, {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

function Header() {
  const {toggleTheme} = useContext(ThemeContext);
  return (
    <header className="d-flex justify-content-between align-items-center fixed-top">
      <div className="btn-container">
        <button className="btn-left" onClick={toggleTheme}>
            <FaLightbulb size={24} color="yellow" />
        </button>
      </div>
      <nav className="navbar">
        <div className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Projects</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
