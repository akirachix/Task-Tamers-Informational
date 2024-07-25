
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './style.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div id='home'>
      <nav className="nav">
        <div className="logo">
          <img src="/images/ubora-cbc-logo.png" alt="Ubora Cbc Logo, Hello" />
        </div>
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link smooth to="/#home" onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <a href="http://localhost:3001/#QnA-paragraph" onClick={closeMenu}>Features</a>
          </li>
          <li className="nav-item">
            <a href="http://localhost:3001/" onClick={closeMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="http://localhost:3001/" onClick={closeMenu}>FAQ's</a>
          </li>
          <li className="nav-item">
            <a href="http://localhost:3001/" onClick={closeMenu}>Team</a>
          </li>
          <li className="nav-item">
            <a href="http://localhost:3001/" onClick={closeMenu}>Contacts</a>
          </li>
          <li className="close-menu-item" onClick={closeMenu}>
            <span className="close-button">&times;</span>
          </li>
        </ul>
        <button
          className={`hamburger-button ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className="hero-section">
        <div className="hero-content">
          <div>
            <p className="ubora">Ubora CBC,</p>
            <p className="unlocking">Unlocking practical knowledge</p>
           
            <button className="learn-more" onClick={() => {}}>
              Learn More...
            </button>
          </div>
          <img src="/images/cbckids.png" alt="Kids" className="kidsImage" />
        </div>
        <div className="features">
          <div className="features-content">
            <h3 className="qa-post">Q&A Post</h3>
            <p className="practicals">Practicals</p>
          </div>
          <div className="image-row">
            <img src="/images/girl.png" alt="Girl" />
            <img src="/images/boy.png" alt="Boy" className="boy-image" />
            <img src="/images/cooking.png" alt="Cooking" />
            <img src="/images/planting.png" alt="Planting" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;