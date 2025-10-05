import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import ServicesDropdown from './servicesDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYelp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import lzmDarkSml from  './lzm-dark-sml.png';
import './App.css';

function Navbar({ openServiceModal }: { openServiceModal: (serviceName: string) => void }) {

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

  const handleDropdownServiceClick = (serviceName: string) => {
    // scroll to the services section first
    const serviceSection = document.getElementById('services');
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: 'smooth' });
    }
    // open the modal after a short delay to allow the scroll to complete
    setTimeout(() => {
      openServiceModal(serviceName);
    }, 700);
  };

  return (
    <div>
      <nav>
        <div className='nav-left'>
          <img src={lzmDarkSml} alt="Logo" className='nav-logo' onClick={(e) => handleScroll(e, 'home')} />
          <div className='nav-title' onClick={(e) => handleScroll(e, 'home')}>
            <h3>LZM Landscaping LLC</h3>
          </div>
        </div>
        <ul>
          <li>
            <a href="#home" onClick={(e) => handleScroll(e, 'home')}>
              Home
            </a>
          </li>
          <li className="services-dropdown-container">
            <a href="#services" onClick={(e) => handleScroll(e, 'services')}>
              Services <ChevronDown size={15} className="chevron" />
            </a>
            <ServicesDropdown onSelectService={handleDropdownServiceClick} />
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
          <li id='nav-social-icons'>
            <a href="https://www.yelp.com/biz/lzm-landscaping-gig-harbor?osq=Lzm+Landscaping&override_cta=Request+pricing+%26+availability" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYelp} />
            </a>
            <a href="https://www.facebook.com/p/LZM-Landscaping-LLC-61577894886146" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;