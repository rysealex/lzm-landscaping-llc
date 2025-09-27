import React from 'react';
import lzmDarkSml from  './lzm-dark-sml.png';
import './App.css';

// handle the nav bar scroll behavior
const handleScroll = (e: React.MouseEvent, sectionId: string) => {
  e.preventDefault();
  
  const section = document.getElementById(sectionId);
  const navHeight = 100;

  if (section) {
    const yOffset = -navHeight;
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth'});
  }
};

function Navbar() {
  return (
    <div>
      <nav>
        <div className='nav-left'>
          <img src={lzmDarkSml} alt="Logo" className='nav-logo' onClick={(e) => handleScroll(e, 'home')} />
        </div>
        <ul>
          <li>
            <a href="#home" onClick={(e) => handleScroll(e, 'home')}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={(e) => handleScroll(e, 'services')}>
              Services
            </a>
          </li>
          {/* <li>
            <a href="#gallery">
              Gallery
            </a>
          </li> */}
          <li>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;