import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import ServicesDropdown from './servicesDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYelp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import lzmDarkSml from  './lzm-dark-sml.png';
import './App.css';

function Navbar({ openServiceModal }: { openServiceModal: (serviceName: string) => void }) {

  // usestate to track if the user has scrolled down
  const [scrolled, setScrolled] = useState<boolean>(false);

  // use effect to add a scroll event listener on component mount
  useEffect(() => {
    const handleScroll = () => {
      // check if the vertical scroll position is greater than 50px
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // add the event listener
    window.addEventListener('scroll', handleScroll);

    // clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);


  // handle the nav bar scroll behavior
  const handleLinkScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    
    const section = document.getElementById(sectionId);
    const navHeight = scrolled ? 70 : 150; // adjust based on scroll state

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
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className='nav-left'>
          <img src={lzmDarkSml} alt="Logo" className={`nav-logo ${scrolled ? 'shrunk-logo' : ''}`} onClick={(e) => handleLinkScroll(e, 'home')} />
          <div className='nav-title' onClick={(e) => handleLinkScroll(e, 'home')}>
            <h3>LZM Landscaping LLC</h3>
          </div>
        </div>
        <ul>
          <li>
            <a href="#home" onClick={(e) => handleLinkScroll(e, 'home')}>
              Home
            </a>
          </li>
          <li className="services-dropdown-container">
            <a href="#services" onClick={(e) => handleLinkScroll(e, 'services')}>
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
            <a href="#about" onClick={(e) => handleLinkScroll(e, 'about')}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkScroll(e, 'contact')}>
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