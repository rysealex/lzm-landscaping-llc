import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYelp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import lzmDarkSml from  './lzm-dark-sml.png';
import './App.css';

function Footer() {

	// handle the scroll behavior for the footer links
  const handleLinkScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    
    const section = document.getElementById(sectionId);
    const navHeight = 70;

    if (section) {
      const yOffset = -navHeight;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth'});
    }
  };

	return (
		<div className='footer-container'>
			<div className='footer-left'>
				<div className='footer-socials'>
					<a href="https://www.yelp.com/biz/lzm-landscaping-gig-harbor?osq=Lzm+Landscaping&override_cta=Request+pricing+%26+availability" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faYelp} />
					</a>
					<a href="https://www.facebook.com/p/LZM-Landscaping-LLC-61577894886146" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faFacebook} />
					</a>
				</div>	
				<p>Outdoor Care Done Right | Since 2023</p>
			</div>
			<div className='footer-center'>
				<img src={lzmDarkSml} alt="Logo" className='footer-logo' />
				<p>&copy; 2025 LZM Landscaping LLC. All rights reserved.</p>
        <p className='developer-tag'>Developed by <a href="https://rysealex.github.io/my-portfolio/" target="_blank" rel="noopener noreferrer">Alex Ryse</a></p>
      </div>
			<div className='footer-right'>
				<ul>
          <li>
            <a href="#home" onClick={(e) => handleLinkScroll(e, 'home')}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleLinkScroll(e, 'about')}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={(e) => handleLinkScroll(e, 'services')}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkScroll(e, 'contact')}>
              Contact
            </a>
          </li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;