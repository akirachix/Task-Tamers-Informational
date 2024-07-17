import React, { useState } from 'react';
import './style.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <img src="/images/ubora-cbc-logo.png" alt="Ubora Cbc Logo, Hello" />
        </div>
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li className="nav-item"><em><a href="#">Home</a></em></li>
          <li className="nav-item"><a href="features-page">Features</a></li>
          <li className="nav-item"><a href="#">About</a></li>
          <li className="nav-item"><a href="#">FAQ's</a></li>
          <li className="nav-item"><a href="#">Team</a></li>
          <li className="nav-item"><a href="#">Contacts</a></li>
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
            <button className="learn-more" onClick={openModal}>
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

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="modal-close-button" onClick={closeModal}>
              &times;
            </span>
            <h2>Ubora CBC: Unlocking Potential, Shaping Futures</h2>
            <p>
              Ubora CBC is a premier educational institution dedicated to providing world-class education. Our innovative curriculum, experienced faculty, and state-of-the-art facilities create an environment where students thrive and reach their full potential. Join us on a transformative journey of learning and growth.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;







 
